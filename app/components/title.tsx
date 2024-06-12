'use client';

import { AnimatePresence, delay, motion, useAnimation, useAnimationControls } from "framer";
import { useEffect, useState } from "react";

const TITLES = ['Complexity. With Serenity.',
  'Pragmatic. With Elegance.'
];

interface AnimatedTextProps {
  text: string;
}

const AnimatedText = ({ text }: AnimatedTextProps) => {
  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: '-1rem',
    },
    visible: {
      opacity: 1,
      y: '0rem',
    },
    scaled: {
      scale: 2,
      letterSpacing: '1.3rem',
      transition: {
        delay: 2.5,
        duration: 0.05,
      }
    },
  };

  const variants = {
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
  }

  return (
    <AnimatePresence mode="popLayout">
      {
        Array.from(text).map((char, index) => {
          return (
            <motion.span
              key={Math.random()}
              variants={variants}
              //initial='hidden'
              initial='hidden'
              animate={"show"} //{['visible', 'scaled']}
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
  return (
    <section className="my-4 ">
      <h1 className="text-4xl font-semibold justify-center flex items-center" style={{ height: '380px' }}>
        <AnimatedText text={title} />
      </h1>
    </section>
  )
};