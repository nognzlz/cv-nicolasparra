"use client";

import React, { ReactElement } from "react";
import { Heading } from "@/components/Heading";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { AnimatePresence, easeOut, motion } from "framer-motion";
import { WorkExperience } from "./actions";

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
            className={"w-full border-b pb-2 text-left border-gray-500"}
          >
            {button}
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
                  className="origin-top"
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
    <div className="flex flex-col gap-y-2 items-center max-w-md ">
      <Heading level={2}>Career</Heading>
      <div className="w-full my-8">
        {workExperiences.map(({ company, position, duration, jobItems }) => (
          <Accordion
            key={`${company}-${duration}`}
            button={<div className="text-gray-100">{company}</div>}
            content={
              <div className="text-gray-100">
                <ul>
                  {jobItems.map((item) => (
                    <li className="block my-2" key={item}>
                      {item}
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
