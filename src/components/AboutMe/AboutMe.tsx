import React from "react";
import { Heading } from "../Heading";
import { Intro } from "./Intro";
import { Technologies } from "./Technologies";
import { Career } from "./Career";

interface Props {
  workExperiences: any;
}

export const AboutMe = ({ workExperiences }: Props) => {
  return (
    <>
      <div id="about-me" />
      <div className="container mx-auto flex flex-col items-center my-8 gap-y-12">
        <div className="flex flex-col items-center">
          <Heading>ABOUT ME</Heading>
          <Intro />
        </div>
        <Technologies />
        <Career workExperiences={workExperiences} />
      </div>
    </>
  );
};
