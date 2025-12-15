
import React, { useEffect, useRef } from 'react';

interface Bubble {
  x: number;
  y: number;
  size: number;
  speedY: number;
  opacity: number;
  depth: number;
}

const BubbleAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bubbles = useRef<Bubble[]>([]);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const updateSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initialize bubbles
    const initBubbles = () => {
      bubbles.current = [];
      for (let i = 0; i < 30; i++) {
        createBubble();
      }
    };

    const createBubble = () => {
      bubbles.current.push({
        x: Math.random() * canvas.width,
        y: -Math.random() * 100, // Start from top
        size: 5 + Math.random() * 25,
        speedY: 0.5 + Math.random() * 1.5,
        opacity: 0.1 + Math.random() * 0.3,
        depth: Math.random() * 3 // For 3D effect (0-3)
      });
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw and update each bubble
      bubbles.current.forEach((bubble, index) => {
        // Move bubble downward
        bubble.y += bubble.speedY;
        
        // 3D shadow effect based on depth
        const shadowBlur = 5 + bubble.depth * 2;
        const shadowOffset = bubble.depth * 2;
        
        // Draw the bubble with 3D effect
        ctx.beginPath();
        
        // Main bubble
        ctx.globalAlpha = bubble.opacity;
        ctx.shadowColor = '#333';
        ctx.shadowBlur = shadowBlur;
        ctx.shadowOffsetX = shadowOffset;
        ctx.shadowOffsetY = shadowOffset;
        
        // Different color based on depth for 3D effect
        if (bubble.depth < 1) {
          ctx.fillStyle = '#ffffff20'; // Transparent white
        } else if (bubble.depth < 2) {
          ctx.fillStyle = '#cccccc20'; // Transparent light gray
        } else {
          ctx.fillStyle = '#99999920'; // Transparent gray
        }
        
        ctx.arc(bubble.x, bubble.y, bubble.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Highlight for 3D effect
        ctx.beginPath();
        ctx.globalAlpha = bubble.opacity * 0.7;
        ctx.shadowColor = 'transparent';
        ctx.shadowBlur = 0;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.fillStyle = '#ffffff40';
        ctx.arc(
          bubble.x - bubble.size * 0.3,
          bubble.y - bubble.size * 0.3,
          bubble.size * 0.4,
          0,
          Math.PI * 2
        );
        ctx.fill();
        
        // Reset global settings
        ctx.globalAlpha = 1;
        
        // Remove bubbles that are off-screen and create new ones
        if (bubble.y > canvas.height + bubble.size * 2) {
          bubbles.current.splice(index, 1);
          createBubble();
        }
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    // Initialize and start animation
    updateSize();
    initBubbles();
    animate();
    
    // Handle window resize
    window.addEventListener('resize', updateSize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', updateSize);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className="absolute inset-0 z-20 pointer-events-none"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default BubbleAnimation;
