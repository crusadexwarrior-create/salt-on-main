import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

const hours = [
  ["Monday", "Closed — Appointments Only"],
  ["Tuesday", "10:00 AM – 6:00 PM"],
  ["Wednesday", "10:00 AM – 6:00 PM"],
  ["Thursday", "10:00 AM – 6:00 PM"],
  ["Friday", "10:00 AM – 6:00 PM"],
  ["Saturday", "10:00 AM – 4:00 PM"],
  ["Sunday", "Closed"],
];

export function LocationHours() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.22em] text-accent">
              Visit Us
            </p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl">
              Find us on
              <span className="italic text-accent"> Main Street.</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <Stagger className="lg:col-span-2 space-y-5" stagger={0.09}>
            <StaggerItem className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-accent mt-0.5" />
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    Address
                  </p>
                  <p className="mt-1 text-foreground">
                    575 Main Street, Suite 149
                    <br />
                    Laurel, MD 20707
                  </p>
                </div>
              </div>
            </StaggerItem>
            <StaggerItem className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 shrink-0 text-accent mt-0.5" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    Phone
                  </p>
                  <a
                    href="tel:+13017767258"
                    className="mt-1 block text-foreground transition-colors hover:text-accent"
                  >
                    (301) 776-SALT
                  </a>
                </div>
              </div>
            </StaggerItem>
            <StaggerItem className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 shrink-0 text-accent mt-0.5" />
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    Email
                  </p>
                  <a
                    href="mailto:SaltonMain7@gmail.com"
                    className="mt-1 block truncate text-foreground transition-colors hover:text-accent"
                  >
                    SaltonMain7@gmail.com
                  </a>
                </div>
              </div>
            </StaggerItem>
            <StaggerItem className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 shrink-0 text-accent mt-0.5" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    Hours
                  </p>
                  <ul className="mt-2 divide-y divide-border/60 text-sm">
                    {hours.map(([day, time]) => (
                      <li
                        key={day}
                        className="flex items-center justify-between py-1.5"
                      >
                        <span className="text-foreground">{day}</span>
                        <span className="text-muted-foreground">{time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </StaggerItem>
          </Stagger>

          <Reveal className="lg:col-span-3" delay={0.15} y={32}>
            <div className="h-full overflow-hidden rounded-3xl border border-border/60 shadow-sm min-h-[420px] transition-shadow duration-500 hover:shadow-lg">
              <iframe
                title="Salt on Main location map"
                src="https://www.google.com/maps?q=575+Main+Street,+Laurel,+MD+20707&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 420 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
