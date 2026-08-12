"use client";

import React from "react";
import { MATERIALS } from "@/data/storyboardData";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Lightbulb, CheckCircle2 } from "lucide-react";

export const Page6Material1: React.FC = () => {
  const mat = MATERIALS[1];

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

      {/* Main Definition Card */}
      <Card className="bg-white border-amber-200 shadow-soft flex flex-col gap-3">
        <p className="text-xs sm:text-sm font-bold text-[#2D3748] leading-relaxed">
          {mat.overview}
        </p>

        <div className="space-y-2 pt-1 border-t border-amber-100">
          {mat.points?.map((pt, idx) => (
            <div key={idx} className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm font-bold text-slate-700">
                {pt}
              </span>
            </div>
          ))}
        </div>
      </Card>

      {/* Examples Grid with Real Images */}
      {mat.subsections?.[0] && (
        <Card className="bg-white border-amber-200 shadow-soft flex flex-col gap-3">
          <h3 className="text-sm font-extrabold text-amber-900">
            {mat.subsections[0].title}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {[
              { name: 'Candi', image: '/images/candi-borobudur.webp', icon: '🏯' },
              { name: 'Masjid Bersejarah', image: '/images/masjid-agung-demak.jpg', icon: '🕌' },
              { name: 'Keraton', image: '/images/keraton-yogyakarta.jpg', icon: '👑' },
              { name: 'Arca', image: '/images/arca-ganesha.jpg', icon: '🗿' },
              { name: 'Prasasti', image: '/images/prasasti-ciaruteun.jpg', icon: '🪨' },
              { name: 'Naskah Kuno', image: '/images/kitab-negarakertagama.jpg', icon: '📖' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 p-2 rounded-xl bg-amber-50/70 border border-amber-200/80 shadow-2xs overflow-hidden"
              >
                <div className="w-10 h-10 rounded-lg overflow-hidden bg-amber-100/70 border border-amber-200 shrink-0">
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
