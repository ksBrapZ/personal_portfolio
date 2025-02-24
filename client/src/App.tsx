// App.tsx - Root application component
// This component handles the main routing logic and application structure
// It includes separate routing for admin and public interfaces, and manages global state

import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Favorites from "@/pages/Favorites";
import Blog from "@/pages/Blog";
import Story from "@/pages/Story";
import { ProfileMenu } from "@/components/ProfileMenu";
import AdminPage from "@/pages/AdminPage";
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import { BackgroundGraphic } from "@/components/ui/background-graphic"

// Router component - Handles conditional routing based on domain/path
function Router() {
  // Check if we're on admin domain or path
  const isAdmin = window.location.host.startsWith('admin.') || window.location.pathname.startsWith('/admin');

  // Render admin routes if on admin domain/path
  if (isAdmin) {
    return (
      <Switch>
        <Route path="/" component={AdminPage} />
        <Route path="/admin" component={AdminPage} />
        <Route component={NotFound} />
      </Switch>
    );
  }

  // Render public routes for main site
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/favorites" component={Favorites} />
      <Route path="/blog" component={Blog} />
      <Route path="/story" component={Story} />
      <Route component={NotFound} />
    </Switch>
  );
}

// Main App component
function App() {
  // Check if we're on admin subdomain
  const isAdminDomain = window.location.host.startsWith('admin.');

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background relative">
        {/* Background graphic with explicit z-index */}
        <div className="absolute inset-0 z-0">
          <BackgroundGraphic />
        </div>
        
        {/* Theme toggle positioning will now work */}
        <div className="fixed bottom-4 right-4 z-50 flex items-center">
          <div className="mr-4 text-sm text-muted-foreground">
            Made with ❤️ by a non-technical primate with <a href="/favorites#tools" className="underline">AI tools</a>.
          </div>
          <ThemeToggle />
        </div>
        
        {/* Main content above background */}
        <QueryClientProvider client={queryClient}>
          <main className="container relative z-10">
            {!isAdminDomain && <ProfileMenu />}
            <Router />
          </main>
          <Toaster />
        </QueryClientProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
