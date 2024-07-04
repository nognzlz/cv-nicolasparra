import React from "react";
import { useFormContext } from "react-hook-form";

interface Props {
  className?: string;
  name: string;
  type?: string;
  placeholder?: string;
}

export const Input = ({ className, name, type, placeholder }: Props) => {
  const { register } = useFormContext();

  return (
    <input
      {...register(name)}
      placeholder={placeholder}
      name={name}
      type={type || "text"}
      className={`
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
         outline-offset-2 ${className}`}
    />
  );
};
