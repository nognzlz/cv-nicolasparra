import React from "react";
import Image from "next/image";
import { Roboto } from "next/font/google";
import clsx from "clsx";

const roboto = Roboto({ weight: "500", subsets: ["latin"] });

export const Hero = () => {
  return (
    <div className="relative w-full h-[350px] md:h-[400px]">
      <div className="h-[350px] md:h-[400px] w-full absolute">
        <Image
          alt="background image"
          aria-hidden="true"
          fill={true}
          src="/images/cv-hero-image.png"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="absolute w-full h-full flex flex-col items-center justify-center bg-gray-900 bg-opacity-80">
        <div className="flex md:flex-row flex-col gap-x-8 items-center gap-y-8">
          <div className="relative w-32 h-32 md:w-48 md:h-48">
            <Image
              src={"/images/nicolas.jpeg"}
              alt="Nicolas"
              layout="fill"
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col items-center text-center gap-y-2">
            <h1
              className={clsx(
                "text-3xl md:text-[70px] font-bold text-white",
                roboto.className
              )}
            >
              Nicolas Gonzalez Parra
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
