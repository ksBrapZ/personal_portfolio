// ProfileMenu.tsx - User profile navigation component
// This component provides a dropdown menu with profile-related links and actions
// It displays a profile picture and provides quick access to social media and contact options

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "wouter";
import { ExternalLink, User, Mail, Twitter, Linkedin } from "lucide-react";

export function ProfileMenu() {
  return (
    // Fixed position container in top-right corner
    <div className="fixed top-4 right-4 z-50">
      <DropdownMenu>
        {/* Profile picture trigger for dropdown */}
        <DropdownMenuTrigger asChild>
          <Avatar className="h-10 w-10 cursor-pointer hover:opacity-80 transition-opacity">
            <AvatarImage src="/profile_pic.jpeg" alt="Profile" className="object-cover" loading="eager" />
            <AvatarFallback>K</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        {/* Dropdown menu with navigation links */}
        <DropdownMenuContent align="end" className="w-48">
          {/* Internal link to profile/story page */}
          <DropdownMenuItem asChild>
            <Link href="/story" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Profile</span>
            </Link>
          </DropdownMenuItem>
          {/* External social media links */}
          <DropdownMenuItem asChild>
            <a 
              href="https://x.com/keyanasapp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Twitter className="h-4 w-4" />
              <span>X (Twitter)</span>
              <ExternalLink className="h-3 w-3 ml-auto" />
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a 
              href="https://www.linkedin.com/keyanasapp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Linkedin className="h-4 w-4" />
              <span>LinkedIn</span>
              <ExternalLink className="h-3 w-3 ml-auto" />
            </a>
          </DropdownMenuItem>
          {/* Contact email link */}
          <DropdownMenuItem asChild>
            <a 
              href="mailto:keyana@getindigo.ai"
              className="flex items-center gap-2"
            >
              <Mail className="h-4 w-4" />
              <span>Email</span>
              <ExternalLink className="h-3 w-3 ml-auto" />
            </a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}