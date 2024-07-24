"use client";
import React from "react";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid";
import { Link } from "react-scroll";

interface Props {
  onScrollDown?: () => void;
}

export const Hero = ({ onScrollDown }: Props) => {
  const [heyThereVisible, setHeyThereVisible] = React.useState(true);
  const [welcomeVisible, setWelcomeVisible] = React.useState(false);
  const [imNicoVisible, setImNicoVisible] = React.useState(false);
  const [buildThingsVisible, setBuildThingsVisible] = React.useState(false);
  const [itsNiceToHaveYouVisible, setItsNiceToHaveYouVisible] =
    React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setHeyThereVisible(false);
      setWelcomeVisible(true);
    }, 1700);

    setTimeout(() => {
      setWelcomeVisible(false);
      setImNicoVisible(true);
    }, 3700);

    setTimeout(() => {
      setImNicoVisible(false);
      setBuildThingsVisible(true);
    }, 5700);
  }, []);

  return (
    <div className="relative w-full min-h-[calc(100vh-140px)]">
      <div className="absolute h-full flex flex-col items-center justify-center bg-transparent bg-opacity-80 md:mx-auto w-full">
        <div className="flex md:flex-row flex-col gap-x-8 items-center justify-center">
          <div className="flex flex-col relative items-center text-center py-4 px-8 w-full">
            {heyThereVisible && (
              <div className="animate-fade-right animate-duration-1600 animate-delay-75">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-100 animate-delay-700 animate-fade-down animate-reverse">
                  Hey there!
                </h1>
              </div>
            )}
            {welcomeVisible && (
              <div className="animate-fade-right animate-duration-1000 animate-delay-[200ms] flex flex-col items-center">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-100">
                  Welcome!
                </h1>
              </div>
            )}
            {imNicoVisible && (
              <div className="animate-fade-right animate-duration-1000 animate-delay-[200ms] flex flex-col items-center">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-100">
                  I'm Nico
                </h1>
              </div>
            )}
            {buildThingsVisible && (
              <div className="animate-fade-right animate-duration-1000 animate-delay-[200ms] flex flex-col items-center">
                {!itsNiceToHaveYouVisible && (
                  <h1 className="text-4xl md:text-6xl font-bold text-gray-100">
                    {"And I build things for the web"}
                  </h1>
                )}
                {itsNiceToHaveYouVisible && (
                  <h1 className="text-4xl md:text-6xl font-bold text-gray-100 animate-fade-right animate-duration-1000 animate-delay-[300ms]">
                    {"It's nice to have you here :)"}
                  </h1>
                )}

                <Link to="about-me" smooth={true} duration={800}>
                  <button
                    className="text-gray-300 mt-16 flex flex-col items-center gap-y-3 cursor-pointer"
                    onClick={() => {
                      setItsNiceToHaveYouVisible(true);
                    }}
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
