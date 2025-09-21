"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const CreativePage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const variants = {
    hidden: { opacity: 0, y: 100 }, // neeche se andar aayega
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <div
      ref={ref}
      className="h-[80vh] sticky top-0 bg-black flex items-center justify-center px-4"
    >
      <motion.h1
        className="text-white text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-light tracking-wider text-center"
        initial="hidden"
        animate={controls}
        variants={variants}
      >
        Creative
      </motion.h1>
    </div>
  );
};

export default CreativePage;
