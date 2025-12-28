import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import BlogPost from "./pages/BlogPost";
import About from "./pages/About";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/:slug"} component={BlogPost} />
      <Route path={"/about"} component={About} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// Design Philosophy: Modern Minimalist with Bold Typography
// - Light theme (white background, dark text) for professional, content-first aesthetic
// - Monochromatic palette (black, white, grays) with minimal accent colors
// - Generous whitespace and typographic hierarchy for clarity

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
