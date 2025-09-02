"use client";
import { motion, useMotionValue } from "motion/react";

const DynamicRotation = () => {
  const rotation = useMotionValue(0);

  const rotateBox=() => {
    rotation.set(rotation.get() + 45)
  }

  return (
    <motion.div className="
    w-32 h-32 font-bold bg-amber-500 rounded flex items-center justify-center"
    style={{ rotate: rotation}}
    onClick={rotateBox}
    >
      
      click me</motion.div>
  )
}

export default DynamicRotation