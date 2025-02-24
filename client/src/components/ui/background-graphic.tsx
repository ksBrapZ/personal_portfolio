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
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        {/* Test element to verify positioning */}
        <div className="absolute inset-0 bg-blue-500/5" />
        
        {/* Main cursor-following gradient */}
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            x: springX,
            y: springY,
          }}
          className="w-[600px] h-[600px] bg-blue-500/15 dark:bg-blue-500/10 rounded-full blur-3xl"
        />

        {/* Static corner gradients */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-500/15 dark:bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-500/15 dark:bg-blue-500/10 rounded-full blur-3xl" />

        {/* Grid pattern - lighter in light mode, darker in dark mode */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.05)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </motion.div>
    </div>
  );
};