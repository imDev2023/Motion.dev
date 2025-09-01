"use client";
import { motion } from "motion/react";
import { useState } from "react";

const RotateonDrag = () => {
  const [rotation, setRotation] = useState(0);

  const handleDrag = (_: any, info: any) => {
    const newRotation = rotation + info.offset.x;
    setRotation(newRotation);
  };

  return (
    <motion.div
      className="w-32 h-32 bg-red-500 rounded-lg flex items-center justify-center"
      drag
      dragConstraints={{ left: -100, right: -100, top: -100, bottom: -100 }}
      onDrag={handleDrag}
      style={{ rotate: rotation }}
    >
      Drag Me
    </motion.div>
  );
};

export default RotateonDrag;
