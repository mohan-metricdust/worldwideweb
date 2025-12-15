
import React from 'react';
import { ArrowRight } from 'lucide-react';
import ScrollAnimator from '@/components/ui/ScrollAnimator';
import PageSection from '@/components/layout/PageSection';
import { Link } from 'react-router-dom';

const BrainBlobIcon = () => (
  <div className="drop-shadow-xl">
    <svg viewBox="0 0 80 80" className="w-20 h-20" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="brainBlobGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="rgba(255, 255, 255, 0.6)" />
          <stop offset="50%" stopColor="rgba(255, 255, 255, 0.4)" />
          <stop offset="100%" stopColor="rgba(255, 255, 255, 0.2)" />
        </radialGradient>
        <radialGradient id="brainBlobGradient2" cx="70%" cy="70%" r="60%">
          <stop offset="0%" stopColor="#3F321F" />
          <stop offset="100%" stopColor="#3F321F" />
        </radialGradient>
        <filter id="brainShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="rgba(0, 0, 0, 0.1)" />
        </filter>
        <filter id="brainColoredShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="rgba(63, 50, 31, 0.3)" />
        </filter>
        <filter id="brainGlassmorphic">
          <feGaussianBlur stdDeviation="1" />
        </filter>
        <filter id="brainBackBlur">
          <feGaussianBlur stdDeviation="2" />
        </filter>
      </defs>
      <path d="M25 45 C25 30, 35 20, 50 22 C65 24, 75 35, 73 50 C71 65, 60 75, 45 73 C30 71, 25 60, 25 45 Z" fill="url(#brainBlobGradient2)" opacity="0.7" filter="url(#brainBackBlur)" />
      <path d="M15 35 C15 20, 25 10, 40 12 C55 14, 70 25, 68 40 C66 55, 55 68, 40 66 C25 64, 15 50, 15 35 Z" fill="url(#brainBlobGradient)" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="2" filter="url(#brainShadow) url(#brainGlassmorphic) url(#brainColoredShadow)" />
      <g transform="translate(26, 24) scale(1.2)">
        <path d="M12 2a4 4 0 0 1 4 4v1a4 4 0 0 1-4 4 4 4 0 0 1-4-4V6a4 4 0 0 1 4-4z" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <path d="M12 11v2M8 7H6a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h2M16 7h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2M9 22v-6M15 22v-6M12 13v9" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <circle cx="12" cy="5" r="1.5" fill="rgba(255, 255, 255, 0.95)" />
      </g>
    </svg>
  </div>
);

const UsersBlobIcon = () => (
  <div className="drop-shadow-xl">
    <svg viewBox="0 0 80 80" className="w-20 h-20" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="usersBlobGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="rgba(255, 255, 255, 0.6)" />
          <stop offset="50%" stopColor="rgba(255, 255, 255, 0.4)" />
          <stop offset="100%" stopColor="rgba(255, 255, 255, 0.2)" />
        </radialGradient>
        <radialGradient id="usersBlobGradient2" cx="70%" cy="70%" r="60%">
          <stop offset="0%" stopColor="#3F321F" />
          <stop offset="100%" stopColor="#3F321F" />
        </radialGradient>
        <filter id="usersShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="rgba(0, 0, 0, 0.1)" />
        </filter>
        <filter id="usersColoredShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="rgba(63, 50, 31, 0.3)" />
        </filter>
        <filter id="usersGlassmorphic">
          <feGaussianBlur stdDeviation="1" />
        </filter>
        <filter id="usersBackBlur">
          <feGaussianBlur stdDeviation="2" />
        </filter>
      </defs>
      <path d="M25 45 C25 30, 35 20, 50 22 C65 24, 75 35, 73 50 C71 65, 60 75, 45 73 C30 71, 25 60, 25 45 Z" fill="url(#usersBlobGradient2)" opacity="0.7" filter="url(#usersBackBlur)" />
      <path d="M15 35 C15 20, 25 10, 40 12 C55 14, 70 25, 68 40 C66 55, 55 68, 40 66 C25 64, 15 50, 15 35 Z" fill="url(#usersBlobGradient)" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="2" filter="url(#usersShadow) url(#usersGlassmorphic) url(#usersColoredShadow)" />
      <g transform="translate(26, 26) scale(1.2)">
        <circle cx="9" cy="5" r="3" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <path d="M3 19v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <circle cx="17" cy="7" r="2.5" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <path d="M21 19v-1.5a3 3 0 0 0-3-3h-1" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
      </g>
    </svg>
  </div>
);

