import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Book, Star } from "lucide-react";

export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center bg-background text-foreground">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-8"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Hi, I'm Keyana 👋
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          I build things, break things, and obsess over making them better. As the Co-Founder & CEO of Indigo AI, I'm working to bring AI's full potential to small businesses. When I'm not deep in startup mode, you'll find me wrenching on my 4Runner and DR650, climbing in the mountains, or getting lost in a good book.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild variant="default" className="group">
            <Link href="/blog" className="flex items-center gap-2">
              <Book className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              Read My Writing
            </Link>
          </Button>
          <Button asChild variant="outline" className="group">
            <Link href="/favorites" className="flex items-center gap-2">
              <Star className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              View My Favorites
            </Link>
          </Button>
        </div>
      </motion.div>
    </main>
  );
}