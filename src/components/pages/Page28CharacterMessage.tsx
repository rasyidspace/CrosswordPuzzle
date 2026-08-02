"use client";

import React from "react";
import { CHARACTER_MESSAGE_PLEDGES } from "@/data/storyboardData";
import { Card } from "@/components/ui/Card";
import { ShieldCheck, Heart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export const Page28CharacterMessage: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 p-5">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center text-2xl shadow-soft">
          🛡️
        </div>
        <div>
          <span className="text-xs font-black text-emerald-800 uppercase tracking-wider">
            Pesan Karakter
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-[#2D3748]">
            Ayo Lestarikan Sejarah!
          </h2>
        </div>
      </div>

      {/* Hero Visual Mascot */}
      <div className="flex items-center justify-center gap-3 py-1">
        <span className="text-5xl">🇮🇩</span>
        <span className="text-4xl">🤝</span>
        <span className="text-5xl">🏯</span>
      </div>

      {/* Pledges List */}
      <Card className="bg-white border-amber-200 shadow-soft flex flex-col gap-2.5">
        <p className="text-xs sm:text-sm font-bold text-slate-600">
          Sebagai generasi penerus bangsa, mari kita berjanji untuk:
        </p>

        <div className="flex flex-col gap-2">
          {CHARACTER_MESSAGE_PLEDGES.map((pledge, idx) => (
            <motion.div
              key={pledge.id}
              initial={{ x: -15, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: idx * 0.08, duration: 0.25 }}
              className="flex items-center gap-3 p-3 rounded-2xl bg-emerald-50/80 border border-emerald-200/80"
            >
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <span className="text-xs sm:text-sm font-extrabold text-[#2D3748]">
                {pledge.text}
              </span>
            </motion.div>
          ))}
        </div>
      </Card>

      {/* Closing Quote */}
      <Card className="bg-amber-100/90 border-amber-300 p-4 shadow-soft flex items-start gap-3 text-center justify-center">
        <p className="text-xs sm:text-sm font-black text-amber-950 leading-relaxed italic">
          &quot;Peninggalan sejarah adalah warisan bangsa yang harus kita jaga dan banggakan bersama.&quot;
        </p>
      </Card>
    </div>
  );
};
