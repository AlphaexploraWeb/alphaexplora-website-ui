import { useRef, useState, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { services } from './ServicesEcosystem';

// ── EXACT FACE FRACTURE ALGORITHM ──
const generateFractureData = () => {
  const baseBox = new THREE.BoxGeometry(1, 1, 1, 2, 2, 2); 
  const posAttr = baseBox.attributes.position;
  const indices = baseBox.index!.array;
  const data = [];
  const v0 = new THREE.Vector3(0, 0, 0); // Core of the box

  for (let i = 0; i < indices.length; i += 3) {
    const v1 = new THREE.Vector3().fromBufferAttribute(posAttr, indices[i]);
    const v2 = new THREE.Vector3().fromBufferAttribute(posAttr, indices[i + 1]);
    const v3 = new THREE.Vector3().fromBufferAttribute(posAttr, indices[i + 2]);

    // Center of mass for the 3D chunk (Tetrahedron)
    const center = new THREE.Vector3().add(v1).add(v2).add(v3).add(v0).divideScalar(4);

    const geom = new THREE.BufferGeometry();
    
    // Localize vertices to the chunk's center of mass so it rotates realistically
    const p0 = v0.clone().sub(center);
    const p1 = v1.clone().sub(center);
    const p2 = v2.clone().sub(center);
    const p3 = v3.clone().sub(center);

    // Create 4 faces to make a solid 3D chunk
    const vertices = new Float32Array([
      // Original outer face
      p1.x, p1.y, p1.z,  p2.x, p2.y, p2.z,  p3.x, p3.y, p3.z,
      // Inner side 1
      p0.x, p0.y, p0.z,  p3.x, p3.y, p3.z,  p2.x, p2.y, p2.z,
      // Inner side 2
      p0.x, p0.y, p0.z,  p1.x, p1.y, p1.z,  p3.x, p3.y, p3.z,
      // Inner side 3
      p0.x, p0.y, p0.z,  p2.x, p2.y, p2.z,  p1.x, p1.y, p1.z,
    ]);
    
    geom.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    geom.computeVertexNormals();

    // Direction of explosion based on the outer face
    const outerCenter = new THREE.Vector3().add(v1).add(v2).add(v3).divideScalar(3);
    const baseVel = outerCenter.clone().normalize().multiplyScalar(Math.random() * 6 + 3);
    const rotSpeed = new THREE.Vector3((Math.random() - 0.5) * 4, (Math.random() - 0.5) * 4, (Math.random() - 0.5) * 4);

    data.push({ geom, center, baseVel, rotSpeed });
  }
  return data;
};
const FRACTURE_DATA = generateFractureData();

// ── 3D INTERACTIVE MONOLITH (SPACE DEBRIS) ──
const InteractiveMonolith = ({ position, rotation, scale, speed, activeColor, delay }: any) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const shardGroupRef = useRef<THREE.Group>(null);
  const velocities = useRef<THREE.Vector3[]>([]);
  
  const [hovered, setHovered] = useState(false);
  const [shattered, setShattered] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const sharedMat = useMemo(() => new THREE.MeshPhysicalMaterial({
    side: THREE.DoubleSide,
    color: new THREE.Color("#0f172a"), 
    metalness: 0.7, 
    roughness: 0.2, 
    clearcoat: 1,
    transparent: true,
    opacity: 1
  }), []);

  useEffect(() => {
    if (shattered) {
      velocities.current = FRACTURE_DATA.map(d => {
        const v = d.baseVel.clone();
        v.add(new THREE.Vector3((Math.random() - 0.5) * 3, (Math.random() - 0.5) * 3, (Math.random() - 0.5) * 3));
        return v;
      });

      if (shardGroupRef.current) {
        shardGroupRef.current.children.forEach((child, i) => {
          child.position.copy(FRACTURE_DATA[i].center);
          child.rotation.set(0, 0, 0);
          child.scale.set(1, 1, 1);
        });
      }
    }
  }, [shattered]);

  useFrame((_, delta) => {
    // Always use the active color, but vary the brightness (intensity)
    const targetColor = new THREE.Color(activeColor);
    sharedMat.emissive.lerp(targetColor, 0.15);
    
    // Dim baseline glow (0.3) when not hovered. Bright glow (2) when hovered.
    const targetIntensity = hovered && !shattered ? 2 : 0.3;
    sharedMat.emissiveIntensity = THREE.MathUtils.lerp(sharedMat.emissiveIntensity, targetIntensity, 0.15);
    
    sharedMat.envMapIntensity = hovered && !shattered ? 2 : 0.8; 

    if (shattered && shardGroupRef.current) {
      shardGroupRef.current.children.forEach((child, i) => {
        const v = velocities.current[i];
        if (v.length() > 0.2) v.multiplyScalar(0.96); 
        
        child.position.addScaledVector(v, delta);
        child.rotation.x += FRACTURE_DATA[i].rotSpeed.x * delta;
        child.rotation.y += FRACTURE_DATA[i].rotSpeed.y * delta;
        child.rotation.z += FRACTURE_DATA[i].rotSpeed.z * delta;
      });
    } else if (meshRef.current) {
      const scaleMult = hovered ? 1.05 : 1;
      const targetScale = mounted 
        ? new THREE.Vector3(scale[0] * scaleMult, scale[1] * scaleMult, scale[2] * scaleMult)
        : new THREE.Vector3(0.001, 0.001, 0.001);
      
      meshRef.current.scale.lerp(targetScale, 0.04);
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.1} floatIntensity={0.5}>
      {shattered ? (
        <group position={position} rotation={rotation} scale={scale} ref={shardGroupRef}>
          {FRACTURE_DATA.map((d, i) => (
            <mesh 
              key={i} 
              geometry={d.geom} 
              material={sharedMat} 
              onPointerOver={(e) => {
                e.stopPropagation();
                document.body.style.cursor = 'crosshair';
                // Add a physical "kick" to the shard when hovered
                if (velocities.current[i]) {
                  velocities.current[i].add(new THREE.Vector3(
                    (Math.random() - 0.5) * 6,
                    (Math.random() - 0.5) * 6,
                    (Math.random() - 0.5) * 6
                  ));
                }
              }}
              onPointerOut={() => {
                document.body.style.cursor = 'auto';
              }}
            />
          ))}
        </group>
      ) : (
        <mesh 
          ref={meshRef} 
          position={position} 
          rotation={rotation} 
          scale={[0.001, 0.001, 0.001]}
          onPointerOver={(e) => { e.stopPropagation(); setHovered(true); document.body.style.cursor = 'crosshair'; }}
          onPointerOut={() => { setHovered(false); document.body.style.cursor = 'auto'; }}
          onClick={(e) => { 
            e.stopPropagation(); 
            setShattered(true); 
            setHovered(false); 
            document.body.style.cursor = 'auto'; 
          }}
        >
          <boxGeometry args={[1, 1, 1]} />
          <primitive object={sharedMat} attach="material" />
          
          {hovered && (
            <mesh>
              <boxGeometry args={[1.02, 1.02, 1.02]} />
              <meshBasicMaterial color={activeColor} wireframe transparent opacity={0.4} />
            </mesh>
          )}
        </mesh>
      )}
    </Float>
  );
};

// ── BACKGROUND SCENE ──
export const DarkMonolithsScene = () => {
  const fogRef = useRef<THREE.Fog>(null);
  const lightRef = useRef<THREE.PointLight>(null);
  const colors = useMemo(() => services.map(s => new THREE.Color(s.hexColor)), []);
  
  // Track current color for monoliths
  const [activeColor, setActiveColor] = useState(services[0].hexColor);

  const [monoliths] = useState(() => Array.from({ length: 45 }).map(() => ({
    position: [
      (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 20 + 8), 
      (Math.random() - 0.5) * 35, 
      -Math.random() * 250 + 10
    ] as [number, number, number],
    rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0] as [number, number, number],
    scale: [Math.random() * 5 + 2, Math.random() * 18 + 5, Math.random() * 5 + 2] as [number, number, number],
    speed: Math.random() * 1.5 + 0.5,
    delay: Math.random() * 2500
  })));

  useFrame((state) => {
    const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
    const scrollProgress = window.scrollY / maxScroll;

    state.camera.position.z = THREE.MathUtils.lerp(10, -220, scrollProgress);
    state.camera.position.y = Math.sin(state.clock.elapsedTime * 0.2) * 2;
    state.camera.position.x = Math.cos(state.clock.elapsedTime * 0.15) * 1.5;

    const idx = Math.min(Math.floor(scrollProgress * services.length), services.length - 1);
    const nextIdx = Math.min(idx + 1, services.length - 1);
    const progress = (scrollProgress * services.length) % 1;
    const currentColor = new THREE.Color().lerpColors(colors[idx], colors[nextIdx], progress);

    if (fogRef.current) fogRef.current.color.copy(currentColor).multiplyScalar(0.02);
    if (lightRef.current) {
      lightRef.current.position.set(state.camera.position.x, state.camera.position.y, state.camera.position.z - 20);
      lightRef.current.color.copy(currentColor);
    }
    
    // Update active color for the monoliths to reflect
    setActiveColor('#' + currentColor.getHexString());
  });

  return (
    <>
      <fog ref={fogRef} attach="fog" args={['#010314', 20, 350]} />
      <ambientLight intensity={0.6} />
      <pointLight ref={lightRef} intensity={400} distance={200} decay={2} />
      <Environment preset="studio" />
      <Stars radius={150} depth={200} count={6000} factor={4} fade />
      
      {monoliths.map((props, i) => (
        <InteractiveMonolith key={i} {...props} activeColor={activeColor} />
      ))}
    </>
  );
};

export const ServicesBackground = () => {
  return (
    <div className="fixed inset-0 z-0 bg-[#010314] pointer-events-auto">
      <Canvas>
        <DarkMonolithsScene />
      </Canvas>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#010314_100%)] pointer-events-none z-10 opacity-80" />
    </div>
  );
};
