import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { lazy, Suspense } from "react";

// Constants for animation to improve readability
const fadeInUpAnimation = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          {...fadeInUpAnimation}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Bio Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">About Me</h2>
            <p className="text-muted-foreground">
              With over 5 years of experience in web development, I specialize in creating 
              user-centric applications that solve real-world problems. My approach combines 
              technical expertise with creative problem-solving.
            </p>
            <p className="text-muted-foreground">
              When I'm not coding, you can find me exploring new technologies, contributing 
              to open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>

          {/* Profile Image Card with loading optimization */}
          <Suspense fallback={<div className="h-[300px] bg-muted animate-pulse rounded-lg" />}>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <img 
                  src="https://images.unsplash.com/photo-1573496799515-eebbb63814f2"
                  alt="Professional headshot"
                  className="w-full h-auto aspect-[4/3] object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </CardContent>
            </Card>
          </Suspense>
        </motion.div>
      </div>
    </section>
  );
}