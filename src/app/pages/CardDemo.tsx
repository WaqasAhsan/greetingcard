import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function CardDemo() {
  return (
    <Card className="lg:max-w-md w-full mt-10">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
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
      </CardFooter>
    </Card>
  );
}
