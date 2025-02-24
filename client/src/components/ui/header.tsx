import { ThemeToggle } from "@/components/theme-toggle"
import { Link } from "wouter"

export function Header() {
  return (
    <header className="container py-4 flex justify-between items-center">
      <nav className="flex gap-4 items-center">
        <Link href="/">
          <a className="hover:opacity-80">Home</a>
        </Link>
        <Link href="/blog">
          <a className="hover:opacity-80">Writing</a>
        </Link>
        <Link href="/favorites">
          <a className="hover:opacity-80">Favorites</a>
        </Link>
      </nav>
      <ThemeToggle />
    </header>
  )
} 