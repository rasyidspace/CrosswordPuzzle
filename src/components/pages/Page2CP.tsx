"use client";

import React from "react";
import { Card } from "@/components/ui/Card";
import { BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export const Page2CP: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 p-5">
      {/* Header Banner */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center text-2xl shadow-soft">
          📖
        </div>
        <div>
          <span className="text-xs font-black text-amber-800 uppercase tracking-wider">
            Kurikulum Merdeka
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-[#2D3748]">
            Capaian Pembelajaran
          </h2>
        </div>
      </div>

      {/* Decorative Mascot / Visual */}
      <div className="flex items-center justify-center gap-4 py-1">
        <span className="text-4xl">🇮🇩</span>
        <span className="text-3xl opacity-80">🤝</span>
        <span className="text-3xl opacity-80">🏛️</span>
        <span className="text-3xl opacity-80">🌟</span>
      </div>

      {/* Content Card */}
      <Card className="flex flex-col gap-4 bg-white border-amber-200 shadow-soft p-5">
        <div className="flex items-start gap-3 border-b border-amber-100 pb-4">
          <BookOpen className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
          <h3 className="text-sm font-extrabold text-[#2D3748] uppercase tracking-wide">
            B. CAPAIAN PEMBELAJARAN (CP)
          </h3>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-sm font-bold text-slate-600 leading-relaxed text-justify space-y-4"
        >
          <p>
            Pada akhir Fase C, peserta didik mampu memahami keragaman budaya dan sejarah Indonesia, 
            termasuk mengenal tokoh, peristiwa, serta peninggalan sejarah di lingkungan sekitar maupun nasional.
          </p>
          <p>
            Peserta didik juga mampu menunjukkan sikap menghargai warisan budaya bangsa sebagai bagian dari identitas nasional.
          </p>
        </motion.div>
      </Card>
    </div>
  );
};
