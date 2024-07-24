"use client";
import { AboutMe } from "@/components/AboutMe/AboutMe";
import { Career } from "@/components/AboutMe/Career";
import { Technologies } from "@/components/AboutMe/Technologies";
import { Hero } from "@/components/Hero";
import { WorkExperience } from "@/types/Career";
import React, { useEffect } from "react";
import { scroller } from "react-scroll";

interface Props {
  workExperiences: WorkExperience[];
}

export const Home = ({ workExperiences }: Props) => {
  return (
    <div
      className="snap-y snap-mandatory overflow-y-scroll h-[calc(100vh-140px)]"
      id="mainContainer"
    >
      <div className="snap-always snap-center">
        <Hero />
      </div>
      <div className="snap-always snap-center">
        <AboutMe workExperiences={workExperiences} />
      </div>
      <div className="snap-always snap-center">
        <Technologies />
      </div>
      <div className="snap-always snap-start">
        <Career workExperiences={workExperiences} />
      </div>
    </div>
  );
};
