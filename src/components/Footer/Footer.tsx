import clsx from "clsx";
import React from "react";
import { Linkedin } from "@/components/Icons/Linkedin";
import { Nunito } from "next/font/google";

const nunito = Nunito({ weight: "400", subsets: ["latin"] });

const BG_CLASSES = "bg-slate-800 shadow-md";

export const Footer = () => {
  return (
    <div className={clsx("h-20 w-full", BG_CLASSES)}>
      <div className="container py-4 mx-auto">
        <div className="flex flex-row justify-center">
          <a
            href="https://www.linkedin.com/in/nicolasgonzalezparra/"
            rel="noreferrer noopener"
            target="_blank"
            className="transform scale-100 md:scale-75 hover:scale-100 transition-all duration-100"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
      <p
        className={clsx("text-center text-gray-100 text-xs", nunito.className)}
      >
        © Nicolas González Parra 2024. All rights reserved.
      </p>
    </div>
  );
};
