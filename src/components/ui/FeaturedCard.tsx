
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FeaturedCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  link?: string;
  className?: string;
  invertColors?: boolean;
}

const FeaturedCard: React.FC<FeaturedCardProps> = ({
  title,
  description,
  icon,
  link,
  className,
  invertColors = false,
}) => {
  const CardContent = () => (
    <>
      {icon && <div className="mb-4 text-[#3F321F] transition-transform group-hover:scale-110 duration-300">{icon}</div>}
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className={`mb-4 opacity-0 max-h-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-300 ease-in-out overflow-hidden text-gray-700`}>
        {description}
      </p>
      {link && (
        <div className="elegant-link group flex items-center text-[#3F321F] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Learn More <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      )}
    </>
  );

  return (
    <div 
      className={cn(
        'elegant-card p-6 bg-white group hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer',
        className
      )}
    >
      {link ? (
        <Link to={link} className="block h-full">
          <CardContent />
        </Link>
      ) : (
        <CardContent />
      )}
    </div>
  );
};

export default FeaturedCard;
