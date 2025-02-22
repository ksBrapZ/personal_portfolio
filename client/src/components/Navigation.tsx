// Navigation.tsx - Main navigation component for the website
// This component provides a responsive dropdown menu for site navigation
// It uses Framer Motion for smooth animations and wouter for routing

import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navigation() {
  // Get current route location using wouter
  const [location] = useLocation();

  // Define navigation links for the entire application
  // This array can be easily extended with new routes
  const links = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Writing" },
    { href: "/favorites", label: "Favorites" },
  ];

  return (
    // Animated navigation container fixed to the top-right
    <motion.nav 
      className="fixed top-4 right-4 z-50"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Dropdown menu for mobile-first navigation */}
      <DropdownMenu>
        {/* Hamburger menu button */}
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Menu className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>

        {/* Dropdown content with navigation links */}
        <DropdownMenuContent align="end">
          {links.map(({ href, label }) => (
            <DropdownMenuItem key={href} asChild>
              <Link href={href}>
                {/* Highlight current page in navigation */}
                <span className={cn(
                  "block w-full",
                  location === href && "font-medium"
                )}>
                  {label}
                </span>
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </motion.nav>
  );
}