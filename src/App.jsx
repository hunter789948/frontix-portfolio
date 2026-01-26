import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import Services from "./components/Services";
import CaseStudies from "./sections/CaseStudies";
import Team from "./sections/Team";
import CTA from "./sections/CTA";

import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-black text-white">
        <Navbar />

        <Routes>
          {/* Home page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Services />
                <CaseStudies />
                <Team />
                <CTA />
              </>
            }
          />

          {/* Contact page */}
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        {/* Footer always visible */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
