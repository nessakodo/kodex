import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import ThinkingUniverse from "@/components/ui/ThinkingUniverse";
import Index from "./pages/Index";
import Mission from "./pages/Mission";
import Services from "./pages/Services";
import Insights from "./pages/Insights";
import Showcase from "./pages/Showcase";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import Contact from "./pages/Contact";
import Security from "./pages/Security";
import Careers from "./pages/Careers";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import { Helmet } from "react-helmet";

const queryClient = new QueryClient();

function AppContent() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="flex min-h-screen flex-col bg-neutral-950">
      <ThinkingUniverse />
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className={`flex-1 relative z-10 ${!isHome ? 'pt-20' : ''}`}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/services" element={<Services />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/showcase" element={<Showcase />} />
          <Route path="/showcase/:slug" element={<CaseStudyDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/security" element={<Security />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Helmet defaultTitle="KODEX STUDIO - Security Infrastructure for Modern Software">
      <meta name="description" content="Enterprise-grade security architecture, cryptography, and infrastructure hardening services. We build and secure production systems for organizations that can't afford compromise." />
      <meta name="keywords" content="cybersecurity, security architecture, cryptography, cloud security, compliance, HIPAA, SOC 2, penetration testing" />
      <meta property="og:title" content="KODEX STUDIO - Security Infrastructure for Modern Softwarer" />
      <meta property="og:description" content="Enterprise-grade security solutions powered by cutting-edge technology." />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://kodexstudio.com" />
    </Helmet>
    
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
