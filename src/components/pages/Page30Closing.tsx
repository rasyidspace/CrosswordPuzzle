"use client";

import React, { useEffect } from "react";
import { useLearning } from "@/context/LearningContext";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Home, RotateCcw, Sparkles, Heart } from "lucide-react";
import { motion } from "framer-motion";

export const Page30Closing: React.FC = () => {
  const { goToPage, resetAllProgress, playSound } = useLearning();

  useEffect(() => {
    playSound("fanfare");
  }, []);

  return (
    <div className="flex flex-col items-center justify-between min-h-[calc(100vh-140px)] sm:min-h-[640px] p-6 text-center">
      <div className="w-full flex flex-col items-center pt-4">
        {/* Animated Celebration Icon */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 0.6, bounce: 0.4 }}
          className="w-32 h-32 rounded-full bg-gradient-to-tr from-amber-400 to-amber-200 border-4 border-amber-400 shadow-floating flex items-center justify-center text-6xl mb-6 relative"
        >
          <span>🎓</span>
          <motion.div
            animate={{ scale: [1, 1.25, 1] }}
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
          className="text-3xl font-black text-[#2D3748] mb-2"
        >
          Terima Kasih! 🎉
        </motion.h2>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-xs"
        >
          <Card className="bg-white border-amber-200 shadow-soft p-5">
            <p className="text-sm font-bold text-slate-700 leading-relaxed">
              Kamu telah menyelesaikan media pembelajaran <strong>Crossword Puzzle: Peninggalan Sejarah Indonesia</strong> dengan sangat hebat!
            </p>
            <p className="text-xs font-semibold text-amber-800/90 leading-relaxed mt-2 pt-2 border-t border-amber-100">
              Teruslah bersemangat belajar dan selalu cintai peninggalan sejarah bangsa Indonesia! 🇮🇩
            </p>
          </Card>
        </motion.div>
      </div>

      {/* Action Buttons */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="w-full max-w-xs flex flex-col gap-2.5 mb-2"
      >
        <Button
          variant="primary"
          size="lg"
          fullWidth
          onClick={resetAllProgress}
          className="font-black"
        >
          <RotateCcw className="w-5 h-5 mr-1" />
          Belajar Lagi dari Awal
        </Button>

        <Button
          variant="outline"
          size="md"
          fullWidth
          onClick={() => goToPage(1)}
          className="font-extrabold"
        >
          <Home className="w-5 h-5 mr-1" />
          Halaman Utama
        </Button>
      </motion.div>
    </div>
  );
};
