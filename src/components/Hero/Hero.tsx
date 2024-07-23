"use client";
import React from "react";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid";
import { Link } from "react-scroll";

interface Props {
  onScrollDown?: () => void;
}

export const Hero = ({ onScrollDown }: Props) => {
  const [welcomeVisible, setWelcomeVisible] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setWelcomeVisible(false);
    }, 1200);
  }, []);

  return (
    <div className="relative w-full h-[calc(100vh-60px)]">
      <div className="absolute w-full h-full flex flex-col items-center justify-center bg-transparent bg-opacity-80">
        <div className="flex md:flex-row flex-col gap-x-8 items-center justify-center">
          <div className="flex flex-col relative items-center text-center py-4 px-8 w-full">
            {/* <Heading className={clsx("drop-shadow-glow animate-wiggle")}>
              Nicolas Gonzalez Parra
            </Heading> */}
            {welcomeVisible && (
              <div className="animate-fade-right animate-duration-1000 animate-delay-75 md:w-[750px] w-screen">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-100 animate-delay-700 animate-fade-down animate-reverse">
                  Welcome to my website!
                </h1>
              </div>
            )}
            {!welcomeVisible && (
              <div className="animate-fade-right animate-duration-1000 animate-delay-[300ms] md:w-[750px] w-screen flex flex-col items-center">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-100">
                  I'm a full-stack developer
                </h1>
                <Link to="about-me" smooth={true} duration={800}>
                  <button
                    className="text-gray-300 mt-16 flex flex-col items-center gap-y-3 cursor-pointer"
                    onClick={onScrollDown}
                  >
                    <div>Scroll down</div>
                    <div className="animate-pulse">
                      <ChevronDoubleDownIcon className="w-8 h-8 animate-bounce" />
                    </div>
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
