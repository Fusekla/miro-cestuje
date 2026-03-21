"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function ParallaxImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-20px", "20px"]);

  return (
    <div
      ref={ref}
      className="relative w-full h-64 mb-4 rounded-xl overflow-hidden shadow"
    >
<motion.div
  style={{ y }}
  className="absolute inset-0 will-change-transform"
>
  <Image
    src={src}
    alt={alt}
    width={1200} // large enough width to avoid blur
    height={800} // taller than container to enable scroll movement
    className="object-cover w-full h-[220%] absolute top-[-40%] left-0"
  />
</motion.div>
    </div>
  );
}