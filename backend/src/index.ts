import jwt from "@fastify/jwt";
import cors from "@fastify/cors";
import Fastify from "fastify";
import taskRoutes from "./routes/tasks.js";
import authRoutes from "./routes/auth.js";
const app = Fastify({ logger: true });
await app.register(cors, {
  origin: "http://localhost:5173",
});

await app.register(jwt, {
  secret: "super-secret-key",
});

// Register authentication routes
await app.register(authRoutes, {
  prefix: "/api/auth",
});

// Register task routes
await app.register(taskRoutes, {
  prefix: "/api",
});

// Root route
app.get("/", async (_req, reply) => {
  reply.send({ message: "Welcome to the Task API!" });
});

await app.listen({
  port: 3000,
  host: "0.0.0.0",
});