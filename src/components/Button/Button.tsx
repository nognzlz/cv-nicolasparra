import clsx from "clsx";
import React, { MouseEventHandler, PropsWithChildren } from "react";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"], weight: "300" });

interface Props extends PropsWithChildren {
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export const Button = ({
  className,
  children,
  type,
  onClick,
  disabled,
}: Props) => {
  return (
    <button
      className={clsx(
        `text-gray-100
          disabled:opacity-50
         bg-slate-800
         border
         border-gray-200 border-opacity-50
          rounded-lg px-4 py-2
          outline-1 outline-slate-800
          outline-opacity-50 outline-offset-2
          hover:bg-slate-700 bg-opacity-40
          focus:bg-opacity-80
          transition-colors`,
        className,
        nunito.className
      )}
      type={type || "button"}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
