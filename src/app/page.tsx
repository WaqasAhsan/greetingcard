"use client";

import Image from "next/image";
import CardDemo from "./pages/CardDemo";
import CardWithForm from "./pages/CardWithForm";
import InputTest from "./pages/InputTest";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <CardWithForm />
      <CardDemo />
      <InputTest />
    </main>
  );
}
