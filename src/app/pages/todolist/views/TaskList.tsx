import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Key, useState } from "react";

export default function TaskList({
  tasks,
  onChangeTask,
  onDeleteTask,
}: {
  tasks: any;
  onChangeTask: any;
  onDeleteTask: any;
}) {
  return (
    <ul>
      {tasks.map((task: { id: Key | null | undefined }) => (
        <li key={task.id}>
          <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
        </li>
      ))}
    </ul>
  );
}

function Task({
  task,
  onChange,
  onDelete,
}: {
  task: any;
  onChange: any;
  onDelete: any;
}) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <div className="flex justify-stretch w-full gap-x-4">
        <Input
          className="scroll-m-20 text-xl tracking-tight w-96"
          value={task.text}
          onChange={(e) => {
            onChange({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <Button variant="outline" onClick={newFunction(false)}>
          Save
        </Button>
      </div>
    );
  } else {
    taskContent = (
      <div className="flex items-center justify-stretch w-full gap-x-4">
        <h4 className="scroll-m-20 text-xl tracking-tight w-96">{task.text}</h4>
        <Button variant="outline" onClick={newFunction(true)}>
          Edit
        </Button>
      </div>
    );
  }
  return (
    <label className="flex justify-stretch w-full gap-x-4 mt-2">
      <Input
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          onChange({
            ...task,
            done: e.target.checked,
          });
        }}
      />
      {taskContent}
      <Button variant="destructive" onClick={() => onDelete(task.id)}>
        Delete
      </Button>
    </label>
  );

  function newFunction(isEdit: boolean) {
    return () => setIsEditing(isEdit);
  }
}
