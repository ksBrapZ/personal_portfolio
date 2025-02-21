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

function Router() {
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

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ProfileMenu />
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;