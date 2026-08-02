"use client";

import React, { useState } from "react";
import { useLearning } from "@/context/LearningContext";
import { Button } from "@/components/ui/Button";
import { Dialog } from "@/components/ui/Dialog";
import { Play, BookOpen, Info, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { APP_METADATA } from "@/data/storyboardData";

export const Page1Opening: React.FC = () => {
  const { goToPage, playSound } = useLearning();
  const [showAbout, setShowAbout] = useState(false);

  return (
    <div className="flex flex-col items-center justify-between min-h-[calc(100vh-60px)] sm:min-h-[760px] p-6 text-center">
      {/* Decorative sky clouds animation */}
      <div className="relative w-full flex flex-col items-center pt-2">
        <motion.div
          animate={{ x: [-15, 15, -15] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="text-3xl opacity-80 mb-2 flex gap-12"
        >
          <span>☁️</span>
          <span>🕊️</span>
          <span>☁️</span>
        </motion.div>

        {/* Mascot / Heritage Illustration Showcase */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
          className="relative w-40 h-40 rounded-full bg-gradient-to-b from-amber-100 to-amber-200 border-4 border-amber-300 shadow-soft flex items-center justify-center mb-4"
        >
          <div className="text-6xl select-none filter drop-shadow-md">
            🏯
          </div>
          <div className="absolute -bottom-2 -left-2 text-3xl">
            👑
          </div>
          <div className="absolute -bottom-2 -right-2 text-3xl">
            🎼
          </div>
          <motion.div
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="absolute -top-2 right-2 text-2xl"
          >
            ✨
          </motion.div>
        </motion.div>

        {/* Title and Subtitle */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.35 }}
          className="space-y-1.5"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-black tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>{APP_METADATA.subject} • {APP_METADATA.grade}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-[#2D3748] tracking-tight leading-tight pt-1">
            <span className="text-amber-500">🧩 CROSSWORD</span>
            <br />
            PUZZLE
          </h1>

          <h2 className="text-lg sm:text-xl font-extrabold text-amber-700 tracking-wide">
            {APP_METADATA.subtitle}
          </h2>

          <p className="text-sm font-bold text-slate-500 pt-0.5">
            &quot;{APP_METADATA.tagline}&quot;
          </p>
        </motion.div>
      </div>

      {/* Action Buttons */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.35 }}
        className="w-full flex flex-col gap-3 max-w-xs mt-6 mb-2"
      >
        <Button
          variant="primary"
          size="lg"
          fullWidth
          onClick={() => goToPage(2)}
          className="font-black text-lg py-4"
        >
          <Play className="w-6 h-6 fill-current mr-1" />
          Mulai Belajar
        </Button>

        <Button
          variant="outline"
          size="md"
          fullWidth
          onClick={() => goToPage(3)}
          className="font-extrabold"
        >
          <BookOpen className="w-5 h-5 text-amber-600 mr-1" />
          Petunjuk
        </Button>

        <Button
          variant="ghost"
          size="sm"
          fullWidth
          onClick={() => setShowAbout(true)}
          className="text-amber-800 font-bold"
        >
          <Info className="w-4 h-4 mr-1" />
          Tentang Media
        </Button>
      </motion.div>

      {/* About Modal */}
      <Dialog
        isOpen={showAbout}
        onClose={() => setShowAbout(false)}
        title="Tentang Media"
        icon="ℹ️"
      >
        <div className="flex flex-col gap-3 text-sm text-[#2D3748]">
          <p>
            Media pembelajaran interaktif berbasis <strong>Game-Based Learning</strong> dirancang khusus untuk siswa Kelas 5 SD/MI Kurikulum Merdeka (Fase C).
          </p>
          <div className="bg-amber-50 p-3 rounded-2xl border border-amber-200 text-xs space-y-1">
            <p><strong>Topik:</strong> Peninggalan Sejarah Indonesia</p>
            <p><strong>Media:</strong> Crossword Puzzle Interaktif</p>
            <p><strong>Target:</strong> Mobile & Tablet First</p>
          </div>
          <Button
            variant="primary"
            fullWidth
            onClick={() => setShowAbout(false)}
          >
            Mengerti
          </Button>
        </div>
      </Dialog>
    </div>
  );
};
