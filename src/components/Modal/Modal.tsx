import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import React, { Fragment, useRef } from "react";
import { Heading } from "../Heading";

export const Modal = ({
  title,
  open,
  onClose,
  children,
  dialogClassName,
  mobileFullscreen,
}: {
  title: string | React.ReactElement;
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  dialogClassName?: string;
  mobileFullscreen?: boolean;
}) => {
  const exitButtonRef = useRef(null);
  return (
    <Transition show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={onClose}
        initialFocus={exitButtonRef}
      >
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className={clsx(
              "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
              mobileFullscreen && "hidden sm:block"
            )}
          />
        </TransitionChild>

        <div
          className={clsx(
            "fixed inset-0 z-10 w-screen overflow-y-auto sm:p-4",
            mobileFullscreen ? "p-0" : "p-4"
          )}
        >
          <div
            className={clsx(
              "flex min-h-full items-end justify-center text-center sm:items-center"
            )}
          >
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom={clsx(
                "opacity-0 sm:scale-95",
                mobileFullscreen ? "sm:translate-y-0" : "translate-y-4"
              )}
              enterTo={clsx(
                "opacity-100 sm:scale-100",
                !mobileFullscreen && "translate-y-0"
              )}
              leave="ease-in duration-200"
              leaveFrom={clsx(
                "opacity-100 sm:scale-100",
                !mobileFullscreen && "translate-y-0"
              )}
              leaveTo={clsx(
                "opacity-0 sm:translate-y-0 sm:scale-95",
                !mobileFullscreen && "translate-y-4"
              )}
            >
              <DialogPanel
                className={clsx(
                  "relative overflow-visible bg-slate-800 text-left shadow-xl transition-all md:max-w-3xl",
                  mobileFullscreen
                    ? "max-h-screen min-h-screen w-full transform overflow-y-auto sm:my-8 sm:min-h-fit sm:rounded-lg"
                    : "w-full transform overflow-hidden rounded-lg sm:my-8",
                  dialogClassName
                )}
              >
                <div className="px-6 py-4 flex flex-row">
                  <div className="text-md text-center self-stretch w-full ">
                    <Heading level={3}>{title}</Heading>
                  </div>
                  <XMarkIcon
                    ref={exitButtonRef}
                    className="absolute right-4 top-4 h-6 w-6 cursor-pointer text-gray-400 hover:text-gray-500"
                    onClick={onClose}
                  />
                </div>
                {children}
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
