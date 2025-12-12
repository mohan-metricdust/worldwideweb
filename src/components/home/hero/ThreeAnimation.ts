
// This file contains a custom Three.js animation used for the digital globe
// The current build error is related to the 'useLegacyLights' property which doesn't exist anymore
// Since we're no longer using the DigitalGlobe component, we can provide a minimal implementation
// that doesn't cause build errors but isn't actually used in the application

import * as THREE from 'three';

export class ThreeAnimation {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  container: HTMLElement | null = null;
  particles: THREE.Points | null = null;
  width = 0;
  height = 0;
  isAnimating = false;
  
  constructor() {
    // Initialize Three.js objects
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, 1, 1, 1000);
    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });
    
    // Set basic properties
    this.camera.position.z = 400;
    this.scene.add(this.camera);
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.setPixelRatio(window.devicePixelRatio);
  }

  init(container: HTMLElement): void {
    if (!container) return;
    
    this.container = container;
    this.width = this.container.clientWidth;
    this.height = this.container.clientHeight;
    
    this.renderer.setSize(this.width, this.height);
    this.container.appendChild(this.renderer.domElement);
    
    // Update camera aspect ratio
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();
    
    // Add window resize listener
    window.addEventListener('resize', this.onResize);
  }
  
  onResize = (): void => {
    if (!this.container) return;
    
    this.width = this.container.clientWidth;
    this.height = this.container.clientHeight;
    
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();
    
    this.renderer.setSize(this.width, this.height);
  }
  
  animate = (): void => {
    if (!this.isAnimating) return;
    
    requestAnimationFrame(this.animate);
    this.renderer.render(this.scene, this.camera);
  }
  
  start(): void {
    this.isAnimating = true;
    this.animate();
  }
  
  stop(): void {
    this.isAnimating = false;
  }
  
  dispose(): void {
    this.stop();
    window.removeEventListener('resize', this.onResize);
    
    if (this.container && this.renderer.domElement) {
      this.container.removeChild(this.renderer.domElement);
    }
    
    // Clean up Three.js resources
    if (this.particles) {
      this.scene.remove(this.particles);
      if (this.particles.geometry) {
        this.particles.geometry.dispose();
      }
      if (this.particles.material) {
        (this.particles.material as THREE.Material).dispose();
      }
    }
    
    this.renderer.dispose();
  }
}
