"use client";

import React, { useState } from "react";
import { GALLERY_ITEMS } from "@/data/storyboardData";
import { GalleryItem } from "@/types";
import { Card } from "@/components/ui/Card";
import { Dialog } from "@/components/ui/Dialog";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { MapPin, Info, Sparkles } from "lucide-react";

export const Page17Gallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <div className="flex flex-col gap-4 p-5">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center text-2xl shadow-soft">
          🖼️
        </div>
        <div>
          <span className="text-xs font-black text-amber-800 uppercase tracking-wider">
            Eksplorasi
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-[#2D3748]">
            Galeri Peninggalan Sejarah
          </h2>
        </div>
      </div>

      <p className="text-xs font-bold text-slate-600">
        Ketuk salah satu peninggalan di bawah ini untuk melihat detail lokasi, fungsi, dan keunikannya!
      </p>

      {/* 8 Grid items */}
      <div className="grid grid-cols-2 gap-2.5">
        {GALLERY_ITEMS.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setSelectedItem(item)}
            className="flex flex-col items-center text-center p-3 rounded-2xl bg-white border-2 border-amber-200 hover:border-amber-400 hover:shadow-soft transition-all cursor-pointer shadow-2xs group"
          >
            <div className="w-12 h-12 rounded-2xl bg-amber-50 group-hover:bg-amber-100 flex items-center justify-center text-3xl mb-2 transition-colors">
              {item.icon}
            </div>
            <span className="text-xs font-extrabold text-[#2D3748] leading-tight">
              {item.name}
            </span>
            <span className="text-[10px] text-amber-700 font-bold mt-1 inline-flex items-center gap-0.5">
              <MapPin className="w-3 h-3" />
              {item.lokasi.split(",")[0]}
            </span>
          </button>
        ))}
      </div>

      {/* Detail Dialog Modal */}
      <Dialog
        isOpen={selectedItem !== null}
        onClose={() => setSelectedItem(null)}
        title={selectedItem?.name}
        icon={selectedItem?.icon}
      >
        {selectedItem && (
          <div className="flex flex-col gap-3 text-sm text-[#2D3748]">
            <div className="flex items-center gap-1.5 text-xs text-amber-800 font-bold bg-amber-50 p-2.5 rounded-xl border border-amber-200">
              <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Lokasi: {selectedItem.lokasi}</span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <strong className="text-amber-900 block font-black mb-0.5">
                  🎯 Fungsi:
                </strong>
                <p className="font-semibold text-slate-700">{selectedItem.fungsi}</p>
              </div>

              <div className="p-3 bg-amber-50/70 rounded-xl border border-amber-200">
                <strong className="text-amber-900 block font-black mb-0.5">
                  ✨ Keunikan:
                </strong>
                <p className="font-semibold text-amber-900">{selectedItem.keunikan}</p>
              </div>

              <p className="text-slate-600 font-medium leading-relaxed px-1">
                {selectedItem.deskripsi}
              </p>
            </div>

            <Button
              variant="primary"
              fullWidth
              size="md"
              onClick={() => setSelectedItem(null)}
              className="mt-1"
            >
              Tutup
            </Button>
          </div>
        )}
      </Dialog>
    </div>
  );
};
