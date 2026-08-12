"use client";

import React from "react";
import { MATERIALS } from "@/data/storyboardData";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Lightbulb } from "lucide-react";

export const Page9Material4: React.FC = () => {
  const mat = MATERIALS[4];

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

      {/* 3 Building Types */}
      <div className="flex flex-col gap-3">
        {mat.subsections?.map((sub, idx) => (
          <Card
            key={idx}
            className="p-3.5 bg-white border-amber-200 shadow-soft flex flex-col gap-2 overflow-hidden"
          >
            <div className="flex items-start gap-3">
              {sub.image && (
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-amber-50 border border-amber-200 shrink-0">
                  <img
                    src={sub.image}
                    alt={sub.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-extrabold text-amber-900">
                  {sub.title}
                </h3>
                <p className="text-xs font-bold text-slate-600 leading-relaxed mt-0.5">
                  {sub.description}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-1.5 border-t border-amber-100">
              {sub.examples?.map((ex, exIdx) => (
                <span
                  key={exIdx}
                  className="px-2.5 py-1 rounded-xl bg-amber-50 text-[11px] font-extrabold text-amber-800 border border-amber-200"
                >
                  📍 {ex}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>

      {/* Did You Know? */}
      {mat.didYouKnow && (
        <Card className="bg-amber-100/90 border-amber-300 p-3.5 flex items-start gap-3 shadow-soft">
          <div className="p-1.5 rounded-xl bg-amber-500 text-white shrink-0">
            <Lightbulb className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-black text-amber-950 block">
              Tahukah Kamu?
            </span>
            <p className="text-xs font-bold text-amber-900 leading-relaxed mt-0.5">
              {mat.didYouKnow}
            </p>
          </div>
        </Card>
      )}
    </div>
  );
};
