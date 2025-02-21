import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground p-6 md:p-12 flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto space-y-24"
      >
        {/* Hero Section */}
        <section className="space-y-4">
          <Badge variant="outline" className="mb-4">
            Welcome to my corner of the web
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            John Doe
          </h1>
          <p className="text-xl text-muted-foreground">
            Product developer crafting digital experiences
          </p>
          <div className="pt-4">
            <Button variant="default" className="group">
              View Projects 
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </section>

        {/* About Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">About</h2>
          <p className="text-muted-foreground leading-relaxed">
            Working at the intersection of design and technology. 
            I specialize in creating user-centric applications that solve 
            real-world problems with clean, maintainable code.
          </p>
        </section>

        {/* Projects Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Selected Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project Cards would go here */}
          </div>
        </section>

        {/* Contact Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Get in Touch</h2>
          <p className="text-muted-foreground">
            Got an interesting project in mind? Let's build something together.
          </p>
          <div className="flex items-center gap-4">
            <Button variant="outline">
              <a href="mailto:john@example.com">Email Me</a>
            </Button>
            <Button variant="ghost">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Button>
          </div>
        </section>
      </motion.div>
    </div>
  );
}