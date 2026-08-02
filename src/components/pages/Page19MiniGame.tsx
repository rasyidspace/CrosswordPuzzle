"use client";

import React from "react";
import { MatchingGame } from "@/components/games/MatchingGame";

export const Page19MiniGame: React.FC = () => {
  return (
    <div className="flex flex-col gap-3.5 p-5">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center text-2xl shadow-soft">
          🎮
        </div>
        <div>
          <span className="text-xs font-black text-amber-800 uppercase tracking-wider">
            Mini Game
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-[#2D3748]">
            Ayo Mencocokkan!
          </h2>
        </div>
      </div>

      <MatchingGame />
    </div>
  );
};
