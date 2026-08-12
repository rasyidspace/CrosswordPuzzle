"use client";

import React from "react";
import { MATERIALS } from "@/data/storyboardData";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Sparkles } from "lucide-react";

export const Page8Material3: React.FC = () => {
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

      {/* 4 Categorized Cards with Real Photos */}
      <div className="grid grid-cols-2 gap-2.5">
        {mat.subsections?.map((sub, idx) => {
          return (
            <Card
              key={idx}
              className="p-2.5 bg-white border-amber-200 shadow-soft flex flex-col gap-2 overflow-hidden"
            >
              {sub.image && (
                <div className="w-full h-20 sm:h-24 rounded-xl overflow-hidden bg-amber-100/70 border border-amber-200 relative">
                  <img
                    src={sub.image}
                    alt={sub.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              )}
              <div>
                <h3 className="text-xs font-black text-amber-900 leading-tight">
                  {sub.title}
                </h3>
                <ul className="text-[11px] font-bold text-slate-600 list-disc list-inside space-y-0.5 mt-1">
                  {sub.examples?.map((ex, exIdx) => (
                    <li key={exIdx}>{ex}</li>
                  ))}
                </ul>
              </div>
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
