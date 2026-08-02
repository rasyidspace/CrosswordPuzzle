"use client";

import React from "react";
import { clsx } from "clsx";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "secondary" | "success" | "warning" | "neutral";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center font-extrabold rounded-full transition-colors select-none";

  const variantStyles = {
    primary: "bg-amber-100 text-amber-800 border border-amber-300",
    secondary: "bg-blue-100 text-blue-800 border border-blue-300",
    success: "bg-emerald-100 text-emerald-800 border border-emerald-300",
    warning: "bg-yellow-100 text-yellow-800 border border-yellow-300",
    neutral: "bg-slate-100 text-slate-700 border border-slate-300",
  };

  const sizeStyles = {
    sm: "text-xs px-2.5 py-0.5 gap-1",
    md: "text-sm px-3.5 py-1 gap-1.5",
    lg: "text-base px-4 py-1.5 gap-2",
  };

  return (
    <span
      className={clsx(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      {...props}
    >
      {children}
    </span>
  );
};
