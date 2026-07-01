import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";

export default function Home() {
  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <TaskForm />
      <TaskList />
    </div>
  );
}