import clsx from "clsx";
import React from "react";

const BG_CLASSES = "bg-gradient-to-tr from-slate-700 to-blue-950";

export const Header = () => {
  return <div className={clsx("h-16 w-full absolute z-10", BG_CLASSES)} />;
};
