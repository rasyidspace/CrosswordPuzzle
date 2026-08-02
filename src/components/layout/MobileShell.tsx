"use client";

import React from "react";

interface MobileShellProps {
  children: React.ReactNode;
}

export const MobileShell: React.FC<MobileShellProps> = ({ children }) => {
  return (
    <main className="w-full max-w-[430px] h-[100dvh] sm:h-[844px] sm:max-h-[92vh] bg-[#FFF8E7] sm:rounded-[36px] sm:shadow-floating sm:border-4 sm:border-amber-200/80 flex flex-col justify-between overflow-hidden relative">
      {children}
    </main>
  );
};
