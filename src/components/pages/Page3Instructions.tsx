"use client";

import React from "react";
import { INSTRUCTION_STEPS } from "@/data/storyboardData";
import { Card } from "@/components/ui/Card";
import { ArrowDown, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

export const Page3Instructions: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 p-5">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-2xl bg-blue-500 text-white flex items-center justify-center text-2xl shadow-soft">
          📖
        </div>
        <div>
          <span className="text-xs font-black text-blue-800 uppercase tracking-wider">
            Panduan
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-[#2D3748]">
            Petunjuk Penggunaan Media
          </h2>
        </div>
      </div>

      {/* Steps Flow */}
      <Card className="flex flex-col gap-2 bg-white border-amber-200 shadow-soft">
        {INSTRUCTION_STEPS.map((step, idx) => (
          <React.Fragment key={step.step}>
            <motion.div
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: idx * 0.06, duration: 0.25 }}
              className="flex items-center gap-3 p-2.5 rounded-2xl bg-amber-50/70 border border-amber-200/60"
            >
              <div className="w-8 h-8 rounded-xl bg-amber-500 text-white font-black text-sm flex items-center justify-center shrink-0 shadow-xs">
                {step.step}
              </div>
              <span className="text-xs sm:text-sm font-extrabold text-[#2D3748]">
                {step.text}
              </span>
            </motion.div>

            {idx < INSTRUCTION_STEPS.length - 1 && (
              <div className="flex justify-center py-0.5 text-amber-400">
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </div>
            )}
          </React.Fragment>
        ))}
      </Card>

      {/* Tip Callout */}
      <Card className="bg-amber-100/90 border-amber-300 p-3.5 flex items-start gap-3 shadow-soft">
        <div className="p-2 rounded-xl bg-amber-500 text-white shrink-0">
          <Lightbulb className="w-4 h-4" />
        </div>
        <p className="text-xs font-black text-amber-950 leading-relaxed">
          💡 Bacalah materi terlebih dahulu agar lebih mudah menjawab permainan teka-teki silang!
        </p>
      </Card>
    </div>
  );
};
