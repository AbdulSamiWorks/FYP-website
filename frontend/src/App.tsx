import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";
import NotFound from "./pages/not-found";
import Landing from "./pages/landing";
import Diagnosis from "./pages/diagnosis";
import Performance from "./pages/performance";
import HowItWorks from "./pages/how-it-works";
import About from "./pages/about";
import ModernNav from "./components/modern-nav";
import ModernFooter from "./components/modern-footer";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <ModernNav />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Landing} />
          <Route path="/diagnosis" component={Diagnosis} />
          <Route path="/performance" component={Performance} />
          <Route path="/how-it-works" component={HowItWorks} />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <ModernFooter />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
