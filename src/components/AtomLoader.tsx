"use client";

import { AnimatePresence, motion } from "framer-motion";
import Atom from "./Atom";

export default function AtomLoader({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-[9999] bg-[#050505]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Atom size={300} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
