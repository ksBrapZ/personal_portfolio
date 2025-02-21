import { storage } from "./storage";
import { type InsertFavorite, type InsertPost } from "@shared/schema";

const seedData = {
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
    { name: "Miro", description: "Online whiteboard platform", type: "Design" }
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
    { name: "Rode NT-USB", description: "USB microphone", type: "Audio" }
  ],
  books: [
    { name: "Thinking, Fast and Slow", description: "By Daniel Kahneman", type: "Psychology" },
    { name: "Zero to One", description: "By Peter Thiel", type: "Business" },
    { name: "Dune", description: "By Frank Herbert", type: "Sci-Fi" },
    { name: "Sapiens", description: "By Yuval Noah Harari", type: "History" },
    { name: "The Lean Startup", description: "By Eric Ries", type: "Business" },
    { name: "1984", description: "By George Orwell", type: "Sci-Fi" },
    { name: "Deep Work", description: "By Cal Newport", type: "Productivity" },
    { name: "Atomic Habits", description: "By James Clear", type: "Psychology" },
    { name: "The Design of Everyday Things", description: "By Don Norman", type: "Design" },
    { name: "Snow Crash", description: "By Neal Stephenson", type: "Sci-Fi" },
    { name: "Good to Great", description: "By Jim Collins", type: "Business" },
    { name: "The Power of Now", description: "By Eckhart Tolle", type: "Psychology" },
    { name: "Foundation", description: "By Isaac Asimov", type: "Sci-Fi" },
    { name: "Start with Why", description: "By Simon Sinek", type: "Business" },
    { name: "The Pragmatic Programmer", description: "By Dave Thomas", type: "Technology" }
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
    { name: "Jane Goodall", description: "Primatologist & environmentalist", type: "Scientist" }
  ],
  posts: [
    {
      title: "Building a Life with Intention",
      content: `
# Building a Life with Intention

Living with intention means making conscious choices about how we spend our time, energy, and resources. It's about aligning our daily actions with our core values and long-term goals.

## The Power of Intentional Living

When we live intentionally, we:

- Make decisions that align with our values
- Focus on what truly matters
- Reduce stress and anxiety
- Create meaningful relationships
- Achieve our goals more effectively

## Practical Steps for Intentional Living

### 1. Define Your Values

Start by identifying what matters most to you. Your values serve as a compass for decision-making and help you stay true to yourself.

### 2. Set Clear Goals

Transform your values into actionable goals. Make them SMART:
- Specific
- Measurable
- Achievable
- Relevant
- Time-bound

### 3. Create Daily Rituals

Establish routines that support your intentions:
- Morning meditation
- Regular exercise
- Mindful eating
- Quality time with loved ones
- Continuous learning

## The Role of Technology

In our digital age, technology can either support or hinder intentional living. Choose tools and platforms that:

1. Enhance productivity
2. Foster meaningful connections
3. Support personal growth
4. Minimize distractions

## Conclusion

Building a life with intention is a journey, not a destination. It requires constant reflection, adjustment, and commitment to growth.

Remember: Small, consistent actions aligned with your values create meaningful change over time.`,
      slug: "building-life-with-intention",
      authorId: 1,
      publishedAt: "2025-02-21T12:00:00Z",
      excerpt: "Thoughts on balancing startup life, outdoor adventures, and personal growth.",
      featuredImage: "https://images.unsplash.com/photo-1493612276216-ee3925520721"
    },
    {
      title: "The Tools That Shape Our Work",
      content: `
# The Tools That Shape Our Work

The tools we use fundamentally shape how we think and work. From development environments to productivity apps, our choice of tools can significantly impact our efficiency and creativity.

## Development Tools

### Code Editors

\`\`\`javascript
// Example of clean, well-formatted code
function optimizeWorkflow(tools) {
  return tools.reduce((efficiency, tool) => {
    return efficiency * tool.productivity;
  }, 1);
}
\`\`\`

Key features to look for:
- Syntax highlighting
- Intelligent code completion
- Git integration
- Extension ecosystem

### Version Control

Best practices for Git workflow:
1. Use meaningful commit messages
2. Branch for new features
3. Review code thoroughly
4. Maintain clean history

## Productivity Suite

Essential tools for maximum productivity:

### Task Management
- Project tracking
- Time management
- Team collaboration

### Communication
- Real-time chat
- Video conferencing
- Documentation

## Hardware Considerations

Investing in quality hardware:

1. Multi-monitor setup
2. Ergonomic peripherals
3. Sufficient processing power
4. Reliable backup solutions

## Conclusion

The right tools amplify our capabilities and make complex tasks manageable. Choose wisely and invest time in mastering your toolset.`,
      slug: "tools-that-shape-work",
      authorId: 1,
      publishedAt: "2025-02-18T15:30:00Z",
      excerpt: "A deep dive into the software and gear that powers my daily workflow.",
      featuredImage: "https://images.unsplash.com/photo-1516387938699-a93567ec168e"
    }
  ]
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

    // Seed blog posts
    for (const post of seedData.posts) {
      const blogPost: InsertPost = {
        title: post.title,
        content: post.content,
        slug: post.slug,
        authorId: post.authorId,
        publishedAt: post.publishedAt,
        excerpt: post.excerpt,
        featuredImage: post.featuredImage,
      };
      await storage.createPost(blogPost);
    }

    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}

seedDatabase();