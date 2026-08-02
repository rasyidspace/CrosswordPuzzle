"use client";

import React from "react";
import { clsx } from "clsx";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "success" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg" | "icon";
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
  disabled,
  children,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-bold text-center select-none rounded-2xl transition-all duration-150 active:translate-y-1 focus-visible:ring-4 focus-visible:ring-amber-300 disabled:opacity-50 disabled:pointer-events-none disabled:translate-y-0 disabled:shadow-none cursor-pointer min-h-[44px] min-w-[44px]";

  const variantStyles = {
    primary:
      "bg-[#F59E0B] hover:bg-[#E58E00] text-white shadow-[0_4px_0_#D97706] active:shadow-[0_0px_0_#D97706]",
    secondary:
      "bg-[#3B82F6] hover:bg-[#2563EB] text-white shadow-[0_4px_0_#1D4ED8] active:shadow-[0_0px_0_#1D4ED8]",
    success:
      "bg-[#22C55E] hover:bg-[#16A34A] text-white shadow-[0_4px_0_#15803D] active:shadow-[0_0px_0_#15803D]",
    danger:
      "bg-[#EF4444] hover:bg-[#DC2626] text-white shadow-[0_4px_0_#B91C1C] active:shadow-[0_0px_0_#B91C1C]",
    outline:
      "bg-white hover:bg-amber-50 text-[#2D3748] border-2 border-amber-200 shadow-[0_4px_0_#E2E8F0] active:shadow-[0_0px_0_#E2E8F0]",
    ghost:
      "bg-transparent hover:bg-amber-100/50 text-[#4A5568] shadow-none active:translate-y-0",
  };

  const sizeStyles = {
    sm: "text-sm px-3 py-1.5 h-10 gap-1.5",
    md: "text-base px-5 py-3 h-12 gap-2",
    lg: "text-lg px-6 py-3.5 h-14 gap-2.5 font-extrabold",
    icon: "p-2.5 h-11 w-11",
  };

  return (
    <button
      className={clsx(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        fullWidth ? "w-full" : "",
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
