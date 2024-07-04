import clsx from "clsx";
import React, { MouseEventHandler, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
}

export const Button = ({ className, children, type, onClick }: Props) => {
  return (
    <button
      className={clsx(
        ` text-gray-100
         bg-slate-800 border
         border-gray-200 border-opacity-50
          rounded-lg px-4 py-2
          outline-1 outline-slate-700
          outline-opacity-50 outline-offset-2
          hover:bg-opacity-80
          focus:bg-opacity-80`,
        className
      )}
      type={type || "button"}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
