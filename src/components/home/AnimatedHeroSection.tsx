
import React, { useEffect, useState } from 'react';
import HeroContent from './hero/HeroContent';
import BubbleAnimation from './hero/BubbleAnimation';

const AnimatedHeroSection: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/lovable-uploads/89a4aefd-919e-431d-ae0d-d8592da0dca3.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/60 to-black/80">
      </div>
      
      {/* Bubble Animation as a visual element */}
      <BubbleAnimation />
      
      {/* Animated dots grid for tech feel */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)]" 
             style={{ backgroundSize: '50px 50px' }}></div>
      </div>
      
      {/* Content overlay - positioned to the right */}
      <div className="relative z-20 min-h-screen flex items-center justify-end">
        <div className="p-8 md:p-12 max-w-2xl w-full">
          <HeroContent isLoaded={isLoaded} />
        </div>
      </div>
    </section>
  );
};

export default AnimatedHeroSection;
