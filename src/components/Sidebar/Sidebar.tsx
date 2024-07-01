"use client";

import React, { Fragment } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { Dialog, Transition, TransitionChild } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { Navigation } from "../Navigation";

export const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <>
      <Bars3Icon
        className="h-8 w-8 text-white md:hidden ml-2"
        onClick={() => setSidebarOpen(true)}
      />
      <div>
        <Transition show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 flex z-50 md:hidden"
            onClose={setSidebarOpen}
          >
            <TransitionChild
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-blue-900 bg-opacity-20" />
            </TransitionChild>
            <TransitionChild
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-gradient-to-tr from-slate-700 to-blue-950">
                <TransitionChild
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </TransitionChild>
                <div className="mt-5 flex-1 h-0 overflow-y-auto">
                  <Navigation onNavigate={() => setSidebarOpen(false)} />
                </div>
              </div>
            </TransitionChild>
            <div className="flex-shrink-0 w-14" aria-hidden="true">
              {/* Dummy element to force sidebar to shrink to fit close icon */}
            </div>
          </Dialog>
        </Transition>
      </div>
    </>
  );
};
