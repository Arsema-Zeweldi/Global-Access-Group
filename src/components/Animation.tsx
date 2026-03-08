import { motion } from "framer-motion";
import React from "react";

interface FadeInLineProps {
  children: React.ReactNode;
  delay?: number;
}

const FadeInLine = ({ children, delay = 0 }: FadeInLineProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{
      duration: 0.8,
      delay: delay,
      ease: [0.21, 0.47, 0.32, 0.98],
    }}
  >
    {children}
  </motion.div>
);

export default FadeInLine;
