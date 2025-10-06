import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Index from "./pages/Index";
import Mission from "./pages/Mission";
import Services from "./pages/Services";
import Insights from "./pages/Insights";
import Showcase from "./pages/Showcase";
import Contact from "./pages/Contact";
import Security from "./pages/Security";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex min-h-screen flex-col">
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <Header />
          <main id="main-content" className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/mission" element={<Mission />} />
              <Route path="/services" element={<Services />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/showcase" element={<Showcase />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/security" element={<Security />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
