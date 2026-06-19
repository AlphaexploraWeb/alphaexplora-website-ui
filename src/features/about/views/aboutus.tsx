import { motion } from 'framer-motion';
import * as THREE from 'three';
import { useRef, useMemo } from 'react';
import { Stars, Environment } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { AboutHero } from './AboutHero';
import { AboutWho } from './AboutWho';
import { AboutMission } from './AboutMission';
import { AboutOutro } from './AboutOutro';

// Helper to create a custom texture that looks like the letter "A"
const createATexture = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    ctx.clearRect(0, 0, 128, 128);
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = 'bold 100px sans-serif';
    ctx.fillText('A', 64, 74);
  }
  return new THREE.CanvasTexture(canvas);
};

// Helper: Creates a glowing 4-pointed diamond star texture
const createStarTexture = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    ctx.clearRect(0, 0, 64, 64);
    
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)'); 
    gradient.addColorStop(0.2, 'rgba(255, 255, 255, 0.8)');
    gradient.addColorStop(0.5, 'rgba(56, 189, 248, 0.3)'); 
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    
    ctx.fillStyle = gradient;
    
    ctx.beginPath();
    ctx.moveTo(32, 4); 
    ctx.quadraticCurveTo(32, 32, 60, 32); 
    ctx.quadraticCurveTo(32, 32, 32, 60); 
    ctx.quadraticCurveTo(32, 32, 4, 32);  
    ctx.quadraticCurveTo(32, 32, 32, 4);  
    ctx.fill();
  }
  return new THREE.CanvasTexture(canvas);
};

