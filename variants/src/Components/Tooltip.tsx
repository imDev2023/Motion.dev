"use client";
import { motion } from "motion/react";
import { useState } from "react";

const tooltipVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

const Tooltip = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="relative inline-block">
      <button
        className="p-2 bg-red-500 text-white cursor-pointer"
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        Hover Over ME
      </button>

      {visible && (
        <motion.div
          className="absolute bg-gray-700 text-white p-2 rounded"
          variants={tooltipVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 1 }}
        >
          ToolTip Content
        </motion.div>
      )}
    </div>
  );
};

export default Tooltip;
