import clsx from "clsx";
import React from "react";
import { Sidebar } from "../Sidebar";

const BG_CLASSES = "bg-gradient-to-tr from-slate-700 to-blue-950";

export const Header = () => {
  return (
    <div
      className={clsx(
        "h-16 w-full absolute z-10 flex flex-row p-2 items-center",
        BG_CLASSES
      )}
    >
      <Sidebar
        menuItems={[
          {
            label: "Contact me",
            url: "/contact-me",
          },
        ]}
      />
    </div>
  );
};
