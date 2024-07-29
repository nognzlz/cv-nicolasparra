"use client";

import React, { ReactElement } from "react";
import { Heading } from "@/components/Heading";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { AnimatePresence, easeOut, motion } from "framer-motion";
import { WorkExperience } from "@/types/Career";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Nunito } from "next/font/google";
import clsx from "clsx";

const nunito = Nunito({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  style: ["italic", "normal"],
});

const Accordion = ({
  button,
  content,
}: {
  button: ReactElement;
  content: ReactElement;
}) => {
  return (
    <Disclosure as="div" className={"w-full"}>
      {({ open }) => (
        <>
          <DisclosureButton
            className={
              "w-full py-2 px-4 text-left bg-slate-800 rounded-lg shadow-slate-900 shadow-md"
            }
          >
            <div className="flex flex-row justify-between items-center">
              {button}
              <div
                className={`${
                  open ? "transform rotate-180" : ""
                } transition-transform ease-out duration-300`}
              >
                <ChevronDownIcon className="w-5 h-5 text-white rounded-full bg-slate-700 p-0.5" />
              </div>
            </div>
          </DisclosureButton>
          <div className="overflow-hidden py-2">
            <AnimatePresence>
              {open && (
                <DisclosurePanel
                  static
                  as={motion.div}
                  initial={{ opacity: 0, y: -24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  translate="yes"
                  transition
                  className="origin-top pt-4 pl-4"
                >
                  {content}
                </DisclosurePanel>
              )}
            </AnimatePresence>
          </div>
        </>
      )}
    </Disclosure>
  );
};

export const Career = ({
  workExperiences,
}: {
  workExperiences: WorkExperience[];
}) => {
  return (
    <div className="flex flex-col gap-y-2 items-center justify-center w-full md:max-w-xl px-4 md:px-0 mx-auto min-h-[calc(100vh-80px)] py-8">
      <Heading level={2}>Career</Heading>
      <div className="w-full my-8">
        {workExperiences.map(({ company, position, duration, jobItems }) => (
          <Accordion
            key={`${company}-${duration}`}
            button={
              <div
                className={clsx(
                  "text-gray-100 font-semibold",
                  nunito.className
                )}
              >
                {company} -{" "}
                <span className="text-gray-400 font-normal italic">
                  {position}
                </span>
              </div>
            }
            content={
              <div className={clsx("text-gray-100 mb-6", nunito.className)}>
                <p className="text-gray-400 font-normal italic mb-4">
                  {duration}
                </p>
                <ul className="flex flex-col gap-y-6">
                  {jobItems.map((item) => (
                    <li className="flex flex-row items-baseline" key={item}>
                      <div className="w-3 h-3 bg-gradient-primary rounded-full mr-3 flex-shrink-0" />
                      <div className="text-sm">{item}</div>
                    </li>
                  ))}
                </ul>
              </div>
            }
          />
        ))}
      </div>
    </div>
  );
};
