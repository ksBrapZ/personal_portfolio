// seed-data.js - Extracted seed data for database initialization
// This file provides the initial data structure that can be used
// to populate the favorites database in production

export const seedData = {
  // Development tools, design software, and productivity applications
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

  // Physical products and equipment recommendations
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

  // Book recommendations with authors and categories
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

  // Influential people and thought leaders
  people: [
    { name: "Paul Graham", description: "Y Combinator co-founder and essayist", type: "Thought Leader" },
    { name: "Richard Feynman", description: "Physicist and educator", type: "Scientist" },
    { name: "Tim Ferriss", description: "Author and podcaster", type: "Thought Leader" },
    { name: "Ada Lovelace", description: "First computer programmer", type: "Pioneer" },
    { name: "Steve Jobs", description: "Apple co-founder", type: "Innovator" },
    { name: "Brené Brown", description: "Researcher and author on vulnerability", type: "Expert" },
    { name: "Grace Hopper", description: "Computer scientist and Navy Admiral", type: "Pioneer" },
    { name: "Seth Godin", description: "Marketing expert and author", type: "Thought Leader" },
    { name: "Carl Sagan", description: "Astronomer and science communicator", type: "Scientist" },
    { name: "Alan Turing", description: "Computer science pioneer", type: "Pioneer" },
    { name: "Jane Goodall", description: "Primatologist and conservationist", type: "Scientist" },
    { name: "Elon Musk", description: "Entrepreneur and engineer", type: "Innovator" },
    { name: "Marie Curie", description: "Physicist and chemist", type: "Scientist" },
    { name: "Naval Ravikant", description: "Entrepreneur and philosopher", type: "Thought Leader" },
    { name: "Annie Easley", description: "Computer scientist and mathematician", type: "Pioneer" }
  ]
};

export default { seedData }; 