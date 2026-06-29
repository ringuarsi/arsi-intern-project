import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { getTasks } from "../api/tasks";

export default function TaskList() {
  // TODO: call useQuery to fetch tasks
  // const { data: tasks, isLoading, isError } = useQuery({
  //   queryKey: ["tasks"],
  //   queryFn: getTasks,
  // });

  // TODO: if isLoading, render a loading message
  // TODO: if isError, render an error message
  // TODO: render the list of tasks
  //   - for each task, show: title, status badge, edit link, delete button
  //   - clicking delete should call deleteTask(task.id) via useMutation
  //     and then invalidate the ["tasks"] query so the list refreshes

  void useQuery; // remove this line when you start implementing
  void getTasks; // remove this line when you start implementing

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Tasks</h1>
        <Link
          to="/tasks/new"
          className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
        >
          New Task
        </Link>
      </div>
      {/* TODO: replace this placeholder with your task list */}
      <p className="text-gray-500 text-sm">No tasks yet. Implement the TODO above to get started.</p>
    </div>
  );
}
