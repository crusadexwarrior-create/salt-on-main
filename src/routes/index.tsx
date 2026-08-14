import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/salt/Header";
import { Hero } from "@/components/salt/Hero";
import { TrustIntro } from "@/components/salt/TrustIntro";
import { Services } from "@/components/salt/Services";
import { BookingSection } from "@/components/salt/BookingSection";
import { About } from "@/components/salt/About";
import { Reviews } from "@/components/salt/Reviews";
import { LocationHours } from "@/components/salt/LocationHours";
import { FAQ } from "@/components/salt/FAQ";
import { Footer } from "@/components/salt/Footer";
import { StickyMobileCTA } from "@/components/salt/StickyMobileCTA";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Salt on Main Wellness Center — Halotherapy & Wellness in Laurel, MD",
      },
      {
        name: "description",
        content:
          "A calming wellness center in Historic Laurel, MD offering salt therapy, red light therapy, infrared salty sauna, massage, and private events. Book online.",
      },
      {
        property: "og:title",
        content: "Salt on Main Wellness Center — Laurel, MD",
      },
      {
        property: "og:description",
        content:
          "Salt. Sweat. Reset. Salt therapy, red light, infrared salty sauna, massage, and private events in Historic Laurel, MD.",
      },

      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <TrustIntro />
        <Services />
        <BookingSection />
        <About />
        <Reviews />
        <LocationHours />
        <FAQ />
      </main>
      <Footer />
      <StickyMobileCTA />
      {/* Bottom spacer so sticky mobile CTA doesn't overlap footer content on small screens */}
      <div className="h-20 lg:hidden" aria-hidden />
    </div>
  );
}
