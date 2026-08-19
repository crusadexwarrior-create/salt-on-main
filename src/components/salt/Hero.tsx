import { useEffect, useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import heroImg from "@/assets/hero.jpg";
import { BookNowButton } from "./BookNowButton";
import { useIsMobile } from "@/hooks/use-mobile";

export function Hero() {
  const reduce = useReducedMotion();
  const isMobile = useIsMobile();
  // Disable scroll-linked parallax on touch/mobile (where async scrolling makes
  // the spring jitter) and for reduced-motion. Desktop keeps a gentle, softened
  // parallax with a shorter travel and calmer spring to avoid overshoot.
  const disableParallax = reduce || isMobile;
  const imgWrapRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const rawY = useTransform(scrollY, [0, 800], [0, disableParallax ? 0 : -40]);
  const y = useSpring(rawY, { stiffness: 60, damping: 26, mass: 0.4 });

  useEffect(() => {
    // no-op; hook kept for future
  }, []);

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-32"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 20% 0%, oklch(0.95 0.04 55 / 0.7), transparent 60%), radial-gradient(ellipse at 90% 100%, oklch(0.9 0.05 155 / 0.4), transparent 60%), var(--ivory)",
        }}
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <motion.div
          className="max-w-xl"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Historic Laurel, MD · Since 2019
          </motion.span>
          <motion.h1
            variants={item}
            className="mt-6 font-display text-4xl leading-[1.05] text-foreground sm:text-5xl lg:text-6xl"
          >
            Breathe Deeper.
            <br />
            Feel Lighter.
            <br />
            <span className="italic text-accent">Reset on Main Street.</span>
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Step into a calming wellness experience in Historic Laurel featuring
            salt therapy, massage, infrared sauna, red light therapy, and
            restorative experiences designed to help you slow down, reset, and
            make space for yourself.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <BookNowButton
              size="lg"
              className="shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Book a Session
            </BookNowButton>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 px-6 py-3 text-sm font-medium text-primary transition-all duration-300 hover:bg-primary/5 hover:border-primary/40 hover:-translate-y-0.5"
            >
              Explore Services
            </a>
          </motion.div>

          <motion.dl
            variants={item}
            className="mt-10 grid grid-cols-3 gap-6 border-t border-border/60 pt-6 text-left"
          >
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                Since
              </dt>
              <dd className="mt-1 font-display text-xl text-foreground">2019</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                Services
              </dt>
              <dd className="mt-1 font-display text-xl text-foreground">6</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                Salt Rooms
              </dt>
              <dd className="mt-1 font-display text-xl text-foreground">
                Multiple
              </dd>
            </div>
          </motion.dl>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: reduce ? 1 : 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as const, delay: 0.15 }}
        >
          <div
            ref={imgWrapRef}
            className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-primary/10 ring-1 ring-border/50"
          >
            <motion.img
              src={heroImg}
              alt="Warm, softly-lit salt therapy room at Salt on Main Wellness Center"
              width={1600}
              height={1200}
              style={{ y }}
              className="h-[110%] w-full object-cover aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5] scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/25 via-transparent to-transparent" />
            <motion.div
              initial={{ opacity: 0, y: reduce ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
              className="absolute bottom-5 left-5 right-5 rounded-2xl bg-background/90 backdrop-blur-md p-4 shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
                  ✦
                </div>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    A peaceful moment
                  </p>
                  <p className="truncate text-sm font-medium text-foreground">
                    Salt. Sweat. Reset.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          <div
            aria-hidden
            className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-accent/20 blur-2xl -z-10"
          />
        </motion.div>
      </div>
    </section>
  );
}
