import { motion } from "framer-motion";
import { BackButton } from "@/components/ui/back-button";
import { ExternalLink, Mail, Twitter, Linkedin, Music, Gamepad2, GraduationCap, Plane, Brain, Rocket } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const chapters = [
  {
    title: "School Days – A Rebel Without a Cause",
    icon: <GraduationCap className="h-8 w-8" />,
    content: `I was a terrible student. Not because I wasn't capable, but because I didn't see the point. The rigid structure of school felt like a waste of time—except for two things: Music and Rugby. These were my real passions.

    Then, one teacher changed everything. They introduced me to logic, debate, ethics, and philosophy—a world where ideas had weight, arguments had structure, and everything could be questioned. I was hooked. This led me to apply to study philosophy at university, where I finally found something worth obsessing over.`
  },
  {
    title: "Philosophy, Poker, and Heavy Metal",
    icon: <Music className="h-8 w-8" />,
    content: `University transformed me. I went from a disengaged student to an academic powerhouse—driven not by grades, but by sheer curiosity. I fell in love with philosophy, devoured texts on ethics, consciousness, and logic, and thrived in intellectual debate.

    But philosophy wasn't my only obsession. I also started a heavy metal band—Crocadillapig, playing shows across the UK and Europe, became a serious poker player, and started my first business—a guitar & amp repair shop.`
  },
  {
    title: "PhD Fallthrough & A New Path",
    icon: <Plane className="h-8 w-8" />,
    content: `I was on track to start a PhD in Philosophy, but my funding fell through. Suddenly, I had to rethink everything.

    Instead of staying in academia, I joined OpenRoom Events, where I put on B2B forums—including the first veterinary event for the APAC region. Then, the pandemic hit. I saw how heavy-handed the UK's response was and decided I needed a change. I packed my bags and moved to Austin, Texas.`
  },
  {
    title: "The Tech Awakening",
    icon: <Gamepad2 className="h-8 w-8" />,
    content: `In Austin, I landed a role in partnerships at AppSumo, working directly with Noah Kagan. That's where I saw firsthand the scalable power of technology.

    Startups weren't just businesses—they were force multipliers, enabling a small team to have an outsized impact. After 9 months at AppSumo, my business partner and I launched ShopSwap, a collaborative growth network for eCommerce brands.`
  },
  {
    title: "Obsession with AI",
    icon: <Brain className="h-8 w-8" />,
    content: `A few months into my startup journey, GPT-3 was released, and it changed everything. I immediately saw its potential and became obsessed.

    At first, I focused on consumer AI tools, but I quickly realized something: The chatbot paradigm wasn't working for businesses. AI adoption was too fragmented, too ineffective. For AI to truly scale, fundamental changes were needed.`
  },
  {
    title: "Indigo AI – Building the Future",
    icon: <Rocket className="h-8 w-8" />,
    content: `That's why Corey and I founded Indigo AI—to solve the AI adoption problem for small businesses.

    We're 6 months in, and I couldn't be more excited about what we're building. The vision is massive, the market is ready, and we're moving fast.

    Everything I've done—philosophy, music, poker, startups, tech, and AI—has led me here. And we're just getting started.`
  }
];

export default function Story() {
  return (
    <div className="min-h-screen bg-background p-8">
      <BackButton />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto pt-16"
      >
        {/* Profile Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Avatar className="h-32 w-32 mx-auto mb-6">
              <AvatarImage src="attached_assets/profile_pic.png" className="object-cover" />
              <AvatarFallback>K</AvatarFallback>
            </Avatar>
          </motion.div>
          <h1 className="text-4xl font-bold mb-4">My Journey</h1>
          <div className="flex justify-center gap-4 mb-8">
            <Button variant="outline" size="icon" asChild>
              <a href="https://x.com/keyanasapp" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://www.linkedin.com/keyanasapp" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="mailto:keyana@getindigo.ai">
                <Mail className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        {/* Timeline */}
        <motion.div 
          className="relative space-y-0"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {chapters.map((chapter, index) => (
            <motion.div
              key={chapter.title}
              className="relative pl-12 pb-12 border-l-2 border-primary/20 last:border-l-0"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { 
                  opacity: 1, 
                  x: 0,
                  transition: {
                    duration: 0.6,
                    ease: "easeOut"
                  }
                }
              }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div 
                className="absolute left-[-17px] top-0 p-1 bg-background rounded-full border-2 border-primary"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                whileInView={{ 
                  scale: [1, 1.1, 1],
                  transition: {
                    duration: 1,
                    ease: "easeInOut",
                    times: [0, 0.5, 1],
                    repeat: Infinity,
                    repeatDelay: 2
                  }
                }}
                viewport={{ once: false }}
              >
                {chapter.icon}
              </motion.div>
              <motion.div 
                className="prose prose-sm dark:prose-invert"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      duration: 0.4,
                      delay: 0.2
                    }
                  }
                }}
              >
                <h2 className="text-2xl font-semibold mb-4">{chapter.title}</h2>
                {chapter.content.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="text-muted-foreground mb-4">
                    {paragraph.trim()}
                  </p>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}