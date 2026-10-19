"use client";

import React, { useRef, useEffect } from "react";
import { CrosswordCellData } from "@/types";
import { clsx } from "clsx";

interface CrosswordCellProps {
  cell: CrosswordCellData;
  isSelected?: boolean;
  isWordHighlighted?: boolean;
  onCellClick: () => void;
  onValueChange: (val: string) => void;
  onMoveToNext?: () => void;
  onMoveToPrev?: () => void;
  readOnly?: boolean;
}

export const CrosswordCell: React.FC<CrosswordCellProps> = ({
  cell,
  isSelected,
  isWordHighlighted,
  onCellClick,
  onValueChange,
  onMoveToNext,
  onMoveToPrev,
  readOnly = false,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSelected && inputRef.current && !readOnly) {
      inputRef.current.focus();
      if (!cell.isHint) {
        inputRef.current.select();
      }
    }
  }, [isSelected, readOnly, cell.isHint]);

  if (cell.isBlocked) {
    return (
      <div className="w-full aspect-square bg-amber-900/10 rounded-lg select-none" />
    );
  }

  const numberLabel =
    cell.acrossNum && cell.downNum && cell.acrossNum !== cell.downNum
      ? `${cell.acrossNum},${cell.downNum}`
      : cell.acrossNum || cell.downNum;

  let bgStyle = "bg-white border-amber-300 text-[#2D3748]";
  if (cell.status === "correct") {
    bgStyle = "bg-emerald-100 border-emerald-500 text-emerald-950 font-black";
  } else if (cell.status === "incorrect") {
    bgStyle = "bg-red-100 border-red-500 text-red-950 font-black";
  } else if (isSelected) {
    bgStyle = "bg-amber-200 border-amber-600 ring-2 ring-amber-500 text-amber-950";
  } else if (isWordHighlighted) {
    bgStyle = cell.isHint
      ? "bg-amber-200/70 border-amber-500 text-amber-950 font-black"
      : "bg-amber-100/90 border-amber-400 text-amber-900";
  } else if (cell.isHint) {
    bgStyle = "bg-amber-100/60 border-amber-300/90 text-amber-950 font-black";
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (cell.isHint) {
      if (e.key === "Backspace") {
        e.preventDefault();
        if (onMoveToPrev) onMoveToPrev();
      } else if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        if (onMoveToNext) onMoveToNext();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        if (onMoveToPrev) onMoveToPrev();
      } else if (/^[a-zA-Z]$/.test(e.key)) {
        e.preventDefault();
        if (onMoveToNext) onMoveToNext();
      }
      return;
    }

    if (e.key === "Backspace") {
      if (cell.userChar.length === 0 && onMoveToPrev) {
        onMoveToPrev();
      } else {
        onValueChange("");
      }
    } else if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      if (onMoveToNext) onMoveToNext();
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      if (onMoveToPrev) onMoveToPrev();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (cell.isHint) return;
    const val = e.target.value;
    const lastChar = val.slice(-1).toUpperCase();
    if (/^[A-Z]$/.test(lastChar)) {
      onValueChange(lastChar);
      if (onMoveToNext) {
        onMoveToNext();
      }
    } else if (val === "") {
      onValueChange("");
    }
  };

  return (
    <div
      onClick={onCellClick}
      className={clsx(
        "relative w-full aspect-square rounded-lg border-2 flex items-center justify-center transition-all duration-100 shadow-2xs cursor-pointer select-none",
        bgStyle
      )}
    >
      {numberLabel && (
        <span className="absolute top-0.5 left-1 text-[9px] sm:text-[10px] font-black text-amber-800/90 pointer-events-none leading-none">
          {numberLabel}
        </span>
      )}

      {readOnly ? (
        <span className="text-xs sm:text-base font-black uppercase">
          {cell.isHint ? cell.char : cell.userChar}
        </span>
      ) : cell.isHint ? (
        <input
          ref={inputRef}
          type="text"
          readOnly
          value={cell.char}
          onKeyDown={handleKeyDown}
          className="w-full h-full text-center text-xs sm:text-base font-black bg-transparent outline-none uppercase cursor-pointer select-none text-amber-950"
          aria-label={`Kotak petunjuk ${cell.char} baris ${cell.row + 1} kolom ${cell.col + 1}`}
        />
      ) : (
        <input
          ref={inputRef}
          type="text"
          maxLength={2}
          value={cell.userChar}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="w-full h-full text-center text-xs sm:text-base font-black bg-transparent outline-none uppercase cursor-pointer"
          aria-label={`Kotak baris ${cell.row + 1} kolom ${cell.col + 1}`}
        />
      )}
    </div>
  );
};
