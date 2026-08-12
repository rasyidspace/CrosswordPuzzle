"use client";

import React from "react";
import { useLearning } from "@/context/LearningContext";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Play, HelpCircle, CheckSquare, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export const Page22CrosswordIntro: React.FC = () => {
  const { nextPage } = useLearning();

  const rules = [
    {
      num: 1,
      text: "Bacalah setiap petunjuk mendatar dan menurun dengan teliti.",
      icon: "👀",
    },
    {
      num: 2,
      text: "Isi kotak Teka-Teki Silang (TTS) dengan jawaban yang benar.",
      icon: "✍️",
    },
    {
      num: 3,
      text: "Setelah selesai mengisi, klik tombol 'Cek Jawaban'.",
      icon: "✅",
    },
  ];

  return (
    <div className="flex flex-col gap-4 p-5">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center text-2xl shadow-soft">
          🎮
        </div>
        <div>
          <span className="text-xs font-black text-amber-800 uppercase tracking-wider">
            Game TTS
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-[#2D3748]">
            Ayo Bermain!
          </h2>
        </div>
      </div>

      <p className="text-xs sm:text-sm font-bold text-slate-600">
        Uji ingatan dan pemahamanmu seputar peninggalan sejarah Indonesia melalui Teka-Teki Silang berikut:
      </p>

      {/* Rules list */}
      <div className="flex flex-col gap-2.5">
        {rules.map((rule, idx) => (
          <motion.div
            key={rule.num}
            initial={{ x: -15, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: idx * 0.08, duration: 0.25 }}
          >
            <Card className="p-3.5 bg-white border-amber-200 shadow-soft flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500 text-white font-black text-sm flex items-center justify-center shrink-0 shadow-xs">
                {rule.num}
              </div>
              <p className="text-xs sm:text-sm font-extrabold text-[#2D3748] leading-relaxed">
                {rule.text}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>

      <Card className="bg-amber-100/90 border-amber-300 p-4 shadow-soft text-center mt-1">
        <p className="text-xs font-black text-amber-950">
          🎯 Total 10 Kata (5 Mendatar & 5 Menurun) siap kamu pecahkan!
        </p>
      </Card>
    </div>
  );
};
