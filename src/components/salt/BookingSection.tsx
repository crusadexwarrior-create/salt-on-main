import { MapPin, Calendar, Sparkles, Phone, Wind, Sun, Flame, Hand, Layers, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { BOOKER_URL, BookNowButton } from "./BookNowButton";
import { Reveal } from "./Reveal";

type TrustItem = { label: string; value: string };
const trust: TrustItem[] = [
  { label: "Location", value: "Main St. Laurel" },
  { label: "Established", value: "Since 2019" },
  { label: "Booking", value: "Easy Online" },
  { label: "Call Us", value: "(301) 776-SALT" },
];

type Service = { name: string; note: string; icon: LucideIcon };
const services: Service[] = [
  { name: "Halotherapy · Salt Therapy", note: "Signature session", icon: Wind },
  { name: "Infrared Salty Sauna", note: "Warming reset", icon: Flame },
  { name: "Red Light Therapy", note: "Restorative light", icon: Sun },
  { name: "Massage Therapy", note: "Swedish · Deep Tissue · Stone", icon: Hand },
  { name: "Signature Experiences", note: "Sweat & Reset · Salt & Reset", icon: Layers },
  { name: "Private Events & Rentals", note: "Groups and buyouts", icon: Users },
];


export function BookingSection() {
  return (
    <section
      id="book"
      className="relative overflow-hidden py-20 sm:py-28"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.94 0.02 80) 0%, oklch(0.96 0.01 165) 100%)",
      }}
    >
      {/* Ambient blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-[10%] -right-[5%] h-[40rem] w-[40rem] rounded-full opacity-20 blur-[100px] -z-10"
        style={{ background: "oklch(0.42 0.04 165)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-[10%] -left-[5%] h-[35rem] w-[35rem] rounded-full opacity-15 blur-[100px] -z-10"
        style={{ background: "oklch(0.68 0.11 45)" }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-20">
          {/* Left — editorial hero copy */}
          <Reveal className="lg:col-span-7">
            <div className="flex flex-col gap-8">
              <div className="space-y-5">
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
                  Historic Laurel Wellness Center
                </span>
                <h2 className="font-display text-5xl leading-[0.98] text-foreground sm:text-6xl lg:text-[4.5rem]">
                  Relax, Restore,
                  <br />
                  <span className="italic font-normal text-accent">
                    and Breathe Better.
                  </span>
                </h2>
                <p className="max-w-xl text-base leading-relaxed text-foreground/70 sm:text-lg">
                  Experience the calming benefits of salt therapy, red light
                  therapy, infrared salty sauna, and massage. Since
                  2019, we've helped Laurel slow down and breathe easier.

                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <BookNowButton
                  size="lg"
                  variant="accent"
                  className="shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                >
                  Book a Session
                </BookNowButton>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/40 px-6 py-3 text-sm font-medium text-primary backdrop-blur-sm transition-all duration-300 hover:bg-background/70 hover:border-primary/50 hover:-translate-y-0.5"
                >
                  Explore Services
                </a>
              </div>

              {/* Trust rail — 4 col meta */}
              <dl className="grid grid-cols-2 gap-6 border-t border-foreground/10 pt-8 md:grid-cols-4">
                {trust.map((t) => (
                  <div key={t.label} className="min-w-0 space-y-1">
                    <dt className="text-[10px] font-bold uppercase tracking-[0.15em] text-foreground/40">
                      {t.label}
                    </dt>
                    <dd className="truncate text-sm font-medium text-foreground">
                      {t.label === "Call Us" ? (
                        <a
                          href="tel:+13017767258"
                          className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
                        >
                          <Phone className="h-3.5 w-3.5" />
                          {t.value}
                        </a>
                      ) : t.label === "Location" ? (
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5 text-accent" />
                          {t.value}
                        </span>
                      ) : t.label === "Established" ? (
                        <span className="inline-flex items-center gap-1.5">
                          <Sparkles className="h-3.5 w-3.5 text-accent" />
                          {t.value}
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5 text-accent" />
                          {t.value}
                        </span>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          {/* Right — glass booking card */}
          <Reveal className="lg:col-span-5" delay={0.15} y={32}>
            <div className="relative">
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-6 -right-6 h-32 w-32 rounded-full opacity-25 blur-2xl mix-blend-multiply"
                style={{ background: "oklch(0.68 0.11 45)" }}
              />
              <div className="group/card relative flex flex-col gap-6 rounded-[2.25rem] border border-white/50 bg-background/75 p-6 shadow-[0_35px_80px_-25px_rgba(20,40,35,0.35)] backdrop-blur-xl transition-transform duration-500 ease-out sm:p-8 lg:rotate-[1.5deg] lg:hover:rotate-0">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="font-display text-2xl font-medium text-foreground">
                      Quick Booking
                    </h3>
                    <p className="mt-1 text-sm text-primary/80">
                      Select your preferred wellness path
                    </p>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-accent/15 px-3 py-1 text-[11px] font-medium text-accent">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                    Live
                  </span>
                </div>

                <ul className="space-y-2.5">
                  {services.map((s) => {
                    const Icon = s.icon;
                    return (
                      <li key={s.name}>
                        <a
                          href={BOOKER_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center justify-between gap-3 rounded-2xl border border-border/70 bg-background/80 p-3.5 transition-all duration-300 hover:border-accent/50 hover:bg-background hover:-translate-y-0.5 hover:shadow-sm"
                        >
                          <div className="flex min-w-0 items-center gap-3.5">
                            <span
                              className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground"
                              style={{ background: "oklch(0.94 0.02 80)" }}
                            >
                              <Icon className="h-4.5 w-4.5" strokeWidth={1.6} />
                            </span>
                            <div className="min-w-0">
                              <p className="truncate text-sm font-semibold text-foreground">
                                {s.name}
                              </p>
                              <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                                {s.note}
                              </p>
                            </div>
                          </div>
                          <span className="shrink-0 text-xs font-medium text-accent transition-transform duration-300 group-hover:translate-x-0.5">
                            →
                          </span>
                        </a>
                      </li>
                    );
                  })}
                </ul>

                <div className="space-y-2">
                  <BookNowButton
                    className="w-full rounded-2xl shadow-md hover:shadow-lg transition-shadow"
                    size="lg"
                    variant="primary"
                  >
                    Open Booking Calendar
                  </BookNowButton>
                  <p className="text-center text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    Online booking powered by Booker
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
