import { Heading } from "@/components/Heading";
import { Textarea } from "@/components/Input/Textarea";
import React from "react";

export default () => {
  return (
    <>
      <div className="flex flex-col p-4 space-y-4 md:my-8 my-4">
        <div className="text-center">
          <Heading>Contact me</Heading>
        </div>
        <div className="md:self-center self-stretch">
          <Textarea />
        </div>
      </div>
    </>
  );
};
