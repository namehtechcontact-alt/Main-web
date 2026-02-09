import { MobileMenu } from "@/sections/MobileMenu";
import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { ScrollToTop } from "@/components/ScrollToTop";
import { MenuProvider } from "@/context/MenuContext";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage, ServicesPage, PortfolioPage, AboutPage, ContactPage } from "@/pages";
import { useEffect } from 'react';

const AppContent = () => {
  useEffect(() => {
    // Reset any default margins/padding and improve scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.documentElement.style.margin = '0';
    document.documentElement.style.padding = '0';

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 font-switzer">
      <ScrollToTop />
      <CustomCursor />

      {/* Navigation */}
      <MobileMenu />
      <Navbar />

      {/* Main Content */}
      <main className="relative">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <Footer />
      </main>
    </div>
  );
};

export const App = () => {
  return (
    <BrowserRouter>
      <MenuProvider>
        <AppContent />
      </MenuProvider>
    </BrowserRouter>
  );
};

