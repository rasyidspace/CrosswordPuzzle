"use client";

import React, { useState } from "react";
import { MATERIALS } from "@/data/storyboardData";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { CheckCircle2, Eye, Sparkles } from "lucide-react";

export const Page7Material2: React.FC = () => {
  const mat = MATERIALS[2];
  const [showAnswerHint, setShowAnswerHint] = useState(false);

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

      {/* Main Points Card */}
      <Card className="bg-white border-amber-200 shadow-soft flex flex-col gap-3">
        <p className="text-xs sm:text-sm font-bold text-slate-600">
          {mat.overview}
        </p>

        <div className="flex flex-col gap-2">
          {mat.points?.map((pt, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 p-2.5 rounded-2xl bg-amber-50/70 border border-amber-200/60"
            >
              <div className="w-6 h-6 rounded-lg bg-amber-500 text-white font-black text-xs flex items-center justify-center shrink-0">
                {idx + 1}
              </div>
              <span className="text-xs sm:text-sm font-extrabold text-[#2D3748]">
                {pt}
              </span>
            </div>
          ))}
        </div>
      </Card>

      {/* Illustrations with Real Observation Photos */}
      {mat.subsections?.[0] && (
        <Card className="bg-white border-amber-200 shadow-soft flex flex-col gap-2.5">
          <h3 className="text-xs font-black text-amber-900 uppercase tracking-wider">
            {mat.subsections[0].title}
          </h3>
          <div className="grid grid-cols-2 gap-2.5">
            {[
              { name: 'Buku Kuno', image: '/images/kitab-negarakertagama.jpg', icon: '📜' },
              { name: 'Candi', image: '/images/candi-prambanan.jpg', icon: '🏯' },
              { name: 'Prasasti', image: '/images/prasasti-ciaruteun.jpg', icon: '🪨' },
              { name: 'Keraton', image: '/images/keraton-yogyakarta.jpg', icon: '👑' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center p-2 rounded-2xl bg-amber-50/80 border border-amber-200 shadow-2xs overflow-hidden text-center"
              >
                <div className="w-full h-20 sm:h-24 rounded-xl overflow-hidden mb-1.5 bg-amber-100/70 border border-amber-200 relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <span className="font-extrabold text-xs text-[#2D3748] leading-tight">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Activity Prompt */}
      {mat.activity && (
        <Card className="bg-blue-50 border-blue-200 p-4 flex flex-col gap-2 shadow-soft">
          <div className="flex items-center gap-2 text-blue-900 font-extrabold text-xs">
            <Eye className="w-4 h-4 text-blue-600" />
            <span>{mat.activity.title}</span>
          </div>
          <p className="text-xs font-bold text-blue-800 leading-relaxed">
            {mat.activity.prompt}
          </p>
          <button
            type="button"
            onClick={() => setShowAnswerHint(!showAnswerHint)}
            className="text-[11px] font-black text-blue-700 underline text-left mt-1 hover:text-blue-900 cursor-pointer"
          >
            {showAnswerHint ? "Sembunyikan Petunjuk" : "💡 Lihat Petunjuk Penjelasan"}
          </button>
          {showAnswerHint && (
            <p className="text-xs font-semibold text-blue-900 bg-white/80 p-2.5 rounded-xl border border-blue-200 mt-1">
              Peninggalan sejarah harus dijaga agar generasi penerus dapat mengetahui asal-usul, budaya, dan kejayaan bangsa di masa lalu.
            </p>
          )}
        </Card>
      )}
    </div>
  );
};
