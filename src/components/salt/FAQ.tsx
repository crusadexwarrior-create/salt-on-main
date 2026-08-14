import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

const faqs = [
  {
    q: "What is halotherapy?",
    a: "Halotherapy, also called dry salt therapy, is a relaxing session inside a warm, softly-lit salt room. Micro-particles of pharmaceutical-grade salt are gently dispersed into the air while you unwind. Many guests use it as a peaceful break from a busy day.",
  },
  {
    q: "How do I book a session?",
    a: "The easiest way is to use our online booking button. Choose your service, pick a time that works for you, and you're done. Prefer to book by phone? Call (301) 776-SALT and we'll take care of it for you.",
  },
  {
    q: "What should I wear?",
    a: "Comfortable, loose clothing you can relax in. For the infrared sauna, we recommend clothing you don't mind sweating in — or a swimsuit. We'll go over everything on your first visit.",
  },
  {
    q: "How early should I arrive?",
    a: "Please arrive about 10 minutes before your appointment. That gives you time to check in, use the restroom, and settle in without feeling rushed.",
  },
  {
    q: "Can I bring my phone into the salt room?",
    a: "We ask that phones stay outside the salt room, or on silent and tucked away. It keeps the space peaceful for everyone.",
  },
  {
    q: "Is this a medical treatment?",
    a: "No. Salt on Main is a wellness studio. Our services are designed for relaxation and general wellness support, not medical treatment. If you have specific health concerns, please talk with your healthcare provider.",
  },
  {
    q: "What if I have trouble booking online?",
    a: "No problem — just call us at (301) 776-SALT and we'll help you find a time. You can also email us at SaltonMain7@gmail.com and we'll follow up to help you schedule.",
  },
  {
    q: "Do you offer massage?",
    a: "Yes. Our licensed massage therapists offer Swedish, Deep Tissue, Salty Massage, Hot Stone, and Sports massage. Session lengths and pricing are listed in the online booking system.",
  },
  {
    q: "What are Signature Experiences?",
    a: "They're curated visits that pair our therapies into one seamless reset — like Sweat & Reset, built around the Infrared Salty Sauna, or Salt & Reset, built around the salt room. Current combinations are shown when you book online.",
  },
  {
    q: "Can I book the space for a private event?",
    a: "Absolutely. We host private events such as acupuncture and sound bath sessions, along with half-day and full-day rentals for groups, workshops, and celebrations. Call (301) 776-SALT or email us at SaltonMain7@gmail.com and we'll help you plan it.",
  },
  {
    q: "Do you have sessions for kids?",
    a: "Yes — our Parent & Me salt room sessions are designed for a caregiver and child together. Age guidelines are noted on the session listing when you book, so please check there or give us a call.",
  },
  {
    q: "Which service should I choose first?",
    a: "For most first-time guests, halotherapy is a lovely introduction to the studio. If you're not sure, tell us what you're hoping to get out of your visit and we'll suggest the best fit.",
  },

];

export function FAQ() {
  return (
    <section id="faq" className="bg-sand/50 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-accent">
              Frequently Asked
            </p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-foreground sm:text-4xl">
              Good questions,
              <span className="italic text-accent"> clear answers.</span>
            </h2>
          </div>
        </Reveal>

        <Stagger className="mt-10" stagger={0.06}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <StaggerItem key={i}>
                <AccordionItem
                  value={`item-${i}`}
                  className="rounded-2xl border border-border/60 bg-background px-5 shadow-sm transition-all duration-300 hover:shadow-md data-[state=open]:shadow-lg data-[state=open]:border-accent/30"
                >
                  <AccordionTrigger className="py-5 text-left font-display text-lg hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-muted-foreground leading-relaxed">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              </StaggerItem>
            ))}
          </Accordion>
        </Stagger>

        <Reveal delay={0.1}>
          <p className="mt-8 rounded-2xl border border-border/60 bg-background p-5 text-center text-xs leading-relaxed text-muted-foreground">
            Salt on Main's wellness services are not intended to diagnose,
            treat, cure, or prevent any disease. Please consult a qualified
            healthcare professional for medical advice.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
