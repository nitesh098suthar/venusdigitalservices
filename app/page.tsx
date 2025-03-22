"use client";

import Cta from "@/components/homepage/cta";
import Clients from "@/components/homepage/clients";
import Testimonials from "@/components/homepage/testimonials";
import ChooseUs from "@/components/homepage/chooseus";
import Services from "@/components/homepage/services";
import Stats from "@/components/homepage/stats";
import Hero from "@/components/homepage/hero";
import ScrollingText from "@/components/homepage/scrollingtext";
import PicturesTabAnimation from "@/components/homepage/pictures-tab-animation";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen">
      <Hero />
      <Stats />
      <ScrollingText />
      <Services />
      <ChooseUs />
      <PicturesTabAnimation />
      <Testimonials />
      <Clients />
      <Cta />
    </div>
  );
}
