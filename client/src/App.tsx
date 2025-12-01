import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { demoQueryClient } from "./lib/demoQueryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import DemoNotice from "@/components/DemoNotice";
import Game from "@/pages/game";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Game} />
    </Switch>
  );
}

function App() {
  // Use demo query client for GitHub Pages deployment (no backend)
  const isDemoMode = import.meta.env.VITE_DEMO_MODE === 'true' || window.location.hostname.includes('github.io');
  const clientToUse = isDemoMode ? demoQueryClient : queryClient;

  return (
    <QueryClientProvider client={clientToUse}>
      <TooltipProvider>
        <Toaster />
        {isDemoMode && <DemoNotice />}
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
