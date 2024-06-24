import clsx from "clsx";
import React from "react";

const BG_CLASSES = "bg-gradient-to-tr from-slate-700 to-blue-950";

export const Footer = () => {
  return <div className={clsx("h-20 w-full", BG_CLASSES)} />;
};
