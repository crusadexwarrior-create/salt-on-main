import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { BookNowButton } from "./BookNowButton";
import logoAsset from "@/assets/salt-on-main-logo.png";

const links = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#book", label: "Book" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Rendered via a portal to <body> so the fixed overlay escapes the header's
  // animated transform, which would otherwise become its containing block and
  // collapse `inset-0` to the header's box instead of the viewport.
  const mobileMenu = (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[70] overflow-hidden lg:hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <motion.div
            initial={{ x: reduce ? 0 : "100%", opacity: reduce ? 0 : 1 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: reduce ? 0 : "100%", opacity: reduce ? 0 : 1 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] as const }}
            className="absolute right-0 top-0 h-full w-[82%] max-w-sm bg-background shadow-2xl p-6 flex flex-col"
          >
            <div className="flex items-center justify-between mb-8">
              <span className="font-display text-xl">Menu</span>
              <button
                onClick={() => setOpen(false)}
                className="grid h-10 w-10 place-items-center rounded-full hover:bg-muted transition-colors"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <motion.nav
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
              }}
              className="flex flex-col gap-1"
            >
              {links.map((l) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  variants={{
                    hidden: { opacity: 0, x: reduce ? 0 : 12 },
                    show: { opacity: 1, x: 0, transition: { duration: 0.35, ease: "easeOut" } },
                  }}
                  className="rounded-xl px-4 py-3 text-lg font-display text-foreground hover:bg-muted transition-colors"
                >
                  {l.label}
                </motion.a>
              ))}
            </motion.nav>
            <div className="mt-auto pt-6">
              <BookNowButton className="w-full" size="lg">
                Book a Session
              </BookNowButton>
              <p className="mt-4 text-center text-xs text-muted-foreground">
                (301) 776-SALT
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <motion.header
        initial={{ y: reduce ? 0 : -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,border,box-shadow] duration-500 ease-out",
          scrolled
            ? "bg-background/80 backdrop-blur-lg border-b border-border/60 shadow-[0_1px_20px_-8px_rgba(0,0,0,0.08)]"
            : "bg-transparent border-b border-transparent",
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 transition-[padding] duration-500 ease-out",
            scrolled ? "py-2" : "py-3.5",
          )}
        >
          <a
            href="#home"
            className="flex items-center gap-3 group"
            aria-label="Salt on Main — Home"
          >
            <img
              src={logoAsset}
              alt="Salt on Main Wellness Center"
              width={160}
              height={200}
              className={cn(
                "w-auto shrink-0 object-contain transition-[height] duration-500 ease-out",
                scrolled ? "h-12" : "h-16",
              )}
            />
            <span className="sr-only">Salt on Main Wellness Center</span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative text-sm text-foreground/75 transition-colors duration-300 hover:text-accent"
              >
                {l.label}
                <span className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <BookNowButton
              className="hidden sm:inline-flex shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              size="sm"
            >
              Book Now
            </BookNowButton>
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden grid h-10 w-10 place-items-center rounded-full text-foreground hover:bg-muted transition-colors"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.header>

      {mounted ? createPortal(mobileMenu, document.body) : null}
    </>
  );
}
