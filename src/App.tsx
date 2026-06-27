/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 font-sans selection:bg-emerald-500 selection:text-white antialiased">
      {/* Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main>
        {/* Hero Banner Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Services & Facilities Section */}
        <Services />

        {/* Key Strengths & Features Section */}
        <Features />

        {/* Photo Gallery Grid with Filter & Lightbox */}
        <Gallery />

        {/* Guest Reviews Section */}
        <Testimonials />

        {/* Interactive FAQ Section */}
        <Faq />

        {/* Reservation, Contact & Live Map Section */}
        <Contact />
      </main>

      {/* Footer Sitemap & Credits */}
      <Footer />

      {/* Live WhatsApp Floating Chat Badge */}
      <FloatingWhatsApp />
    </div>
  );
}

