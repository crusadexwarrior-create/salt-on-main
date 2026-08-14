import { motion, useReducedMotion } from "framer-motion";
import { BookNowButton } from "./BookNowButton";

export function StickyMobileCTA() {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={{ y: reduce ? 0 : 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
      className="fixed inset-x-0 bottom-0 z-40 lg:hidden"
    >
      <div className="mx-3 mb-3 rounded-full border border-border/70 bg-background/95 p-2 shadow-xl backdrop-blur-md">
        <div className="flex items-center gap-2">
          <a
            href="tel:+13017767258"
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-muted text-foreground transition-all duration-300 hover:bg-accent/15 hover:text-accent"
            aria-label="Call Salt on Main"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
            </svg>
          </a>
          <BookNowButton
            className="flex-1 shadow-sm hover:shadow-md transition-shadow"
            size="md"
          >
            Book a Session
          </BookNowButton>
        </div>
      </div>
    </motion.div>
  );
}
