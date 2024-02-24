import { motion } from "framer-motion";
import React from "react";
import { useWindowWidth } from "@react-hook/window-size";

export default function MarqueeFramerMotion() {
  const width = useWindowWidth();

  return (
    <motion.div
      initial={{}}
      animate={{
        x: [width, -width],
      }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        duration: 30,
        ease: "linear",
      }}
      className="flex overflow-hidden whitespace-nowrap bg-sky-200 shadow-xl rounded-xl items-center justify-center"
    >
      <h1 className="text-2xl text-center p-7">
        {"Today fresh Mai Mai Fish arrived. Grilled, you won't missed it!"}
      </h1>
    </motion.div>
  );
}
