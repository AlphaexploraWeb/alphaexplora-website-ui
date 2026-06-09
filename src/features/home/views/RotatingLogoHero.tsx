import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import type { Group } from "three"

function RotatingMark() {
  const groupRef = useRef<Group>(null)

  useFrame((_, delta) => {
    if (!groupRef.current) return
    groupRef.current.rotation.y += delta * 0.42
    groupRef.current.rotation.x = -0.14
  })

  const strokeMaterial = {
    color: "#00C2FF",
    emissive: "#0B5CFF",
    emissiveIntensity: 1.25,
    metalness: 0.45,
    roughness: 0.22,
  }

  return (
    <group ref={groupRef} rotation={[-0.14, -0.36, 0]}>
      <mesh position={[0, 0, -0.16]}>
        <boxGeometry args={[3.35, 3.35, 0.16]} />
        <meshStandardMaterial
          color="#07111F"
          emissive="#0B5CFF"
          emissiveIntensity={0.16}
          metalness={0.18}
          roughness={0.42}
          transparent
          opacity={0.72}
        />
      </mesh>

      {[
        { position: [0, 1.72, 0] as const, scale: [3.45, 0.12, 0.18] as const },
        { position: [0, -1.72, 0] as const, scale: [3.45, 0.12, 0.18] as const },
        { position: [-1.72, 0, 0] as const, scale: [0.12, 3.45, 0.18] as const },
        { position: [1.72, 0, 0] as const, scale: [0.12, 3.45, 0.18] as const },
      ].map((bar) => (
        <mesh key={bar.position.join(",")} position={bar.position}>
          <boxGeometry args={bar.scale} />
          <meshStandardMaterial {...strokeMaterial} />
        </mesh>
      ))}

      <mesh position={[-0.58, -0.05, 0.18]} rotation={[0, 0, -0.28]}>
        <boxGeometry args={[0.28, 2.25, 0.28]} />
        <meshStandardMaterial {...strokeMaterial} />
      </mesh>
      <mesh position={[0.58, -0.05, 0.18]} rotation={[0, 0, 0.28]}>
        <boxGeometry args={[0.28, 2.25, 0.28]} />
        <meshStandardMaterial {...strokeMaterial} />
      </mesh>
      <mesh position={[0, -0.22, 0.28]}>
        <boxGeometry args={[1.05, 0.24, 0.30]} />
        <meshStandardMaterial {...strokeMaterial} />
      </mesh>

      <mesh position={[0, 0, -0.42]}>
        <boxGeometry args={[4.15, 0.03, 0.05]} />
        <meshBasicMaterial color="#0B5CFF" transparent opacity={0.42} />
      </mesh>
      <mesh position={[0, 0, -0.42]} rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[4.15, 0.03, 0.05]} />
        <meshBasicMaterial color="#00C2FF" transparent opacity={0.32} />
      </mesh>
    </group>
  )
}

export function RotatingLogoHero() {
  return (
    <div
      aria-hidden="true"
      className="ae-logo-stage ae-glass relative min-h-[360px] overflow-hidden rounded-lg"
    >
      <div className="absolute inset-x-5 top-5 z-20 flex items-center justify-between text-xs">
        <div>
          <p className="font-semibold text-accent">
            ALPHAEXPLORA
          </p>
          <p className="mt-2 text-muted">Rotating brand core</p>
        </div>
        <span className="rounded-md border border-accent/40 bg-accent/10 px-3 py-2 font-semibold text-accent">
          Secure
        </span>
      </div>

      <div className="ae-logo-fallback absolute left-1/2 top-1/2 z-0 flex size-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg border border-accent/35 bg-primary/15 font-display text-6xl font-semibold text-accent shadow-[0_0_80px_rgba(11,92,255,0.44)]">
        A
      </div>

      <Canvas
        camera={{ position: [0, 0, 6.4], fov: 38 }}
        className="relative z-10"
        dpr={[1, 1.6]}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.72} />
        <directionalLight color="#F4F7FB" intensity={1.35} position={[2, 4, 5]} />
        <pointLight color="#00C2FF" intensity={22} position={[0, 0, 3]} />
        <pointLight color="#0B5CFF" intensity={18} position={[-3, -2, 2]} />
        <RotatingMark />
      </Canvas>

      <div className="absolute inset-x-6 bottom-6 z-20 grid gap-3 sm:grid-cols-3">
        {["Identity", "Trust", "Purpose"].map((item) => (
          <span
            key={item}
            className="rounded-md border border-white/10 bg-background/65 px-3 py-2 text-xs font-medium text-muted"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
