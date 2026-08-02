"use client";

import React from "react";
import { CrosswordGrid } from "@/components/games/CrosswordGrid";

export const Page22CrosswordPuzzle: React.FC = () => {
  return (
    <div className="flex flex-col gap-3 p-4 sm:p-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center text-xl shadow-soft">
            🧩
          </div>
          <div>
            <span className="text-[11px] font-black text-amber-800 uppercase tracking-wider block">
              Teka-Teki Silang
            </span>
            <h2 className="text-lg sm:text-xl font-black text-[#2D3748] leading-tight">
              Crossword Puzzle
            </h2>
          </div>
        </div>
      </div>

      {/* Main Interactive Grid */}
      <CrosswordGrid />
    </div>
  );
};
