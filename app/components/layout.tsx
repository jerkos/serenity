'use client'
import { AnimatePresence, motion } from "framer";
import Footer from "./footer";
import { Navbar } from "./nav";

const x = {
  initial: { x: 300, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: 300, opacity: 0 },
}

const y = {
  initial: { y: 300, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: 300, opacity: 0 },
}

export default function L({ children }) {
  const r = Math.random() * 2
  const { initial, animate, exit } = r > 1 ? x : y;
  return (
    <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
      <AnimatePresence mode="wait">
        <motion.div
          key={"x"}
          initial={initial}
          animate={animate}
          exit={exit}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 20,
          }}
        >
          <Navbar />
          {children}
          <Footer />
        </motion.div>
      </AnimatePresence>
    </main>
  );

}