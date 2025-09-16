"use client";

import { cn } from "@/lib/utils";

export function Button({ children, variant = "primary", className, ...props }) {
  const base = "px-4 py-2 rounded-xl font-semibold transition-colors";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-700 hover:bg-gray-300",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
  };

  return (
    <button
      className={cn(base, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
