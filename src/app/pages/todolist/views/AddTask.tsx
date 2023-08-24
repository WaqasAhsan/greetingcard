import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SetStateAction, useState } from "react";

export default function AddTask({ onAddTask }: { onAddTask: any }) {
  const [text, setText] = useState("");
  return (
    <div className="flex gap-6 flex-grow">
      <Input
        className="w-96"
        placeholder="Add task"
        value={text}
        onChange={newFunction_1()}
      />
      <Button variant="outline" onClick={newFunction()}>
        Add
      </Button>
    </div>
  );

  function newFunction_1() {
    return (e: { target: { value: SetStateAction<string> } }) =>
      setText(e.target.value);
  }

  function newFunction() {
    return () => {
      setText("");
      onAddTask(text);
    };
  }
}
