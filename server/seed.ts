import { storage } from "./storage";
import { type InsertFavorite } from "@shared/schema";

const seedData = {
  tools: [
    { name: "VS Code", description: "Modern code editor with great extensions", type: "Development" },
    { name: "Figma", description: "Collaborative design tool", type: "Design" },
    { name: "Notion", description: "All-in-one workspace", type: "Productivity" },
    // ... remaining tools
  ],
  products: [
    { name: "Sony WH-1000XM4", description: "Noise-cancelling headphones", type: "Audio" },
    { name: "Kindle Oasis", description: "Premium e-reader", type: "Reading" },
    { name: "Peak Design Backpack", description: "Versatile camera bag", type: "Photography" },
    // ... remaining products
  ],
  books: [
    { name: "Thinking, Fast and Slow", description: "By Daniel Kahneman", type: "Psychology" },
    { name: "Zero to One", description: "By Peter Thiel", type: "Business" },
    { name: "Dune", description: "By Frank Herbert", type: "Sci-Fi" },
    // ... remaining books
  ],
  people: [
    { name: "Naval Ravikant", description: "Angel investor & philosopher", type: "Thought Leader" },
    { name: "Richard Feynman", description: "Physicist & educator", type: "Scientist" },
    { name: "Annie Duke", description: "Decision strategist", type: "Expert" },
    // ... remaining people
  ],
};

async function seedDatabase() {
  try {
    // Seed tools
    for (const tool of seedData.tools) {
      const favorite: InsertFavorite = {
        name: tool.name,
        description: tool.description,
        category: "tools",
        type: tool.type,
      };
      await storage.createFavorite(favorite);
    }

    // Seed products
    for (const product of seedData.products) {
      const favorite: InsertFavorite = {
        name: product.name,
        description: product.description,
        category: "products",
        type: product.type,
      };
      await storage.createFavorite(favorite);
    }

    // Seed books
    for (const book of seedData.books) {
      const favorite: InsertFavorite = {
        name: book.name,
        description: book.description,
        category: "books",
        type: book.type,
        metadata: { author: book.description.replace("By ", "") }
      };
      await storage.createFavorite(favorite);
    }

    // Seed people
    for (const person of seedData.people) {
      const favorite: InsertFavorite = {
        name: person.name,
        description: person.description,
        category: "people",
        type: person.type,
      };
      await storage.createFavorite(favorite);
    }

    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}

seedDatabase();
