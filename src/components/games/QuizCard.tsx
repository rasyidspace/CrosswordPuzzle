"use client";

import React from "react";
import { QuizQuestion } from "@/types";
import { Card } from "@/components/ui/Card";
import { Check, X } from "lucide-react";
import { clsx } from "clsx";

interface QuizCardProps {
  question: QuizQuestion;
  selectedIndex?: number;
  onSelectOption: (index: number) => void;
  showFeedback?: boolean;
}

export const QuizCard: React.FC<QuizCardProps> = ({
  question,
  selectedIndex,
  onSelectOption,
  showFeedback = false,
}) => {
  const optionLabels = ["A", "B", "C", "D"];

  return (
    <Card className="flex flex-col gap-4 border-amber-200 shadow-soft">
      <div className="flex items-start gap-3">
        <span className="flex items-center justify-center w-7 h-7 rounded-full bg-amber-500 text-white text-xs font-black shrink-0 shadow-xs">
          {question.questionNumber}
        </span>
        <h4 className="text-base font-extrabold text-[#2D3748] leading-snug">
          {question.question}
        </h4>
      </div>

      <div className="flex flex-col gap-2.5">
        {question.options.map((option, idx) => {
          const isSelected = selectedIndex === idx;
          const isCorrect = idx === question.correctIndex;

          let stateStyle = "bg-white border-amber-200 hover:border-amber-400 text-[#2D3748]";
          if (isSelected && !showFeedback) {
            stateStyle =
              "bg-amber-100/70 border-amber-500 ring-2 ring-amber-400 text-amber-950 font-bold shadow-xs";
          } else if (showFeedback) {
            if (isCorrect) {
              stateStyle =
                "bg-emerald-50 border-emerald-500 ring-2 ring-emerald-400 text-emerald-950 font-bold";
            } else if (isSelected && !isCorrect) {
              stateStyle =
                "bg-red-50 border-red-400 ring-2 ring-red-300 text-red-950 font-bold";
            }
          }

          return (
            <button
              key={idx}
              type="button"
              onClick={() => onSelectOption(idx)}
              className={clsx(
                "flex items-center justify-between px-4 py-3 rounded-2xl border-2 transition-all duration-150 text-left text-sm cursor-pointer min-h-[48px]",
                stateStyle
              )}
            >
              <div className="flex items-center gap-3">
                <span
                  className={clsx(
                    "flex items-center justify-center w-6 h-6 rounded-lg text-xs font-bold shrink-0 border",
                    isSelected
                      ? "bg-amber-500 text-white border-amber-600"
                      : "bg-slate-100 text-slate-600 border-slate-300"
                  )}
                >
                  {optionLabels[idx]}
                </span>
                <span className="font-semibold">{option}</span>
              </div>

              {showFeedback && isCorrect && (
                <Check className="w-5 h-5 text-emerald-600 shrink-0" />
              )}
              {showFeedback && isSelected && !isCorrect && (
                <X className="w-5 h-5 text-red-500 shrink-0" />
              )}
            </button>
          );
        })}
      </div>
    </Card>
  );
};
