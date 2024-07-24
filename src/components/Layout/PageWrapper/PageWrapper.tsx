import React from "react";

type Props = {
  children: React.ReactNode;
};

export const PageWrapper = ({ children }: Props) => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-slate-600 via-slate-800 to-slate-700 -mb-20 pb-20">
      {children}
    </div>
  );
};
