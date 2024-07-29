"use client";
import { AboutMe } from "@/components/AboutMe/AboutMe";
import { Career } from "@/components/AboutMe/Career";
import { Technologies } from "@/components/AboutMe/Technologies";
import { ContactBubble } from "@/components/ContactBubble/ContactBubble";
import { Hero } from "@/components/Hero";
import { WorkExperience } from "@/types/Career";
import React, { useEffect } from "react";

interface Props {
  workExperiences: WorkExperience[];
}

export const Home = ({ workExperiences }: Props) => {
  return (
    <>
      <ContactBubble />
      <div
        className="snap-y snap-mandatory overflow-y-scroll h-[calc(100vh-80px)] no-scrollbar"
        id="mainContainer"
      >
        <div className="snap-always snap-center">
          <Hero />
        </div>
        <div className="snap-always snap-center">
          <AboutMe workExperiences={workExperiences} />
        </div>
        <div className="snap-always snap-start">
          <Technologies />
        </div>
        <div className="snap-always snap-start">
          <Career workExperiences={workExperiences} />
        </div>
      </div>
    </>
  );
};
