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
import { ThemeProvider } from "@/components/theme-provider";
import { BackgroundGraphic } from "@/components/ui/background-graphic";

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

  // Render public routes
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/favorites" component={Favorites} />
      <Route path="/blog" component={Blog} />
      <Route path="/story" component={Story} />
      <Route path="/blog/:slug" component={Story} />
      <Route component={NotFound} />
    </Switch>
  );
}

// Main App component
function App() {
  // Check if we're on admin subdomain
  const isAdminDomain = window.location.host.startsWith('admin.');
  
  // Check if we're on a content page (not home)
  const isContentPage = window.location.pathname !== "/" && window.location.pathname !== "";

  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen bg-black">
        {/* Background graphic for home page */}
        {!isContentPage && (
          <div className="fixed inset-0 -z-10">
            <BackgroundGraphic />
          </div>
        )}
        
        {/* Main content */}
        <QueryClientProvider client={queryClient}>
          <main className="relative">
            {!isAdminDomain && <ProfileMenu />}
            <Router />
          </main>
          <Toaster />
        </QueryClientProvider>
        
        {/* Footer */}
        <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center">
          <div className="text-sm text-gray-500">
            Made with ❤️ by a non-technical primate with <a href="/favorites#tools" className="underline">AI tools</a>.
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
