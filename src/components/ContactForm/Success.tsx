import React from "react";
import { Nunito } from "next/font/google";
import clsx from "clsx";
import { Envelope } from "@/components/Icons/Envelope";
import { RocketLaunchIcon } from "@heroicons/react/24/outline";
import { Button } from "../Button";

const nunito = Nunito({ subsets: ["latin"], weight: "300" });

export const Success = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="container mx-auto h-full grid place-items-center">
      <div className="flex flex-col w-full p-4">
        <p
          className={clsx(
            "grid place-items-center justify-center items-center text-gray-100 text-lg text-center gap-y-4 h-full py-10",
            nunito.className
          )}
        >
          <RocketLaunchIcon className="w-12 h-12 text-green-500" />
          <span>Your message was sent</span>
        </p>
        <div className="flex justify-end">
          <Button onClick={onClose}>Close</Button>
        </div>
      </div>
    </div>
  );
};
