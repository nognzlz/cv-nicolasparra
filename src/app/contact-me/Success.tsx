import React from "react";
import { Nunito } from "next/font/google";
import clsx from "clsx";
import { Envelope } from "@/components/Icons/Envelope";

const nunito = Nunito({ subsets: ["latin"], weight: "300" });

export const Success = () => {
  return (
    <div className="container mx-auto">
      <p
        className={clsx(
          "flex flex-col h-full justify-center items-center text-gray-100 text-lg text-center mt-[23vh]",
          nunito.className
        )}
      >
        <Envelope className="w-48 h-48 mb-4" />
        <span>Your message was sent</span>
        <span>I will contact you soon!</span>
      </p>
    </div>
  );
};
