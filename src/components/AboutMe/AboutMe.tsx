import React from "react";
import { Heading } from "../Heading";
import { Intro } from "./Intro";
import { Element } from "react-scroll";

interface Props {
  workExperiences: any;
}

export const AboutMe = ({ workExperiences }: Props) => {
  return (
    <Element name="about-me-inside-container">
      <div id="about-me" />
      <div className="container mx-auto flex flex-col items-center justify-center my-8 gap-y-12 min-h-[calc(100vh-80px)]">
        <div className="flex flex-col items-center justify-center">
          <Heading>ABOUT ME</Heading>
          <Intro />
        </div>
      </div>
    </Element>
  );
};
