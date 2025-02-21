import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BackButton } from "@/components/ui/back-button";

const favorites = [
  {
    category: "Software Tools",
    items: [
      { name: "VS Code", description: "My primary code editor" },
      { name: "Docker", description: "Container platform for development" },
      { name: "Figma", description: "Design and prototyping" }
    ]
  },
  {
    category: "Gear",
    items: [
      { name: "4Runner", description: "Adventure-ready SUV" },
      { name: "DR650", description: "Dual-sport motorcycle" },
      { name: "Climbing Gear", description: "Various climbing equipment" }
    ]
  }
];

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
          This is my favorites page, where I keep a running list of the best things I've found—whether it's game-changing software, rock-solid tools, or everyday essentials I swear by. If it's here, I've tested it, used it, and would recommend it without hesitation.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {favorites.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {category.items.map((item) => (
                      <li key={item.name}>
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}