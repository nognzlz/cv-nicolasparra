import clsx from "clsx";
import { Roboto } from "next/font/google";
import React, { PropsWithChildren } from "react";

const roboto = Roboto({ weight: "500", subsets: ["latin"] });

export const Heading = ({
  children,
  className,
}: PropsWithChildren & { className?: string }) => {
  return (
    <h1
      className={clsx(
        roboto.className,
        "font-bold bg-gradient-primary inline-block text-transparent bg-clip-text text-3xl uppercase italic w-fit",
        className
      )}
    >
      {children}
    </h1>
  );
};
