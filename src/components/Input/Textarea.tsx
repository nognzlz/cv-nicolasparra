import React from "react";

export const Textarea = () => {
  return (
    <textarea
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
         outline-offset-2
         resize-none`}
    ></textarea>
  );
};
