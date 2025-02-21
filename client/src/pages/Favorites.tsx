import { motion } from "framer-motion";
import { BackButton } from "@/components/ui/back-button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const favorites = {
  tools: [
    { name: "VS Code", description: "Modern code editor with great extensions", type: "Development" },
    { name: "Figma", description: "Collaborative design tool", type: "Design" },
    { name: "Notion", description: "All-in-one workspace", type: "Productivity" },
  ],
  products: [
    { name: "Sony WH-1000XM4", description: "Noise-cancelling headphones", type: "Audio" },
    { name: "Kindle Oasis", description: "Premium e-reader", type: "Reading" },
    { name: "Peak Design Backpack", description: "Versatile camera bag", type: "Photography" },
  ],
  books: [
    { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", type: "Psychology" },
    { title: "Zero to One", author: "Peter Thiel", type: "Business" },
    { title: "Dune", author: "Frank Herbert", type: "Science Fiction" },
  ],
  people: [
    { name: "Naval Ravikant", description: "Angel investor & philosopher", type: "Thought Leader" },
    { name: "Richard Feynman", description: "Physicist & educator", type: "Scientist" },
    { name: "Annie Duke", description: "Decision strategist", type: "Expert" },
  ],
};

// Color mapping for different types
const typeColors: Record<string, { border: string; text: string }> = {
  Development: { border: "border-blue-500", text: "text-blue-500" },
  Design: { border: "border-purple-500", text: "text-purple-500" },
  Productivity: { border: "border-green-500", text: "text-green-500" },
  Audio: { border: "border-red-500", text: "text-red-500" },
  Reading: { border: "border-yellow-500", text: "text-yellow-500" },
  Photography: { border: "border-indigo-500", text: "text-indigo-500" },
  Psychology: { border: "border-pink-500", text: "text-pink-500" },
  Business: { border: "border-orange-500", text: "text-orange-500" },
  "Science Fiction": { border: "border-cyan-500", text: "text-cyan-500" },
  "Thought Leader": { border: "border-emerald-500", text: "text-emerald-500" },
  Scientist: { border: "border-violet-500", text: "text-violet-500" },
  Expert: { border: "border-amber-500", text: "text-amber-500" },
};

const TypeBadge = ({ type }: { type: string }) => {
  const colors = typeColors[type] || { border: "border-gray-500", text: "text-gray-500" };
  return (
    <Badge
      variant="outline"
      className={cn(
        "bg-background",
        colors.border,
        colors.text
      )}
    >
      {type}
    </Badge>
  );
};

export default function Favorites() {
  return (
    <div className="min-h-screen bg-background p-8">
      <BackButton />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto pt-16"
      >
        <h1 className="text-4xl font-bold mb-8">My Favorites</h1>
        <p className="text-muted-foreground mb-12">
          A curated collection of tools, products, books, and people that have influenced my journey.
        </p>

        <Tabs defaultValue="tools" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="tools">Tools</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="books">Books</TabsTrigger>
            <TabsTrigger value="people">People</TabsTrigger>
          </TabsList>

          <TabsContent value="tools" className="mt-6">
            <div className="space-y-6">
              {favorites.tools.map((item) => (
                <div key={item.name} className="flex items-start justify-between p-4 rounded-lg border">
                  <div className="space-y-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                  <TypeBadge type={item.type} />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="products" className="mt-6">
            <div className="space-y-6">
              {favorites.products.map((item) => (
                <div key={item.name} className="flex items-start justify-between p-4 rounded-lg border">
                  <div className="space-y-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                  <TypeBadge type={item.type} />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="books" className="mt-6">
            <div className="space-y-6">
              {favorites.books.map((item) => (
                <div key={item.title} className="flex items-start justify-between p-4 rounded-lg border">
                  <div className="space-y-1">
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">by {item.author}</p>
                  </div>
                  <TypeBadge type={item.type} />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="people" className="mt-6">
            <div className="space-y-6">
              {favorites.people.map((item) => (
                <div key={item.name} className="flex items-start justify-between p-4 rounded-lg border">
                  <div className="space-y-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                  <TypeBadge type={item.type} />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
}