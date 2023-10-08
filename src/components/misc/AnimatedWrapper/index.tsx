"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 1, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.6 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
