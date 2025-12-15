import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import MainLayout from "./components/layout/MainLayout";
import PageLoader from "./components/ui/PageLoader";
import ScrollProgress from "./components/ui/ScrollProgress";
import { useState } from "react";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ApplicationDevelopment from "./pages/services/ApplicationDevelopment";
import ConsultingServices from "./pages/services/ConsultingServices";
import AdvisoryServices from "./pages/services/AdvisoryServices";
import AiSolutions from "./pages/services/AiSolutions";
import AdvisoryConsulting from "./pages/services/AdvisoryConsulting";
import BusinessIntelligence from "./pages/services/BusinessIntelligence";
import DataAnalytics from "./pages/services/DataAnalytics";
import Clients from "./pages/Clients";
import Careers from "./pages/Careers";
import Product from "./pages/Product";
import Training from "./pages/Training";
import SocialImpact from "./pages/SocialImpact";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Import styles
import "./App.css";

const App = () => {
  // Create a new QueryClient instance within the component
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5, // 5 minutes
        retry: 1,
      },
    },
  }));

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <TooltipProvider>
            <PageLoader />
            <ScrollProgress />
            <Routes>
              <Route path="/" element={<MainLayout><Home /></MainLayout>} />
              <Route path="/about" element={<MainLayout><About /></MainLayout>} />
              <Route path="/services" element={<MainLayout><Services /></MainLayout>} />
              <Route path="/services/ai-solutions" element={<MainLayout><AiSolutions /></MainLayout>} />
              <Route path="/services/application-development" element={<MainLayout><ApplicationDevelopment /></MainLayout>} />
              <Route path="/services/advisory-consulting" element={<MainLayout><AdvisoryConsulting /></MainLayout>} />
              <Route path="/services/business-intelligence" element={<MainLayout><BusinessIntelligence /></MainLayout>} />
              <Route path="/services/data-analytics" element={<MainLayout><DataAnalytics /></MainLayout>} />
              <Route path="/services/consulting-services" element={<MainLayout><ConsultingServices /></MainLayout>} />
              <Route path="/services/advisory-services" element={<MainLayout><AdvisoryServices /></MainLayout>} />
              <Route path="/clients" element={<MainLayout><Clients /></MainLayout>} />
              <Route path="/careers" element={<MainLayout><Careers /></MainLayout>} />
              <Route path="/product" element={<MainLayout><Product /></MainLayout>} />
              <Route path="/products" element={<MainLayout><Product /></MainLayout>} />
              <Route path="/training" element={<MainLayout><Training /></MainLayout>} />
              <Route path="/social-impact" element={<MainLayout><SocialImpact /></MainLayout>} />
              <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<MainLayout><NotFound /></MainLayout>} />
            </Routes>
          </TooltipProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
