"use client";

import { motion, useScroll, useTransform } from "motion/react";

const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <div className="h-[200vh] p-[20px] text-white">
      <motion.div
        className="fixed top-0 left-0 h-[5px] bg-red-500"
        style={{ width: lineWidth, transition: 'width 0.1s ease' }}
      />
      <div className="mt-[50px]">
        {[...Array(100)].map((_, i) => (
          <p key={i} className="mt-[20px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            similique consequatur, fugiat odio eos voluptate hic ut ab officiis
            quia corporis error? Ab error voluptatum numquam, fugiat natus
            incidunt labore molestias modi, eos facilis ea asperiores ipsum, at
            doloremque dolore sequi consequatur fugit? Quis sequi deleniti
            doloribus accusamus est unde?
          </p>
        ))}
      </div>
    </div>
  );
};

export default ScrollIndicator;
