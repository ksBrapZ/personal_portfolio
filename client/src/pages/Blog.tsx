import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CalendarIcon } from "lucide-react";
import { Link } from "wouter";
import { BackButton } from "@/components/ui/back-button";

const posts = [
  {
    title: "Building a Life with Intention",
    excerpt: "Thoughts on balancing startup life, outdoor adventures, and personal growth.",
    date: "February 21, 2025",
    slug: "building-life-with-intention"
  },
  {
    title: "The Tools That Shape Our Work",
    excerpt: "A deep dive into the software and gear that powers my daily workflow.",
    date: "February 18, 2025",
    slug: "tools-that-shape-work"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-background p-8">
      <BackButton />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto pt-16"
      >
        <h1 className="text-4xl font-bold mb-2">Writing</h1>
        <p className="text-lg text-muted-foreground mb-12">
          I write about what I'm learning, building, and exploring—from AI and startups 
          to motorcycles, climbing, and long-term thinking.
        </p>

        <div className="space-y-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group cursor-pointer hover:bg-muted/50 transition-colors">
                <Link href={`/blog/${post.slug}`}>
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <CalendarIcon className="h-4 w-4" />
                      {post.date}
                    </div>
                    <h2 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{post.excerpt}</p>
                  </CardContent>
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}