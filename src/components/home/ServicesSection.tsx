
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FaBrain, FaUsers, FaChartBar } from 'react-icons/fa';
import ScrollAnimator from '@/components/ui/ScrollAnimator';
import PageSection from '@/components/layout/PageSection';
import { Link } from 'react-router-dom';

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
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg h-full flex flex-col">
            <div className="flex items-center justify-center mb-4">
              
              <h3 className="text-xl text-center font-semibold text-[#3F321F]">AI Solutions & Integration</h3>
            </div>
            <div className="mb-4 flex justify-center">
              <img 
                src="/lovable-uploads/ddc5eb40-c257-426b-abc1-2402895cddc8.png" 
                alt="AI Solutions" 
                className="w-20 h-20 object-contain"
              />
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
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg h-full flex flex-col">
            <div className="flex items-center justify-center mb-4">
              
              <h3 className="text-xl text-center font-semibold text-[#3F321F]">Consulting and Advisory</h3>
            </div>
            <div className="mb-4 flex justify-center">
              <img 
                src="/lovable-uploads/9fa67d1f-5518-4df6-8ce4-72ed66194677.png" 
                alt="Consulting Services" 
                className="w-20 h-20 object-contain"
              />
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
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg h-full flex flex-col">
            <div className="flex items-center justify-center mb-4">
              
              <h3 className="text-xl text-center font-semibold text-[#3F321F]">Business Intelligence</h3>
            </div>
            <div className="mb-4 flex justify-center">
              <img 
                src="/lovable-uploads/04d253b6-9223-4fae-9436-7505b20214c6.png" 
                alt="Business Intelligence" 
                className="w-20 h-20 object-contain"
              />
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
