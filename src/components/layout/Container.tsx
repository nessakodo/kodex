import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "default" | "narrow";
}

export function Container({ children, className, size = "default" }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto px-6",
        size === "narrow" ? "max-w-4xl" : "max-w-7xl",
        className
      )}
    >
      {children}
    </div>
  );
}
