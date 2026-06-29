import TaskForm from "./components/TaskForm.tsx";
import TaskList from "./components/TaskList";

export default function App() {
  return (
    <main className="min-h-screen p-4">
      <div className="max-w-xl mx-auto space-y-6">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}
