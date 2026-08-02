"use client";

import React from "react";
import { REFLECTION_OPTIONS } from "@/data/storyboardData";
import { useLearning } from "@/context/LearningContext";
import { Card } from "@/components/ui/Card";
import { CheckSquare, Square, Heart, Sparkles } from "lucide-react";

export const Page27Reflection: React.FC = () => {
  const {
    reflectionChecked,
    toggleReflectionChecked,
    reflectionFavoriteText,
    setReflectionFavoriteText,
  } = useLearning();

  return (
    <div className="flex flex-col gap-4 p-5">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center text-2xl shadow-soft">
          🌱
        </div>
        <div>
          <span className="text-xs font-black text-amber-800 uppercase tracking-wider">
            Refleksi Diri
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-[#2D3748]">
            Refleksi Belajarmu
          </h2>
        </div>
      </div>

      <Card className="bg-white border-amber-200 shadow-soft flex flex-col gap-3">
        <p className="text-xs sm:text-sm font-extrabold text-[#2D3748]">
          Setelah belajar hari ini, beri tanda centang pada hal yang sudah kamu kuasai:
        </p>

        {/* Checkbox Capabilities */}
        <div className="flex flex-col gap-2">
          {REFLECTION_OPTIONS.map((opt) => {
            const isChecked = !!reflectionChecked[opt.id];
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => toggleReflectionChecked(opt.id)}
                className={`flex items-center gap-3 p-3 rounded-2xl border-2 transition-all text-left cursor-pointer min-h-[48px] ${
                  isChecked
                    ? "bg-amber-50/90 border-amber-400 text-amber-950 font-bold"
                    : "bg-white border-slate-200 text-slate-600 font-medium"
                }`}
              >
                {isChecked ? (
                  <CheckSquare className="w-5 h-5 text-amber-600 shrink-0" />
                ) : (
                  <Square className="w-5 h-5 text-slate-400 shrink-0" />
                )}
                <span className="text-xs sm:text-sm">{opt.label}</span>
              </button>
            );
          })}
        </div>
      </Card>

      {/* Favorite Heritage Question */}
      <Card className="bg-white border-amber-200 shadow-soft flex flex-col gap-2.5">
        <div className="flex items-center gap-2 text-xs font-black text-amber-900">
          <Heart className="w-4 h-4 text-amber-600" />
          <span>Peninggalan sejarah apa yang paling kamu sukai? Mengapa?</span>
        </div>
        <textarea
          rows={3}
          value={reflectionFavoriteText}
          onChange={(e) => setReflectionFavoriteText(e.target.value)}
          placeholder="Tuliskan jawaban dan alasanmu di sini (misal: Candi Borobudur karena megah dan indah)..."
          className="w-full p-3 rounded-2xl bg-amber-50/50 border border-amber-200 text-xs sm:text-sm font-semibold text-[#2D3748] placeholder:text-slate-400 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-300 resize-none"
        />
      </Card>
    </div>
  );
};
