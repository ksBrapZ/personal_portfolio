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
    <div className="fixed top-4 right-4 z-50">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="h-9 w-9 cursor-pointer hover:opacity-80 transition-opacity">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>K</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuItem asChild>
            <Link href="/story" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>My Story</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a 
              href="https://twitter.com/username" 
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
              href="https://linkedin.com/in/username" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Linkedin className="h-4 w-4" />
              <span>LinkedIn</span>
              <ExternalLink className="h-3 w-3 ml-auto" />
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a 
              href="mailto:email@example.com"
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