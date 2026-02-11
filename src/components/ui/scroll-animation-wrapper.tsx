"use client";
import { motion, useInView, UseInViewOptions } from "framer-motion";
import { useRef } from "react";

interface ScrollAnimationWrapperProps {
  children: React.ReactNode;
  className?: string;
  viewOptions?: UseInViewOptions;
}

export default function ScrollAnimationWrapper({
  children,
  className,
  viewOptions,
}: ScrollAnimationWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2, ...viewOptions });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {
          opacity: 0,
          y: 50,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: "easeOut",
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
