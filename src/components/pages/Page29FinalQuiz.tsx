"use client";

import React, { useState } from "react";
import { FINAL_QUIZ_QUESTIONS } from "@/data/storyboardData";
import { useLearning } from "@/context/LearningContext";
import { QuizCard } from "@/components/games/QuizCard";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { CheckCircle2, RotateCcw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Page29FinalQuiz: React.FC = () => {
  const { finalQuizAnswers, setFinalQuizAnswer, playSound } = useLearning();
  const [hasChecked, setHasChecked] = useState(false);

  const totalQuestions = FINAL_QUIZ_QUESTIONS.length;
  const answeredCount = Object.keys(finalQuizAnswers).length;

  const correctCount = FINAL_QUIZ_QUESTIONS.filter(
    (q) => finalQuizAnswers[q.id] === q.correctIndex
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
          📝
        </div>
        <div>
          <span className="text-xs font-black text-amber-800 uppercase tracking-wider">
            Kuis Penutup
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-[#2D3748]">
            Ayo Mengingat Kembali
          </h2>
        </div>
      </div>

      {/* Questions list */}
      <div className="flex flex-col gap-3">
        {FINAL_QUIZ_QUESTIONS.map((q) => (
          <QuizCard
            key={q.id}
            question={q}
            selectedIndex={finalQuizAnswers[q.id]}
            onSelectOption={(idx) => setFinalQuizAnswer(q.id, idx)}
            showFeedback={hasChecked}
          />
        ))}
      </div>

      {/* Check Button */}
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
            Cek Jawaban Kuis ({answeredCount}/{totalQuestions})
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
                    Luar Biasa! ({correctCount}/{totalQuestions} Benar)
                  </h4>
                  <p className="text-xs font-bold text-emerald-800 mt-0.5">
                    Kamu berhasil mengingat seluruh materi pembelajaran dengan sangat baik!
                  </p>
                </div>
              </Card>
            ) : (
              <Card className="bg-amber-50 border-amber-300 p-4 shadow-soft flex items-start gap-3">
                <span className="text-2xl">💡</span>
                <div>
                  <h4 className="text-sm font-black text-amber-900">
                    Bagus! ({correctCount}/{totalQuestions} Benar)
                  </h4>
                  <p className="text-xs font-bold text-amber-800 mt-0.5">
                    Yuk, periksa jawaban yang masih belum tepat dan coba lagi.
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
