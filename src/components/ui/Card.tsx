"use client";

import React from "react";
import { clsx } from "clsx";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "accent" | "success" | "warning";
  hoverable?: boolean;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  variant = "default",
  hoverable = false,
  className,
  children,
  ...props
}) => {
  const baseStyles =
    "bg-white rounded-[24px] p-5 sm:p-6 transition-all duration-200 border-2 border-amber-100/80";

  const variantStyles = {
    default: "shadow-[0_4px_12px_rgba(0,0,0,0.06)]",
    elevated: "shadow-[0_8px_20px_rgba(0,0,0,0.12)] border-amber-200",
    accent: "bg-amber-50/70 border-amber-200 shadow-[0_4px_12px_rgba(245,158,11,0.12)]",
    success: "bg-emerald-50/70 border-emerald-200 shadow-[0_4px_12px_rgba(34,197,94,0.12)]",
    warning: "bg-yellow-50/70 border-yellow-200 shadow-[0_4px_12px_rgba(250,204,21,0.15)]",
  };

  const hoverStyles = hoverable
    ? "hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)] cursor-pointer"
    : "";

  return (
    <div
      className={clsx(baseStyles, variantStyles[variant], hoverStyles, className)}
      {...props}
    >
      {children}
    </div>
  );
};
