import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen">
      <main className="bg-red-400">
        <Outlet />
      </main>
    </div>
  );
}
