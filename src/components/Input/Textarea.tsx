import clsx from "clsx";
import React from "react";
import { useFormContext } from "react-hook-form";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"], weight: "300" });

export const Textarea = ({
  className,
  name,
  placeholder,
  disabled,
  error,
}: {
  name: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  error?: boolean;
}) => {
  const { register } = useFormContext();
  return (
    <textarea
      {...register(name)}
      placeholder={placeholder}
      className={clsx(
        nunito.className,
        className,
        `
        bg-transparent
        border
        border-gray-200
        border-opacity-50
        rounded-lg 
        md:w-[750px]
        w-full
        text-gray-100 p-4 
        outline-1
         outline-slate-700 
         outline-opacity-50
         outline-offset-2
         resize-none`,
        { "border-red-300 border-2 border-opacity-100": error || false }
      )}
      disabled={disabled}
    />
  );
};
