import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import halo from "@/assets/service-halotherapy.jpg";
import red from "@/assets/service-redlight.jpg";
import sauna from "@/assets/service-sauna.jpg";
import massage from "@/assets/service-massage.jpg";
import signature from "@/assets/service-signature.jpg";
import events from "@/assets/service-events.jpg";
import { BOOKER_URL, BookNowButton } from "./BookNowButton";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

type Service = {
  id: string;
  name: string;
  short: string;
  image: string;
  bullets: string[];
  long: string;
};

const services: Service[] = [
  {
    id: "halotherapy",
    name: "Halotherapy · Dry Salt Therapy",
    image: halo,
    short:
      "A calming salt room experience designed to support relaxation, breathing comfort, and overall wellness.",
    bullets: [
      "Relaxing salt room environment",
      "Supports breathing comfort",
      "Parent & Me sessions available",
    ],
    long: "Settle into a warm, softly-lit salt room and simply breathe. Our halotherapy sessions gently disperse micro-particles of pharmaceutical-grade salt into the air, creating a peaceful setting that many guests use to unwind, reset, and support their everyday wellness routine. Choose a group salt room session, a private room, or a Parent & Me session for younger guests.",
  },
  {
    id: "sauna",
    name: "Infrared Salty Sauna",
    image: sauna,
    short:
      "A private warming session for sweating, circulation support, muscle comfort, and detox-focused wellness.",
    bullets: [
      "Warming, sweat-inducing session",
      "Supports circulation and muscle comfort",
      "Private, comfortable cabin",
    ],
    long: "Step into our private Infrared Salty Sauna and enjoy a warming, meditative session that pairs infrared heat with a salted environment. Infrared warmth is a popular choice for guests seeking deep relaxation, muscle comfort, and detox-focused wellness support.",
  },
  {
    id: "redlight",
    name: "Red Light Therapy",
    image: red,
    short:
      "A soothing light-based session focused on skin support, relaxation, and cellular wellness support.",
    bullets: [
      "Skin and complexion support",
      "Relaxation and recovery",
      "Gentle, non-invasive session",
    ],
    long: "Relax under warm therapeutic red and near-infrared light in a private room. Guests often choose red light therapy as part of a broader wellness rhythm focused on skin support, recovery, and a calm sense of well-being.",
  },
  {
    id: "massage",
    name: "Massage Therapy",
    image: massage,
    short:
      "Licensed massage in a quiet, salted setting — from classic relaxation work to focused recovery.",
    bullets: [
      "Swedish and Deep Tissue",
      "Salty Massage and Hot Stone",
      "Sports and targeted recovery work",
    ],
    long: "Our licensed massage therapists offer Swedish, Deep Tissue, Salty Massage, Hot Stone, and Sports massage. Whether you want to fully unwind or work through tight, overused muscles, your therapist will tailor pressure and focus to how your body feels that day. Session lengths and pricing are listed in the online booking system.",
  },
  {
    id: "signature",
    name: "Signature Experiences",
    image: signature,
    short:
      "Curated multi-service visits that combine our most-loved therapies into one seamless reset.",
    bullets: [
      "Sweat & Reset — sauna-forward pairing",
      "Salt & Reset — salt room pairing",
      "One booking, one flowing visit",
    ],
    long: "Signature Experiences bundle our therapies into a single guided visit. Sweat & Reset leans into the Infrared Salty Sauna, while Salt & Reset centers on the salt room — both finished with a complementary service so you leave feeling genuinely reset. Current combinations and pricing are shown in the online booking system.",
  },
  {
    id: "events",
    name: "Private Events & Rentals",
    image: events,
    short:
      "Reserve the space for small groups, guest practitioners, or a half- or full-day private buyout.",
    bullets: [
      "Acupuncture and sound bath events",
      "Small-group gatherings and celebrations",
      "Half-day and full-day rentals",
    ],
    long: "Salt on Main hosts private events including acupuncture and sound bath sessions, plus half-day and full-day rentals of the space for groups, workshops, and celebrations. Give us a call or send us an email and we'll help you plan the details, timing, and guest count.",
  },
];


export function Services() {
  const [open, setOpen] = useState<Service | null>(null);

  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.22em] text-accent">
              Services
            </p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl">
              Salt. Sweat. Reset.
              <br />
              <span className="italic text-accent">Six ways to slow down.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Each service is designed to complement the others. Book one, or
              combine them into a Signature Experience for a full reset.
            </p>

          </div>
        </Reveal>

        <Stagger
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:gap-8"
          stagger={0.14}
        >
          {services.map((s) => (
            <StaggerItem
              key={s.id}
              as="article"
              className="group flex flex-col overflow-hidden rounded-3xl border border-border/60 bg-card shadow-sm transition-all duration-500 ease-out hover:shadow-xl hover:-translate-y-1 hover:border-accent/30"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.name}
                  loading="lazy"
                  width={1024}
                  height={640}
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/15 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="font-display text-xl text-foreground sm:text-2xl">
                  {s.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.short}
                </p>
                <ul className="mt-4 space-y-2">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-sm text-foreground/80"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => setOpen(s)}
                    className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 px-4 py-2 text-sm font-medium text-primary transition-all duration-300 hover:bg-primary/5 hover:border-primary/40 hover:-translate-y-0.5"
                  >
                    Learn More
                  </button>
                  <BookNowButton
                    size="sm"
                    className="shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Book Now
                  </BookNowButton>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.15}>
          <p className="mt-10 text-center text-sm text-muted-foreground">
            <a
              href={BOOKER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-accent transition-colors"
            >
              View Pricing and Availability
            </a>{" "}
            in the online booking system.
          </p>
        </Reveal>
      </div>

      <Dialog open={!!open} onOpenChange={(o) => !o && setOpen(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl">
              {open?.name}
            </DialogTitle>
            <DialogDescription className="text-base leading-relaxed pt-2">
              {open?.long}
            </DialogDescription>
          </DialogHeader>
          <div className="pt-2">
            <BookNowButton className="w-full" size="lg">
              Book This Service
            </BookNowButton>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Salt on Main's wellness services are not intended to diagnose,
              treat, cure, or prevent any disease.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
