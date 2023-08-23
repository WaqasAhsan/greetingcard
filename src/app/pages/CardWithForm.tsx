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
const SectionContext = createContext("");

export default function CardWithForm() {
  const [state, setstate] = useState("");
  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setstate(event.target.value);
    console.log("Waqas: " + state);
  };
  return (
    <SectionContext.Provider value={state}>
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
                  placeholder="Please enter your name"
                  type="text"
                  id="state"
                  name="state"
                  onChange={handleChange}
                  value={state}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name1">Description</Label>
                <Input
                  id="name1"
                  placeholder="Please enter description of your card"
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
    </SectionContext.Provider>
  );
  function increament() {
    console.log("inside CardWithForm");

    setstate(state);

    console.log(state);
    console.log(SectionContext.displayName?.length);
  }
}
export { SectionContext };
