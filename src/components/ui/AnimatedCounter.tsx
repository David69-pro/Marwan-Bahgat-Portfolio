import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface AnimatedCounterProps {
  from?: number;
  to: number;
  duration?: number;
  className?: string;
  suffix?: string;
}

export default function AnimatedCounter({
  from = 0,
  to,
  duration = 2,
  className = "",
  suffix = ""
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  
  const motionValue = useMotionValue(from);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
    duration: duration * 1000,
  });
  
  const [displayValue, setDisplayValue] = useState(from);

  useEffect(() => {
    if (inView) {
      motionValue.set(to);
    }
  }, [inView, to, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [springValue]);

  return (
    <span ref={ref} className={className}>
      {displayValue}{suffix}
    </span>
  );
}