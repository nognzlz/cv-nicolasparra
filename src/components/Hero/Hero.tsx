import React from "react";
import Image from "next/image";
import { Heading } from "../Heading";
import clsx from "clsx";

export const Hero = () => {
  return (
    <div className="relative w-full h-[300px] md:h-[400px]">
      <div className="h-[300px] md:h-[400px] w-full absolute">
        <Image
          alt="background image"
          aria-hidden="true"
          fill={true}
          src="/images/cv-hero-image.png"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="absolute w-full h-full flex flex-col items-center justify-center bg-gray-900 bg-opacity-80">
        <div className="flex md:flex-row flex-col gap-x-8 items-center justify-center">
          <div className="relative w-32 h-32 md:w-48 md:h-48">
            <Image
              src={"/images/nicolas.jpeg"}
              alt="Nicolas"
              layout="fill"
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col items-center text-center py-4 px-8">
            <Heading className={clsx("drop-shadow-glow")}>
              Nicolas Gonzalez Parra
            </Heading>
          </div>
        </div>
      </div>
    </div>
  );
};
