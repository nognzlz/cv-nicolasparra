import { ChatBubbleBottomCenterIcon } from "@heroicons/react/20/solid";
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/outline";
import React from "react";

export const ContactBubble = () => {
  return (
    <div className="bg-slate-900 rounded-full h-12 w-12 fixed z-50 text-gray-100 border border-slate-700 top-28 left-8 grid place-items-center drop-shadow-glow cursor-pointer ">
      <ChatBubbleLeftEllipsisIcon className="h-6 w-6 mx-auto transition-transform hover:scale-90 duration-300" />
    </div>
  );
};
