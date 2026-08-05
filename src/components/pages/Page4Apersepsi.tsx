"use client";

import React from "react";
import { APERSEPSI_DATA } from "@/data/storyboardData";
import { useLearning } from "@/context/LearningContext";
import { Card } from "@/components/ui/Card";
import { Check, Sparkles, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Page4Apersepsi: React.FC = () => {
  const { apersepsiAnswer, setApersepsiAnswer } = useLearning();

  return (
    <div className="flex flex-col gap-4 p-5">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center text-2xl shadow-soft">
          🤔
        </div>
        <div>
          <span className="text-xs font-black text-amber-800 uppercase tracking-wider">
            Apersepsi
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-[#2D3748]">
            {APERSEPSI_DATA.title}
          </h2>
        </div>
      </div>

      {/* Main Question */}
      <Card className="bg-white border-amber-200 shadow-soft flex flex-col gap-3">
        <p className="text-sm font-extrabold text-[#2D3748]">
          {APERSEPSI_DATA.question}
        </p>

        {/* 4 Illustrated Heritage Cards */}
        <div className="grid grid-cols-2 gap-2.5">
          {APERSEPSI_DATA.buildings.map((b) => (
            <div
              key={b.name}
              className="flex flex-col items-center p-2 rounded-2xl bg-amber-50/80 border border-amber-200 text-center shadow-2xs overflow-hidden"
            >
              <div className="w-full h-20 sm:h-24 rounded-xl overflow-hidden mb-2 bg-amber-100/60 border border-amber-200/60 relative flex items-center justify-center">
                {b.image ? (
                  <img
                    src={b.image}
                    alt={b.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <span className="text-3xl filter drop-shadow-xs">{b.icon}</span>
                )}
              </div>
              <span className="text-xs font-black text-[#2D3748] leading-tight px-1">
                {b.name}
              </span>
              <span className="text-[10px] text-slate-500 font-semibold mt-0.5 px-1">
                {b.location}
              </span>
            </div>
          ))}
        </div>
      </Card>

      {/* Interactive Multiple Choice */}
      <Card className="bg-white border-amber-200 shadow-soft flex flex-col gap-3">
        <div className="flex items-center gap-2 text-xs font-black text-amber-800">
          <HelpCircle className="w-4 h-4 text-amber-600" />
          <span>{APERSEPSI_DATA.followUpQuestion}</span>
        </div>

        <div className="flex flex-col gap-2">
          {APERSEPSI_DATA.options.map((opt) => {
            const isSelected = apersepsiAnswer === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => setApersepsiAnswer(opt.id)}
                className={`flex items-center justify-between px-4 py-3 rounded-2xl border-2 transition-all text-sm font-extrabold cursor-pointer min-h-[48px] ${
                  isSelected
                    ? opt.isCorrect
                      ? "bg-emerald-100/80 border-emerald-500 text-emerald-950 ring-2 ring-emerald-400"
                      : "bg-red-50 border-red-400 text-red-950 ring-2 ring-red-300"
                    : "bg-white border-amber-200 hover:border-amber-400 text-[#2D3748]"
                }`}
              >
                <span>{opt.text}</span>
                {isSelected && opt.isCorrect && (
                  <Check className="w-5 h-5 text-emerald-600 shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      </Card>

      {/* Feedback Card */}
      <AnimatePresence>
        {apersepsiAnswer && (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {apersepsiAnswer === "opt-1" ? (
              <Card className="bg-emerald-50 border-emerald-300 p-4 shadow-soft flex items-start gap-3">
                <div className="p-2 rounded-xl bg-emerald-500 text-white shrink-0 text-lg">
                  🎉
                </div>
                <div>
                  <h4 className="text-sm font-black text-emerald-900 mb-0.5">
                    {APERSEPSI_DATA.feedbackSuccess.title}
                  </h4>
                  <p className="text-xs font-bold text-emerald-800 leading-relaxed">
                    {APERSEPSI_DATA.feedbackSuccess.message}
                  </p>
                </div>
              </Card>
            ) : (
              <Card className="bg-amber-50 border-amber-300 p-4 shadow-soft flex items-start gap-3">
                <div className="p-2 rounded-xl bg-amber-500 text-white shrink-0 text-lg">
                  😊
                </div>
                <div>
                  <h4 className="text-sm font-black text-amber-900 mb-0.5">
                    {APERSEPSI_DATA.feedbackError.title}
                  </h4>
                  <p className="text-xs font-bold text-amber-800 leading-relaxed">
                    {APERSEPSI_DATA.feedbackError.message}
                  </p>
                </div>
              </Card>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
