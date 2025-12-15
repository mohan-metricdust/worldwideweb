
import React from 'react';
import { Database, Activity, BarChart2 } from 'lucide-react';
import ScrollAnimator from '@/components/ui/ScrollAnimator';
import PageSection from '@/components/layout/PageSection';

interface AiServicesSectionProps {
  invertColors?: boolean;
}

const AiServicesSection = ({ invertColors = false }: AiServicesSectionProps) => {
  return (
    <PageSection 
      title="AI & Data Services" 
      subtitle="Harness the power of data and artificial intelligence to drive business innovation" 
      invertColors={invertColors}
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ScrollAnimator animation="slide-in-up" delay={100}>
          <div className="bg-white border border-gray-200 p-6 rounded-lg h-full group hover:scale-105 transition-all duration-300 relative">
            <div className="text-[#D4A76A] mb-4">
              <Database size={36} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#D4A76A]">Data Analytics</h3>
            <p className="text-gray-700 mb-4">
              Transform raw data into actionable insights through advanced analytics solutions that drive informed decision-making.
            </p>
            <a href="/services/data-analytics" className="text-[#D4A76A] flex items-center text-sm font-medium">
              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 group-hover:translate-x-1 transition-transform duration-300">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </ScrollAnimator>
        
        <ScrollAnimator animation="slide-in-up" delay={200}>
          <div className="bg-white border border-gray-200 p-6 rounded-lg h-full group hover:scale-105 transition-all duration-300 relative">
            <div className="text-[#D4A76A] mb-4">
              <Activity size={36} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#D4A76A]">Artificial Intelligence</h3>
            <p className="text-gray-700 mb-4">
              Implement AI solutions that automate processes, enhance customer experiences, and create competitive advantages.
            </p>
            <a href="/services/artificial-intelligence" className="text-[#D4A76A] flex items-center text-sm font-medium">
              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 group-hover:translate-x-1 transition-transform duration-300">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </ScrollAnimator>
        
        <ScrollAnimator animation="slide-in-up" delay={300}>
          <div className="bg-white border border-gray-200 p-6 rounded-lg h-full group hover:scale-105 transition-all duration-300 relative">
            <div className="text-[#D4A76A] mb-4">
              <Activity size={36} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#D4A76A]">Machine Learning</h3>
            <p className="text-gray-700 mb-4">
              Deploy machine learning models that identify patterns, predict outcomes, and continuously improve with new data.
            </p>
            <a href="/services/machine-learning" className="text-[#D4A76A] flex items-center text-sm font-medium">
              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 group-hover:translate-x-1 transition-transform duration-300">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </ScrollAnimator>
        
        <ScrollAnimator animation="slide-in-up" delay={400}>
          <div className="bg-white border border-gray-200 p-6 rounded-lg h-full group hover:scale-105 transition-all duration-300 relative">
            <div className="text-[#D4A76A] mb-4">
              <BarChart2 size={36} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#D4A76A]">Data Visualization</h3>
            <p className="text-gray-700 mb-4">
              Create intuitive visual representations of complex data to reveal trends, outliers, and opportunities at a glance.
            </p>
            <a href="/services/data-visualization" className="text-[#D4A76A] flex items-center text-sm font-medium">
              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 group-hover:translate-x-1 transition-transform duration-300">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </ScrollAnimator>
        
        <ScrollAnimator animation="slide-in-up" delay={500}>
          <div className="bg-white border border-gray-200 p-6 rounded-lg h-full group hover:scale-105 transition-all duration-300 relative">
            <div className="text-[#D4A76A] mb-4">
              <Database size={36} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#D4A76A]">Data Engineering</h3>
            <p className="text-gray-700 mb-4">
              Build robust data pipelines and infrastructure that ensure data quality, accessibility, and scalability.
            </p>
            <a href="/services/data-engineering" className="text-[#D4A76A] flex items-center text-sm font-medium">
              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 group-hover:translate-x-1 transition-transform duration-300">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </ScrollAnimator>
      </div>
    </PageSection>
  );
};

export default AiServicesSection;
