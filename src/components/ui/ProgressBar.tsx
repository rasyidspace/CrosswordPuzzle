"use client";

import React from "react";
import { motion } from "framer-motion";

interface ProgressBarProps {
  current: number;
  total: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const percentage = Math.min(100, Math.max(0, Math.round((current / total) * 100)));

  return (
    <div className="w-full">
      <div className="h-3.5 w-full bg-amber-200/60 rounded-full overflow-hidden p-0.5 border border-amber-300/60">
        <motion.div
          className="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.4)]"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};
