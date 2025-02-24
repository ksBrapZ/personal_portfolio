import { z } from "zod";

export const schema = {
  blogPostSchema: z.object({
    title: z.string().min(1, "Title is required"),
    content: z.string().min(1, "Content is required"),
    slug: z.string().min(1, "Slug is required"),
    excerpt: z.string(),
    featuredImage: z.string(),
  }),

  favoriteItemSchema: z.object({
    name: z.string().min(1, "Name is required"),
    description: z.string().min(1, "Description is required"),
    category: z.enum(["tools", "products", "books", "people"]),
    type: z.string().min(1, "Type is required"),
    hyperlink: z.string().url().optional(),
    metadata: z.record(z.any()).optional(),
  })
}; 