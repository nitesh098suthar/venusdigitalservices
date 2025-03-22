"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { services, stats } from "@/components/apis/homepageapi";
import Cta from "@/components/homepage/cta";
import Clients from "@/components/homepage/clients";
import Testimonials from "@/components/homepage/testimonials";
import ChooseUs from "@/components/homepage/chooseus";
import Services from "@/components/homepage/services";
import Stats from "@/components/homepage/stats";
import Hero from "@/components/homepage/hero";
import ScrollingText from "@/components/homepage/scrollingtext";

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
      <Testimonials />
      <Clients />
      <Cta />
    </div>
  );
}
