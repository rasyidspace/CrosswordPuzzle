"use client";

import React from "react";
import { LEARNING_OBJECTIVES } from "@/data/storyboardData";
import { Card } from "@/components/ui/Card";
import { CheckCircle2, Target } from "lucide-react";
import { motion } from "framer-motion";

export const Page3Objectives: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 p-5">
      {/* Header Banner */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center text-2xl shadow-soft">
          🎯
        </div>
        <div>
          <span className="text-xs font-black text-amber-800 uppercase tracking-wider">
            Langkah Awal
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-[#2D3748]">
            Tujuan Pembelajaran
          </h2>
        </div>
      </div>

      {/* Decorative Mascot / Visual */}
      <div className="flex items-center justify-center gap-4 py-1">
        <span className="text-4xl">🎒</span>
        <span className="text-3xl opacity-80">🏯</span>
        <span className="text-3xl opacity-80">🕌</span>
        <span className="text-3xl opacity-80">👑</span>
      </div>

      {/* Content Card */}
      <Card className="flex flex-col gap-3.5 bg-white border-amber-200 shadow-soft">
        <p className="text-xs sm:text-sm font-bold text-slate-600 leading-relaxed">
          Setelah mengikuti pembelajaran menggunakan media ini, peserta didik diharapkan mampu:
        </p>

        <div className="flex flex-col gap-2.5">
          {LEARNING_OBJECTIVES.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: idx * 0.08, duration: 0.25 }}
              className="flex items-start gap-3 p-3 rounded-2xl bg-amber-50/80 border border-amber-200/80"
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm font-extrabold text-[#2D3748]">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </Card>
    </div>
  );
};
