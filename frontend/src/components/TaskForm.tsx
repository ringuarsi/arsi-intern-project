import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { createTask, getTask, updateTask } from "../api/tasks";
import type { TaskStatus } from "../api/tasks";

export default function TaskForm() {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const isEditing = Boolean(id);

  // TODO: if isEditing, fetch the existing task with useQuery
  // const { data: task, isLoading } = useQuery({
  //   queryKey: ["tasks", id],
  //   queryFn: () => getTask(Number(id)),
  //   enabled: isEditing,
  // });

  // TODO: set up useMutation for create and update
  // For create:
  // const createMutation = useMutation({
  //   mutationFn: createTask,
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: ["tasks"] });
  //     navigate("/");
  //   },
  // });
  // For update, use updateTask(Number(id), data) in mutationFn

  // TODO: manage form state with useState for title, description, status
  // Pre-fill fields with task data when editing (use useEffect or defaultValue)

  // TODO: on form submit, call the appropriate mutation (create or update)

  void useQuery; // remove when implementing
  void useMutation; // remove when implementing
  void useQueryClient; // remove when implementing
  void queryClient; // remove when implementing
  void navigate; // remove when implementing
  void createTask; // remove when implementing
  void updateTask; // remove when implementing
  void getTask; // remove when implementing
  void isEditing; // remove when implementing

  const statusOptions: { value: TaskStatus; label: string }[] = [
    { value: "todo", label: "To Do" },
    { value: "in_progress", label: "In Progress" },
    { value: "done", label: "Done" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">
        {/* TODO: show "New Task" or "Edit Task" based on isEditing */}
        New Task
      </h1>

      {/* TODO: replace this placeholder form with a controlled form */}
      <form className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            id="title"
            type="text"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Task title"
            // TODO: wire up value and onChange
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            id="description"
            rows={3}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Optional description"
            // TODO: wire up value and onChange
          />
        </div>

        <div>
          <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
            Status
          </label>
          <select
            id="status"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            // TODO: wire up value and onChange
          >
            {statusOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
            // TODO: call the mutation on submit
          >
            {/* TODO: show "Create" or "Save" based on isEditing */}
            Create
          </button>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-50"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
