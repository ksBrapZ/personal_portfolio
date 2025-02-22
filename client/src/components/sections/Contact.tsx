// Contact.tsx - Contact information display section
// This component shows contact details in visually appealing cards with icons
// It uses Framer Motion for smooth animations and Lucide icons for visual elements

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  // Contact information data structure
  // Each item includes an icon, title, and content to be displayed
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      content: "john.doe@example.com",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      content: "+1 (555) 123-4567",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      content: "San Francisco, CA",
    },
  ];

  return (
    // Section container with subtle background
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Main content container with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          {/* Section header with title and description */}
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-muted-foreground">
              Interested in working together? Feel free to reach out through any of the channels below.
            </p>
          </div>

          {/* Contact cards grid with responsive layout */}
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              // Individual contact card with staggered animation
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader className="text-center">
                    {/* Icon container with background */}
                    <div className="mx-auto mb-4 p-2 bg-primary/10 rounded-full">
                      {info.icon}
                    </div>
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-muted-foreground">
                    {info.content}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}