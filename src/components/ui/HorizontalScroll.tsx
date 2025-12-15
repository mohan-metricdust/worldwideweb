
import React, { useRef, useEffect, ReactNode } from 'react';

interface HorizontalScrollProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  autoScroll?: boolean;
  autoScrollSpeed?: number;
  infiniteLoop?: boolean;
}

const HorizontalScroll: React.FC<HorizontalScrollProps> = ({
  children,
  className = '',
  speed = 0.5,
  autoScroll = false,
  autoScrollSpeed = 1,
  infiniteLoop = false,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const container = containerRef.current;
    if (!scrollContainer || !container) return;

    // For smooth CSS animation approach
    if (autoScroll && infiniteLoop) {
      // Apply CSS animation directly
      scrollContainer.style.animation = `smooth-scroll-left ${20 / autoScrollSpeed}s linear infinite`;
      
      // Add CSS keyframes
      const style = document.createElement('style');
      style.textContent = `
        @keyframes smooth-scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .horizontal-scroll-container:hover .horizontal-scroll-track {
          animation-play-state: paused;
        }
      `;
      document.head.appendChild(style);
      
      return () => {
        document.head.removeChild(style);
      };
    }
  }, [autoScroll, autoScrollSpeed, infiniteLoop]);

  return (
    <div 
      ref={containerRef} 
      className={`horizontal-scroll-container w-full overflow-hidden ${className}`}
    >
      <div 
        ref={scrollRef} 
        className="horizontal-scroll-track flex whitespace-nowrap"
        style={{
          display: 'flex',
          whiteSpace: 'nowrap'
        }}
      >
        {children}
        {/* Duplicate children for seamless loop */}
        {infiniteLoop && children}
      </div>
    </div>
  );
};

export default HorizontalScroll;
