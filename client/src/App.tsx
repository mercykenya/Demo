import { Switch, Route } from "wouter";
import { TooltipProvider } from "@/components/ui/tooltip";
import Game from "@/pages/game";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Game} />
    </Switch>
  );
}

function App() {
  console.log('App loaded successfully!');
  console.log('Location:', window.location.href);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-gradient-to-r from-blue-900/90 to-purple-900/90 backdrop-blur-sm border border-blue-400/50 text-blue-100 px-4 py-2 rounded-lg shadow-lg max-w-md text-center">
        <div className="flex items-center justify-center gap-2">
          <span className="text-sm font-medium">
            🚀 Demo Mode - Fully functional space station game
          </span>
        </div>
        <p className="text-xs mt-1 text-blue-200">
          Explore the interface and interact with objects
        </p>
      </div>
      <TooltipProvider>
        <Router />
      </TooltipProvider>
    </div>
  );
}

export default App;
