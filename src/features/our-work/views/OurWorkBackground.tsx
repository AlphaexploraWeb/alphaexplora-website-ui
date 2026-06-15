import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, Stars, Environment } from '@react-three/drei';
import * as THREE from 'three';

// ── Generate Dummy Constellation Nodes ──
const generateConstellationData = (nodeCount: number) => {
  const positions = new Float32Array(nodeCount * 3);
  for (let i = 0; i < nodeCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 50; 
    positions[i * 3 + 1] = (Math.random() - 0.5) * 50; 
    positions[i * 3 + 2] = (Math.random() - 0.5) * 50; 
  }
  return positions;
};

// ── Constellation Network System ──
const ConstellationNetwork = ({ nodeCount }: { nodeCount: number }) => {
  const groupRef = useRef<THREE.Group>(null);
  const materialRef = useRef<THREE.LineBasicMaterial>(null);
  const points = useMemo(() => generateConstellationData(nodeCount), [nodeCount]);
  
  // State for the "Hyperspace Entrance" morphing effect
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const { linePositions, lineColors } = useMemo(() => {
    const connectionPoints: number[] = [];
    const connectionColors: number[] = [];
    const thresholdSq = 12 * 12; 
    const lineColor = new THREE.Color("#22d3ee"); 

    const pointList = [];
    for (let i = 0; i < points.length; i += 3) {
      pointList.push(new THREE.Vector3(points[i], points[i+1], points[i+2]));
    }

    for (let i = 0; i < pointList.length; i++) {
      for (let j = i + 1; j < pointList.length; j++) {
        const dx = pointList[i].x - pointList[j].x;
        const dy = pointList[i].y - pointList[j].y;
        const dz = pointList[i].z - pointList[j].z;
        const distSq = dx * dx + dy * dy + dz * dz;

        if (distSq < thresholdSq) {
          connectionPoints.push(...pointList[i].toArray(), ...pointList[j].toArray());
          connectionColors.push(...lineColor.toArray(), ...lineColor.toArray());
        }
      }
    }
    return {
      linePositions: new Float32Array(connectionPoints),
      lineColors: new Float32Array(connectionColors)
    };
  }, [points]);

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();

    // 1. Cinematic Mouse Parallax (The network tilts based on mouse position)
    const targetX = (state.pointer.x * Math.PI) / 6;
    const targetY = (state.pointer.y * Math.PI) / 6;
    
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, (time * 0.05) + targetX, 0.05);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, Math.sin(time * 0.02) * 0.05 - targetY, 0.05);

    // 2. Hyperspace Entrance (Expands from scale 0 to 1 on load)
    const targetScale = mounted ? 1 : 0.001;
    groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.03);

    // 3. Data Pulse (Lines breathe/pulse to simulate data transfer)
    if (materialRef.current) {
      materialRef.current.opacity = 0.05 + Math.sin(time * 2) * 0.03; 
    }
  });

  return (
    <group ref={groupRef} scale={[0.001, 0.001, 0.001]}>
      {/* Draw the Node Points */}
      <Points positions={points}>
        <pointsMaterial
          transparent
          color="#38bdf8"
          size={0.25}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>

      {/* Draw the Connection Lines (Fiber Optic Cables) */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
          <bufferAttribute attach="attributes-color" args={[lineColors, 3]} />
        </bufferGeometry>
        <lineBasicMaterial 
          ref={materialRef} 
          vertexColors 
          transparent 
          opacity={0.08} 
          blending={THREE.AdditiveBlending} 
          linewidth={1} 
        />
      </lineSegments>
    </group>
  );
};

// ── MAIN BACKGROUND COMPONENT ──
export const OurWorkBackground = () => {
  return (
    <div className="fixed inset-0 z-0 bg-[#010314] pointer-events-auto">
      <Canvas camera={{ position: [0, 0, 45], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[20, 20, 20]} intensity={1.5} />
        
        {/* Stars system */}
        <Stars radius={150} depth={200} count={5000} factor={4} fade speed={1.5} />
        
        {/* Constellation Network */}
        <ConstellationNetwork nodeCount={120} />
        
        <Environment preset="studio" />
      </Canvas>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#010314_100%)] pointer-events-none z-10 opacity-70" />
    </div>
  );
};