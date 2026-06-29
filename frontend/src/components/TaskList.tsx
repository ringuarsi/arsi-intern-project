import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

const tasks: Task[] = [
  {
    id: 1,
    title: "Learn React Router",
    completed: false,
  },
  {
    id: 2,
    title: "Setup shadcn/ui",
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
    <div className="space-y-3">
      {tasks.map((task) => (
        <Card key={task.id}>
          <CardContent className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <Checkbox checked={task.completed} />

              <p
                className={
                  task.completed
                    ? "line-through text-muted-foreground"
                    : ""
                }
              >
                {task.title}
              </p>
            </div>

            <Button variant="destructive" size="sm">
              Delete
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}