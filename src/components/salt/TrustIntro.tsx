import { Reveal, Stagger, StaggerItem } from "./Reveal";
import { BookNowButton } from "./BookNowButton";

const chips = [
  { label: "Locally owned", detail: "Serving Laurel since 2019" },
  { label: "Peaceful atmosphere", detail: "Designed for restoration" },
  { label: "Easy online booking", detail: "Book in under a minute" },
];

export function TrustIntro() {
  return (
    <section className="border-y border-border/50 bg-sand/50">
      <div className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.22em] text-accent">
            New to Salt Therapy?
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-4 font-display text-3xl leading-tight text-foreground sm:text-4xl">
            Discover Salt Therapy
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Never tried salt therapy? This is your place to start. Relax in a
            peaceful salt room while fine salt circulates through the air for a
            calming wellness experience. No special clothing or complicated
            preparation is needed.
          </p>
        </Reveal>
        <Reveal delay={0.22}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            <BookNowButton
              size="lg"
              className="shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Try Your First Salt Session
            </BookNowButton>
            <a
              href="#faq"
              className="text-sm font-medium text-primary underline underline-offset-4 transition-colors hover:text-accent"
            >
              What Is Salt Therapy?
            </a>
          </div>
        </Reveal>

        <Stagger as="ul" className="mt-12 grid gap-4 sm:grid-cols-3" stagger={0.1}>
          {chips.map((c) => (
            <StaggerItem
              key={c.label}
              as="li"
              className="rounded-2xl border border-border/60 bg-background px-5 py-5 text-left shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-accent" />
                <p className="text-sm font-medium text-foreground">{c.label}</p>
              </div>
              <p className="mt-1.5 text-sm text-muted-foreground">{c.detail}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
