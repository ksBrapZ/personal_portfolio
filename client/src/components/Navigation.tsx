import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function Navigation() {
  const [location] = useLocation();

  const links = [
    { href: "/#home", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#projects", label: "Projects" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <a className="text-xl font-bold">JD</a>
        </Link>
        
        <div className="hidden md:flex gap-8">
          {links.map(({ href, label }) => (
            <Link key={href} href={href}>
              <a className={cn(
                "transition-colors hover:text-primary",
                location === href && "text-primary font-medium"
              )}>
                {label}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
