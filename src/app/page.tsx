"use client";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-10 gap-y-6">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl">
        Projects
      </h1>
      <Link
        className="scroll-m-20 text-2xl font-semibold tracking-tight lg:text-2xl"
        href={"/pages/greetingcard"}
      >
        Greeting Card Demo
      </Link>
      <Link
        className="scroll-m-20 text-2xl font-semibold tracking-tight lg:text-2xl"
        href={"/pages/todolist"}
      >
        TODO List Demo
      </Link>
    </main>
  );
}
