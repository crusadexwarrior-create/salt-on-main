import experience from "@/assets/experience.jpg";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:gap-16 lg:px-8">
        <Reveal className="lg:col-span-2" y={32}>
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] ring-1 ring-border/60 shadow-xl">
              <img
                src={experience}
                alt="Warm salt therapy room interior at Salt on Main Wellness Center"
                loading="lazy"
                width={1024}
                height={1280}
                className="h-full w-full object-cover aspect-[4/5] transition-transform duration-[1200ms] ease-out hover:scale-[1.02]"
              />
            </div>
            <div
              aria-hidden
              className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-accent/20 blur-2xl -z-10"
            />
          </div>
        </Reveal>

        <div className="lg:col-span-3">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.22em] text-accent">
              The Experience
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-3 font-display text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl">
              Designed to help Laurel
              <br />
              <span className="italic text-accent">slow down, reset, and restore.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              Salt on Main brings together salt therapy, infrared sauna, red
              light therapy, massage, and restorative wellness experiences in one
              calming space.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              Whether you're visiting for a quiet reset, a wellness session, or a
              shared experience, our goal is simple: help you step away from the
              noise and make time for yourself.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-8">
              <a
                href="#services"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-all duration-300 hover:bg-primary/90 hover:shadow-md hover:-translate-y-0.5"
              >
                Explore Our Experiences
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
