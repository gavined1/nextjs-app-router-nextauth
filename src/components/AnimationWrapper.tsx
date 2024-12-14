'use client';

import { motion, AnimatePresence } from 'framer-motion';

type AnimationWrapperProps = {
  children: React.ReactNode;
};

export default function AnimationWrapper({ children }: AnimationWrapperProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
