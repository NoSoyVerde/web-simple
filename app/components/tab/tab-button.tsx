"use client";
import React from "react";

interface TabButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  isSelected: boolean;
  className?: string;
  ariaLabel?: string;
}

export default function TabButton({
  children,
  onClick,
  isSelected,
  className,
  ariaLabel,
}: TabButtonProps) {

  let cssProps =
    className ??
    "inline-block m-2 p-3 text-slate-300 rounded-md hover:bg-slate-900 hover:text-white";

  
  if (isSelected) {
    cssProps += " bg-slate-800 text-white";
  }

  return (
    <button onClick={onClick} className={cssProps} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
