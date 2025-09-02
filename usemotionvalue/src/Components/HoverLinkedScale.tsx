"use client";
import { motion, useMotionValue } from "motion/react";

const HoverLinkedScale = () => {
  const scale = useMotionValue(1);
  return (
    <motion.button
      onHoverStart={() => scale.set(1.2)}
      onHoverEnd={() => scale.set(1)}
      style={{ scale }}
      className="p-4 bg-blue-500 rounded cursor-pointer"
    >
      Hover Me
    </motion.button>
  );
};

export default HoverLinkedScale;
