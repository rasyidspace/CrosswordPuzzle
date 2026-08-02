"use client";

import React from "react";
import { MATERIALS } from "@/data/storyboardData";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Sparkles } from "lucide-react";

export const Page14Material8: React.FC = () => {
  const mat = MATERIALS[8];

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

      {/* Hindu vs Buddha Cards */}
      <div className="flex flex-col gap-3">
        {mat.subsections?.map((sub, idx) => (
          <Card
            key={idx}
            className="p-4 bg-white border-amber-200 shadow-soft flex flex-col gap-2"
          >
            <h3 className="text-sm font-extrabold text-amber-900">
              {sub.title}
            </h3>
            <div className="space-y-1.5 pt-1 border-t border-amber-100">
              {sub.examples?.map((ex, exIdx) => (
                <div key={exIdx} className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                  <span className="text-xs font-bold text-slate-700">{ex}</span>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>

      {/* Conclusion */}
      {mat.conclusion && (
        <Card className="bg-emerald-50 border-emerald-300 p-4 shadow-soft flex items-start gap-3">
          <div className="p-1.5 rounded-xl bg-emerald-500 text-white shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-black text-emerald-950 block">
              Kesimpulan
            </span>
            <p className="text-xs font-bold text-emerald-800 leading-relaxed mt-0.5">
              {mat.conclusion}
            </p>
          </div>
        </Card>
      )}
    </div>
  );
};
