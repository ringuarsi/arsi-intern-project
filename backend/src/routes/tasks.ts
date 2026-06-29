import { eq } from "drizzle-orm";
import type { FastifyPluginAsync } from "fastify";
import { z } from "zod";
import { db } from "../db/index.js";
import { tasks } from "../db/schema.js";
import type { Task } from "../db/schema.js";

const createTaskSchema = z.object({
  title: z.string().min(1),
  description: z.string().optional(),
  status: z.enum(["todo", "in_progress", "done"]).optional(),
});

const updateTaskSchema = z.object({
  title: z.string().min(1).optional(),
  description: z.string().optional(),
  status: z.enum(["todo", "in_progress", "done"]).optional(),
});

const taskRoutes: FastifyPluginAsync = async (fastify) => {
  // GET /tasks
  fastify.get("/tasks", async (_req, reply) => {
    const result = await db.select().from(tasks);
    return reply.send(result);
  });

  // GET /tasks/:id
  fastify.get<{ Params: { id: string } }>("/tasks/:id", async (req, reply) => {
    const id = Number(req.params.id);

    const result = await db
      .select()
      .from(tasks)
      .where(eq(tasks.id, id));

    const task = result[0];

    if (!task) {
      return reply.status(404).send({ error: "Task not found" });
    }

    return reply.send(task);
  });

  // POST /tasks
  fastify.post("/tasks", async (req, reply) => {
    const parsed = createTaskSchema.safeParse(req.body);

    if (!parsed.success) {
      return reply.status(400).send({ error: parsed.error.flatten() });
    }

    const result = await db
      .insert(tasks)
      .values({
        ...parsed.data,
        createdAt: new Date(),
      })
      .returning();

    return reply.status(201).send(result[0]);
  });

  // PUT /tasks/:id
  fastify.put<{ Params: { id: string } }>("/tasks/:id", async (req, reply) => {
    const id = Number(req.params.id);

    const parsed = updateTaskSchema.safeParse(req.body);

    if (!parsed.success) {
      return reply.status(400).send({ error: parsed.error.flatten() });
    }

    const result = await db
      .update(tasks)
      .set(parsed.data)
      .where(eq(tasks.id, id))
      .returning();

    const updated = result[0];

    if (!updated) {
      return reply.status(404).send({ error: "Task not found" });
    }

    return reply.send(updated);
  });

  // DELETE /tasks/:id
  fastify.delete<{ Params: { id: string } }>("/tasks/:id", async (req, reply) => {
    const id = Number(req.params.id);

    const result = await db
      .delete(tasks)
      .where(eq(tasks.id, id))
      .returning();

    if (result.length === 0) {
      return reply.status(404).send({ error: "Task not found" });
    }

    return reply.status(204).send();
  });
};

export default taskRoutes;