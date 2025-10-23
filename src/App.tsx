import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Services from "./pages/Services";
import NonFerrousMetal from "./pages/NonFerrousMetal";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
// Non-Ferrous Metal Pages
import CopperScrapMetal from "./pages/CopperScrapMetal";
import AluminiumScrapPrice from "./pages/AluminiumScrapPrice";
import BrassScrapPrice from "./pages/BrassScrapPrice";
import LeadScrapPrice from "./pages/LeadScrapPrice";
import InsulatedWireScrapPrice from "./pages/InsulatedWireScrapPrice";
// Scrap Metal Pages
import ScrapMetalPricesMelbourne from "./pages/ScrapMetalPricesMelbourne";
import CableWires from "./pages/CableWires";
import StainlessSteelScrapPrice from "./pages/StainlessSteelScrapPrice";
import CatalyticConverter from "./pages/CatalyticConverter";
import CarBatteryDisposal from "./pages/CarBatteryDisposal";
import CopperCableHighVoltage from "./pages/CopperCableHighVoltage";
import ScrapBinService from "./pages/ScrapBinService";
import CashForScrapCarsMelbourne from "./pages/CashForScrapCarsMelbourne";
import ScrapACUnits from "./pages/ScrapACUnits";
import ShinyCopper from "./pages/ShinyCopper";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/non-ferrous-metal" element={<NonFerrousMetal />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />

              {/* Non-Ferrous Metal Sub-pages */}
              <Route path="/copper-scrap-metal" element={<CopperScrapMetal />} />
              <Route path="/aluminium-scrap-price" element={<AluminiumScrapPrice />} />
              <Route path="/brass-scrap-price" element={<BrassScrapPrice />} />
              <Route path="/lead-scrap-price" element={<LeadScrapPrice />} />
              <Route path="/insulated-wire-scrap-price" element={<InsulatedWireScrapPrice />} />

              {/* Scrap Metal Sub-pages */}
              <Route path="/scrap-metal-prices-melbourne" element={<ScrapMetalPricesMelbourne />} />
              <Route path="/cable-wires" element={<CableWires />} />
              <Route path="/catalytic-converter" element={<CatalyticConverter />} />
              <Route path="/car-battery-disposal" element={<CarBatteryDisposal />} />
              <Route path="/stainless-steel-scrap-price" element={<StainlessSteelScrapPrice />} />
              <Route path="/copper-cable-high-voltage" element={<CopperCableHighVoltage />} />
              <Route path="/scrap-bin-service" element={<ScrapBinService />} />
              <Route path="/scrap-car-recycling-melbourne" element={<CashForScrapCarsMelbourne />} />
              <Route path="/scrap-ac-units" element={<ScrapACUnits />} />
              <Route path="/shiny-copper" element={<ShinyCopper />} />

              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
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
