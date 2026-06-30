import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import ProjectStyleSync from "@/pages/ProjectStyleSync";
import ProjectSmartTransport from "@/pages/ProjectSmartTransport";
import ProjectDigilians from "@/pages/ProjectDigilians";
import ScrollProgress from "@/components/ui/ScrollProgress";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/projects/stylesync" component={ProjectStyleSync} />
      <Route path="/projects/smart-transport" component={ProjectSmartTransport} />
      <Route path="/projects/digilians" component={ProjectDigilians} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <ScrollProgress />
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
