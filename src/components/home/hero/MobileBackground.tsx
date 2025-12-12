
import React from 'react';
import BubbleAnimation from './BubbleAnimation';

const MobileBackground: React.FC = () => {
  // Background image style with the new uploaded image
  const backgroundStyle = {
    backgroundImage: `url('/lovable-uploads/b8756b02-c1d2-4725-a287-43b746faa355.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="absolute inset-0 z-10 block sm:hidden">
      {/* Mobile background using div with background image for more reliable loading */}
      <div 
        className="w-full h-full" 
        style={backgroundStyle}
      ></div>
      
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Bubble Animation */}
      <BubbleAnimation />
    </div>
  );
};

export default MobileBackground;
