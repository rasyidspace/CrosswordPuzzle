"use client";

import React from "react";
import { useLearning } from "@/context/LearningContext";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, ArrowRight, RotateCcw, CheckCircle, Play, Home } from "lucide-react";

export const BottomNav: React.FC = () => {
  const {
    currentPage,
    nextPage,
    prevPage,
    goToPage,
    resetAllProgress,
    resetCrossword,
    validateCrossword,
  } = useLearning();

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
              className="flex-1"
            >
              <ArrowLeft className="w-5 h-5" />
              Kembali
            </Button>
            <Button
              variant="primary"
              size="md"
              onClick={nextPage}
              className="flex-2"
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
              className="flex-1"
            >
              <ArrowLeft className="w-5 h-5" />
              Kembali
            </Button>
            <Button
              variant="success"
              size="md"
              onClick={nextPage}
              className="flex-2 font-black"
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
              className="px-3"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => goToPage(23)}
              className="flex-1 text-xs sm:text-sm"
            >
              Lihat Petunjuk
            </Button>
            <Button
              variant="success"
              size="sm"
              onClick={() => {
                validateCrossword();
                goToPage(25);
              }}
              className="flex-1 text-xs sm:text-sm font-black"
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
              className="flex-1"
            >
              <ArrowLeft className="w-5 h-5" />
              Grid TTS
            </Button>
            <Button
              variant="primary"
              size="md"
              onClick={() => goToPage(24)}
              className="flex-1"
            >
              Petunjuk Menurun
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
              className="flex-1"
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
              className="flex-1 font-black"
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
              className="flex-1"
            >
              <RotateCcw className="w-5 h-5" />
              Reset TTS
            </Button>
            <Button
              variant="primary"
              size="md"
              onClick={() => goToPage(26)}
              className="flex-1 font-black"
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
              className="flex-1"
            >
              <RotateCcw className="w-5 h-5" />
              Ulangi TTS
            </Button>
            <Button
              variant="primary"
              size="md"
              onClick={nextPage}
              className="flex-1 font-black"
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
              className="flex-1"
            >
              <ArrowLeft className="w-5 h-5" />
              Kembali
            </Button>
            <Button
              variant="success"
              size="md"
              onClick={nextPage}
              className="flex-1 font-black"
            >
              <CheckCircle className="w-5 h-5" />
              Selesai
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
              className="flex-1"
            >
              <Home className="w-5 h-5" />
              Home
            </Button>
            <Button
              variant="primary"
              size="md"
              onClick={resetAllProgress}
              className="flex-1"
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
              className="flex-1"
              aria-label="Halaman Sebelumnya"
            >
              <ArrowLeft className="w-5 h-5" />
              Kembali
            </Button>
            <Button
              variant="primary"
              size="md"
              onClick={nextPage}
              className="flex-1"
              aria-label="Halaman Berikutnya"
            >
              Lanjut
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        );
    }
  };

  return (
    <footer className="w-full px-4 py-3 bg-[#FFF8E7]/95 backdrop-blur-xs sticky bottom-0 z-30 border-t border-amber-200/40 flex items-center justify-between">
      {renderButtons()}
    </footer>
  );
};
