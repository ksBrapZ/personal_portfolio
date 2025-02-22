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
    // Wrap app in query client for data fetching
    <QueryClientProvider client={queryClient}>
      {/* Only show profile menu on main site */}
      {!isAdminDomain && <ProfileMenu />}
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
