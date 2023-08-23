"use client";
import React, { useContext } from "react";
import { SectionContext } from "./CardWithForm";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CardDemo() {
  const state = useContext(SectionContext);

  return (
    <Card className="lg:max-w-md w-full mt-10">
      <CardHeader>
        <CardTitle>Card Title : {state}</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <img
          src="https://cdn.pixabay.com/photo/2023/03/16/16/49/watercolor-7857103_640.png"
          alt="Card Image"
          className="w-full"
        />
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
        <Button onClick={increament}>Deploy</Button>
      </CardFooter>
    </Card>
  );
  function increament() {
    console.log("inside CardDemo");
    console.log(state);
  }
}
