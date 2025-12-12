
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const DigitalGlobe: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true // Make background transparent to overlay on site background
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Create a smaller glowing wireframe sphere (reduced size from 5 to 3)
    const geometry = new THREE.SphereGeometry(3, 64, 64);
    const material = new THREE.MeshBasicMaterial({
      color: 0x33C3F0, // Match the blue accent color
      wireframe: true,
      transparent: true,
      opacity: 0.6
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Add particles on the globe - also reduced size
    const particles = new THREE.Group();
    for (let i = 0; i < 350; i++) { // Reduced number of particles
      const dot = new THREE.Mesh(
        new THREE.SphereGeometry(0.03, 8, 8), // Smaller dots
        new THREE.MeshBasicMaterial({ color: 0x33C3F0 })
      );
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      dot.position.setFromSphericalCoords(3, phi, theta); // Match the radius of the sphere
      particles.add(dot);
    }
    scene.add(particles);

    // Position camera closer to make the globe appear smaller
    camera.position.z = 8;

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Responsive handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation loop - slightly increased rotation speed
    let frameId: number;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      sphere.rotation.y += 0.002; // Slightly faster rotation
      particles.rotation.y += 0.002;
      renderer.render(scene, camera);
    };
    animate();

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose of resources
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="absolute inset-0 z-20 opacity-90"
      style={{ 
        pointerEvents: 'none',
        // Position the globe more to the left side of the screen
        left: '-25%',
        width: '150%', // Make it wider to account for positioning
      }} 
    />
  );
};

export default DigitalGlobe;
