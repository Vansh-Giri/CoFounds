import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import Companies from './components/Companies/Companies';
import Features from './components/Features/Features';
import FeatureGrid from './components/FeatureGrid/FeatureGrid';
import Testimonials from './components/Testimonials/Testimonials';
import FAQ from './components/FAQ/FAQ';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Companies />
      <Features />
      <FeatureGrid />
      <Testimonials />
      <FAQ />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
