import React from "react";
import { Nunito } from "next/font/google";
import clsx from "clsx";

const nunito = Nunito({ subsets: ["latin"], weight: "300" });

export const Label = ({
  children,
  htmlFor,
}: React.PropsWithChildren & { htmlFor?: string }) => {
  return (
    <label
      className={clsx("text-gray-100 text-sm", nunito.className)}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
};
