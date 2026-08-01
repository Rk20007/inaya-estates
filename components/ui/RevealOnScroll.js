"use client";

import { motion } from "framer-motion";

const directionOffset = {
  up: { y: 28, x: 0 },
  down: { y: -28, x: 0 },
  left: { y: 0, x: 28 },
  right: { y: 0, x: -28 },
  none: { y: 0, x: 0 },
};

export default function RevealOnScroll({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.2,
  as: Component = motion.div,
}) {
  const offset = directionOffset[direction] ?? directionOffset.up;

  return (
    <Component
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}
