"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import Picture1 from "../../public/homepage/scrollingText/mark.webp";
import Picture2 from "../../public/homepage/scrollingText/mark.webp";
import Picture3 from "../../public/homepage/scrollingText/mark.webp";
import Lenis from "lenis";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function ScrollingText() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="overflow-hidden">
      <div className="h-[20vh]" />
      <div ref={container}>
        <Slide
          src={Picture1}
          direction="left"
          left="-40%"
          progress={scrollYProgress}
        />
        <Slide
          src={Picture2}
          direction="right"
          left="-25%"
          progress={scrollYProgress}
        />
        <Slide
          src={Picture3}
          direction="left"
          left="-75%"
          progress={scrollYProgress}
        />
      </div>
      <div className="h-[20vh]" />
    </main>
  );
}

type SlideProps = {
  src: any;
  direction: "left" | "right";
  left: string;
  progress: any;
};

const Slide = ({ src, direction, left, progress }: SlideProps) => {
  const moveDirection = direction === "left" ? -1 : 1;
  const translateX = useTransform(
    progress,
    [0, 1],
    [150 * moveDirection, -150 * moveDirection]
  );
  return (
    <motion.div
      style={{ x: translateX, left }}
      className="relative flex whitespace-nowrap"
    >
      <Phrase src={src} />
      <Phrase src={src} />
      <Phrase src={src} />
    </motion.div>
  );
};

const Phrase = ({ src }: any) => {
  return (
    <div className="px-5 flex gap-5 items-center">
      <p className="text-[7.5vw]">Venus Digital Services</p>
      <span className="relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden">
        <Image style={{ objectFit: "cover" }} src={src} alt="image" fill />
      </span>
    </div>
  );
};
