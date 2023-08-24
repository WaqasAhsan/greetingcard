"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SetStateAction, createContext, useState } from "react";
import CardDemo from "./CardDemo";
// const SectionContext = createContext("");
// const DescriptionContext = createContext("");

const myData = {
  name: "",
  description: "",
  sender: "",
};

const SectionContext = createContext<{
  name: string;
  description: string;
  sender: string;
}>(myData);

export default function CardWithForm() {
  const [state, setstate] = useState("");
  const [description, setDescription] = useState("");
  const [sender, setSender] = useState("");

  const handleNameChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setstate(event.target.value);
    // console.log("Waqas: " + state);
  };

  const handleDescriptionChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setDescription(event.target.value);
  };

  const handleSenderChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSender(event.target.value);
  };

  const data = {
    name: state,
    description: description,
    sender: sender,
  };

  return (
    <SectionContext.Provider value={data}>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Create Greeting Card</CardTitle>
          <CardDescription>
            Create your new greeting card in one-click.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name1">Name</Label>
                <Input
                  placeholder="Please enter receiver's name"
                  type="text"
                  id="state"
                  name="state"
                  onChange={handleNameChange}
                  value={state}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="description">Description</Label>
                <Input
                  id="description"
                  placeholder="Please enter description of your card"
                  type="text"
                  name="description"
                  onChange={handleDescriptionChange}
                  value={description}
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="sender">Sender</Label>
                <Input
                  id="sender"
                  placeholder="Please enter sender's name"
                  type="text"
                  name="sender"
                  onChange={handleSenderChange}
                  value={sender}
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="ghost">Cancel</Button>
          <Button onClick={increament}>Deploy</Button>
        </CardFooter>
      </Card>
      <CardDemo />
    </SectionContext.Provider>
  );
  function increament() {
    console.log("inside CardWithForm");
    // setstate(state);
    console.log(state);
  }
}
export { SectionContext };
