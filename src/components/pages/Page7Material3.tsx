"use client";

import React from "react";
import { MATERIALS } from "@/data/storyboardData";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Sparkles } from "lucide-react";

export const Page7Material3: React.FC = () => {
  const mat = MATERIALS[3];

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

      <p className="text-xs sm:text-sm font-bold text-slate-600">
        {mat.overview}
      </p>

      {/* 4 Categorized Cards */}
      <div className="grid grid-cols-2 gap-2.5">
        {mat.subsections?.map((sub, idx) => {
          const icons = ["🏯", "🗿", "🎭", "📖"];
          return (
            <Card
              key={idx}
              className="p-3 bg-white border-amber-200 shadow-soft flex flex-col gap-1.5"
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl">{icons[idx]}</span>
                <h3 className="text-xs font-black text-amber-900 leading-tight">
                  {sub.title}
                </h3>
              </div>
              <ul className="text-[11px] font-bold text-slate-600 list-disc list-inside space-y-0.5 mt-1">
                {sub.examples?.map((ex, exIdx) => (
                  <li key={exIdx}>{ex}</li>
                ))}
              </ul>
            </Card>
          );
        })}
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
