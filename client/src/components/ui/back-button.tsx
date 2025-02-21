import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "./button";
import { motion } from "framer-motion";

export function BackButton() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 left-4 z-50"
    >
      <Button variant="ghost" size="icon" asChild>
        <Link href="/">
          <ArrowLeft className="h-4 w-4" />
        </Link>
      </Button>
    </motion.div>
  );
}
