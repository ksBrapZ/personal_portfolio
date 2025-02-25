// Blog.tsx - Blog posts listing page
// This component displays a list of blog posts with animations and responsive design
// It uses Framer Motion for animations and wouter for routing

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CalendarIcon } from "lucide-react";
import { Link } from "wouter";
import { BackButton } from "@/components/ui/back-button";

// Sample blog post data
// TODO: Replace with actual data from API
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
  },
  {
    title: "The Future of AI in Small Business",
    excerpt: "How AI is transforming small businesses and what entrepreneurs need to know.",
    date: "February 15, 2025",
    slug: "ai-small-business-future"
  },
  {
    title: "Remote Work Culture: Building Connection",
    excerpt: "Creating strong team bonds when everyone works from different locations.",
    date: "February 10, 2025",
    slug: "remote-work-culture"
  },
  {
    title: "Motorcycle Maintenance for Beginners",
    excerpt: "Essential tips for keeping your motorcycle in top condition with minimal tools.",
    date: "February 5, 2025",
    slug: "motorcycle-maintenance-beginners"
  },
  {
    title: "Climbing My First 5.10: A Journey",
    excerpt: "Personal reflections on the physical and mental challenges of rock climbing progression.",
    date: "January 28, 2025",
    slug: "climbing-first-510"
  },
  {
    title: "Tech Stack Decisions for Startups",
    excerpt: "How to choose the right technologies when building your startup from scratch.",
    date: "January 21, 2025",
    slug: "startup-tech-stack"
  },
  {
    title: "Books That Changed My Thinking",
    excerpt: "A curated list of books that fundamentally altered my perspective on business and life.",
    date: "January 15, 2025",
    slug: "transformative-books"
  },
  {
    title: "Finding Flow State in Creative Work",
    excerpt: "Techniques for entering and maintaining deep focus during creative projects.",
    date: "January 8, 2025",
    slug: "creative-flow-state"
  },
  {
    title: "AI Ethics: Where We Stand Today",
    excerpt: "Exploring the current ethical considerations in artificial intelligence development.",
    date: "January 1, 2025",
    slug: "ai-ethics-today"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8 pb-16">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <BackButton />
        </div>
        
        <h1 className="text-4xl font-bold mb-4">Writing</h1>
        <p className="text-gray-400 mb-8">
          I write about what I'm learning, building, and exploring—from AI and startups 
          to motorcycles, climbing, and long-term thinking.
        </p>
        
        <div className="mb-16 max-h-[65vh] overflow-y-auto pr-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post, index) => (
              <Card key={post.slug} className="group cursor-pointer bg-gray-900 border-gray-800 hover:bg-gray-800 transition-colors overflow-hidden h-full">
                <Link href={`/blog/${post.slug}`}>
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <CalendarIcon className="h-4 w-4" />
                      {post.date}
                    </div>
                    <h2 className="text-2xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h2>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400">{post.excerpt}</p>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}