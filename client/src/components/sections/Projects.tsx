import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A modern e-commerce solution with real-time inventory management.",
    image: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8",
  },
  {
    title: "Analytics Dashboard",
    description: "Data visualization platform for business intelligence.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
  },
  {
    title: "Social Network App",
    description: "Community platform with real-time messaging and content sharing.",
    image: "https://images.unsplash.com/photo-1739514984003-330f7c1d2007",
  },
  {
    title: "Task Management",
    description: "Collaborative project management tool for remote teams.",
    image: "https://images.unsplash.com/photo-1510759395231-72b17d622279",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground">
              Here are some of the projects I've worked on that showcase my skills and expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden h-full">
                  <CardContent className="p-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                  </CardContent>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <p className="text-muted-foreground">{project.description}</p>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
