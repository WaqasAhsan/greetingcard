import initialTasks from "../../../data/data";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const taskID = parseInt(params.id);
  console.log(params.id);
  console.log(taskID);
  const task = initialTasks.find((task: { id: number }) => task.id === taskID);
  return NextResponse.json({
    message: "success",
    status: "ok",
    task: task,
  });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const taskID = parseInt(params.id);
  const body = await request.json();
  // console.log(params.id);
  // console.log(taskID);
  const task = initialTasks.findIndex((task) => task.id === taskID);
  if (task) {
    initialTasks[task] = body;
    return NextResponse.json({
      message: `task updated against this id ${taskID}`,
      status: "ok",
      initialTasks,
    });
  } else {
    return NextResponse.json({
      message: `No task found against this id ${taskID}`,
      status: "ok",
      task: task,
    });
  }
}
