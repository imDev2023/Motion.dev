"use client";
import { motion } from "motion/react";
import { useState } from "react";

const menuVariant = {
  closed: { x: "-100%" },
  open: { x: 0 },
};

const SlidingMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        className="p-2 bg-gray-5 text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        Toggle Menu
      </button>
      <motion.div
        variants={menuVariant}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.4 }}
        className="fixed top-0 left-0 w-34 h-full bg-blue-600"
      >
        <ul className="p-4 text-white">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default SlidingMenu;
