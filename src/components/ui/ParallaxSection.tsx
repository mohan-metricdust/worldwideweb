
import React, { useEffect, useRef, ReactNode } from 'react';

interface ParallaxSectionProps {
  children: ReactNode;
  bgImage?: string;
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  bgImage,
  speed = 0.5,
  className = '',
  style = {},
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !bgRef.current) return;
      
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Check if section is in view
      if (sectionRect.top < viewportHeight && sectionRect.bottom > 0) {
        const yPos = (sectionRect.top * speed);
        bgRef.current.style.transform = `translate3d(0, ${yPos}px, 0)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initialize position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  // Combined styles
  const combinedStyle = { ...style };

  return (
    <div 
      ref={sectionRef} 
      className={`relative overflow-hidden ${className}`}
      style={combinedStyle}
    >
      {bgImage && (
        <div 
          ref={bgRef} 
          className="absolute inset-0 -z-10 bg-cover bg-center will-change-transform"
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>
      )}
      
      {/* Background overlay for better readability when bg image is present */}
      {bgImage && (
        <div className="absolute inset-0 -z-5 bg-black/40"></div>
      )}
      
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default ParallaxSection;
