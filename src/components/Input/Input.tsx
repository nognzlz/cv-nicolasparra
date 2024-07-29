import React from "react";
import { useFormContext } from "react-hook-form";
import { Nunito } from "next/font/google";
import clsx from "clsx";

const nunito = Nunito({ subsets: ["latin"], weight: "300" });

interface Props {
  className?: string;
  name: string;
  error?: boolean;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
}

export const Input = ({
  className,
  name,
  type,
  placeholder,
  disabled,
  error,
}: Props) => {
  const { register } = useFormContext();

  return (
    <input
      {...register(name)}
      placeholder={placeholder}
      name={name}
      type={type || "text"}
      disabled={disabled}
      className={clsx(
        `
        bg-transparent
        border
        border-gray-200
        border-opacity-50
        rounded-lg 
        w-full
        text-gray-100 p-4 
        outline-1
         outline-slate-700 
         outline-opacity-50
         outline-offset-2 ${className} ${nunito.className}`,
        {
          "border-red-300 border-2 border-opacity-100": error,
        }
      )}
    />
  );
};
