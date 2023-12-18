import initialTasks from "../../data/data";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  return NextResponse.json({
    message: "success",
    status: "ok",
    initialTasks,
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log(body);
  const updatedTasks = initialTasks.push(body);
  console.log(`Updated Tasks ${updatedTasks}`);
  return NextResponse.json({
    message: "task added successfully",
    status: "ok",
    initialTasks,
  });
}
