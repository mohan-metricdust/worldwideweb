
import React from 'react';
import { ArrowRightBlobIcon } from '@/components/ui/BlobIcons';
import { Link } from 'react-router-dom';
import MagneticButton from '@/components/ui/MagneticButton';
import ScrollAnimator from '@/components/ui/ScrollAnimator';

interface HeroContentProps {
  isLoaded: boolean;
}

const HeroContent: React.FC<HeroContentProps> = ({ isLoaded }) => {
  // Text entrance animation classes
  const baseTextClasses = "transition-all duration-1000 ease-out";
  const loadedTextClasses = isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10";
  
  return (
    <div className="relative z-30">
      <div className="text-right">
        <ScrollAnimator animation="fade-in" threshold={0.1} delay={500}>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-shadow" style={{fontSize:'3.5rem'}}>
            <span className="text-white">Empowering Innovation </span>
            <br />
            <span className="text-white">Through Intelligent AI</span>
          </h1>
        </ScrollAnimator>
        
        <ScrollAnimator animation="fade-in" threshold={0.1} delay={800}>
          <p className={`text-lg md:text-xl text-white mb-8 font-light ${baseTextClasses} ${loadedTextClasses}`}
             style={{ transitionDelay: "300ms" }}>
            A trusted provider of AI-enabled technology solutions, offering expert staff augmentation 
            and full life-cycle support for organizations across the public and private sectors.
          </p>
        </ScrollAnimator>
        
        <ScrollAnimator animation="fade-in" threshold={0.1} delay={1100}>
          <div className={`flex justify-end space-x-4 ${baseTextClasses} ${loadedTextClasses}`}
               style={{ transitionDelay: "600ms" }}>
            <MagneticButton className="px-6 py-3 bg-[#3F321F] rounded-full transition-all duration-300 hover:bg-[#2D2417] group">
              <Link to="/about" className="flex items-center text-white font-medium">
                Learn More
                <ArrowRightBlobIcon size="sm" className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </MagneticButton>
          </div>
        </ScrollAnimator>
      </div>
    </div>
  );
};

export default HeroContent;