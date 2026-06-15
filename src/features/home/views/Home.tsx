import { motion } from 'framer-motion';
import * as THREE from 'three';
import { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars, Environment } from '@react-three/drei';

// Import mo yung mga sections na ginawa natin
import { HeroSection } from './HeroSection';
import { ClientMarqueeSection } from './ClientMarqueeSection';
import { ServicesSection } from './ServicesSection';
import { ManifestoSection } from './ManifestoSection';
import { TechMatrixSection } from './TechMatrixSection';
import { DeploymentCTASection } from '../../../shared/components/DeploymentCTASection';

// ==========================================
// 1. SCROLL RIG (Eto yung nagko-connect ng scroll sa 3D Camera)
// ==========================================
const ScrollRig = () => {
  useFrame((state) => {
    // Kunin kung gaano na kalayo yung na-scroll ng user (0 to 1 progress)
    const scrollY = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = maxScroll > 0 ? scrollY / maxScroll : 0;

    // Cinematic Camera Movement:
    // Lilipad pababa yung camera (Y-axis) at medyo papasok (Z-axis) habang nag-sscroll ka
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, -progress * 15, 0.05);
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, 14 - progress * 8, 0.05);
    
    // Medyo i-tilt yung camera pataas para dramatic
    state.camera.rotation.x = THREE.MathUtils.lerp(state.camera.rotation.x, progress * 0.2, 0.05);
  });
  return null;
};

// ==========================================
// 2. INTERACTIVE SWARM PARTICLES
// ==========================================
const SwarmParticle = ({ initialAngle, initialRadius, yOffset, zOffset, color, speed, scale, type }: any) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { mouse, viewport } = useThree();

  useFrame((state) => {
    if (!meshRef.current) return;

    const time = state.clock.elapsedTime * speed;
    let targetX = Math.cos(initialAngle + time) * initialRadius;
    // Pinalawak ang Z-axis para kapag pumasok yung camera, ramdam mo yung depth
    let targetZ = zOffset + Math.sin(initialAngle + time) * initialRadius;
    let targetY = yOffset + Math.sin(time * 0.5) * 1.5;

    // INTERACTIVITY: Naka-base pa rin sa cursor kahit nasaan na yung camera
    const mouseX = (mouse.x * viewport.width) / 2;
    const mouseY = (mouse.y * viewport.height) / 2;
    
    const currentPos = meshRef.current.position;
    const dx = currentPos.x - mouseX;
    const dy = currentPos.y - mouseY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    const repulsionRadius = 4.5;
    if (distance < repulsionRadius && distance > 0.1) {
      const force = (repulsionRadius - distance) / repulsionRadius; 
      targetX += (dx / distance) * force * 5; 
      targetY += (dy / distance) * force * 5;
      
      meshRef.current.rotation.x += 0.02;
      meshRef.current.rotation.y += 0.02;
    } else {
      meshRef.current.rotation.x += 0.002;
      meshRef.current.rotation.y += 0.003;
      meshRef.current.rotation.z += 0.001; 
    }

    currentPos.x += (targetX - currentPos.x) * 0.02;
    currentPos.y += (targetY - currentPos.y) * 0.02;
    currentPos.z += (targetZ - currentPos.z) * 0.02;
  });

  return (
    <mesh ref={meshRef} scale={scale}>
      {type === 'core' ? <icosahedronGeometry args={[1, 0]} /> : <octahedronGeometry args={[1, 0]} />}
      <meshStandardMaterial 
        color={color} 
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.1} 
        metalness={0.9} 
        transparent 
        opacity={0.8}
        wireframe={type === 'wireframe'}
      />
    </mesh>
  );
};

const AIBrainSwarm = () => {
  const colors = ["#38bdf8", "#818cf8", "#ffffff", "#0ea5e9"];
  const types = ["core", "solid", "wireframe"];
  
  const [particles] = useState(() => {
    // Tumaas sa 150 particles dahil mas malaki na yung area
    return Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      initialRadius: Math.random() * 8 + 2,
      initialAngle: Math.random() * Math.PI * 2,
      // Ikinalat natin sila vertically at horizontally para mahaba ang "journey" ng scroll
      yOffset: (Math.random() - 0.5) * 30, 
      zOffset: (Math.random() - 0.5) * 20,
      color: colors[Math.floor(Math.random() * colors.length)],
      type: types[Math.floor(Math.random() * types.length)],
      speed: Math.random() * 0.05 + 0.02, 
      scale: Math.random() * 0.4 + 0.1
    }));
  });

  return <group>{particles.map((props: any) => <SwarmParticle key={props.id} {...props} />)}</group>;
};

// ==========================================
// 3. MAIN PAGE LAYOUT
// ==========================================
export default function Home() {
  return (
    // Ang main container. Pwede kang magdagdag ng maraming sections dito at a-adapt yung 3D sa haba nito.
    <main className="relative w-full min-h-screen bg-[#010314] overflow-x-hidden">      
      {/* Cinematic Pitch-Black Fade Out Reveal */}
      <motion.div 
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="fixed inset-0 z-50 bg-[#010314] pointer-events-none"
      />

      {/* GLOBAL FIXED 3D BACKGROUND */}
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 14], fov: 45 }}>
          <ScrollRig /> {/* Ang ating Scroll Tracker */}
          <fog attach="fog" args={['#010314', 5, 30]} />
          <Stars radius={100} depth={50} count={10000} factor={4} saturation={1} fade speed={1} />
          
          <ambientLight intensity={0.2} />
          <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
          <directionalLight position={[-10, -10, -5]} intensity={3} color="#38bdf8" />
          <Environment preset="city" />
          
          <AIBrainSwarm />
        </Canvas>
        
        {/* Universal Glow overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#010314_100%)] pointer-events-none" />
      </div>

      {/* OVERLAYING CONTENT SECTIONS */}
      {/* Ensure na transparent ang backgrounds ng Hero at Services sa CSS/Tailwind nila */}
      <div className="relative z-10 flex flex-col pointer-events-none">        
        <HeroSection />
        <ClientMarqueeSection />
        <ManifestoSection />
        <ServicesSection />
        <TechMatrixSection />
        <DeploymentCTASection />
        {/* Pwede ka pa magdagdag ng <AboutSection />, <Footer />, etc. dito at aandar pa rin yung 3D background */}
      </div>

    </main>
  );
}