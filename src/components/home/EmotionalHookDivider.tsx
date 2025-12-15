
import React from 'react';
import ScrollAnimator from '@/components/ui/ScrollAnimator';

interface EmotionalHookDividerProps {
  text: string;
  theme?: 'dark' | 'light';
}

const EmotionalHookDivider: React.FC<EmotionalHookDividerProps> = ({ 
  text, 
  theme = 'dark' 
}) => {
  const bgClass = theme === 'light' ? 'bg-gray-50' : 'bg-black';
  const textClass = theme === 'light' ? 'text-gray-800' : 'text-white';

  return (
    <div className={`py-24 ${bgClass}`}>
      <div className="container mx-auto px-4">
        <ScrollAnimator animation="fade-in">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-center ${textClass} max-w-5xl mx-auto leading-tight`}>
            {text}
          </h2>
        </ScrollAnimator>
      </div>
    </div>
  );
};

export default EmotionalHookDivider;
