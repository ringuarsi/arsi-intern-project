//TODO
export type Task = {
    id: string;
    name: string;
}
export async function getTasks(): Promise<Task[]> {
  const res = await fetch("/api/tasks");
  if (!res.ok) throw new Error("Failed to fetch tasks");
  return res.json();
}