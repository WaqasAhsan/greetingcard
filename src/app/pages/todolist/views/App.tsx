import { useReducer } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

export default function TaskApp() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  function handleAddTask(text: any) {
    dispatch({
      type: "added",
      id: nextId++,
      text: text,
      task: {
        id: undefined,
      },
    });
  }

  function handleChangeTask(task: any) {
    dispatch({
      type: "changed",
      task: task,
      id: undefined,
      text: undefined,
    });
  }

  function handleDeleteTask(taskId: any) {
    dispatch({
      type: "deleted",
      id: taskId,
      text: undefined,
      task: {
        id: undefined,
      },
    });
  }

  return (
    <div className="flex flex-col gap-y-6 justify-center items-center mt-10 w-full">
      <h1 className="scroll-m-20 text-3xl font-bold tracking-tight lg:text-3xl">
        TODO List App
      </h1>

      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

function tasksReducer(
  tasks: any[],
  action: { type: string; id: any; text: any; task: { id: any } }
) {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "changed": {
      return tasks.map((t: { id: any }) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return tasks.filter((t: { id: any }) => t.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

let nextId = 3;
const initialTasks = [
  { id: 0, text: "Wash Car", done: true },
  { id: 1, text: "Go for running at 6pm", done: false },
  { id: 2, text: "Practice nextjs for 4 hr", done: false },
];