const ChartBlobIcon = () => (
  <div className="drop-shadow-xl">
    <svg viewBox="0 0 80 80" className="w-20 h-20" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="chartBlobGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="rgba(255, 255, 255, 0.6)" />
          <stop offset="50%" stopColor="rgba(255, 255, 255, 0.4)" />
          <stop offset="100%" stopColor="rgba(255, 255, 255, 0.2)" />
        </radialGradient>
        <radialGradient id="chartBlobGradient2" cx="70%" cy="70%" r="60%">
          <stop offset="0%" stopColor="#3F321F" />
          <stop offset="100%" stopColor="#3F321F" />
        </radialGradient>
        <filter id="chartShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="rgba(0, 0, 0, 0.1)" />
        </filter>
        <filter id="chartColoredShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="rgba(63, 50, 31, 0.3)" />
        </filter>
        <filter id="chartGlassmorphic">
          <feGaussianBlur stdDeviation="1" />
        </filter>
        <filter id="chartBackBlur">
          <feGaussianBlur stdDeviation="2" />
        </filter>
      </defs>
      <path d="M25 45 C25 30, 35 20, 50 22 C65 24, 75 35, 73 50 C71 65, 60 75, 45 73 C30 71, 25 60, 25 45 Z" fill="url(#chartBlobGradient2)" opacity="0.7" filter="url(#chartBackBlur)" />
      <path d="M15 35 C15 20, 25 10, 40 12 C55 14, 70 25, 68 40 C66 55, 55 68, 40 66 C25 64, 15 50, 15 35 Z" fill="url(#chartBlobGradient)" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="2" filter="url(#chartShadow) url(#chartGlassmorphic) url(#chartColoredShadow)" />
      <g transform="translate(26, 26) scale(1.2)">
        <path d="M3 3v18h18" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 16l4-4 4 4 5-6" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  </div>
);

interface ServicesSectionProps {
  invertColors?: boolean;
}

const ServicesSection = ({ invertColors = false }: ServicesSectionProps) => {
  return (
    <PageSection 
      title="Our Services" 
      subtitle="Comprehensive solutions to solve your business challenges" 
      invertColors={invertColors}
    >
      <div className="grid md:grid-cols-3 gap-6">
        <ScrollAnimator animation="slide-in-up" delay={200}>
          <div className="bg-white border border-gray-200 p-6 rounded-lg h-full flex flex-col shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out"
            style={{ animation: 'float 6s ease-in-out infinite' }}
          >
            <div className="mb-4 flex justify-center">
              <BrainBlobIcon />
            </div>
            <div className="flex items-center justify-center mb-4">
              <h3 className="text-xl text-center font-semibold text-[#3F321F]">AI Solutions & Integration</h3>
            </div>
            <p className="text-gray-700 mb-4 flex-grow">
              Harness the power of artificial intelligence to automate processes, gain insights, and drive innovation. 
              Our AI solutions are tailored to transform your business operations and enhance decision-making capabilities.
            </p>
            <div className="flex justify-center">
              <Link to="/services" className="text-[#3F321F] flex items-center text-sm font-medium">
                Learn more
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </ScrollAnimator>
        
        <ScrollAnimator animation="slide-in-up" delay={400}>
          <div className="bg-white border border-gray-200 p-6 rounded-lg h-full flex flex-col shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out"
            style={{ animation: 'float 6s ease-in-out infinite 0.5s' }}
          >
            <div className="mb-4 flex justify-center">
              <UsersBlobIcon />
            </div>
            <div className="flex items-center justify-center mb-4">
              <h3 className="text-xl text-center font-semibold text-[#3F321F]">Consulting and Advisory</h3>
            </div>
            <p className="text-gray-700 mb-4 flex-grow">
              Strategic guidance from industry experts to optimize your technology investments and improve business processes. 
              We provide actionable insights to help you navigate digital transformation and achieve sustainable growth.
            </p>
            <div className="flex justify-center">
              <Link to="/services" className="text-[#3F321F] flex items-center text-sm font-medium">
                Learn more
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </ScrollAnimator>
        
        <ScrollAnimator animation="slide-in-up" delay={600}>
          <div className="bg-white border border-gray-200 p-6 rounded-lg h-full flex flex-col shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out"
            style={{ animation: 'float 6s ease-in-out infinite 1s' }}
          >
            <div className="mb-4 flex justify-center">
              <ChartBlobIcon />
            </div>
            <div className="flex items-center justify-center mb-4">
              <h3 className="text-xl text-center font-semibold text-[#3F321F]">Business Intelligence</h3>
            </div>
            <p className="text-gray-700 mb-4 flex-grow">
              Transform your data into actionable insights with our comprehensive business intelligence solutions. 
              We help you make informed decisions through advanced analytics, reporting, and visualization tools.
            </p>
            <div className="flex justify-center">
              <Link to="/services" className="text-[#3F321F] flex items-center text-sm font-medium">
                Learn more
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </ScrollAnimator>
      </div>
    </PageSection>
  );
};

export default ServicesSection;
