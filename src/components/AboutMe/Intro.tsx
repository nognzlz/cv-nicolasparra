import React from "react";
import { Nunito } from "next/font/google";
import clsx from "clsx";

const nunito = Nunito({ weight: "400", subsets: ["latin"] });

export const Intro = () => {
  return (
    <p
      className={clsx(
        "text-gray-100 text-center md:w-[750px] w-full my-8 md:px-0 px-4",
        nunito.className
      )}
    >
      I am a seasoned full-stack developer, working in the software industry for
      10 years. During my professional career, I collaborated to build small and
      large projects and I have always worked using agile methodologies.
    </p>
  );
};
