// background-graphic.tsx - Interactive background animation component
// This component creates a dynamic, responsive background effect that follows cursor movement
// It uses Framer Motion for smooth animations and spring physics

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export const BackgroundGraphic = () => {
  // Track cursor position with motion values
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  // Create smooth spring animation for cursor following
  // Lower stiffness = more fluid movement, higher damping = less oscillation
  const springX = useSpring(cursorX, { stiffness: 50, damping: 10 });
  const springY = useSpring(cursorY, { stiffness: 50, damping: 10 });

  // Set up mouse movement tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    // Container that covers the entire viewport
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        {/* Main cursor-following gradient */}
        <motion.div
          style={{
            x: springX,
            y: springY,
            translateX: "-50%",
            translateY: "-50%"
          }}
          className="absolute w-[600px] h-[600px] bg-gradient-to-r from-primary/40 via-primary/20 to-transparent rounded-full blur-3xl"
        />

        {/* Static decorative elements */}
        {/* Top-left gradient blob */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl" />
        {/* Bottom-right gradient blob */}
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-tl from-primary/20 to-transparent rounded-full blur-3xl" />

        {/* Centered cross pattern */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-30">
          <div className="absolute inset-0 rotate-45 scale-75">
            {/* Vertical line */}
            <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
            {/* Horizontal line */}
            <div className="absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};