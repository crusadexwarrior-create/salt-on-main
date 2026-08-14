import { Star } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

const reviews = [
  {
    quote:
      "The salt room is easily the most peaceful 45 minutes of my week. I leave feeling like I can actually breathe deeper.",
    author: "Salt on Main Guest",
    tag: "Halotherapy",
  },
  {
    quote:
      "Beautiful, calming space and genuinely kind staff. They walked me through everything on my first visit.",
    author: "Salt on Main Guest",
    tag: "First-time visitor",
  },
  {
    quote:
      "I do the infrared sauna and foot detox back-to-back. It's become my favorite reset after a long week.",
    author: "Salt on Main Guest",
    tag: "Sauna + Foot Detox",
  },
  {
    quote:
      "Immaculately clean, quiet, and warm. It doesn't feel like a chain — it feels like a neighborhood spot.",
    author: "Salt on Main Guest",
    tag: "Atmosphere",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="bg-sand/50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-xl">
              <p className="text-xs uppercase tracking-[0.22em] text-accent">
                What Guests Say
              </p>
              <h2 className="mt-3 font-display text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl">
                Kind words from
                <br />
                <span className="italic text-accent">our neighborhood.</span>
              </h2>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <span>Loved by locals in Laurel, MD</span>
            </div>
          </div>
        </Reveal>

        <Stagger
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2"
          stagger={0.12}
        >
          {reviews.map((r, i) => (
            <StaggerItem
              key={i}
              as="figure"
              className="flex flex-col rounded-3xl border border-border/60 bg-background p-7 shadow-sm transition-all duration-500 ease-out hover:shadow-lg hover:-translate-y-1 hover:border-accent/30"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 font-display text-lg leading-snug text-foreground sm:text-xl">
                “{r.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center justify-between border-t border-border/60 pt-4">
                <span className="text-sm font-medium text-foreground">
                  {r.author}
                </span>
                <span className="text-xs uppercase tracking-wider text-muted-foreground">
                  {r.tag}
                </span>
              </figcaption>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
