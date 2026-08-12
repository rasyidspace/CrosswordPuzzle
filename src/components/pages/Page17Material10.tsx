"use client";

import React from "react";
import { MATERIALS } from "@/data/storyboardData";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { CheckCircle2, Heart } from "lucide-react";

export const Page17Material10: React.FC = () => {
  const mat = MATERIALS[10];

  return (
    <div className="flex flex-col gap-4 p-5">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center text-2xl shadow-soft">
          {mat.icon}
        </div>
        <div>
          <Badge variant="primary" size="sm" className="mb-0.5">
            {mat.badge}
          </Badge>
          <h2 className="text-xl sm:text-2xl font-black text-[#2D3748]">
            {mat.title}
          </h2>
        </div>
      </div>

      <Card className="bg-white border-amber-200 shadow-soft flex flex-col gap-3">
        <p className="text-xs sm:text-sm font-bold text-slate-600">
          {mat.overview}
        </p>

        <div className="space-y-2 pt-1 border-t border-amber-100">
          {mat.points?.map((pt, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2.5 p-2.5 rounded-xl bg-amber-50/70 border border-amber-200/60"
            >
              <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
              <span className="text-xs sm:text-sm font-bold text-slate-700">
                {pt}
              </span>
            </div>
          ))}
        </div>
      </Card>

      {/* Quote */}
      {mat.quote && (
        <Card className="bg-amber-100/90 border-amber-300 p-4 shadow-soft flex items-start gap-3">
          <div className="p-1.5 rounded-xl bg-amber-500 text-white shrink-0">
            <Heart className="w-4 h-4" />
          </div>
          <p className="text-xs font-black text-amber-950 leading-relaxed italic">
            &quot;{mat.quote}&quot;
          </p>
        </Card>
      )}
    </div>
  );
};
