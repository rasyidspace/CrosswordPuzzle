"use client";

import React from "react";
import { MATERIALS } from "@/data/storyboardData";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Heart } from "lucide-react";

export const Page12Material6: React.FC = () => {
  const mat = MATERIALS[6];

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

      {/* 3 Tradisi Sections */}
      <div className="flex flex-col gap-3">
        {mat.subsections?.map((sub, idx) => (
          <Card
            key={idx}
            className="p-4 bg-white border-amber-200 shadow-soft flex flex-col gap-1.5"
          >
            <h3 className="text-sm font-extrabold text-amber-900">
              {sub.title}
            </h3>
            <p className="text-xs font-bold text-slate-600 leading-relaxed">
              {sub.description}
            </p>
          </Card>
        ))}
      </div>

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
