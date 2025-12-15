import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightBlobIcon } from '@/components/ui/BlobIcons';
import ScrollAnimator from '@/components/ui/ScrollAnimator';
import PageSection from '@/components/layout/PageSection';
import aboutImage from '@/assets/about-section-ai-solutions.jpg';

interface AboutSectionProps {
  invertColors?: boolean;
}

const AboutSection = ({ invertColors = false }: AboutSectionProps) => {
  const textColor = "text-gray-700"; // Changed to dark grey
  
  return (
    <PageSection invertColors={invertColors}>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <ScrollAnimator animation="slide-in-left" className="order-2 md:order-1">
          <h3 className="text-2xl font-semibold mb-4 text-[#3F321F]">Turning Vision into AI-Powered Digital Reality</h3>
          <p className={`${textColor} mb-4`} style={{ color: '#333333' }}>
            At Bean Infosystems, we envision a future where AI-powered technology empowers businesses to reach their fullest potential. Our mission is to deliver intelligent digital experiences through advanced software solutions and strategic, innovation-driven partnerships.
          </p>
          <p className={`${textColor} mb-6`} style={{ color: '#333333' }}>
            By combining deep industry expertise with cutting-edge AI capabilities, we create tailored solutions that solve complex challenges and accelerate digital transformation. Our approach is collaborative, agile and centered on delivering measurable outcomes that enhance growth, efficiency and competitive advantage.
          </p>
          <div className="flex justify-center mb-4">
            <Link to="/about" className={`${textColor} flex items-center font-medium hover:underline interactive`} style={{ color: '#333333' }}>
              Learn more about how we use AI to transform possibilities into reality
              <ArrowRightBlobIcon size="sm" className="ml-1" />
            </Link>
          </div>
        </ScrollAnimator>
        
        <ScrollAnimator animation="slide-in-right" className="order-1 md:order-2">
          <div className="overflow-hidden shadow-xl rounded-lg">
            <div className="relative aspect-video">
              {/* Using the uploaded image without text overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#3F321F]/20 to-black/60 z-10 rounded-lg"></div>
              <img 
                src={aboutImage} 
                alt="AI-Powered Digital Transformation" 
                className="w-full h-full object-cover rounded-lg"
              />
              {/* Removed the brand name overlay */}
            </div>
          </div>
        </ScrollAnimator>
      </div>
    </PageSection>
  );
};

export default AboutSection;
