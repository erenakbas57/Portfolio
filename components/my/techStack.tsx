"use client";


import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";
import { techStack } from "@/data/data";
import { iconComponents } from "./iconList";
import useMeasure  from "react-use-measure";

const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength - 1) + "." : text;
};

const TechStack: React.FC = () => {
  let [ ref,  {width}] = useMeasure();
  const xTranslation  = useMotionValue(0);
  
  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 16;

    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 20,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });
  }, [ xTranslation, width]);

  return (
    <motion.div className="mb-12 overflow-hidden">
      <h2 className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-6 uppercase tracking-wide">
        Teknolojiler
      </h2>
      <div
        className="flex gap-6 w-full whitespace-nowrap cursor-grab active:cursor-grabbing"
      >
        <motion.div
          className="flex gap-6"
          ref={ref}
          style={{ x: xTranslation }}
        >
          {[...techStack, ...techStack].map((tech, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center bg-orange-100 dark:bg-orange-900/50 rounded-xl shadow-lg w-24 h-24 justify-center border-2 border-orange-300 dark:border-orange-700 cursor-pointer"
            >
              <motion.div className="text-5xl mb-1">{iconComponents[tech.icon]}</motion.div>
              <span className="text-md  font-medium text-orange-600 dark:text-orange-400 text-center cursor-pointer truncate w-full">
                {truncateText(tech.name, 10)}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TechStack;
