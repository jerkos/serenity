'use client';

import { AnimatePresence, motion } from "framer";
import { useEffect, useMemo, useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";


const TITLES = ['Complexity. With Serenity.',
  'Pragmatic. With Elegance.'
];

interface AnimatedTextProps {
  text: string;
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
      scale: [1, 1, 2, 2, 2, 2, 2, 2, 2.12],
      letterSpacing: ['0', '0', '1.12rem', '1.12rem', '1.12rem', '1.12rem', '1.12rem', '1.12rem', '1.12rem'],
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

  return (
    <AnimatePresence mode="popLayout">
      {
        Array.from(text).map((char, index) => {
          return (
            <motion.span
              key={Math.random()}
              variants={variants}
              initial='hidden'
              animate={"show"}
              exit={{ opacity: 0, scale: 1, letterSpacing: '0', y: '1rem' }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>

          );
        })
      }
    </AnimatePresence >
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
  const { width } = useWindowSize();
  const size = width && width < WIDTH ? 'text-2xl' : 'text-4xl';
  return (
    <section className="my-4 ">
      <h1 className={`${size} font-semibold justify-center flex items-center`} style={{ height: '280px' }}>
        <AnimatedText text={title} />
      </h1>
    </section>
  )
};