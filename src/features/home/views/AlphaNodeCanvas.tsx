import { useMemo, useEffect, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

/* ── Helpers ─────────────────────────────────────────────── */

function fibonacciSphere(n: number, r: number): THREE.Vector3[] {
  const phi = Math.PI * (3 - Math.sqrt(5));
  return Array.from({ length: n }, (_, i) => {
    const y = 1 - (i / (n - 1)) * 2;
    const rad = Math.sqrt(1 - y * y) * r;
    const theta = phi * i;
    return new THREE.Vector3(rad * Math.cos(theta), y * r, rad * Math.sin(theta));
  });
}

function buildConnections(
  pts: THREE.Vector3[],
  k: number,
  maxDist: number
): number[] {
  const seen = new Set<string>();
  const indices: number[] = [];
  for (let i = 0; i < pts.length; i++) {
    const sorted = pts
      .map((p, j) => ({ j, d: pts[i].distanceTo(p) }))
      .sort((a, b) => a.d - b.d)
      .slice(1, k + 2);
    for (const { j, d } of sorted) {
      if (d > maxDist) continue;
      const key = i < j ? `${i}-${j}` : `${j}-${i}`;
      if (!seen.has(key)) {
        seen.add(key);
        indices.push(i, j);
      }
    }
  }
  return indices;
}

/* ── Scene ───────────────────────────────────────────────── */

function AlphaScene() {
  const { mouse } = useThree();

  const geo = useMemo(() => {
    const N = 160;
    const R = 1.6;
    const base = fibonacciSphere(N, R);
    const conns = buildConnections(base, 5, 1.35);

    /* Particles */
    const pArr = new Float32Array(N * 3);
    const cArr = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      const v = base[i];
      pArr[i * 3] = v.x;
      pArr[i * 3 + 1] = v.y;
      pArr[i * 3 + 2] = v.z;
      if (i % 9 === 0) {
        // white hub
        cArr[i * 3] = 1; cArr[i * 3 + 1] = 1; cArr[i * 3 + 2] = 1;
      } else if (i % 4 === 0) {
        // electric blue
        cArr[i * 3] = 0.1; cArr[i * 3 + 1] = 0.33; cArr[i * 3 + 2] = 1;
      } else {
        // cyber cyan
        cArr[i * 3] = 0; cArr[i * 3 + 1] = 0.85; cArr[i * 3 + 2] = 0.85;
      }
    }
    const pAttr = new THREE.BufferAttribute(pArr, 3);
    pAttr.usage = THREE.DynamicDrawUsage;
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", pAttr);
    pGeo.setAttribute("color", new THREE.BufferAttribute(cArr, 3));

    const pMat = new THREE.PointsMaterial({
      size: 0.044,
      vertexColors: true,
      transparent: true,
      opacity: 0.92,
      sizeAttenuation: true,
    });
    const particles = new THREE.Points(pGeo, pMat);

    /* Connection lines */
    const lArr = new Float32Array(conns.length * 3);
    for (let i = 0; i < conns.length; i++) {
      const idx = conns[i];
      lArr[i * 3] = pArr[idx * 3];
      lArr[i * 3 + 1] = pArr[idx * 3 + 1];
      lArr[i * 3 + 2] = pArr[idx * 3 + 2];
    }
    const lAttr = new THREE.BufferAttribute(lArr, 3);
    lAttr.usage = THREE.DynamicDrawUsage;
    const lGeo = new THREE.BufferGeometry();
    lGeo.setAttribute("position", lAttr);
    const lMat = new THREE.LineBasicMaterial({
      color: 0x00d9d9,
      transparent: true,
      opacity: 0.07,
    });
    const lines = new THREE.LineSegments(lGeo, lMat);

    /* Core glow sphere */
    const coreGeo = new THREE.SphereGeometry(0.22, 32, 16);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.6,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);

    /* Halo shell — BackSide makes it glow outward */
    const haloGeo = new THREE.SphereGeometry(0.44, 16, 16);
    const haloMat = new THREE.MeshBasicMaterial({
      color: 0x00d9d9,
      transparent: true,
      opacity: 0.055,
      side: THREE.BackSide,
    });
    const halo = new THREE.Mesh(haloGeo, haloMat);

    /* Primary orbital ring */
    const r1Geo = new THREE.TorusGeometry(1.95, 0.007, 8, 180);
    const r1Mat = new THREE.MeshBasicMaterial({
      color: 0x0056ff,
      transparent: true,
      opacity: 0.5,
    });
    const ring1 = new THREE.Mesh(r1Geo, r1Mat);
    ring1.rotation.x = Math.PI / 2.4;

    /* Secondary thinner ring at different tilt */
    const r2Geo = new THREE.TorusGeometry(2.18, 0.004, 8, 180);
    const r2Mat = new THREE.MeshBasicMaterial({
      color: 0x00d9d9,
      transparent: true,
      opacity: 0.2,
    });
    const ring2 = new THREE.Mesh(r2Geo, r2Mat);
    ring2.rotation.x = Math.PI / 3.5;
    ring2.rotation.z = Math.PI / 5;

    /* Ambient dust scattered in the background */
    const dustN = 240;
    const dustArr = new Float32Array(dustN * 3);
    for (let i = 0; i < dustN; i++) {
      dustArr[i * 3] = (Math.random() - 0.5) * 8;
      dustArr[i * 3 + 1] = (Math.random() - 0.5) * 8;
      dustArr[i * 3 + 2] = (Math.random() - 0.5) * 4 - 1;
    }
    const dustGeo = new THREE.BufferGeometry();
    dustGeo.setAttribute("position", new THREE.BufferAttribute(dustArr, 3));
    const dustMat = new THREE.PointsMaterial({
      color: 0x0056ff,
      size: 0.012,
      transparent: true,
      opacity: 0.38,
      sizeAttenuation: true,
    });
    const dust = new THREE.Points(dustGeo, dustMat);

    /* Assemble group — order = back-to-front */
    const group = new THREE.Group();
    group.add(dust, ring1, ring2, halo, core, lines, particles);

    return { group, base, conns, pAttr, lAttr, core, ring1 };
  }, []);

  /* Cleanup on unmount */
  useEffect(
    () => () => {
      geo.group.traverse((obj) => {
        if (
          obj instanceof THREE.Mesh ||
          obj instanceof THREE.Points ||
          obj instanceof THREE.LineSegments
        ) {
          obj.geometry.dispose();
          const m = obj.material;
          if (Array.isArray(m)) m.forEach((mat) => mat.dispose());
          else (m as THREE.Material).dispose();
        }
      });
    },
    [geo]
  );

  useFrame((state) => {
    const { group, base, conns, pAttr, lAttr, core, ring1 } = geo;
    const t = state.clock.elapsedTime;

    /* Whole sphere tilts softly toward the cursor */
    group.rotation.y = THREE.MathUtils.lerp(
      group.rotation.y,
      mouse.x * 0.55,
      0.042
    );
    group.rotation.x = THREE.MathUtils.lerp(
      group.rotation.x,
      -mouse.y * 0.3,
      0.042
    );

    /* Slow ambient rotation so it's never completely still */
    group.rotation.z += 0.0007;

    /* Primary ring precesses */
    ring1.rotation.z += 0.0022;

    /* Core breathes */
    core.scale.setScalar(1 + Math.sin(t * 1.4) * 0.1);

    /* Sphere morphs — three overlapping sine/cosine wave layers */
    for (let i = 0; i < base.length; i++) {
      const b = base[i];
      const m =
        1 +
        Math.sin(t * 0.58 + b.x * 2.1 + b.y * 1.4) * 0.09 +
        Math.cos(t * 0.41 + b.z * 1.7 + b.y * 0.9) * 0.065 +
        Math.sin(t * 0.23 + b.x * 0.9 + b.z * 1.3) * 0.04;
      pAttr.setXYZ(i, b.x * m, b.y * m, b.z * m);
    }
    pAttr.needsUpdate = true;

    /* Lines follow particle positions exactly */
    for (let i = 0; i < conns.length; i++) {
      const idx = conns[i];
      lAttr.setXYZ(i, pAttr.getX(idx), pAttr.getY(idx), pAttr.getZ(idx));
    }
    lAttr.needsUpdate = true;
  });

  return <primitive object={geo.group} />;
}

/* ── Canvas wrapper ──────────────────────────────────────── */

export default function AlphaNodeCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 52 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
      style={{ width: "100%", height: "100%" }}
    >
      <Suspense fallback={null}>
        <AlphaScene />
        <EffectComposer>
          <Bloom
            mipmapBlur
            intensity={0.8}
            luminanceThreshold={0.16}
            luminanceSmoothing={0.025}
          />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
}
