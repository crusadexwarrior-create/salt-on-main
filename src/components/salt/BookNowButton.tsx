import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export const BOOKER_URL =
  "https://go.booker.com/location/saltonmain/service-menu";

type Props = {
  children?: ReactNode;
  className?: string;
  variant?: "primary" | "accent" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
};

export function BookNowButton({
  children = "Book Now",
  className,
  variant = "accent",
  size = "md",
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background whitespace-nowrap";
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base",
  };
  const variants = {
    primary:
      "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:shadow-md",
    accent:
      "bg-accent text-accent-foreground shadow-sm hover:bg-accent/90 hover:shadow-md",
    outline:
      "border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground",
    ghost: "text-primary hover:bg-primary/10",
  };
  return (
    <a
      href={BOOKER_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(base, sizes[size], variants[variant], className)}
    >
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M5 12h14M13 5l7 7-7 7" />
      </svg>
    </a>
  );
}
