"use client";

import React, { useEffect } from "react";
import { useLearning } from "@/context/LearningContext";
import { CrosswordGrid } from "@/components/games/CrosswordGrid";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { CheckCircle2, XCircle } from "lucide-react";

export const Page25CrosswordCheck: React.FC = () => {
  const { validateCrossword, validationResult } = useLearning();

  useEffect(() => {
    validateCrossword();
  }, []);

  return (
    <div className="flex flex-col gap-3 p-4 sm:p-5">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center text-xl shadow-soft">
          ✅
        </div>
        <div>
          <span className="text-[11px] font-black text-emerald-800 uppercase tracking-wider block">
            Evaluasi TTS
          </span>
          <h2 className="text-lg sm:text-xl font-black text-[#2D3748] leading-tight">
            Periksa Jawabanmu
          </h2>
        </div>
      </div>

      {/* Status Legend */}
      <Card className="p-3 bg-white border-amber-200 shadow-soft flex items-center justify-around text-xs font-black">
        <div className="flex items-center gap-1.5 text-emerald-700">
          <div className="w-4 h-4 rounded-md bg-emerald-500 flex items-center justify-center text-white text-[10px]">
            ✓
          </div>
          <span>Hijau: Benar</span>
        </div>
        <div className="flex items-center gap-1.5 text-red-600">
          <div className="w-4 h-4 rounded-md bg-red-400 flex items-center justify-center text-white text-[10px]">
            ✗
          </div>
          <span>Merah: Belum Tepat</span>
        </div>
      </Card>

      {/* ReadOnly Validated Grid */}
      <CrosswordGrid readOnly={true} />
    </div>
  );
};
