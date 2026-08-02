"use client";

import React, { useState, useEffect } from "react";
import { MATCHING_GAME_ITEMS } from "@/data/storyboardData";
import { useLearning } from "@/context/LearningContext";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, RotateCcw, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const MatchingGame: React.FC = () => {
  const { playSound, matchingMatched, setMatchingMatched, resetMatchingGame } =
    useLearning();

  const [selectedIconId, setSelectedIconId] = useState<string | null>(null);
  const [selectedNameId, setSelectedNameId] = useState<string | null>(null);
  const [isWrongPair, setIsWrongPair] = useState(false);
  const [shuffledNames, setShuffledNames] = useState<typeof MATCHING_GAME_ITEMS>(
    []
  );

  useEffect(() => {
    // Shuffle names on mount
    const names = [...MATCHING_GAME_ITEMS].sort(() => Math.random() - 0.5);
    setShuffledNames(names);
  }, []);

  const handleSelectIcon = (id: string) => {
    if (matchingMatched.includes(id)) return;
    playSound("click");
    setSelectedIconId(id);

    if (selectedNameId) {
      checkMatch(id, selectedNameId);
    }
  };

  const handleSelectName = (id: string) => {
    if (matchingMatched.includes(id)) return;
    playSound("click");
    setSelectedNameId(id);

    if (selectedIconId) {
      checkMatch(selectedIconId, id);
    }
  };

  const checkMatch = (iconId: string, nameId: string) => {
    if (iconId === nameId) {
      // Correct match!
      playSound("success");
      const nextMatched = [...matchingMatched, iconId];
      setMatchingMatched(nextMatched);
      setSelectedIconId(null);
      setSelectedNameId(null);
      if (nextMatched.length === MATCHING_GAME_ITEMS.length) {
        playSound("fanfare");
      }
    } else {
      // Incorrect match
      playSound("error");
      setIsWrongPair(true);
      setTimeout(() => {
        setIsWrongPair(false);
        setSelectedIconId(null);
        setSelectedNameId(null);
      }, 500);
    }
  };

  const allMatched = matchingMatched.length === MATCHING_GAME_ITEMS.length;

  return (
    <div className="flex flex-col gap-4 w-full">
      <Card className="bg-amber-50/60 border-amber-200 p-4">
        <p className="text-sm font-bold text-amber-900 text-center">
          👉 Ketuk satu gambar di kiri, lalu ketuk nama yang cocok di kanan!
        </p>
      </Card>

      <div className="grid grid-cols-2 gap-3 w-full">
        {/* Icons column */}
        <div className="flex flex-col gap-2.5">
          <span className="text-xs font-black text-amber-800 text-center uppercase tracking-wider mb-1">
            Gambar
          </span>
          {MATCHING_GAME_ITEMS.map((item) => {
            const isMatched = matchingMatched.includes(item.id);
            const isSelected = selectedIconId === item.id;

            return (
              <motion.button
                key={item.id}
                type="button"
                whileTap={{ scale: 0.96 }}
                animate={
                  isWrongPair && isSelected
                    ? { x: [-4, 4, -4, 4, 0] }
                    : { x: 0 }
                }
                transition={{ duration: 0.3 }}
                onClick={() => handleSelectIcon(item.id)}
                disabled={isMatched}
                className={`flex items-center justify-center p-3 rounded-2xl border-2 transition-all min-h-[58px] cursor-pointer ${
                  isMatched
                    ? "bg-emerald-100/70 border-emerald-400 text-emerald-800 opacity-80 cursor-default"
                    : isSelected
                    ? "bg-amber-200 border-amber-500 ring-2 ring-amber-400 shadow-sm"
                    : "bg-white border-amber-200 hover:border-amber-400 shadow-xs"
                }`}
              >
                <span className="text-3xl filter drop-shadow-xs">
                  {item.icon}
                </span>
                {isMatched && (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 ml-2" />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Names column */}
        <div className="flex flex-col gap-2.5">
          <span className="text-xs font-black text-amber-800 text-center uppercase tracking-wider mb-1">
            Nama
          </span>
          {shuffledNames.map((item) => {
            const isMatched = matchingMatched.includes(item.id);
            const isSelected = selectedNameId === item.id;

            return (
              <motion.button
                key={item.id}
                type="button"
                whileTap={{ scale: 0.96 }}
                animate={
                  isWrongPair && isSelected
                    ? { x: [-4, 4, -4, 4, 0] }
                    : { x: 0 }
                }
                transition={{ duration: 0.3 }}
                onClick={() => handleSelectName(item.id)}
                disabled={isMatched}
                className={`flex items-center justify-center px-3 py-3 rounded-2xl border-2 transition-all min-h-[58px] text-center font-extrabold text-sm cursor-pointer ${
                  isMatched
                    ? "bg-emerald-100/70 border-emerald-400 text-emerald-900 opacity-80 cursor-default"
                    : isSelected
                    ? "bg-amber-200 border-amber-500 ring-2 ring-amber-400 text-amber-950 shadow-sm"
                    : "bg-white border-amber-200 hover:border-amber-400 text-[#2D3748] shadow-xs"
                }`}
              >
                <span>{item.name}</span>
                {isMatched && (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 ml-1.5 shrink-0" />
                )}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Completion Feedback */}
      <AnimatePresence>
        {allMatched && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="flex flex-col items-center gap-2 p-4 bg-emerald-50 rounded-2xl border-2 border-emerald-300 shadow-soft text-center mt-2"
          >
            <div className="flex items-center gap-1.5 text-emerald-800 font-black text-base">
              <Sparkles className="w-5 h-5 text-emerald-600" />
              <span>🎉 Benar! Kamu Hebat!</span>
            </div>
            <p className="text-xs text-emerald-700 font-semibold">
              Semua pasangan peninggalan sejarah berhasil dicocokkan dengan tepat.
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={resetMatchingGame}
              className="mt-1"
            >
              <RotateCcw className="w-4 h-4" />
              Main Lagi
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
