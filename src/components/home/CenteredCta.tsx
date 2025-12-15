
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollAnimator from '@/components/ui/ScrollAnimator';

interface CenteredCtaProps {
  title?: string;
  buttonText: string;
  buttonLink: string;
}

const CenteredCta: React.FC<CenteredCtaProps> = ({ 
  title, 
  buttonText, 
  buttonLink 
}) => {
  return (
    <section className="py-16 container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollAnimator animation="fade-in" delay={100}>
          {title && (
            <h3 className="text-2xl font-semibold mb-8 text-tick-blue">
              {title}
            </h3>
          )}
          <Button 
            asChild 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-black font-medium text-base px-8"
          >
            <Link to={buttonLink}>
              {buttonText}
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </Button>
        </ScrollAnimator>
      </div>
    </section>
  );
};

export default CenteredCta;
