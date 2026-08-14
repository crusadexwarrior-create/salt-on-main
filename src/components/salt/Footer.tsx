import { BookNowButton } from "./BookNowButton";
import logoAsset from "@/assets/salt-on-main-logo.png";
import { Reveal } from "./Reveal";

const quickLinks = [
  { href: "#services", label: "Services" },
  { href: "#book", label: "Book" },
  { href: "#about", label: "About" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-background/95 p-2 shadow-sm ring-1 ring-primary-foreground/10">
                  <img
                    src={logoAsset}
                    alt="Salt on Main Wellness Center"
                    width={160}
                    height={200}
                    className="h-16 w-auto object-contain"
                  />
                </div>
                <div>
                  <p className="font-display text-xl leading-tight">
                    Salt on Main
                  </p>
                  <p className="text-xs uppercase tracking-[0.22em] text-primary-foreground/60 mt-1">
                    Wellness Center
                  </p>
                </div>
              </div>

              <p className="mt-5 max-w-md text-sm leading-relaxed text-primary-foreground/70">
                A calming wellness studio in Historic Laurel, Maryland offering
                salt therapy, red light therapy, infrared salty sauna, massage,
                signature experiences, and private events.
              </p>

              <div className="mt-6">
                <BookNowButton
                  variant="accent"
                  className="shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  Book a Session
                </BookNowButton>
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-primary-foreground/60">
                Contact
              </p>
              <ul className="mt-4 space-y-2 text-sm text-primary-foreground/85">
                <li>575 Main Street, Suite 149</li>
                <li>Laurel, MD 20707</li>
                <li>
                  <a
                    href="tel:+13017767258"
                    className="transition-colors hover:text-accent"
                  >
                    (301) 776-SALT
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:SaltonMain7@gmail.com"
                    className="transition-colors hover:text-accent break-all"
                  >
                    SaltonMain7@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-primary-foreground/60">
                Quick Links
              </p>
              <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-primary-foreground/85">
                {quickLinks.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="transition-colors hover:text-accent"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 border-t border-primary-foreground/15 pt-6">
          <p className="text-xs leading-relaxed text-primary-foreground/60">
            Salt on Main's wellness services are not intended to diagnose,
            treat, cure, or prevent any disease. Please consult a qualified
            healthcare professional for medical advice.
          </p>
          <div className="mt-4 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <p className="text-xs text-primary-foreground/60">
              © {new Date().getFullYear()} Salt on Main Wellness Center. All
              rights reserved.
            </p>
            <p className="text-[0.8rem] font-medium uppercase tracking-[0.1em] text-primary-foreground/70">
              Website designed by{" "}
              <a
                href="https://crusadexwarrior.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-accent underline underline-offset-4 transition-opacity hover:opacity-80"
              >
                CrusadeXWarrior
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
