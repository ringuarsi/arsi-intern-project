import type { FastifyPluginAsync } from "fastify";
import { z } from "zod";
import { db } from "../db/index.js";
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
  // GET /api/tasks — return all tasks
  fastify.get("/tasks", async (_req, reply) => {
    // TODO: query all rows from the tasks table using `db`
    // Hint: look at drizzle-orm docs for `db.select().from(tasks)`
    const result: Task[] = [];
    return reply.send(result);
  });

  // GET /api/tasks/:id — return a single task
  fastify.get<{ Params: { id: string } }>("/tasks/:id", async (req, reply) => {
    const id = Number(req.params.id);

    // TODO: query a single task by id
    // If not found, return reply.status(404).send({ error: "Task not found" })
    const task: Task | undefined = undefined;

    if (!task) {
      return reply.status(404).send({ error: "Task not found" });
    }

    return reply.send(task);
  });

  // POST /api/tasks — create a new task
  fastify.post("/tasks", async (req, reply) => {
    const parsed = createTaskSchema.safeParse(req.body);
    if (!parsed.success) {
      return reply.status(400).send({ error: parsed.error.flatten() });
    }

    // TODO: insert a new task row into the database and return it
    // Hint: use db.insert(tasks).values(parsed.data).returning()
    const created: Task | undefined = undefined;

    return reply.status(201).send(created);
  });

  // PUT /api/tasks/:id — update an existing task
  fastify.put<{ Params: { id: string } }>("/tasks/:id", async (req, reply) => {
    const id = Number(req.params.id);
    const parsed = updateTaskSchema.safeParse(req.body);
    if (!parsed.success) {
      return reply.status(400).send({ error: parsed.error.flatten() });
    }

    // TODO: update the task with the given id and return the updated row
    // If not found, return reply.status(404).send({ error: "Task not found" })
    const updated: Task | undefined = undefined;

    if (!updated) {
      return reply.status(404).send({ error: "Task not found" });
    }

    return reply.send(updated);
  });

  // DELETE /api/tasks/:id — delete a task
  fastify.delete<{ Params: { id: string } }>("/tasks/:id", async (req, reply) => {
    const id = Number(req.params.id);

    // TODO: delete the task with the given id
    // If not found, return reply.status(404).send({ error: "Task not found" })
    // On success, return reply.status(204).send()
    void id;

    return reply.status(204).send();
  });
};

export default taskRoutes;
