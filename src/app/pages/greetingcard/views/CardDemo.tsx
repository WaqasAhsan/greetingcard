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
import Image from "next/image";

const CardDemo = () => {
  const myData = useContext(SectionContext);

  return (
    <Card className="lg:max-w-md w-full mt-10">
      <CardHeader>
        <CardTitle>Hi {myData.name},</CardTitle>
        <CardDescription>{myData.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          // src="https://cdn.pixabay.com/photo/2023/03/16/16/49/watercolor-7857103_640.png"
          src="https://www.througheternity.com/upload/CONF83/20220323/cinque_terre_header_1_-tSa-1200X630.png"
          alt="Card Image"
          width={400}
          height={400}
          className="w-full"
        />
      </CardContent>
      <CardFooter className="flex flex-col items-end">
        <p>Yours truly,</p>
        <p>{myData.sender}</p>
      </CardFooter>
    </Card>
  );
  // function increament() {
  //   console.log("inside CardDemo");
  //   console.log(state);
  // }
};

export default CardDemo;
