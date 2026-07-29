import React, { useEffect, useRef } from 'react';

interface StarShowerProps {
  onComplete?: () => void;
}

const StarShower: React.FC<StarShowerProps> = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Configuration
    const particleCount = 80; // Slightly increased for continuous background
    const colors = ['#FFD700', '#FDF4DC', '#FFF8E7']; // Gold, Ivory, Off-white
    const fadeInDuration = 3000; // Slow, gentle start

    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      color: string;
      baseAlpha: number;

      constructor() {
        this.x = 0;
        this.y = 0;
        this.size = 0;
        this.speedY = 0;
        this.speedX = 0;
        this.color = '';
        this.baseAlpha = 0;
        this.reset(true);
      }

      reset(initial = false) {
        this.x = Math.random() * canvas!.width;
        // If initial, spread across screen. If reset, start above top.
        this.y = initial ? Math.random() * canvas!.height : -10; 
        this.size = Math.random() * 2 + 0.5; // Tiny: 0.5px to 2.5px
        this.speedY = Math.random() * 0.2 + 0.05; // Even slower for background ambiance
        this.speedX = (Math.random() - 0.5) * 0.2; // Gentle drift
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.baseAlpha = Math.random() * 0.5 + 0.1; // Lower opacity for subtle background
      }

      update() {
        this.y += this.speedY;
        this.x += this.speedX;

        // Wrap around when falling off bottom
        if (this.y > canvas!.height + 10) {
          this.reset(false);
        }
      }

      draw(globalAlpha: number) {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        
        // Calculate effective alpha
        ctx.globalAlpha = this.baseAlpha * globalAlpha;
        
        // Subtle glow
        ctx.shadowBlur = 4;
        ctx.shadowColor = this.color;
        
        ctx.fill();
        ctx.shadowBlur = 0; // Reset
        ctx.globalAlpha = 1; // Reset
      }
    }

    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    let startTime = Date.now();
    let animationFrameId: number;

    const animate = () => {
      if (!ctx) return;
      const elapsed = Date.now() - startTime;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Lifecycle opacity (Fade In only)
      let globalAlpha = 1;

      if (elapsed < fadeInDuration) {
        globalAlpha = elapsed / fadeInDuration;
      }

      particles.forEach(p => {
        p.update();
        p.draw(globalAlpha);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-[40]"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default StarShower;