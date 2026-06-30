import type { FastifyPluginAsync } from "fastify";
import { z } from "zod";
import argon2 from "argon2";
import { eq } from "drizzle-orm";

import { db } from "../db/index.js";
import { users } from "../db/schema.js";

const registerSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(8),
});

const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
});

const authRoutes: FastifyPluginAsync = async (fastify) => {
    fastify.post("/register", async (req, reply) => {
        const parsed = registerSchema.safeParse(req.body);

        if (!parsed.success) {
            return reply.status(400).send({
                error: parsed.error.flatten(),
            });
        }
        const { name, email, password } = parsed.data;

        const existingUser = await db.query.users.findFirst({
            where: eq(users.email, email),
        });
        if (existingUser) {
            return reply.status(409).send({
                error: "User with this email already exists",
            });
        }
        const hashedPassword = await argon2.hash(password);
        const [newUser] = await db
            .insert(users)
            .values({
                name,
                email,
                password: hashedPassword,
            })
            .returning();
        return reply.status(201).send({
            message: "User registered successfully",
            user: {
                id: newUser.id,
                name: newUser.name,
                email: newUser.email,
            },
        });
    });
    fastify.post("/login", async (req, reply) => {
        const parsed = loginSchema.safeParse(req.body);

        if (!parsed.success) {
            return reply.status(400).send({
                error: parsed.error.flatten(),
            });
        }
        const { email, password } = parsed.data;
        const user = await db.query.users.findFirst({
            where: eq(users.email, email),
        });
        if (!user) {
            return reply.status(401).send({
                error: "Invalid email or password",
            });
        }
        
        const isPasswordValid = await argon2.verify(
            user.password,
            password
        );
        if (!isPasswordValid) {
            return reply.status(401).send({
                error: "Invalid email or password",
            });
        }

        const token = fastify.jwt.sign({
            id: user.id,
            email: user.email,
        });
        return reply.send({
            message: "Login successful",
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
            },
        });
    });

};

export default authRoutes;