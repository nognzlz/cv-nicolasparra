import React from "react";

type Props = {
  children: React.ReactNode;
};

export const PageContent = ({ children }: Props) => {
  return <main className="w-full h-full">{children}</main>;
};
