"use client";

import React from "react";
import { useLearning } from "@/context/LearningContext";
import { Button } from "@/components/ui/Button";
import {
  ArrowLeft,
  ArrowRight,
  RotateCcw,
  CheckCircle,
  Play,
  Home,
  Lock,
} from "lucide-react";
import {
  LATIHAN_SINGKAT_QUESTIONS,
  MATCHING_GAME_ITEMS,
  FINAL_QUIZ_QUESTIONS,
} from "@/data/storyboardData";

export const BottomNav: React.FC = () => {
  const {
    currentPage,
    nextPage,
    prevPage,
    goToPage,
    resetAllProgress,
    resetCrossword,
    validateCrossword,
    apersepsiAnswer,
    latihanAnswers,
    matchingMatched,
    finalQuizAnswers,
  } = useLearning();

  // Check if current page has an active question/game requirement that must be answered correctly
  const isNextDisabled = React.useMemo(() => {
    switch (currentPage) {
      case 4: // Apersepsi: 'opt-1' is 'Zaman dahulu' (correct answer)
        return apersepsiAnswer !== "opt-1";

      case 9: // Latihan Singkat: all 3 questions must be correct
        return !LATIHAN_SINGKAT_QUESTIONS.every(
          (q) => latihanAnswers[q.id] === q.correctIndex
        );

      case 19: // Matching Mini Game: all 6 pairs must be matched
        return matchingMatched.length < MATCHING_GAME_ITEMS.length;

      case 29: // Final Quiz: all questions must be correct
        return !FINAL_QUIZ_QUESTIONS.every(
          (q) => finalQuizAnswers[q.id] === q.correctIndex
        );

      default:
        return false;
    }
  }, [
    currentPage,
    apersepsiAnswer,
    latihanAnswers,
    matchingMatched.length,
    finalQuizAnswers,
  ]);

  const getDisabledHint = () => {
    switch (currentPage) {
      case 4:
        return "Jawab pertanyaan apersepsi dengan benar untuk lanjut";
      case 9:
        return "Jawab semua soal latihan dengan benar untuk lanjut";
      case 19:
        return `Cocokkan semua pasangan (${matchingMatched.length}/${MATCHING_GAME_ITEMS.length}) untuk lanjut`;
      case 29:
        return "Jawab semua soal kuis dengan benar untuk menyelesaikan";
      default:
        return null;
    }
  };

  // Page 1 and Page 30 have custom in-page buttons
  if (currentPage === 1) return null;

  const renderButtons = () => {
    switch (currentPage) {
      case 10:
        return (
          <div className="flex items-center gap-3 w-full">
            <Button
              variant="outline"
              size="md"
              onClick={prevPage}
              className="flex-1 shadow-soft"
            >
              <ArrowLeft className="w-5 h-5" />
              Kembali
            </Button>
            <Button
              variant="primary"
              size="md"
              onClick={nextPage}
              className="flex-2 shadow-soft font-black"
            >
              Lanjut ke Materi
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        );

      case 20:
      case 21:
        return (
          <div className="flex items-center gap-3 w-full">
            <Button
              variant="outline"
              size="md"
              onClick={prevPage}
              className="flex-1 shadow-soft"
            >
              <ArrowLeft className="w-5 h-5" />
              Kembali
            </Button>
            <Button
              variant="success"
              size="md"
              onClick={nextPage}
              className="flex-2 shadow-soft font-black"
            >
              <Play className="w-5 h-5 fill-current" />
              Mulai Bermain
            </Button>
          </div>
        );

      case 22:
        return (
          <div className="flex items-center gap-2 w-full">
            <Button
              variant="outline"
              size="sm"
              onClick={prevPage}
              className="px-3 shadow-soft"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => goToPage(23)}
              className="flex-1 text-xs sm:text-sm shadow-soft font-extrabold"
            >
              Petunjuk
            </Button>
            <Button
              variant="success"
              size="sm"
              onClick={() => {
                validateCrossword();
                goToPage(25);
              }}
              className="flex-1 text-xs sm:text-sm font-black shadow-soft"
            >
              <CheckCircle className="w-4 h-4" />
              Cek Jawaban
            </Button>
          </div>
        );

      case 23:
        return (
          <div className="flex items-center gap-3 w-full">
            <Button
              variant="outline"
              size="md"
              onClick={() => goToPage(22)}
              className="flex-1 shadow-soft"
            >
              <ArrowLeft className="w-5 h-5" />
              Grid TTS
            </Button>
            <Button
              variant="primary"
              size="md"
              onClick={() => goToPage(24)}
              className="flex-1 shadow-soft font-black"
            >
              Menurun
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        );

      case 24:
        return (
          <div className="flex items-center gap-3 w-full">
            <Button
              variant="outline"
              size="md"
              onClick={() => goToPage(23)}
              className="flex-1 shadow-soft"
            >
              <ArrowLeft className="w-5 h-5" />
              Mendatar
            </Button>
            <Button
              variant="success"
              size="md"
              onClick={() => {
                validateCrossword();
                goToPage(25);
              }}
              className="flex-1 font-black shadow-soft"
            >
              <CheckCircle className="w-5 h-5" />
              Cek Jawaban
            </Button>
          </div>
        );

      case 25:
        return (
          <div className="flex items-center gap-3 w-full">
            <Button
              variant="outline"
              size="md"
              onClick={() => {
                resetCrossword();
                goToPage(22);
              }}
              className="flex-1 shadow-soft"
            >
              <RotateCcw className="w-5 h-5" />
              Reset TTS
            </Button>
            <Button
              variant="primary"
              size="md"
              onClick={() => goToPage(26)}
              className="flex-1 font-black shadow-soft"
            >
              Lihat Hasil
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        );

      case 26:
        return (
          <div className="flex items-center gap-3 w-full">
            <Button
              variant="outline"
              size="md"
              onClick={() => goToPage(22)}
              className="flex-1 shadow-soft"
            >
              <RotateCcw className="w-5 h-5" />
              Ulangi TTS
            </Button>
            <Button
              variant="primary"
              size="md"
              onClick={nextPage}
              className="flex-1 font-black shadow-soft"
            >
              Lanjut Refleksi
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        );

      case 29:
        return (
          <div className="flex items-center gap-3 w-full">
            <Button
              variant="outline"
              size="md"
              onClick={prevPage}
              className="flex-1 shadow-soft"
            >
              <ArrowLeft className="w-5 h-5" />
              Kembali
            </Button>
            <Button
              variant="success"
              size="md"
              onClick={nextPage}
              disabled={isNextDisabled}
              className="flex-1 font-black shadow-soft"
            >
              {isNextDisabled ? (
                <>
                  <Lock className="w-4 h-4 mr-1" />
                  Selesai
                </>
              ) : (
                <>
                  <CheckCircle className="w-5 h-5" />
                  Selesai
                </>
              )}
            </Button>
          </div>
        );

      case 30:
        return (
          <div className="flex items-center gap-2 w-full">
            <Button
              variant="outline"
              size="md"
              onClick={() => goToPage(1)}
              className="flex-1 shadow-soft"
            >
              <Home className="w-5 h-5" />
              Home
            </Button>
            <Button
              variant="primary"
              size="md"
              onClick={resetAllProgress}
              className="flex-1 shadow-soft font-black"
            >
              <RotateCcw className="w-5 h-5" />
              Belajar Lagi
            </Button>
          </div>
        );

      default:
        return (
          <div className="flex items-center gap-3 w-full">
            <Button
              variant="outline"
              size="md"
              onClick={prevPage}
              className="flex-1 shadow-soft"
              aria-label="Halaman Sebelumnya"
            >
              <ArrowLeft className="w-5 h-5" />
              Kembali
            </Button>
            <Button
              variant="primary"
              size="md"
              onClick={nextPage}
              disabled={isNextDisabled}
              className="flex-1 shadow-soft font-black"
              aria-label="Halaman Berikutnya"
            >
              {isNextDisabled ? (
                <>
                  <Lock className="w-4 h-4 mr-1" />
                  Lanjut
                </>
              ) : (
                <>
                  Lanjut
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </Button>
          </div>
        );
    }
  };

  return (
    <footer className="w-full px-4 py-3 bg-[#FFF8E7] border-t border-amber-200/40 flex flex-col gap-2 mt-auto">
      {isNextDisabled && getDisabledHint() && (
        <div className="w-full text-center text-[11px] font-black text-amber-900 bg-amber-100/90 py-1.5 px-3 rounded-xl border border-amber-300 flex items-center justify-center gap-1.5 shadow-2xs animate-pulse">
          <Lock className="w-3.5 h-3.5 text-amber-700 shrink-0" />
          <span>{getDisabledHint()}</span>
        </div>
      )}
      <div className="w-full flex items-center justify-between">
        {renderButtons()}
      </div>
    </footer>
  );
};
