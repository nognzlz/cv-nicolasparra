import React from "react";

type Props = {
  children: React.ReactNode;
};

export const PageContent = ({ children }: Props) => {
  return (
    <div className="w-full">
      <div className="h-16"></div>
      {children}
    </div>
  );
};
