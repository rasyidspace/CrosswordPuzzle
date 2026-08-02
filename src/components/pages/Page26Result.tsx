"use client";

import React, { useEffect } from "react";
import { useLearning } from "@/context/LearningContext";
import { Card } from "@/components/ui/Card";
import { Star, Trophy, CheckCircle, XCircle } from "lucide-react";
import { motion } from "framer-motion";

export const Page26Result: React.FC = () => {
  const { validationResult, playSound } = useLearning();

  useEffect(() => {
    playSound("fanfare");
  }, []);

  const score = validationResult?.score ?? 85;
  const correctCells = validationResult?.correctCells ?? 40;
  const incorrectCells = validationResult?.incorrectCells ?? 5;
  const starCount = validationResult?.starCount ?? 4;
  const ratingBadge = validationResult?.ratingBadge ?? "Bagus!";

  return (
    <div className="flex flex-col items-center gap-4 p-5 text-center">
      {/* Header */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-amber-400 to-amber-200 border-4 border-amber-400 shadow-floating flex items-center justify-center text-3xl mb-2">
          🏆
        </div>
        <span className="text-xs font-black text-amber-800 uppercase tracking-wider">
          Pencapaian
        </span>
        <h2 className="text-2xl font-black text-[#2D3748]">
          Hasil Belajarmu
        </h2>
      </motion.div>

      {/* Star Rating Animation */}
      <div className="flex items-center gap-1.5 py-1">
        {[1, 2, 3, 4, 5].map((s) => (
          <motion.div
            key={s}
            initial={{ scale: 0, rotate: -30 }}
            animate={{
              scale: s <= starCount ? 1 : 0.85,
              rotate: 0,
            }}
            transition={{ delay: 0.15 + s * 0.1, type: "spring" }}
          >
            <Star
              className={`w-9 h-9 ${
                s <= starCount
                  ? "fill-amber-400 text-amber-500 drop-shadow-sm"
                  : "fill-slate-200 text-slate-300"
              }`}
            />
          </motion.div>
        ))}
      </div>

      {/* Score Big Display */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="w-full"
      >
        <Card className="bg-white border-amber-200 shadow-floating p-6 flex flex-col items-center gap-4">
          <div className="flex flex-col items-center">
            <span className="text-xs font-black text-slate-500 uppercase tracking-wider">
              Nilai Akhir
            </span>
            <span className="text-5xl font-black text-amber-600 my-1 tabular-nums">
              {score}
            </span>
            <span className="px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 font-extrabold text-sm border border-amber-300">
              {ratingBadge}
            </span>
          </div>

          {/* Stats Breakdown */}
          <div className="grid grid-cols-2 gap-3 w-full pt-3 border-t border-amber-100">
            <div className="flex flex-col items-center p-3 rounded-2xl bg-emerald-50 border border-emerald-200">
              <span className="text-xs font-bold text-emerald-800">
                Huruf Benar
              </span>
              <span className="text-xl font-black text-emerald-600 mt-0.5">
                {correctCells}
              </span>
            </div>

            <div className="flex flex-col items-center p-3 rounded-2xl bg-amber-50 border border-amber-200">
              <span className="text-xs font-bold text-amber-800">
                Perlu Diperbaiki
              </span>
              <span className="text-xl font-black text-amber-600 mt-0.5">
                {incorrectCells}
              </span>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};
