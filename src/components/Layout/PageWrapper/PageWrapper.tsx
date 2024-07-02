import React from "react";

type Props = {
  children: React.ReactNode;
};

export const PageWrapper = ({ children }: Props) => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start bg-gray-800 -mb-20 pb-24">
      {children}
    </div>
  );
};
