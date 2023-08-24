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

const CardDemo = () => {
  const myData = useContext(SectionContext);

  return (
    <Card className="lg:max-w-md w-full mt-10">
      <CardHeader>
        <CardTitle>Hi {myData.name}</CardTitle>
        <CardDescription>{myData.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <img
          src="https://cdn.pixabay.com/photo/2023/03/16/16/49/watercolor-7857103_640.png"
          alt="Card Image"
          className="w-full"
        />
      </CardContent>
      <CardFooter className="flex flex-col justify-end">
        <p>Yours truly</p>
        <p>{myData.sender}</p>

        {/* <Button onClick={increament}>Deploy</Button> */}
      </CardFooter>
    </Card>
  );
  // function increament() {
  //   console.log("inside CardDemo");
  //   console.log(state);
  // }
};

export default CardDemo;
