import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/outline";
import React from "react";

export const ContactBubble = () => {
  return (
    <div className="bg-slate-900 rounded-full h-16 w-16 fixed z-50 text-gray-200 border border-slate-700 bottom-24 right-8 md:right-16 grid place-items-center drop-shadow-glow cursor-pointer ">
      <ChatBubbleLeftEllipsisIcon className="h-8 w-8 mx-auto transition-transform hover:scale-110 duration-300" />
    </div>
  );
};
