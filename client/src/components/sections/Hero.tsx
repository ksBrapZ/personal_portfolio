import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDownCircle } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="min-h-[calc(100vh-4rem)] flex items-center">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm John Doe
            <br />
            Software Developer
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            I craft elegant solutions to complex problems with clean, maintainable code.
          </p>
          <Button asChild>
            <a href="#about" className="flex items-center gap-2">
              Learn more <ArrowDownCircle size={18} />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
