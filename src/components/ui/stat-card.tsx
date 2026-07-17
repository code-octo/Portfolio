"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface StatCardProps {
  value: string;
  label: string;
  desc: string;
  index: number;
}

function AnimatedValue({ value }: { value: string }) {
  const [displayed, setDisplayed] = useState("");
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!ref.current || hasAnimated.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const numValue = parseInt(value);
          if (!isNaN(numValue)) {
            let start = 0;
            const duration = 1500;
            const step = Math.ceil(numValue / 60);
            const timer = setInterval(() => {
              start += step;
              if (start >= numValue) {
                setDisplayed(value);
                clearInterval(timer);
              } else {
                setDisplayed(start.toString());
              }
            }, duration / (numValue / step));
          } else {
            setDisplayed(value);
          }
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref}>{displayed || "0"}</span>;
}

export function StatCard({ value, label, desc, index }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass rounded-2xl p-6 text-center group hover:bg-surface-elevated/80 transition-colors duration-300"
    >
      <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">
        {isNaN(parseInt(value)) ? value : <AnimatedValue value={value} />}
      </div>
      <div className="text-sm font-medium text-text-primary mb-0.5">
        {label}
      </div>
      <div className="text-xs text-text-muted">{desc}</div>
    </motion.div>
  );
}
