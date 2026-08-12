"use client";

import React from "react";
import { CROSSWORD_CLUES } from "@/data/storyboardData";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { motion } from "framer-motion";

export const Page25CrosswordDown: React.FC = () => {
  const downClues = CROSSWORD_CLUES.filter((c) => c.orientation === "down");

  return (
    <div className="flex flex-col gap-4 p-5">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center text-2xl shadow-soft">
          ↕️
        </div>
        <div>
          <Badge variant="primary" size="sm" className="mb-0.5">
            Petunjuk TTS
          </Badge>
          <h2 className="text-xl sm:text-2xl font-black text-[#2D3748]">
            Petunjuk Menurun
          </h2>
        </div>
      </div>

      <p className="text-xs sm:text-sm font-bold text-slate-600">
        Gunakan petunjuk menurun di bawah ini untuk mengisi kotak TTS yang tersusun vertikal:
      </p>

      {/* Clues list */}
      <div className="flex flex-col gap-2.5">
        {downClues.map((clue, idx) => (
          <motion.div
            key={clue.id}
            initial={{ x: -15, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: idx * 0.08, duration: 0.25 }}
          >
            <Card className="p-3.5 bg-white border-amber-200 shadow-soft flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-amber-500 text-white font-black text-xs flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                {clue.number}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-2 mb-0.5">
                  <span className="text-[11px] font-black text-amber-800">
                    Nomor {clue.number} Menurun
                  </span>
                  <span className="text-[10px] font-extrabold px-2 py-0.5 bg-amber-100 text-amber-900 rounded-full">
                    {clue.length} Kotak
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-extrabold text-[#2D3748]">
                  {clue.clue}
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
