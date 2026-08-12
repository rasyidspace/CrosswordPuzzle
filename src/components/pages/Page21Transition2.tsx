"use client";

import React from "react";
import { useLearning } from "@/context/LearningContext";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Play, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export const Page21Transition2: React.FC = () => {
  const { nextPage } = useLearning();

  return (
    <div className="flex flex-col items-center justify-between min-h-[calc(100vh-140px)] sm:min-h-[640px] p-6 text-center">
      <div className="w-full flex flex-col items-center pt-4">
        {/* Animated Celebration Icon */}
        <motion.div
          initial={{ scale: 0.5, rotate: 15, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 0.6, bounce: 0.4 }}
          className="w-32 h-32 rounded-full bg-gradient-to-tr from-amber-400 to-amber-200 border-4 border-amber-400 shadow-floating flex items-center justify-center text-6xl mb-6 relative"
        >
          <span>🧩</span>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute -top-1 -right-1 text-2xl"
          >
            ✨
          </motion.div>
        </motion.div>

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-black text-[#2D3748] mb-3"
        >
          Selamat! 🎉
        </motion.h2>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-xs"
        >
          <Card className="bg-white border-amber-200 shadow-soft p-5">
            <p className="text-sm font-bold text-slate-700 leading-relaxed">
              Kamu telah mempelajari seluruh materi tentang peninggalan sejarah Indonesia.
            </p>
            <p className="text-xs font-semibold text-amber-800/90 leading-relaxed mt-2 pt-2 border-t border-amber-100">
              Sekarang saatnya menguji kemampuanmu melalui permainan <strong>Crossword Puzzle</strong>!
            </p>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="w-full max-w-xs mb-2"
      >
        <Button
          variant="success"
          size="lg"
          fullWidth
          onClick={nextPage}
          className="font-black text-lg py-4"
        >
          <Play className="w-6 h-6 fill-current mr-1" />
          Mulai Bermain TTS
        </Button>
      </motion.div>
    </div>
  );
};
