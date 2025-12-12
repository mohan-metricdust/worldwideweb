
import React, { useEffect, useState, useRef } from 'react';
import ScrollAnimator from '@/components/ui/ScrollAnimator';
import CountUp from '@/components/ui/CountUp';
import ParallaxSection from '@/components/ui/ParallaxSection';

const StatsSection = () => {
  const stats = [
    { label: "Projects Completed", value: 320 },
    { label: "Happy Clients", value: 150 },
    { label: "Team Members", value: 110 },
    { label: "Years of Experience", value: 12 }
  ];
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <ParallaxSection className="py-20 overflow-hidden" speed={0.3}>
      <div className="container mx-auto px-4" ref={sectionRef}>
        {/* Floating particles for visual interest */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div 
              key={i} 
              className="absolute w-1 h-1 rounded-full bg-[#3F321F]/30"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 7}s infinite ease-in-out ${Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <ScrollAnimator 
              key={index} 
              animation="fade-in" 
              delay={index * 200}
              className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-lg hover:-translate-y-1 transition-all duration-300 shadow-lg"
            >
              {isInView ? (
                <CountUp 
                  end={stat.value} 
                  className="text-4xl md:text-5xl font-bold text-[#3F321F] mb-2 animate-count-up" 
                  duration={2500}
                />
              ) : (
                <div className="text-4xl md:text-5xl font-bold text-[#3F321F] mb-2">0</div>
              )}
              <p className="text-gray-700 opacity-90">{stat.label}</p>
            </ScrollAnimator>
          ))}
        </div>
      </div>
    </ParallaxSection>
  );
};

export default StatsSection;
