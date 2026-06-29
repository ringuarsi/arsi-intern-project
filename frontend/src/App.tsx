import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold text-gray-900">
            Task Manager
          </Link>
          <Link
            to="/tasks/new"
            className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
          >
            New Task
          </Link>
        </div>
      </header>
      <main className="max-w-2xl mx-auto px-6 py-8">
        <Outlet />
      </main>
    </div>
  );
}
