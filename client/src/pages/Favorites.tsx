// Favorites.tsx - Curated collection display page
// This component displays categorized lists of favorite items (tools, products, books, people)
// It uses tabs for organization and includes color-coded badges for visual categorization

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
        "whitespace-nowrap",
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
    <div className="min-h-screen bg-black text-white p-4 md:p-8 pb-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <BackButton />
        </div>
        
        <h1 className="text-4xl font-bold mb-4">My Favorites</h1>
        <p className="text-gray-400 mb-8">
          A curated collection of tools, products, books, and people that have influenced my journey.
        </p>
        
        <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 shadow-lg mb-16">
          <Tabs defaultValue="tools" className="w-full">
            <TabsList className="w-full grid grid-cols-4 bg-black rounded-none border-b border-gray-800 sticky top-0 z-10">
              <TabsTrigger value="tools" className="data-[state=active]:bg-gray-900 text-white">Tools</TabsTrigger>
              <TabsTrigger value="products" className="data-[state=active]:bg-gray-900 text-white">Products</TabsTrigger>
              <TabsTrigger value="books" className="data-[state=active]:bg-gray-900 text-white">Books</TabsTrigger>
              <TabsTrigger value="people" className="data-[state=active]:bg-gray-900 text-white">People</TabsTrigger>
            </TabsList>

            <TabsContent value="tools" className="p-0 m-0">
              <div className="overflow-y-auto max-h-[60vh]">
                <Table>
                  <TableHeader className="bg-black/50 sticky top-0 z-10">
                    <TableRow className="border-gray-800">
                      <TableHead className="text-gray-400">Name</TableHead>
                      <TableHead className="text-gray-400">Description</TableHead>
                      <TableHead className="text-gray-400 w-[100px]">Type</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {toolsLoading ? (
                      <TableRow className="border-gray-800">
                        <TableCell colSpan={3} className="text-center text-gray-500">Loading...</TableCell>
                      </TableRow>
                    ) : tools?.map((item: any) => (
                      <TableRow key={item.id} className="border-gray-800">
                        <TableCell className="font-medium text-white">{item.name}</TableCell>
                        <TableCell className="text-gray-300">{item.description}</TableCell>
                        <TableCell><TypeBadge type={item.type} /></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            <TabsContent value="products" className="p-0 m-0">
              <div className="overflow-y-auto max-h-[60vh]">
                <Table>
                  <TableHeader className="bg-black/50 sticky top-0 z-10">
                    <TableRow className="border-gray-800">
                      <TableHead className="text-gray-400">Name</TableHead>
                      <TableHead className="text-gray-400">Description</TableHead>
                      <TableHead className="text-gray-400 w-[100px]">Type</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {productsLoading ? (
                      <TableRow className="border-gray-800">
                        <TableCell colSpan={3} className="text-center text-gray-500">Loading...</TableCell>
                      </TableRow>
                    ) : products?.map((item: any) => (
                      <TableRow key={item.id} className="border-gray-800">
                        <TableCell className="font-medium text-white">{item.name}</TableCell>
                        <TableCell className="text-gray-300">{item.description}</TableCell>
                        <TableCell><TypeBadge type={item.type} /></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            <TabsContent value="books" className="p-0 m-0">
              <div className="overflow-y-auto max-h-[60vh]">
                <Table>
                  <TableHeader className="bg-black/50 sticky top-0 z-10">
                    <TableRow className="border-gray-800">
                      <TableHead className="text-gray-400">Title</TableHead>
                      <TableHead className="text-gray-400">Author</TableHead>
                      <TableHead className="text-gray-400 w-[100px]">Type</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {booksLoading ? (
                      <TableRow className="border-gray-800">
                        <TableCell colSpan={3} className="text-center text-gray-500">Loading...</TableCell>
                      </TableRow>
                    ) : books?.map((item: any) => (
                      <TableRow key={item.id} className="border-gray-800">
                        <TableCell className="font-medium text-white">{item.name}</TableCell>
                        <TableCell className="text-gray-300">{item.metadata?.author || item.description}</TableCell>
                        <TableCell><TypeBadge type={item.type} /></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            <TabsContent value="people" className="p-0 m-0">
              <div className="overflow-y-auto max-h-[60vh]">
                <Table>
                  <TableHeader className="bg-black/50 sticky top-0 z-10">
                    <TableRow className="border-gray-800">
                      <TableHead className="text-gray-400">Name</TableHead>
                      <TableHead className="text-gray-400">Description</TableHead>
                      <TableHead className="text-gray-400 w-[100px]">Type</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {peopleLoading ? (
                      <TableRow className="border-gray-800">
                        <TableCell colSpan={3} className="text-center text-gray-500">Loading...</TableCell>
                      </TableRow>
                    ) : people?.map((item: any) => (
                      <TableRow key={item.id} className="border-gray-800">
                        <TableCell className="font-medium text-white">{item.name}</TableCell>
                        <TableCell className="text-gray-300">{item.description}</TableCell>
                        <TableCell><TypeBadge type={item.type} /></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}