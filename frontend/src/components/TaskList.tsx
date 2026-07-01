import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const tasks = [
  {
    id: 1,
    title: "Learn React Router",
    completed: false,
  },
  {
    id: 2,
    title: "Learn shadcn/ui",
    completed: true,
  },
  {
    id: 3,
    title: "Build Todo App",
    completed: false,
  },
];

export default function TaskList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>My Tasks</CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center justify-between rounded-lg border p-3"
          >
            <div className="flex items-center gap-3">
              <Checkbox checked={task.completed} />

              <span
                className={
                  task.completed
                    ? "line-through text-muted-foreground"
                    : ""
                }
              >
                {task.title}
              </span>
            </div>

            <Button
              variant="destructive"
              size="sm"
            >
              Delete
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}