"use client";

import React, { useState } from "react";
import { LATIHAN_SINGKAT_QUESTIONS } from "@/data/storyboardData";
import { useLearning } from "@/context/LearningContext";
import { QuizCard } from "@/components/games/QuizCard";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { CheckCircle2, RotateCcw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Page9Quiz1: React.FC = () => {
  const { latihanAnswers, setLatihanAnswer, playSound } = useLearning();
  const [hasChecked, setHasChecked] = useState(false);

  const totalQuestions = LATIHAN_SINGKAT_QUESTIONS.length;
  const answeredCount = Object.keys(latihanAnswers).length;

  const correctCount = LATIHAN_SINGKAT_QUESTIONS.filter(
    (q) => latihanAnswers[q.id] === q.correctIndex
  ).length;

  const isAllCorrect = correctCount === totalQuestions;

  const handleCheck = () => {
    setHasChecked(true);
    if (isAllCorrect) {
      playSound("success");
    } else {
      playSound("error");
    }
  };

  const handleReset = () => {
    setHasChecked(false);
    playSound("pop");
  };

  return (
    <div className="flex flex-col gap-4 p-5">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center text-2xl shadow-soft">
          ✏️
        </div>
        <div>
          <span className="text-xs font-black text-amber-800 uppercase tracking-wider">
            Latihan Singkat
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-[#2D3748]">
            Ayo Berlatih
          </h2>
        </div>
      </div>

      {/* Questions list */}
      <div className="flex flex-col gap-3">
        {LATIHAN_SINGKAT_QUESTIONS.map((q) => (
          <QuizCard
            key={q.id}
            question={q}
            selectedIndex={latihanAnswers[q.id]}
            onSelectOption={(idx) => setLatihanAnswer(q.id, idx)}
            showFeedback={hasChecked}
          />
        ))}
      </div>

      {/* Action check button */}
      <div className="flex items-center gap-2 mt-2">
        {!hasChecked ? (
          <Button
            variant="primary"
            fullWidth
            size="lg"
            onClick={handleCheck}
            disabled={answeredCount < totalQuestions}
            className="font-black"
          >
            <CheckCircle2 className="w-5 h-5 mr-1" />
            Cek Jawaban ({answeredCount}/{totalQuestions})
          </Button>
        ) : (
          <Button
            variant="outline"
            fullWidth
            size="md"
            onClick={handleReset}
            className="font-black"
          >
            <RotateCcw className="w-5 h-5 mr-1" />
            Coba Lagi
          </Button>
        )}
      </div>

      {/* Feedback banner */}
      <AnimatePresence>
        {hasChecked && (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            {isAllCorrect ? (
              <Card className="bg-emerald-50 border-emerald-300 p-4 shadow-soft flex items-start gap-3">
                <span className="text-2xl">🎉</span>
                <div>
                  <h4 className="text-sm font-black text-emerald-900">
                    Hebat! ({correctCount}/{totalQuestions} Benar)
                  </h4>
                  <p className="text-xs font-bold text-emerald-800 mt-0.5">
                    Kamu sudah memahami materi bangunan bersejarah dengan sangat baik!
                  </p>
                </div>
              </Card>
            ) : (
              <Card className="bg-amber-50 border-amber-300 p-4 shadow-soft flex items-start gap-3">
                <span className="text-2xl">📚</span>
                <div>
                  <h4 className="text-sm font-black text-amber-900">
                    Bagus! ({correctCount}/{totalQuestions} Benar)
                  </h4>
                  <p className="text-xs font-bold text-amber-800 mt-0.5">
                    Yuk, baca kembali materi sebelumnya untuk memperkuat pemahamanmu.
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
