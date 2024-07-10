import { Heading } from "@/components/Heading";
import { Intro } from "./Intro";
import { Technologies } from "./Technologies";

export default () => {
  return (
    <div className="container mx-auto flex flex-col items-center my-8 gap-y-4">
      <Heading>ABOUT ME</Heading>
      <Intro />
      <Technologies />
    </div>
  );
};
