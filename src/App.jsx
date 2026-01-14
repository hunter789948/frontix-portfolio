import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Services from "./components/Services";
import CaseStudies from "./sections/CaseStudies";
import CTA from "./sections/CTA";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <Services />
      <CaseStudies />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}
