import { useQuery } from "@tanstack/react-query";
import TaskForm from "./components/TaskForm.tsx";
import TaskList from "./components/TaskList";
import { getTasks } from "./api/tasks.ts";
import { useEffect, useState } from "react";
import { buttonVariants } from "./components/ui/button.tsx";

export default function App() {
  const [loading, setLoading] = useState(false)
  // const { data, isLoading, isError } = useQuery({
  //   queryKey: ['get-tasks'],
  //   queryFn: () => {
  //     return getTasks()
  //   }
  // })
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    setLoading(true)
    const tasks = getTasks()
    if (tasks) {
      setTasks(tasks)
    }
    setLoading(false)

  }, [])
  return (
    <main className="min-h-screen p-4">
      <div className="max-w-xl mx-auto space-y-6">
        <TaskForm />
        <TaskList />
        <a className={buttonVariants({ variant: "success"})}>twst</a>
      </div>
    </main>
  );
}
