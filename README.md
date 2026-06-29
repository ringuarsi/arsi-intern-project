# Task Manager — Intern CRUD Project

A full-stack task manager built with React, Fastify, PostgreSQL, and Drizzle ORM.

## Prerequisites

- Node.js 20+
- PostgreSQL running locally (or a connection string to a hosted instance)

## Setup

### 1. Clone the repo

```bash
git clone <repo-url>
cd arsi-interns
```

### 2. Set up the backend

```bash
cd backend
npm install
cp .env.example .env
```

Edit `.env` and fill in your `DATABASE_URL`:

```
DATABASE_URL=postgresql://user:password@localhost:5432/tasks_db
```

Run migrations to create the `tasks` table:

```bash
npm run db:generate
npm run db:migrate
```

Start the backend dev server:

```bash
npm run dev
```

The API will be available at `http://localhost:3000`.

### 3. Set up the frontend

In a new terminal:

```bash
cd frontend
npm install
npm run dev
```

The app will be available at `http://localhost:5173`.

## Scripts

### Backend (`backend/`)

| Script | Description |
|--------|-------------|
| `npm run dev` | Start Fastify with hot reload |
| `npm run typecheck` | Run TypeScript type checking |
| `npm run db:generate` | Generate Drizzle migration files |
| `npm run db:migrate` | Apply migrations to the database |

### Frontend (`frontend/`)

| Script | Description |
|--------|-------------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Build for production |
| `npm run typecheck` | Run TypeScript type checking |

## API Reference

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/tasks` | List all tasks |
| GET | `/api/tasks/:id` | Get a single task |
| POST | `/api/tasks` | Create a task |
| PUT | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |
