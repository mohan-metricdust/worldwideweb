
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightBlobIcon } from '@/components/ui/BlobIcons';
import ScrollAnimator from '@/components/ui/ScrollAnimator';
import MagneticButton from '@/components/ui/MagneticButton';
import ParallaxSection from '@/components/ui/ParallaxSection';
import PageSection from '@/components/layout/PageSection';

interface CtaSectionProps {
  invertColors?: boolean;
}

const CtaSection = ({ invertColors = false }: CtaSectionProps) => {
  const textClass = invertColors ? "text-black" : "text-white";
  
  return (
    <PageSection invertColors={invertColors}>
      <div className="max-w-4xl mx-auto text-center">
        <ScrollAnimator animation="fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-tick-blue">Start your AI journey today. Let's build together.</h2>
        </ScrollAnimator>
        <ScrollAnimator animation="fade-in" delay={200}>
          <p className={`text-lg ${invertColors ? "text-black/70" : "text-foreground/70"} mb-8`}>
            Let's discuss how Bean InfoSystems can help your business thrive in the digital landscape.
          </p>
        </ScrollAnimator>
        <ScrollAnimator animation="fade-in" delay={400}>
          <MagneticButton strength={20} className="btn-primary inline-flex">
            <Link to="/contact" className="flex items-center">
              Get in Touch
              <ArrowRightBlobIcon size="sm" className="ml-2" />
            </Link>
          </MagneticButton>
        </ScrollAnimator>
      </div>
    </PageSection>
  );
};

export default CtaSection;
