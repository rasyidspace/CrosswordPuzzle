"use client";

import React, { useState } from "react";
import { useLearning } from "@/context/LearningContext";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Button } from "@/components/ui/Button";
import { Dialog } from "@/components/ui/Dialog";
import { Volume2, VolumeX, Info, Home } from "lucide-react";
import { APP_METADATA } from "@/data/storyboardData";

export const HeaderNav: React.FC = () => {
  const {
    currentPage,
    totalPages,
    audioEnabled,
    toggleAudio,
    goToPage,
    resetAllProgress,
  } = useLearning();

  const [showInfo, setShowInfo] = useState(false);

  // On page 1 (Opening), show minimal header with sound & info
  const isOpeningPage = currentPage === 1;

  return (
    <>
      <header className="w-full px-4 pt-3 pb-2 bg-[#FFF8E7] flex flex-col gap-2 border-b border-amber-200/40">
        <div className="flex items-center justify-between gap-3">
          {/* Home / Restart */}
          {!isOpeningPage ? (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => goToPage(1)}
              aria-label="Kembali ke Halaman Awal"
              className="text-amber-800 hover:bg-amber-200/60 rounded-xl"
            >
              <Home className="w-5 h-5" />
            </Button>
          ) : (
            <div className="flex items-center gap-1.5 font-black text-amber-800 text-sm tracking-wide">
              <span>🧩</span>
              <span>KLS V SD</span>
            </div>
          )}

          {/* Progress Bar (Visible on Pages 2-30) */}
          {!isOpeningPage && (
            <div className="flex-1 flex items-center gap-2">
              <ProgressBar current={currentPage} total={totalPages} />
              <span className="text-xs font-black text-amber-800/80 shrink-0 tabular-nums">
                {currentPage}/{totalPages}
              </span>
            </div>
          )}

          {/* Audio & Info Controls */}
          <div className="flex items-center gap-1 shrink-0">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleAudio}
              aria-label={audioEnabled ? "Matikan Suara" : "Nyalakan Suara"}
              className={`rounded-xl transition-colors ${
                audioEnabled
                  ? "text-emerald-600 hover:bg-emerald-100"
                  : "text-slate-400 hover:bg-amber-200/60"
              }`}
            >
              {audioEnabled ? (
                <Volume2 className="w-5 h-5" />
              ) : (
                <VolumeX className="w-5 h-5" />
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowInfo(true)}
              aria-label="Tentang Media"
              className="text-amber-800 hover:bg-amber-200/60 rounded-xl"
            >
              <Info className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Info Dialog */}
      <Dialog
        isOpen={showInfo}
        onClose={() => setShowInfo(false)}
        title="Tentang Media"
        icon="ℹ️"
      >
        <div className="flex flex-col gap-3 text-sm text-[#2D3748]">
          <div className="bg-amber-50 p-3.5 rounded-2xl border border-amber-200">
            <h4 className="font-extrabold text-amber-900 text-base mb-1">
              {APP_METADATA.title}
            </h4>
            <p className="font-bold text-amber-700">{APP_METADATA.subtitle}</p>
          </div>

          <div className="space-y-1.5 bg-slate-50 p-3 rounded-2xl border border-slate-200 text-xs">
            <p>
              <strong className="font-bold">Mata Pelajaran:</strong>{" "}
              {APP_METADATA.subject}
            </p>
            <p>
              <strong className="font-bold">Kelas / Jenjang:</strong>{" "}
              {APP_METADATA.grade}
            </p>
            <p>
              <strong className="font-bold">Fase Kurikulum:</strong>{" "}
              {APP_METADATA.phase}
            </p>
            <p>
              <strong className="font-bold">Model Pembelajaran:</strong> Game Based
              Learning
            </p>
            <p>
              <strong className="font-bold">Materi:</strong>{" "}
              {APP_METADATA.topic}
            </p>
          </div>

          <p className="text-xs text-slate-500 italic text-center">
            &quot;Belajar sejarah jadi lebih seru dan menyenangkan dengan teka-teki silang interaktif!&quot;
          </p>

          <Button
            variant="primary"
            fullWidth
            onClick={() => setShowInfo(false)}
            className="mt-2"
          >
            Tutup
          </Button>
        </div>
      </Dialog>
    </>
  );
};
