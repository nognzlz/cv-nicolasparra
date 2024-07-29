import clsx from "clsx";
import { Roboto } from "next/font/google";
import React, { PropsWithChildren, useMemo } from "react";

const roboto = Roboto({
  weight: "500",
  style: ["italic", "normal"],
  subsets: ["latin"],
});

export const Heading = ({
  children,
  className,
  level = 1,
}: PropsWithChildren & { className?: string; level?: 1 | 2 | 3 }) => {
  const attributes = useMemo(
    () => ({
      className: clsx(
        roboto.className,
        "font-bold bg-gradient-primary inline-block text-transparent bg-clip-text uppercase w-fit",
        {
          "text-3xl italic": level === 1,
          "text-2xl italic": level === 2,
          "text-lg not-italic": level === 3,
        },
        className
      ),
    }),
    []
  );

  switch (level) {
    case 1:
      return <h1 {...attributes}>{children}</h1>;
    case 2:
      return <h2 {...attributes}>{children}</h2>;
    default:
      return <h1 {...attributes}>{children}</h1>;
  }
};
