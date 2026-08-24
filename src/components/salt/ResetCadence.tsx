import { Sparkles, Repeat, CalendarDays, RefreshCw } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BookNowButton } from "./BookNowButton";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

const cadence = [
  {
    icon: Sparkles,
    eyebrow: "Your First Visit",
    title: "Start With One",
    body: "Your first salt-room visit may serve as an adaptation session, giving you time to experience the environment and see how your body responds. Some guests take a couple of visits to settle into the salt-room microclimate.",
  },
  {
    icon: Repeat,
    eyebrow: "Build Consistency",
    title: "Create a Rhythm",
    body: "The referenced salt-therapy guidance emphasizes consistency during a course of sessions. It notes that daily sessions may be used during a course, while at least 3 sessions per week may be suggested for more intensive routines.",
  },
  {
    icon: CalendarDays,
    eyebrow: "Seasonal Reset",
    title: "Plan Ahead",
    body: "The source also describes completing a fuller course of sessions approximately twice per year, sometimes beginning a few weeks before a particularly challenging season.",
  },
  {
    icon: RefreshCw,
    eyebrow: "Maintenance",
    title: "Maintain Your Reset",
    body: "After a more consistent series of visits, some guests choose occasional maintenance sessions as part of their ongoing wellness routine.",
  },
];

const respiratory = [
  ["Asthma — intermittent, mild", "12–14"],
  ["Asthma — moderate, severe", "18–21"],
  ["Acute bronchitis", "12–14"],
  ["Chronic bronchitis", "18–21"],
  ["Pneumonia, after acute stage", "12–14"],
  ["Bronchiectasis", "20–25"],
  ["Chronic Obstructive Pulmonary Disease", "20–25"],
  ["Cystic Fibrosis", "20–25"],
  ["Prevention of respiratory ailments (cold, flu, etc.)", "5–7 or 2×/week"],
  ["Vasomotor and allergic rhinitis / rhinosinusitis", "14–18"],
  ["Chronic pharyngitis and tonsillitis", "14–18"],
  ["Adenoiditis", "14–18"],
  ["Acute sinusitis", "3–5"],
  ["Chronic sinusitis", "14–18"],
  ["Hay fever / seasonal allergies", "12–14"],
  ["Sick building syndrome", "12–14"],
  ["Smokers", "12–14"],
  ["After contact with industrial and household pollutants", "12–14"],
];

const skin = [["Psoriasis, eczema, rash and related skin conditions", "8–25"]];

function GuidanceRow({ label, range }: { label: string; range: string }) {
  return (
    <li className="flex items-start justify-between gap-4 border-b border-border/50 py-2.5 last:border-b-0">
      <span className="text-sm text-foreground/80">{label}</span>
      <span className="shrink-0 text-sm font-medium tabular-nums text-accent">
        {range}
      </span>
    </li>
  );
}

export function ResetCadence() {
  return (
    <section id="reset" className="bg-sand/50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.22em] text-accent">
              Build Your Reset Rhythm
            </p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl">
              How often should you
              <span className="italic text-accent"> reset?</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              One visit can be a great introduction, but salt therapy is often
              experienced as part of a consistent wellness routine. The right
              rhythm can vary depending on your goals, experience, and
              individual needs. The guidance below is drawn from the referenced
              salt-therapy source — offered as education, not a prescription.
            </p>
          </div>
        </Reveal>

        <Stagger
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.12}
        >
          {cadence.map((c) => {
            const Icon = c.icon;
            return (
              <StaggerItem
                key={c.title}
                as="article"
                className="flex flex-col rounded-3xl border border-border/60 bg-card p-6 shadow-sm transition-all duration-500 ease-out hover:shadow-md hover:-translate-y-1 hover:border-accent/30"
              >
                <span className="grid h-11 w-11 place-items-center rounded-full bg-accent/12 text-accent">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <p className="mt-5 text-xs uppercase tracking-wider text-muted-foreground">
                  {c.eyebrow}
                </p>
                <h3 className="mt-1 font-display text-xl text-foreground">
                  {c.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {c.body}
                </p>
              </StaggerItem>
            );
          })}
        </Stagger>

        {/* Subtle callout */}
        <Reveal delay={0.1}>
          <div className="mt-10 rounded-3xl border border-accent/20 bg-accent/5 p-8 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-10">
            <div className="max-w-xl">
              <h3 className="font-display text-2xl text-foreground">
                Consistency matters more than a single visit
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Salt therapy is often approached as a wellness practice rather
                than a one-time experience. Your ideal schedule may depend on
                your goals, comfort level, and personal circumstances.
              </p>
            </div>
            <div className="mt-6 shrink-0 sm:mt-0">
              <BookNowButton
                size="lg"
                className="shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                Book Your Next Reset
              </BookNowButton>
            </div>
          </div>
        </Reveal>

        {/* Advanced, research-based detail — collapsed by default */}
        <Reveal delay={0.12}>
          <div className="mx-auto mt-8 max-w-3xl">
            <Accordion type="single" collapsible>
              <AccordionItem
                value="research"
                className="rounded-2xl border border-border/60 bg-background px-5 shadow-sm transition-all duration-300 hover:shadow-md data-[state=open]:shadow-lg data-[state=open]:border-accent/30"
              >
                <AccordionTrigger className="py-5 text-left font-display text-lg hover:no-underline">
                  View Research-Based Session Guidance
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    The referenced source includes suggested ranges for the
                    number of sessions studied across various respiratory and
                    skin conditions. These figures are reproduced from that
                    source for educational reference only — they are not
                    recommendations from Salt on Main, and Salt on Main does not
                    diagnose or treat any condition.
                  </p>

                  <div className="mt-6">
                    <p className="text-xs uppercase tracking-[0.18em] text-accent">
                      Respiratory
                    </p>
                    <ul className="mt-2">
                      {respiratory.map(([label, range]) => (
                        <GuidanceRow key={label} label={label} range={range} />
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6">
                    <p className="text-xs uppercase tracking-[0.18em] text-accent">
                      Skin
                    </p>
                    <ul className="mt-2">
                      {skin.map(([label, range]) => (
                        <GuidanceRow key={label} label={label} range={range} />
                      ))}
                    </ul>
                  </div>

                  <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
                    This information is provided for general educational purposes
                    and is not medical advice. Individual needs vary. If you have
                    a medical condition or health concern, consult a qualified
                    healthcare professional before beginning a new wellness
                    practice.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </Reveal>

        {/* Source attribution + disclaimer */}
        <Reveal delay={0.14}>
          <div className="mx-auto mt-8 max-w-3xl text-center">
            <p className="text-xs leading-relaxed text-muted-foreground">
              Source referenced: Ministry of Public Health of the Russian
              Federation, “Halotherapy Application in Treatment and
              Rehabilitation of Respiratory Diseases,” Methodical Recommendation
              No. 95/111, Moscow, 1995 — with reference to the Scientific Board
              of the Institute of Pulmonology of the Russian Federation and
              affiliated clinical and research institutions in St. Petersburg and
              Moscow.
            </p>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
              This information is provided for general educational purposes and
              is not medical advice. Individual needs vary. If you have a medical
              condition or health concern, consult a qualified healthcare
              professional before beginning a new wellness practice.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
