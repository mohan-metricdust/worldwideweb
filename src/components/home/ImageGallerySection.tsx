
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageSection from '@/components/layout/PageSection';
import ScrollAnimator from '@/components/ui/ScrollAnimator';

interface ImageGallerySectionProps {
  invertColors?: boolean;
}

const ImageGallerySection = ({ invertColors = false }: ImageGallerySectionProps) => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=800&auto=format&fit=crop",
      alt: "Modern Tech Workspace",
      title: "Digital Innovation Hub",
      description: "Where groundbreaking technologies are developed to transform businesses"
    },
    {
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
      alt: "Remote Work Solutions",
      title: "Flexible Work Solutions",
      description: "Empowering remote teams with seamless collaboration tools"
    },
    {
      src: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=800&auto=format&fit=crop",
      alt: "Customer Focus",
      title: "Proven Customer Focus",
      description: "Delivering exceptional value through customer-centric solutions and dedicated support"
    }
  ];

  return (
    <PageSection 
      title="Transforming Businesses" 
      subtitle="Visual stories of our impact across industries"
      invertColors={invertColors}
    >
      <div className="grid md:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <ScrollAnimator key={index} animation="fade-in" delay={index * 200}>
            <div className="overflow-hidden rounded-xl shadow-lg bg-[#222222] group">
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="absolute inset-0 flex flex-col justify-end p-6 transform">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <h3 className="text-xl font-semibold mb-2 text-white">{image.title}</h3>
                    <p className="text-white/80 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">{image.description}</p>
                    <Link to="/about" className="text-accent flex items-center text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      Learn more <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimator>
        ))}
      </div>
    </PageSection>
  );
};

export default ImageGallerySection;
