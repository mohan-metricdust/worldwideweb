
import React from 'react';
import { Laptop, BarChart } from 'lucide-react';
import { Card } from '@/components/ui/card';
import PageSection from '@/components/layout/PageSection';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { useEffect, useRef, useState } from "react";
import { cn } from '@/lib/utils';

interface IconProps {
  size?: number;
}

interface CapabilitiesSectionProps {
  invertColors?: boolean;
}

const SmartphoneIcon = ({ size = 24, ...props }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12" y2="18" />
  </svg>
);

const CloudIcon = ({ size = 24, ...props }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
  </svg>
);

const PaletteIcon = ({ size = 24, ...props }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="13.5" cy="6.5" r=".5" />
    <circle cx="17.5" cy="10.5" r=".5" />
    <circle cx="8.5" cy="7.5" r=".5" />
    <circle cx="6.5" cy="12.5" r=".5" />
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
  </svg>
);

const LinkIcon = ({ size = 24, ...props }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 17H7A5 5 0 0 1 7 7h2" />
    <path d="M15 7h2a5 5 0 1 1 0 10h-2" />
    <line x1="8" y1="12" x2="16" y2="12" />
  </svg>
);

const CapabilitiesSection = ({ invertColors = false }: CapabilitiesSectionProps) => {
  const capabilities = [
    { title: "Web Development", icon: Laptop },
    { title: "Mobile Applications", icon: SmartphoneIcon },
    { title: "Cloud Solutions", icon: CloudIcon },
    { title: "UI/UX Design", icon: PaletteIcon },
    { title: "Data Analytics", icon: BarChart },
    { title: "API Integration", icon: LinkIcon }
  ];

  // Add duplicates to create a seamless loop effect
  const duplicatedCapabilities = [...capabilities, ...capabilities];
  
  // Reference to the carousel API
  const carouselRef = useRef<any>(null);
  const autoScrollRef = useRef<number | NodeJS.Timeout | null>(null);

  // Auto-scroll functionality
  useEffect(() => {
    const startAutoScroll = () => {
      if (!carouselRef.current?.api) return;
      
      const scrollOneItem = () => {
        const api = carouselRef.current.api;
        
        // If near the end, smoothly go back to the beginning
        if (api.selectedScrollSnap() >= capabilities.length - 1) {
          // Silently jump to the duplicate area without animation
          api.scrollTo(0, false);
          
          // Then continue normal scrolling
          setTimeout(() => {
            api.scrollNext();
          }, 50);
        } else {
          api.scrollNext();
        }
        
        autoScrollRef.current = requestAnimationFrame(scrollOneItem);
      };
      
      // Slower interval for smooth scrolling
      autoScrollRef.current = setTimeout(() => {
        autoScrollRef.current = requestAnimationFrame(scrollOneItem);
      }, 3000);
    };

    // Start auto-scrolling
    startAutoScroll();

    // Clean up on unmount
    return () => {
      if (autoScrollRef.current) {
        cancelAnimationFrame(autoScrollRef.current as number);
        clearTimeout(autoScrollRef.current as NodeJS.Timeout);
      }
    };
  }, []);

  interface TiltCardProps {
    children: React.ReactNode;
    className?: string;
  }

  const TiltCard: React.FC<TiltCardProps> = ({ children, className }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });
    const [isHovering, setIsHovering] = useState(false);
  
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
  
      const rect = cardRef.current.getBoundingClientRect();
      
      // Calculate the mouse position relative to the card
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Calculate rotation based on mouse position
      // Max rotation of 10 degrees
      const rotateX = ((y / rect.height) - 0.5) * -10;
      const rotateY = ((x / rect.width) - 0.5) * 10;
      
      setRotation({ x: rotateX, y: rotateY });
      
      // Update glow position
      const glowX = (x / rect.width) * 100;
      const glowY = (y / rect.height) * 100;
      setGlowPosition({ x: glowX, y: glowY });
    };
  
    const handleMouseEnter = () => {
      setIsHovering(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovering(false);
      setRotation({ x: 0, y: 0 });
    };
  
    return (
      <div
        ref={cardRef}
        className={cn(
          "relative overflow-hidden transition-all duration-300 ease-out",
          className
        )}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: isHovering ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1.05, 1.05, 1.05)` : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
          transition: 'transform 0.3s ease'
        }}
      >
        {isHovering && (
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(circle at ${glowPosition.x}% ${glowPosition.y}%, rgba(212, 167, 106, 0.4) 0%, rgba(212, 167, 106, 0) 50%)`,
              mixBlendMode: 'soft-light'
            }}
          ></div>
        )}
        {children}
      </div>
    );
  };

  return (
    <PageSection title="Our Capabilities" subtitle="Explore our expertise" invertColors={invertColors}>
      <div className="w-full overflow-hidden relative">
        <Carousel
          ref={carouselRef}
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
            containScroll: false,
          }}
          className="w-full"
          setApi={(api) => {
            if (carouselRef.current) carouselRef.current.api = api;
          }}
        >
          <CarouselContent className="select-none">
            {duplicatedCapabilities.map((item, index) => (
              <CarouselItem 
                key={`card-${index}`} 
                className="pl-4 md:basis-1/3 lg:basis-1/4"
              >
                <TiltCard className="h-full">
                  <Card className="h-full p-6 flex flex-col items-center justify-center text-center cursor-grab active:cursor-grabbing bg-white border border-gray-200 text-gray-900">
                    <div className="text-[#D4A76A] mb-4 transform transition-transform duration-300 group-hover:scale-125 relative">
                      <item.icon size={24} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-[#D4A76A]">{item.title}</h3>
                    <p className="text-gray-700 opacity-0 max-h-0 hover:max-h-20 hover:opacity-100 transition-all duration-300 ease-in-out overflow-hidden">
                      Expert solutions tailored to your unique business needs.
                    </p>
                  </Card>
                </TiltCard>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="hidden md:block">
            <CarouselPrevious className="left-2 bg-[#D4A76A]/50 border-gray-200 text-gray-900 hover:bg-[#D4A76A]/70 hover:scale-110 transition-all duration-300" />
            <CarouselNext className="right-2 bg-[#D4A76A]/50 border-gray-200 text-gray-900 hover:bg-[#D4A76A]/70 hover:scale-110 transition-all duration-300" />
          </div>
        </Carousel>
      </div>
    </PageSection>
  );
};

export default CapabilitiesSection;