// ==========================================
// 1. SCROLL RIG & THE "A" CONSTELLATION
// ==========================================
const A_Constellation = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const geometryRef = useRef<THREE.BufferGeometry>(null);

  const particleCount = 8000;
  
  const starTexture = useMemo(() => createStarTexture(), []);
  const aTexture = useMemo(() => createATexture(), []);

  const { randomPositions, targetPositions } = useMemo(() => {
    const random = new Float32Array(particleCount * 3);
    const target = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      const r = 10 + Math.random() * 15;
      
      random[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      random[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      random[i * 3 + 2] = r * Math.cos(phi);

      const group = Math.random();
      let tx = 0, ty = 0, tz = (Math.random() - 0.5) * 0.2; 

      if (group < 0.15) {
        const t = Math.random();
        tx = -1.2 + (t * 1.2);
        ty = -1.0 + (t * 2.8);
      } else if (group < 0.30) {
        const t = Math.random();
        tx = 1.2 - (t * 1.2);
        ty = -1.0 + (t * 2.8);
      } else if (group < 0.40) {
        const t = Math.random();
        tx = -0.6 + (t * 0.6);
        ty = -0.4 + (t * 1.4);
      } else if (group < 0.50) {
        const t = Math.random();
        tx = 0.6 - (t * 0.6);
        ty = -0.4 + (t * 1.4);
      } else if (group < 0.55) {
        const t = Math.random();
        tx = -0.5 + (t * 0.5);   
        ty = -0.3 + (t * 0.2);   
      } else if (group < 0.60) {
        const t = Math.random();
        tx = 0.5 - (t * 0.5);    
        ty = -0.3 + (t * 0.2);   
      } else if (group < 0.70) {
        const t = Math.random();
        tx = -1.0 + (t * 1.0);   
        ty = -1.0 + (t * 0.6);   
      } else if (group < 0.80) {
        const t = Math.random();
        tx = 1.0 - (t * 1.0);    
        ty = -1.0 + (t * 0.6);
      } else if (group < 0.93) {
        let angle = Math.random() * Math.PI * 2;
        while (
          (angle > Math.PI * 0.35 && angle < Math.PI * 0.65) || 
          (angle > Math.PI * 1.15 && angle < Math.PI * 1.35) || 
          (angle > Math.PI * 1.65 && angle < Math.PI * 1.85)    
        ) {
          angle = Math.random() * Math.PI * 2;
        }
        tx = Math.cos(angle) * 2.0;
        ty = Math.sin(angle) * 2.0 + 0.3; 
      } else {
        const t = Math.random();
        const linePicker = Math.random();
        if (linePicker < 0.33) {
          tx = -1.8 + (t * 0.3);
          ty = -2.2 + (t * 0.7);
        } else if (linePicker < 0.66) {
          tx = -1.4 + (t * 0.3);
          ty = -2.0 + (t * 0.7);
        } else {
          tx = -1.0 + (t * 0.3);
          ty = -1.8 + (t * 0.7);
        }
      }
      
      tx += (Math.random() - 0.5) * 0.15;
      ty += (Math.random() - 0.5) * 0.15;
      target[i * 3] = tx;
      target[i * 3 + 1] = ty;
      target[i * 3 + 2] = tz;
    }
    return { randomPositions: random, targetPositions: target };
  }, [particleCount]);

  const positions = useMemo(() => new Float32Array(particleCount * 3), [particleCount]);

  useFrame((state) => {
    if (!geometryRef.current || !pointsRef.current) return;

    const scrollY = window.scrollY;
    
    // ── FIX: Finish animation earlier ──
    // Kinukuha natin ang total height, tapos minultiply sa 0.75.
    // Ibig sabihin, pagdating mo sa 75% ng page (bago mag footer), buong-buo na yung "A".
    const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const maxScroll = Math.max(totalScrollHeight * 0.85, 1);
    
    // Add easing to the progress so the particles snap together nicely
    let progress = Math.min(Math.max(scrollY / maxScroll, 0), 1);
    // Smooth out the progress curve (ease-in-out)
    progress = progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress;

    const time = state.clock.elapsedTime;
    const currentPositions = geometryRef.current.attributes.position.array as Float32Array;

    for (let i = 0; i < particleCount; i++) {
      // Add constant subtle floating motion
      const floatX = Math.sin(time + i) * 0.05;
      const floatY = Math.cos(time + i) * 0.05;

      const targetX = targetPositions[i * 3];
      const targetY = targetPositions[i * 3 + 1];
      const targetZ = targetPositions[i * 3 + 2];

      const randX = randomPositions[i * 3];
      const randY = randomPositions[i * 3 + 1];
      const randZ = randomPositions[i * 3 + 2];

      // Interpolate between Chaos (Random) and Order (Target "A")
      currentPositions[i * 3] = THREE.MathUtils.lerp(randX, targetX, progress) + floatX;
      currentPositions[i * 3 + 1] = THREE.MathUtils.lerp(randY, targetY, progress) + floatY;
      currentPositions[i * 3 + 2] = THREE.MathUtils.lerp(randZ, targetZ, progress);
    }
    
    // Mark as dirty so Three.js updates the GPU
    geometryRef.current.attributes.position.needsUpdate = true;

    // Slowly rotate the entire constellation
    pointsRef.current.rotation.y = Math.sin(time * 0.2) * 0.4;
    
    // Camera pull-in effect
    state.camera.position.z = THREE.MathUtils.lerp(12, 6, progress);
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry ref={geometryRef}>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15} 
        color="#38bdf8"
        transparent={true}
        opacity={0.8}
        blending={THREE.AdditiveBlending} 
        sizeAttenuation={true}
        map={starTexture}
        alphaTest={0.01}
        depthWrite={false}
      />
    </points>
  );
};

// ==========================================
// 2. MAIN PAGE LAYOUT
// ==========================================
export default function AboutUs() {
  return (
    // ── FIX: Pinalitan ang overflow-x-hidden ng overflow-x-clip para gumana ang position: sticky ──
    <main className="relative w-full bg-[#010314] overflow-x-clip">      
      
      {/* Cinematic Pitch-Black Fade Out Reveal */}
      <motion.div 
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="fixed inset-0 z-50 bg-[#010314] pointer-events-none"
      />

      {/* GLOBAL FIXED 3D BACKGROUND */}
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }}>
          <fog attach="fog" args={['#010314', 2, 15]} />
          <Stars radius={100} depth={50} count={10000} factor={4} saturation={1} fade speed={1} />
          
          <ambientLight intensity={0.2} />
          <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
          <directionalLight position={[-10, -10, -5]} intensity={3} color="#38bdf8" />
          <Environment preset="city" />
          
          <A_Constellation />
        </Canvas>
        
        {/* Universal Glow overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#010314_100%)] pointer-events-none" />
      </div>

      {/* OVERLAYING CONTENT */}
      <div className="relative z-10 w-full pointer-events-none flex flex-col">
        <AboutHero />
        <AboutMission />
        <AboutWho />

        <AboutOutro />

      </div>
    </main>
  );
}