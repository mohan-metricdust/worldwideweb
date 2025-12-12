
import React from 'react';
import { cn } from '@/lib/utils';

interface PageSectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
  dark?: boolean;
  gradient?: 'blue' | 'aqua' | 'lavender' | undefined;
  invertColors?: boolean;
}

const PageSection: React.FC<PageSectionProps> = ({ 
  id, 
  title, 
  subtitle, 
  className, 
  children,
  dark = false,
  gradient,
  invertColors = false
}) => {
  const gradientClass = gradient ? `bg-gradient-${gradient}` : '';
  
  // Use white/grey backgrounds with dark text
  const bgColorClass = ""; // Let parent control background
  const textColorClass = "text-gray-900";
  
  return (
    <section 
      id={id} 
      className={cn(
        bgColorClass,
        textColorClass,
        className || ''
      )}
    >
      <div className="container mx-auto px-4 py-16">
        {(title || subtitle) && (
          <div className="max-w-3xl mx-auto text-center mb-12">
            {title && (
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#3F321F]">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={cn(
                "text-lg",
                "text-gray-600"
              )}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        <div className="section-content">
          {children}
        </div>
      </div>
    </section>
  );
};

export default PageSection;
