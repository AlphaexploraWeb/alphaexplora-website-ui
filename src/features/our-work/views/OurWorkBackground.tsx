import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, Stars, Environment } from '@react-three/drei';
import * as THREE from 'three';

// ── PROJECT DATA & COLORS ──
const projectColors = [
  "#23ce23", // 01 St Peter
  "#fbdf8b", // 02 Espasyo
  "#6496e2", // 03 GlobalBIM
  "#fffdbe", // 04 Estruktura
  "#c452dd", // 05 TMGN
  "#f97316", "#f97316", "#f97316", "#f97316", "#f97316" // Ongoing Projects (Orange)
];

const projectTexts = [
  "St. Peter",
  "espasyo.ph",
  "globalbim.ph",
  "estruktura.ph",
  "tmgn.ph",
  "ONGOING", "ONGOING", "ONGOING", "ONGOING", "ONGOING"
];

const PARTICLE_COUNT = 4000;

// ── CANVAS TEXT TO 3D PARTICLES CONVERTER ──
const generateTextShape = (text: string, count: number) => {
  if (typeof document === 'undefined') return new Float32Array(count * 3);

  const canvas = document.createElement('canvas');
  canvas.width = 800;
  canvas.height = 300;
  const ctx = canvas.getContext('2d');
  
  if (!ctx) return new Float32Array(count * 3);

  // Draw Text
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'white';
  ctx.font = 'bold 80px monospace';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, canvas.width / 2, canvas.height / 2);

  // Read Pixels
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
  const validPoints = [];

  for (let y = 0; y < canvas.height; y += 3) {
    for (let x = 0; x < canvas.width; x += 3) {
      const index = (y * canvas.width + x) * 4;
      // Kung hindi black yung pixel (meaning may text)
      if (imageData[index] > 128) {
        validPoints.push({
          x: (x - canvas.width / 2) * 0.1,
          y: -(y - canvas.height / 2) * 0.1,
          z: (Math.random() - 0.5) * 2 // Konting thickness
        });
      }
    }
  }

  const pos = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    // Pick random valid pixel
    const pt = validPoints.length > 0 
      ? validPoints[Math.floor(Math.random() * validPoints.length)] 
      : { x: (Math.random()-0.5)*20, y: (Math.random()-0.5)*20, z: (Math.random()-0.5)*20 }; // Fallback scatter
    
    // Add particle fuzziness/noise
    pos[i * 3] = pt.x + (Math.random() - 0.5) * 0.4;
    pos[i * 3 + 1] = pt.y + (Math.random() - 0.5) * 0.4;
    pos[i * 3 + 2] = pt.z + (Math.random() - 0.5) * 0.4;
  }
  
  return pos;
};

// ── MORPHING SWARM COMPONENT ──
const MorphingSwarm = ({ activeIndex }: { activeIndex: number }) => {
  const pointsRef = useRef<THREE.Points>(null);
  const materialRef = useRef<THREE.PointsMaterial>(null);
  
  // Pre-generate all text shapes
  const allShapes = useMemo(() => {
    return projectTexts.map(text => generateTextShape(text, PARTICLE_COUNT));
  }, []);
  
  const [currentPositions] = useState(() => new Float32Array(allShapes[0] || PARTICLE_COUNT * 3));
  const targetColor = useMemo(() => new THREE.Color(), []);

  useFrame((state) => {
    if (!pointsRef.current || !materialRef.current || !allShapes.length) return;
    const time = state.clock.getElapsedTime();

    // 1. Morph Particle Positions
    const targetPositions = allShapes[activeIndex];
    const posAttr = pointsRef.current.geometry.attributes.position;
    const posArray = posAttr.array as Float32Array;

    for (let i = 0; i < PARTICLE_COUNT * 3; i++) {
      posArray[i] = THREE.MathUtils.lerp(posArray[i], targetPositions[i], 0.04);
    }
    posAttr.needsUpdate = true;

    // 2. Cinematic Rotation (Slight sway to show 3D depth)
    pointsRef.current.rotation.y = Math.sin(time * 0.2) * 0.1;
    pointsRef.current.rotation.x = Math.cos(time * 0.2) * 0.05;

    // 3. Sync Color
    targetColor.set(projectColors[activeIndex] || projectColors[0]);
    materialRef.current.color.lerp(targetColor, 0.05);

    // Breathing effect
    materialRef.current.size = 0.1 + Math.sin(time * 4) * 0.05;
  });

  return (
    <Points ref={pointsRef} positions={currentPositions}>
      <pointsMaterial 
        ref={materialRef} 
        transparent 
        color="#38bdf8" 
        size={0.1} 
        sizeAttenuation 
        depthWrite={false} 
        blending={THREE.AdditiveBlending} 
      />
    </Points>
  );
};

// ── MAIN BACKGROUND COMPONENT ──
export const OurWorkBackground = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleSync = (e: any) => setActiveIndex(e.detail);
    window.addEventListener('sync-project-index', handleSync);
    
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('sync-project-index', handleSync);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 bg-[#010314] pointer-events-none">
      <Canvas camera={{ position: [0, 0, 45], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[20, 20, 20]} intensity={1.5} />
        
        <Stars radius={100} depth={100} count={3000} factor={3} fade speed={1} />
        {!isMobile && <MorphingSwarm activeIndex={activeIndex} />}
        
        <Environment preset="studio" />
      </Canvas>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,#010314_100%)] pointer-events-none z-10 opacity-80" />
    </div>
  );
};