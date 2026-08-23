import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { FloatingConsultButton } from "./components/FloatingConsultButton";
import { Home } from "./pages/Home";
import { CulturalCreative } from "./pages/CulturalCreative";
import { IndustrialDesign } from "./pages/IndustrialDesign";
import { Team } from "./pages/Team";
import { CulturalCreativeOrder } from "./pages/CulturalCreativeOrder";
import { IndustrialOrder } from "./pages/IndustrialOrder";
import { Careers } from "./pages/Careers";
import { AdminDashboard } from "./pages/AdminDashboard";
import { WearableDevice } from "./pages/WearableDevice";
import { SmartHomeSystem } from "./pages/SmartHomeSystem";
import { CulturalProducts } from "./pages/CulturalProducts";
import { CorporateGiftShop } from "./pages/CorporateGiftShop";
import { HeritageCraft } from "./pages/HeritageCraft";
import { RoboticArm } from "./pages/RoboticArm";
import { HelmetProvider } from "react-helmet-async";
import { LanguageProvider } from "./contexts/LanguageContext";

function AppContent() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/cultural-creative"
            element={<CulturalCreative />}
          />
          <Route
            path="/industrial-design"
            element={<IndustrialDesign />}
          />
          <Route path="/team" element={<Team />} />
          <Route
            path="/cultural-creative-order"
            element={<CulturalCreativeOrder />}
          />
          <Route
            path="/industrial-order"
            element={<IndustrialOrder />}
          />
          <Route path="/careers" element={<Careers />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/wearable-device" element={<WearableDevice />} />
          <Route path="/smart-home-system" element={<SmartHomeSystem />} />
          <Route path="/cultural-products" element={<CulturalProducts />} />
          <Route path="/corporate-gift-shop" element={<CorporateGiftShop />} />
          <Route path="/heritage-craft" element={<HeritageCraft />} />
          <Route path="/robotic-arm" element={<RoboticArm />} />
        </Routes>
      </main>
      <Footer />
      <FloatingConsultButton />
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <LanguageProvider>
          <AppContent />
        </LanguageProvider>
      </Router>
    </HelmetProvider>
  );
}