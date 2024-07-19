import React from "react";
import Image from "next/image";
import { Heading } from "../Heading";
import clsx from "clsx";
import nico from "../../../public/images/nicolas.jpeg";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid";

export const Hero = () => {
  return (
    <div className="relative w-full h-[calc(100vh-160px)]">
      <div className="absolute w-full h-full flex flex-col items-center justify-center bg-transparent bg-opacity-80">
        <div className="flex md:flex-row flex-col gap-x-8 items-center justify-center">
          <div className="flex flex-col relative items-center text-center py-4 px-8 w-full">
            {/* <Heading className={clsx("drop-shadow-glow animate-wiggle")}>
              Nicolas Gonzalez Parra
            </Heading> */}
            <div className="animate-fade-right animate-duration-1000 animate-delay-75 absolute md:w-[750px] w-full">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-300 animate-delay-700 animate-fade-down animate-reverse">
                Welcome to my website!
              </h1>
            </div>
            <div className="animate-fade-right animate-duration-1000 animate-delay-[1900ms] absolute md:w-[750px] w-full flex flex-col items-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-300">
                I'm a full-stack developer
              </h1>
              <button className="text-gray-300 mt-16 flex flex-col items-center gap-y-3 cursor-pointer">
                <div>Scroll down</div>
                <div className="animate-pulse">
                  <ChevronDoubleDownIcon className="w-8 h-8 animate-bounce" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
