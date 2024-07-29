import React from "react";
import Image from "next/image";
import { Nunito } from "next/font/google";
import clsx from "clsx";
import nico from "../../../public/images/nico-bg-removed.png";

const nunito = Nunito({ weight: "400", subsets: ["latin"] });

export const Intro = () => {
  return (
    <div className="flex md:flex-row flex-col items-center gap-x-6 mt-8">
      <Image
        src={nico}
        alt="Nicolas Gonzalez Parra"
        className="w-32"
        placeholder="blur"
      />
      <p
        className={clsx(
          "text-gray-100 md:text-start text-center md:w-[750px] w-full my-8 md:px-0 px-4",
          nunito.className
        )}
      >
        I am a seasoned full-stack developer, working in the software industry
        for 10 years. During my professional career, I collaborated to build
        small and large projects and I have always worked using agile
        methodologies.
      </p>
    </div>
  );
};
