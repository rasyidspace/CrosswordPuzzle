"use client";

import React from "react";
import { FAKTA_MENARIK_LIST } from "@/data/storyboardData";
import { Card } from "@/components/ui/Card";
import { Star, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export const Page19Facts: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 p-5">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center text-2xl shadow-soft">
          ⭐
        </div>
        <div>
          <span className="text-xs font-black text-amber-800 uppercase tracking-wider">
            Wawasan
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-[#2D3748]">
            Fakta Menarik
          </h2>
        </div>
      </div>

      <p className="text-xs sm:text-sm font-bold text-slate-600">
        Tahukah kamu keistimewaan luar biasa dari sejarah dan peninggalan bangsa kita?
      </p>

      {/* 5 Star Facts */}
      <div className="flex flex-col gap-2.5">
        {FAKTA_MENARIK_LIST.map((fact, idx) => (
          <motion.div
            key={idx}
            initial={{ x: -15, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: idx * 0.08, duration: 0.25 }}
          >
            <Card className="p-3.5 bg-white border-amber-200 shadow-soft flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 mt-0.5 border border-amber-300">
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
              </div>
              <p className="text-xs sm:text-sm font-extrabold text-[#2D3748] leading-relaxed">
                {fact}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
