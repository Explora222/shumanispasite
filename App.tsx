import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IntroGrid } from './components/IntroGrid';
import { AboutSection } from './components/AboutSection';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { AppointmentCTA } from './components/AppointmentCTA';

export default function App() {
  return (
    <div className="min-h-screen font-sans text-dark overflow-x-hidden">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="elements">
          <IntroGrid />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="treatments">
          <Services />
        </section>
        <section id="booking">
          <AppointmentCTA />
        </section>
        <section id="wellness">
          <Testimonials />
        </section>
      </main>
      <Footer />
    </div>
  );
}