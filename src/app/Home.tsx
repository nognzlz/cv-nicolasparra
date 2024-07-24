"use client";
import { AboutMe } from "@/components/AboutMe/AboutMe";
import { Hero } from "@/components/Hero";
import { WorkExperience } from "@/types/Career";
import React, { useEffect } from "react";
import { scroller } from "react-scroll";

interface Props {
  workExperiences: WorkExperience[];
}

export const Home = ({ workExperiences }: Props) => {
  const [scrollTop, setScrollTop] = React.useState(0);
  const [ticking, setTicking] = React.useState(false);

  //   useEffect(() => {
  //     const handleScroll = (event: Event) => {
  //       setScrollTop((prevY) => {
  //         setTicking((prevTicking: boolean) => {
  //           if (!prevTicking) {
  //             window.requestAnimationFrame(() => {
  //               setTimeout(() => {
  //                 if (prevY < window.scrollY) {
  //                   if (0 < window.scrollY && window.scrollY < 200) {
  //                     scroller.scrollTo("about-me", {
  //                       duration: 500,
  //                       smooth: true,
  //                       delay: 0,
  //                     });
  //                   }
  //                 }
  //               }, 0);
  //               return false;
  //             });
  //           }
  //           return true;
  //         });
  //         setTicking(true);
  //         return window.scrollY;
  //       });
  //     };

  //     window.addEventListener("scroll", handleScroll);

  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }, []);

  return (
    <>
      <Hero />
      <AboutMe workExperiences={workExperiences} />
    </>
  );
};
