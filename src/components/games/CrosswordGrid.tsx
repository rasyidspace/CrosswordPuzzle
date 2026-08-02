"use client";

import React, { useState } from "react";
import { useLearning } from "@/context/LearningContext";
import { CrosswordCell } from "./CrosswordCell";
import { CROSSWORD_CLUES, CROSSWORD_GRID_DIMENSIONS } from "@/data/storyboardData";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { CrosswordClue } from "@/types";
import { Compass, Lightbulb } from "lucide-react";

interface CrosswordGridProps {
  readOnly?: boolean;
}

export const CrosswordGrid: React.FC<CrosswordGridProps> = ({
  readOnly = false,
}) => {
  const {
    crosswordGrid,
    updateCellChar,
    activeClue,
    setActiveClue,
    playSound,
  } = useLearning();

  const [selectedCell, setSelectedCell] = useState<{
    row: number;
    col: number;
  } | null>({ row: 0, col: 0 });

  // Get active clue object
  const currentClue: CrosswordClue | undefined = CROSSWORD_CLUES.find((c) => {
    if (!activeClue) return false;
    return (
      c.number === activeClue.number && c.orientation === activeClue.orientation
    );
  }) || CROSSWORD_CLUES[0];

  // Helper to check if a cell belongs to the active clue
  const isCellInActiveWord = (r: number, c: number) => {
    if (!currentClue) return false;
    const { startX, startY, orientation, length } = currentClue;
    if (orientation === "across") {
      return r === startY && c >= startX && c < startX + length;
    } else {
      return c === startX && r >= startY && r < startY + length;
    }
  };

  const handleCellClick = (r: number, c: number) => {
    setSelectedCell({ row: r, col: c });

    // Find if this cell is part of any clue
    const matchingClues = CROSSWORD_CLUES.filter((clue) => {
      const { startX, startY, orientation, length } = clue;
      if (orientation === "across") {
        return r === startY && c >= startX && c < startX + length;
      } else {
        return c === startX && r >= startY && r < startY + length;
      }
    });

    if (matchingClues.length > 0) {
      // Toggle orientation if already selected
      const isCurrentOrientation = matchingClues.some(
        (cl) =>
          cl.number === activeClue?.number &&
          cl.orientation === activeClue?.orientation
      );
      if (isCurrentOrientation && matchingClues.length > 1) {
        const other = matchingClues.find(
          (cl) => cl.orientation !== activeClue?.orientation
        );
        if (other) {
          setActiveClue({ number: other.number, orientation: other.orientation });
        }
      } else {
        setActiveClue({
          number: matchingClues[0].number,
          orientation: matchingClues[0].orientation,
        });
      }
    }
  };

  const handleMoveToNext = (r: number, c: number) => {
    if (!currentClue) return;
    if (currentClue.orientation === "across") {
      if (c + 1 < currentClue.startX + currentClue.length) {
        setSelectedCell({ row: r, col: c + 1 });
      }
    } else {
      if (r + 1 < currentClue.startY + currentClue.length) {
        setSelectedCell({ row: r + 1, col: c });
      }
    }
  };

  const handleMoveToPrev = (r: number, c: number) => {
    if (!currentClue) return;
    if (currentClue.orientation === "across") {
      if (c - 1 >= currentClue.startX) {
        setSelectedCell({ row: r, col: c - 1 });
      }
    } else {
      if (r - 1 >= currentClue.startY) {
        setSelectedCell({ row: r - 1, col: c });
      }
    }
  };

  const handleSelectWord = (clue: CrosswordClue) => {
    playSound("click");
    setActiveClue({ number: clue.number, orientation: clue.orientation });
    setSelectedCell({ row: clue.startY, col: clue.startX });
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      {/* Active Clue Banner */}
      {currentClue && (
        <Card className="p-3.5 bg-amber-100/70 border-amber-300 shadow-soft flex items-start gap-2.5">
          <div className="p-1.5 rounded-xl bg-amber-500 text-white shrink-0">
            <Lightbulb className="w-4 h-4" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-0.5">
              <Badge variant="primary" size="sm">
                {currentClue.number}{" "}
                {currentClue.orientation === "across" ? "Mendatar" : "Menurun"}
              </Badge>
              <span className="text-[11px] font-bold text-amber-800/80">
                ({currentClue.length} Huruf)
              </span>
            </div>
            <p className="text-xs sm:text-sm font-extrabold text-[#2D3748]">
              {currentClue.clue}
            </p>
          </div>
        </Card>
      )}

      {/* Grid Container */}
      <div className="p-2 sm:p-3 bg-amber-950/10 rounded-2xl border-2 border-amber-300/80 shadow-inner-soft">
        <div
          className="grid gap-1 sm:gap-1.5 w-full mx-auto"
          style={{
            gridTemplateColumns: `repeat(${CROSSWORD_GRID_DIMENSIONS.cols}, minmax(0, 1fr))`,
          }}
        >
          {crosswordGrid.map((row, rIdx) =>
            row.map((cell, cIdx) => (
              <CrosswordCell
                key={`${rIdx}-${cIdx}`}
                cell={cell}
                readOnly={readOnly}
                isSelected={
                  selectedCell?.row === rIdx && selectedCell?.col === cIdx
                }
                isWordHighlighted={isCellInActiveWord(rIdx, cIdx)}
                onCellClick={() => handleCellClick(rIdx, cIdx)}
                onValueChange={(val) => updateCellChar(rIdx, cIdx, val)}
                onMoveToNext={() => handleMoveToNext(rIdx, cIdx)}
                onMoveToPrev={() => handleMoveToPrev(rIdx, cIdx)}
              />
            ))
          )}
        </div>
      </div>

      {/* Word Bank Quick Selector */}
      <div className="flex flex-col gap-1.5 mt-1">
        <span className="text-[11px] font-black text-amber-900 flex items-center gap-1">
          <Compass className="w-3.5 h-3.5" />
          Daftar Kata (Pilih untuk mengisi langsung):
        </span>
        <div className="flex flex-wrap gap-1.5">
          {CROSSWORD_CLUES.map((clue) => {
            const isActive =
              activeClue?.number === clue.number &&
              activeClue?.orientation === clue.orientation;
            return (
              <button
                key={clue.id}
                type="button"
                onClick={() => handleSelectWord(clue)}
                className={`text-[11px] font-black px-2.5 py-1 rounded-xl border transition-all cursor-pointer ${
                  isActive
                    ? "bg-amber-500 text-white border-amber-600 shadow-xs scale-105"
                    : "bg-white text-slate-700 border-amber-200 hover:border-amber-400"
                }`}
              >
                {clue.number}. {clue.answer} ({clue.orientation === "across" ? "↔" : "↕"})
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
