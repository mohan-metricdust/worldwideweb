
import React, { useEffect, useState } from 'react';
import AnimatedHeroSection from '@/components/home/AnimatedHeroSection';
import ClientLogosSection from '@/components/home/ClientLogosSection';
import AboutSection from '@/components/home/AboutSection';
import StatsSection from '@/components/home/StatsSection';
import ServicesSection from '@/components/home/ServicesSection';
import CareersSection from '@/components/home/CareersSection';
import CtaSection from '@/components/home/CtaSection';
import TestimonialsBanner from '@/components/home/TestimonialsBanner';
import ImpactCarousel from '@/components/home/ImpactCarousel';

const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Handle scroll effect
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Simulate content loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={`home-page transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'} bg-white`}>
      <div className="bg-white">
        <AnimatedHeroSection />
      </div>
      
      <div className="bg-gray-100">
        <ClientLogosSection />
      </div>
      
      {/* Alternating white and light grey sections */}
      <div className="bg-white">
        <AboutSection invertColors={true} />
      </div>
      
      <div className="bg-gray-100">
        <StatsSection />
      </div>
      
      <div className="bg-white">
        <ServicesSection invertColors={true} />
      </div>
      
      {/* Enhanced testimonials banner with light theme */}
      {/* <div className="bg-gray-100">
        <TestimonialsBanner />
      </div> */}
      
      {/* Impact carousel section with light theme */}
      <div className="bg-white py-12 overflow-hidden relative">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#3F321F] text-center">Success Stories</h2>
          
          {/* Animated background elements with light theme colors */}
          <div className="absolute inset-0 z-0 opacity-10">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i} 
                className="absolute h-px w-20 bg-gradient-to-r from-transparent via-[#3F321F] to-transparent"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                  opacity: Math.random() * 0.5 + 0.5
                }}
              ></div>
            ))}
          </div>
          
          <ImpactCarousel />
        </div>
      </div>
      
      <div className="bg-white">
        <CareersSection />
      </div>
      
      <div className="bg-gray-100">
        <CtaSection invertColors={true} />
      </div>
    </div>
  );
};

export default Home;
