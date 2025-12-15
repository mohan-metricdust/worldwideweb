
import React, { useEffect, useState, useRef } from 'react';
import ScrollAnimator from '@/components/ui/ScrollAnimator';

const TestimonialsBanner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  const testimonials = [
    {
      quote: "Bean Infosystem transformed our digital infrastructure with innovative solutions that exceeded our expectations.",
      author: "Sarah Johnson",
      position: "CTO, TechVision Inc."
    },
    {
      quote: "Their team's expertise and dedication helped us achieve our technology goals faster than we thought possible.",
      author: "Michael Reynolds",
      position: "CEO, NexGen Solutions"
    },
    {
      quote: "Working with Bean Infosystem has been a game-changer for our business operations and customer experience.",
      author: "Jennifer Williams",
      position: "Operations Director, FutureTech"
    }
  ];

  useEffect(() => {
    // Auto-rotate testimonials
    intervalRef.current = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [testimonials.length]);

  return (
    <section className="bg-gray-100 py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollAnimator animation="fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#3F321F]">
            What Our Clients Say
          </h2>
        </ScrollAnimator>
        
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollAnimator 
                key={index} 
                animation="fade-in" 
                delay={index * 200}
              >
                <div 
                  className={`bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-lg transition-all duration-500 hover:bg-white hover:-translate-y-1 hover:shadow-2xl ${index === activeIndex ? 'ring-2 ring-[#3F321F]/50' : ''}`}
                  onClick={() => setActiveIndex(index)}
                >
                  <p className="text-gray-900 mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="text-[#3F321F] font-semibold">{testimonial.author}</p>
                    <p className="text-gray-600 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </ScrollAnimator>
            ))}
          </div>
          
          {/* Testimonial Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeIndex === index ? 'bg-[#3F321F] scale-125' : 'bg-gray-400 opacity-50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsBanner;
