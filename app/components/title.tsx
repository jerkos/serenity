'use client';

import { AnimatePresence, motion } from "framer";
import { useEffect, useMemo, useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";


const TITLES = [['Complexity.', 'With Serenity.'],
['Pragmatic.', 'With Elegance.']
];

interface AnimatedTextProps {
  text: string[];
}

const WIDTH = 1030;

const AnimatedText = ({ text }: AnimatedTextProps) => {

  let variants = useMemo(() => ({
    hidden: {
      opacity: 0,
      y: '-1rem',
    },
    show: {
      skewX: ["0", "0", "0", "0", `${Math.random() * 32}deg`, `${Math.random() * 12}deg`, `${Math.random() * 42}deg`, `${Math.random() * 21}deg`, "0"],
      opacity: [1, 1, 1, 1, 0, 1, 0, 1, 1],
      scale: [1, 1, 1.42, 1.42, 1.42, 1.42, 1.38, 1.41, 1.32],
      letterSpacing: ['0', '0', '0.34rem', '0.34rem', '0.34rem', '0.34rem', '0.34rem', '0.34rem', '0.34rem'],
      transition: { times: [0.1, 0.5, 0.505, 0.8, 0.805, 0.81, 0.84, 0.845, 0.86], duration: 4.8, ease: "circInOut" },
    }
  }), []);

  const { width } = useWindowSize();

  if (width && width < WIDTH) {
    variants = {
      ...variants,
      show: {
        skewX: variants.show.skewX,
        opacity: variants.show.opacity,
        transition: variants.show.transition,
        scale: [],
        letterSpacing: []
      }
    }
  }

  const variants2 = {
    ...variants,
    show: {
      ...variants.show,
      opacity: [0, 1, 1, 1, 0, 1, 0, 1, 1],
      transition: { times: [0.3, 0.5, 0.505, 0.8, 0.805, 0.81, 0.84, 0.845, 0.86], duration: 4.8, ease: "circInOut" },
    }
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <AnimatePresence mode="popLayout">
        {
          text.map((t, i) =>
            <motion.span
              key={Math.random()}
              className={`${i === 0 ? 'mb-4' : undefined}`}
              variants={i === 0 ? variants : variants2}
              initial='hidden'
              animate={"show"}
              exit={{ opacity: 0, scale: 1, letterSpacing: '0' }}
            >
              {t}
            </motion.span>
          )
        }
      </AnimatePresence >
    </div>
  )
}

export const Title = () => {
  const [currentTitleIdx, setCurrentTitleIdx] = useState(1);

  useEffect(() => {
    const i = setTimeout(() => {
      setCurrentTitleIdx(prev => {
        return !!prev ? 0 : 1
      })
    }, 5000);
    return () => clearTimeout(i);
  });

  const title = TITLES[currentTitleIdx];
  return (
    <section className="my-8">
      <h1 className={`text-4xl font-semibold justify-center flex items-center`} style={{ height: '260px' }}>
        <AnimatedText text={title} />
      </h1>
    </section>
  )
};