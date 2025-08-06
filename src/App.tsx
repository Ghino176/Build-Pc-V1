
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PcBuilderProvider } from "@/context/PcBuilderContext";
import Index from "./pages/Index";
import Upgrades from "./pages/Upgrades";
import Compatibility from "./pages/Compatibility";
import SavedBuilds from "./pages/SavedBuilds";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <PcBuilderProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/upgrades" element={<Upgrades />} />
            <Route path="/compatibility" element={<Compatibility />} />
            <Route path="/builds" element={<SavedBuilds />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </PcBuilderProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
