import { motion } from "framer-motion";
import { BackButton } from "@/components/ui/back-button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const favorites = {
  tools: [
    { name: "VS Code", description: "Modern code editor with great extensions", type: "Development" },
    { name: "Figma", description: "Collaborative design tool", type: "Design" },
    { name: "Notion", description: "All-in-one workspace", type: "Productivity" },
    { name: "Docker", description: "Container platform", type: "Development" },
    { name: "GitHub", description: "Version control platform", type: "Development" },
    { name: "Sketch", description: "Digital design toolkit", type: "Design" },
    { name: "Adobe XD", description: "UI/UX design tool", type: "Design" },
    { name: "Slack", description: "Team communication platform", type: "Productivity" },
    { name: "Trello", description: "Project management tool", type: "Productivity" },
    { name: "PostMan", description: "API development environment", type: "Development" },
    { name: "IntelliJ IDEA", description: "Java IDE", type: "Development" },
    { name: "Adobe Photoshop", description: "Image editing software", type: "Design" },
    { name: "Asana", description: "Project management platform", type: "Productivity" },
    { name: "Terminal", description: "Command line interface", type: "Development" },
    { name: "Miro", description: "Online whiteboard platform", type: "Design" },
  ],
  products: [
    { name: "Sony WH-1000XM4", description: "Noise-cancelling headphones", type: "Audio" },
    { name: "Kindle Oasis", description: "Premium e-reader", type: "Reading" },
    { name: "Peak Design Backpack", description: "Versatile camera bag", type: "Photography" },
    { name: "MacBook Pro", description: "Professional laptop", type: "Computing" },
    { name: "iPad Pro", description: "Versatile tablet", type: "Computing" },
    { name: "Bose QC35", description: "Wireless headphones", type: "Audio" },
    { name: "Canon R5", description: "Mirrorless camera", type: "Photography" },
    { name: "Kindle Paperwhite", description: "E-reader with backlight", type: "Reading" },
    { name: "AirPods Pro", description: "Wireless earbuds", type: "Audio" },
    { name: "Dell XPS", description: "Premium laptop", type: "Computing" },
    { name: "Sony A7III", description: "Full-frame camera", type: "Photography" },
    { name: "reMarkable 2", description: "E-ink tablet", type: "Reading" },
    { name: "Herman Miller Aeron", description: "Ergonomic chair", type: "Office" },
    { name: "LG Ultrafine", description: "4K monitor", type: "Computing" },
    { name: "Rode NT-USB", description: "USB microphone", type: "Audio" },
  ],
  books: [
    { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", type: "Psychology" },
    { title: "Zero to One", author: "Peter Thiel", type: "Business" },
    { title: "Dune", author: "Frank Herbert", type: "Science Fiction" },
    { title: "Sapiens", author: "Yuval Noah Harari", type: "History" },
    { title: "The Lean Startup", author: "Eric Ries", type: "Business" },
    { title: "1984", author: "George Orwell", type: "Science Fiction" },
    { title: "Deep Work", author: "Cal Newport", type: "Productivity" },
    { title: "Atomic Habits", author: "James Clear", type: "Psychology" },
    { title: "The Design of Everyday Things", author: "Don Norman", type: "Design" },
    { title: "Snow Crash", author: "Neal Stephenson", type: "Science Fiction" },
    { title: "Good to Great", author: "Jim Collins", type: "Business" },
    { title: "The Power of Now", author: "Eckhart Tolle", type: "Psychology" },
    { title: "Foundation", author: "Isaac Asimov", type: "Science Fiction" },
    { title: "Start with Why", author: "Simon Sinek", type: "Business" },
    { title: "The Pragmatic Programmer", author: "Dave Thomas", type: "Technology" },
  ],
  people: [
    { name: "Naval Ravikant", description: "Angel investor & philosopher", type: "Thought Leader" },
    { name: "Richard Feynman", description: "Physicist & educator", type: "Scientist" },
    { name: "Annie Duke", description: "Decision strategist", type: "Expert" },
    { name: "Ada Lovelace", description: "First computer programmer", type: "Pioneer" },
    { name: "Marie Curie", description: "Physics & chemistry pioneer", type: "Scientist" },
    { name: "Steve Jobs", description: "Apple co-founder", type: "Innovator" },
    { name: "Alan Turing", description: "Computer science pioneer", type: "Pioneer" },
    { name: "Grace Hopper", description: "Computer programming pioneer", type: "Pioneer" },
    { name: "Elon Musk", description: "Technology entrepreneur", type: "Innovator" },
    { name: "Barbara Liskov", description: "Computer scientist", type: "Pioneer" },
    { name: "Tim Berners-Lee", description: "World Wide Web inventor", type: "Pioneer" },
    { name: "Margaret Hamilton", description: "Software engineering pioneer", type: "Pioneer" },
    { name: "Nikola Tesla", description: "Electrical engineer", type: "Innovator" },
    { name: "Carl Sagan", description: "Astronomer & educator", type: "Scientist" },
    { name: "Jane Goodall", description: "Primatologist & environmentalist", type: "Scientist" },
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
  Pioneer: { border: "border-teal-500", text: "text-teal-500" },
  Innovator: { border: "border-rose-500", text: "text-rose-500" },
  Computing: { border: "border-slate-500", text: "text-slate-500" },
  Technology: { border: "border-zinc-500", text: "text-zinc-500" },
  History: { border: "border-neutral-500", text: "text-neutral-500" },
  Office: { border: "border-stone-500", text: "text-stone-500" },
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
        className="max-w-6xl mx-auto pt-16"
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
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead className="w-[100px]">Type</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {favorites.tools.map((item) => (
                  <TableRow key={item.name}>
                    <TableCell className="font-medium">{item.name}</TableCell>
                    <TableCell>{item.description}</TableCell>
                    <TableCell><TypeBadge type={item.type} /></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>

          <TabsContent value="products" className="mt-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead className="w-[100px]">Type</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {favorites.products.map((item) => (
                  <TableRow key={item.name}>
                    <TableCell className="font-medium">{item.name}</TableCell>
                    <TableCell>{item.description}</TableCell>
                    <TableCell><TypeBadge type={item.type} /></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>

          <TabsContent value="books" className="mt-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Author</TableHead>
                  <TableHead className="w-[100px]">Type</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {favorites.books.map((item) => (
                  <TableRow key={item.title}>
                    <TableCell className="font-medium">{item.title}</TableCell>
                    <TableCell>{item.author}</TableCell>
                    <TableCell><TypeBadge type={item.type} /></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>

          <TabsContent value="people" className="mt-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead className="w-[100px]">Type</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {favorites.people.map((item) => (
                  <TableRow key={item.name}>
                    <TableCell className="font-medium">{item.name}</TableCell>
                    <TableCell>{item.description}</TableCell>
                    <TableCell><TypeBadge type={item.type} /></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
}