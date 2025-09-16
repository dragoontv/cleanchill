"use client";

import { cn } from "@/lib/utils"; 

export function Card({ children, className }) {
  return (
    <div className={cn("rounded-2xl border bg-white p-4 shadow-md", className)}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className }) {
  return (
    <div className={cn("mb-2 border-b pb-2", className)}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className }) {
  return (
    <h2 className={cn("text-lg font-bold text-gray-800", className)}>
      {children}
    </h2>
  );
}

export function CardContent({ children, className }) {
  return (
    <div className={cn("text-gray-600", className)}>
      {children}
    </div>
  );
}
