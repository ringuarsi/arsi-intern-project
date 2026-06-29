import cors from "@fastify/cors";
import Fastify from "fastify";
import taskRoutes from "./routes/tasks.js";

const app = Fastify({ logger: true });

await app.register(cors, {
  origin: "http://localhost:5173",
});

await app.register(taskRoutes, { prefix: "/api" });

await app.listen({ port: 3000, host: "0.0.0.0" });
