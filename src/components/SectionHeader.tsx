import React from 'react';
import { motion } from 'motion/react';

interface SectionHeaderProps {
  eyebrow?: string;
  h2: string;
  subtext?: string;
  center?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ eyebrow, h2, subtext, center = false }) => {
  return (
    <motion.div 
      className={`${center ? 'text-center max-w-[800px] mx-auto' : 'max-w-[700px]'} mb-12 md:mb-16 lg:mb-20`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {eyebrow && (
        <span className="text-[10px] md:text-[11px] text-text-secondary font-semibold tracking-[0.1em] uppercase block mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className="text-text-primary mb-6">{h2}</h2>
      {subtext && (
        <p className={`text-text-secondary text-[16px] md:text-lg leading-relaxed max-w-[640px] ${center ? 'mx-auto' : ''}`}>
          {subtext}
        </p>
      )}
    </motion.div>
  );
};
