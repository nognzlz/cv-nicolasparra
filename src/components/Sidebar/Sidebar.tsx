"use client";

import React, { Fragment } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { Dialog, Transition, TransitionChild } from "@headlessui/react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { Nunito } from "next/font/google";

const nunito = Nunito({ weight: "400", subsets: ["latin"] });

type Props = {
  menuItems: {
    label: string;
    url: string;
  }[];
};

export const Sidebar = ({ menuItems }: Props) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const MenuItem = ({ label, url }: { label: string; url: string }) => {
    const router = useRouter();
    const pathname = usePathname();

    return (
      <Link href={url} passHref>
        <li
          className={`
                text-white 
                  inline-block
                  font-kodchasan
                  text-base
                  relative 
                  hover:bg-green-300
                  [&.active]:bg-green-300
                  hover:bg-clip-text
                  [&.active]:bg-clip-text
                  hover:text-transparent
                  [&.active]:text-transparent
                  hover:drop-shadow-primary-hover
                  [&.active]:drop-shadow-primary-hover
                  cursor-default
                  transition-all
                  ease-in-out
                  duration-300 
                  hover:after:absolute
                  [&.active]:after:absolute
                  hover:after:translate-y-3
                  [&.active]:after:translate-y-3
                  ${pathname === url ? "active" : ""}
                  ${nunito.className}
                  `}
          onClick={() => {
            setSidebarOpen(false);
          }}
        >
          {label}
        </li>
      </Link>
    );
  };

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
                  {
                    <ul className="flex flex-col px-4 space-y-8 w-fit">
                      {menuItems.map((item) => {
                        return (
                          <MenuItem
                            key={item.label}
                            label={item.label}
                            url={item.url}
                          />
                        );
                      })}
                    </ul>
                  }
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
