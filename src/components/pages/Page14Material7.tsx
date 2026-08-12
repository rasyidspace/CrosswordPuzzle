"use client";

import React from "react";
import { MATERIALS } from "@/data/storyboardData";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { BookOpen, CheckCircle2 } from "lucide-react";

export const Page14Material7: React.FC = () => {
  const mat = MATERIALS[7];

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

      {/* 2 Book Sections */}
      <div className="grid grid-cols-1 gap-3">
        {mat.subsections?.slice(0, 2).map((sub, idx) => (
          <Card
            key={idx}
            className="p-3.5 bg-white border-amber-200 shadow-soft flex flex-col gap-2 overflow-hidden"
          >
            <div className="flex items-start gap-3">
              {sub.image ? (
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-amber-50 border border-amber-200 shrink-0">
                  <img
                    src={sub.image}
                    alt={sub.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ) : (
                <span className="text-xl">📜</span>
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
          </Card>
        ))}
      </div>

      {/* Manfaat Card */}
      {mat.subsections?.[2] && (
        <Card className="bg-amber-50/70 border-amber-200 p-4 shadow-soft flex flex-col gap-2">
          <div className="flex items-center gap-2 text-amber-900 font-extrabold text-xs">
            <BookOpen className="w-4 h-4 text-amber-600" />
            <span>{mat.subsections[2].title}</span>
          </div>
          <div className="space-y-1.5 pt-1">
            {mat.subsections[2].examples?.map((ex, idx) => (
              <div key={idx} className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-bold text-slate-700">
                  {ex}
                </span>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
};
