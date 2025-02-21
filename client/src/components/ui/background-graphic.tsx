import { motion } from "framer-motion";

export const BackgroundGraphic = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        {/* Top-left circle */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl" />
        
        {/* Bottom-right circle */}
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-tl from-primary/20 to-transparent rounded-full blur-3xl" />
        
        {/* Center pattern */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-30">
          <div className="absolute inset-0 rotate-45 scale-75">
            <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
            <div className="absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
