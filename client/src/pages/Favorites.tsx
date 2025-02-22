// Favorites.tsx - Curated collection display page
// This component displays categorized lists of favorite items (tools, products, books, people)
// It uses tabs for organization and includes color-coded badges for visual categorization

import { motion } from "framer-motion";
import { BackButton } from "@/components/ui/back-button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { BackgroundGraphic } from "@/components/ui/background-graphic";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useQuery } from "@tanstack/react-query";

// Color mapping for different item types
// Each type gets a unique border and text color for visual distinction
const typeColors: Record<string, { border: string; text: string }> = {
  Development: { border: "border-blue-500", text: "text-blue-500" },
  Design: { border: "border-purple-500", text: "text-purple-500" },
  Productivity: { border: "border-green-500", text: "text-green-500" },
  Audio: { border: "border-red-500", text: "text-red-500" },
  Reading: { border: "border-yellow-500", text: "text-yellow-500" },
  Photography: { border: "border-indigo-500", text: "text-indigo-500" },
  Psychology: { border: "border-pink-500", text: "text-pink-500" },
  Business: { border: "border-orange-500", text: "text-orange-500" },
  "Sci-Fi": { border: "border-cyan-500", text: "text-cyan-500" },
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

// TypeBadge component - Displays a colored badge for each item type
const TypeBadge = ({ type }: { type: string }) => {
  const colors = typeColors[type] || { border: "border-gray-500", text: "text-gray-500" };
  return (
    <Badge
      variant="outline"
      className={cn(
        "bg-background whitespace-nowrap",
        colors.border,
        colors.text
      )}
    >
      {type}
    </Badge>
  );
};

export default function Favorites() {
  // Data fetching for each category using React Query
  // Each query loads data for a specific category (tools, products, books, people)
  const { data: tools, isLoading: toolsLoading } = useQuery({
    queryKey: ["/api/favorites", "tools"],
    queryFn: async () => {
      const response = await fetch("/api/favorites?category=tools");
      if (!response.ok) throw new Error("Failed to fetch tools");
      return response.json();
    },
  });

  const { data: products, isLoading: productsLoading } = useQuery({
    queryKey: ["/api/favorites", "products"],
    queryFn: async () => {
      const response = await fetch("/api/favorites?category=products");
      if (!response.ok) throw new Error("Failed to fetch products");
      return response.json();
    },
  });

  const { data: books, isLoading: booksLoading } = useQuery({
    queryKey: ["/api/favorites", "books"],
    queryFn: async () => {
      const response = await fetch("/api/favorites?category=books");
      if (!response.ok) throw new Error("Failed to fetch books");
      return response.json();
    },
  });

  const { data: people, isLoading: peopleLoading } = useQuery({
    queryKey: ["/api/favorites", "people"],
    queryFn: async () => {
      const response = await fetch("/api/favorites?category=people");
      if (!response.ok) throw new Error("Failed to fetch people");
      return response.json();
    },
  });

  return (
    // Main container with background graphic
    <div className="min-h-screen bg-background p-8">
      <BackgroundGraphic />
      <BackButton />
      {/* Animated content container */}
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

        {/* Tab system for category navigation */}
        <Tabs defaultValue="tools" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="tools">Tools</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="books">Books</TabsTrigger>
            <TabsTrigger value="people">People</TabsTrigger>
          </TabsList>

          {/* Tools tab content */}
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
                {toolsLoading ? (
                  <TableRow>
                    <TableCell colSpan={3} className="text-center">Loading...</TableCell>
                  </TableRow>
                ) : tools?.map((item: any) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.name}</TableCell>
                    <TableCell>{item.description}</TableCell>
                    <TableCell><TypeBadge type={item.type} /></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>

          {/* Products tab content */}
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
                {productsLoading ? (
                  <TableRow>
                    <TableCell colSpan={3} className="text-center">Loading...</TableCell>
                  </TableRow>
                ) : products?.map((item: any) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.name}</TableCell>
                    <TableCell>{item.description}</TableCell>
                    <TableCell><TypeBadge type={item.type} /></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>

          {/* Books tab content */}
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
                {booksLoading ? (
                  <TableRow>
                    <TableCell colSpan={3} className="text-center">Loading...</TableCell>
                  </TableRow>
                ) : books?.map((item: any) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.name}</TableCell>
                    <TableCell>{item.metadata?.author || item.description}</TableCell>
                    <TableCell><TypeBadge type={item.type} /></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>

          {/* People tab content */}
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
                {peopleLoading ? (
                  <TableRow>
                    <TableCell colSpan={3} className="text-center">Loading...</TableCell>
                  </TableRow>
                ) : people?.map((item: any) => (
                  <TableRow key={item.id}>
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