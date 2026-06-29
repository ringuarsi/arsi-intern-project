# Intern Exercises

Complete these in order. Each task builds on the previous one.

## Backend

### 1. Implement `GET /api/tasks`
File: `backend/src/routes/tasks.ts`

Query all rows from the `tasks` table and return them as a JSON array.

### 2. Implement `GET /api/tasks/:id`
File: `backend/src/routes/tasks.ts`

Query a single task by its `id`. If no task is found, return a `404` response with `{ error: 'Task not found' }`.

### 3. Implement `POST /api/tasks`
File: `backend/src/routes/tasks.ts`

Insert a new task row using the request body (`title`, `description`, `status`). Return the newly created task.

### 4. Implement `PUT /api/tasks/:id`
File: `backend/src/routes/tasks.ts`

Update a task by `id` with the fields provided in the request body. Return the updated task. Return `404` if not found.

### 5. Implement `DELETE /api/tasks/:id`
File: `backend/src/routes/tasks.ts`

Delete a task by `id`. Return `204 No Content` on success. Return `404` if not found.

---

## Frontend

### 6. Display the task list
File: `frontend/src/components/TaskList.tsx`

Use `useQuery` from TanStack Query to call `getTasks()`. Render the list of tasks — show each task's title and status.

### 7. Wire up the delete button
File: `frontend/src/components/TaskList.tsx`

Add a delete button to each task. Use `useMutation` to call `deleteTask(id)`. After a successful delete, invalidate the query so the list refreshes.

### 8. Wire up the create form
File: `frontend/src/components/TaskForm.tsx`

Build a controlled form with `title`, `description`, and `status` fields. On submit, call `createTask(data)` with `useMutation`. On success, navigate back to `/`.

### 9. Wire up the edit form
File: `frontend/src/components/TaskForm.tsx`

When the route is `/tasks/:id/edit`, load the existing task using `getTask(id)` and pre-fill the form. On submit, call `updateTask(id, data)` instead of `createTask`.

### 10. Add loading and error states
Files: `TaskList.tsx`, `TaskForm.tsx`

Handle the `isLoading` and `isError` states returned by `useQuery` and `useMutation`. Show a loading indicator while data is fetching and an error message if something goes wrong.
