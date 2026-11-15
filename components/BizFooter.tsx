"use client";

import { useRef, useEffect, useState, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { socialLinks } from "@/data/portfolio";
import styles from "./BizFooter.module.css";

// Custom icons (same as Footer.tsx)
const GitHubIcon = ({ size = 24, color = "currentColor", className, ...props }: { size?: number; color?: string; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fill={color} d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedInIcon = ({ size = 24, color = "currentColor", className, ...props }: { size?: number; color?: string; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fill={color} d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const InstagramIcon = ({ size = 24, color = "currentColor", className, ...props }: { size?: number; color?: string; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fill={color} d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.8495.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
  </svg>
);

const iconMap: Record<string, React.ComponentType<{ size?: number; color?: string; className?: string }>> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  instagram: InstagramIcon,
};

// Three.js Scene Components
const PARTICLE_COUNT = 1200;
const PARTICLE_SIZE = 1.8;

function ParticleSystem({ scrollProgress, reducedMotion }: { scrollProgress: number; reducedMotion: boolean }) {
  const pointsRef = useRef<THREE.Points>(null);
  const geometryRef = useRef<THREE.BufferGeometry>(null);
  const materialRef = useRef<THREE.PointsMaterial>(null);
  const initialPositions = useRef<Float32Array | null>(null);
  const velocities = useRef<Float32Array | null>(null);

  useEffect(() => {
    if (!pointsRef.current) return;

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const sizes = new Float32Array(PARTICLE_COUNT);
    const colors = new Float32Array(PARTICLE_COUNT * 3);
    const alphas = new Float32Array(PARTICLE_COUNT);
    velocities.current = new Float32Array(PARTICLE_COUNT * 3);

    const accentColor = new THREE.Color(0xffbe38);
    const bgColor = new THREE.Color(0x171715);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // Distribute in a sphere-ish volume
      const radius = 8 + Math.random() * 12;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      sizes[i] = PARTICLE_SIZE * (0.5 + Math.random() * 1.5);

      // Color gradient from accent to dark
      const t = Math.random();
      const color = accentColor.clone().lerp(bgColor, t * 0.7);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      alphas[i] = 0.3 + Math.random() * 0.7;

      // Random velocity
      velocities.current![i * 3] = (Math.random() - 0.5) * 0.002;
      velocities.current![i * 3 + 1] = (Math.random() - 0.5) * 0.002;
      velocities.current![i * 3 + 2] = (Math.random() - 0.5) * 0.002;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute("alpha", new THREE.BufferAttribute(alphas, 1));

    initialPositions.current = new Float32Array(positions);

    const material = new THREE.PointsMaterial({
      size: PARTICLE_SIZE,
      vertexColors: true,
      transparent: true,
      opacity: 1,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    geometryRef.current = geometry;
    materialRef.current = material;

    const points = pointsRef.current;
    points.geometry = geometry;
    points.material = material;
  }, []);

  useFrame((state, delta) => {
    if (reducedMotion || !geometryRef.current || !velocities.current) return;

    const positions = geometryRef.current.getAttribute("position") as THREE.BufferAttribute;
    const posArray = positions.array as Float32Array;

    const progress = scrollProgress;
    const time = state.clock.elapsedTime;

    // Scroll-driven transformations
    const rotationY = progress * Math.PI * 2 * 0.5; // Half rotation over full scroll
    const rotationX = Math.sin(progress * Math.PI) * 0.3;
    const scale = 1 + Math.sin(progress * Math.PI) * 0.4;
    const verticalShift = Math.sin(progress * Math.PI) * 3;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      let x = initialPositions.current![i * 3];
      let y = initialPositions.current![i * 3 + 1];
      let z = initialPositions.current![i * 3 + 2];

      // Apply scroll-driven rotation
      const cosY = Math.cos(rotationY);
      const sinY = Math.sin(rotationY);
      const cosX = Math.cos(rotationX);
      const sinX = Math.sin(rotationX);

      // Rotate Y
      const x1 = x * cosY - z * sinY;
      const z1 = x * sinY + z * cosY;
      x = x1;
      z = z1;

      // Rotate X
      const y1 = y * cosX - z * sinX;
      const z2 = y * sinX + z * cosX;
      y = y1 + verticalShift;
      z = z2;

      // Scale
      x *= scale;
      y *= scale;
      z *= scale;

      // Add subtle floating motion
      const freq = 0.5 + (i % 7) * 0.15;
      x += Math.sin(time * freq + i) * 0.02;
      y += Math.cos(time * freq * 0.7 + i * 1.3) * 0.02;
      z += Math.sin(time * freq * 0.5 + i * 0.7) * 0.02;

      // Apply velocity
      x += velocities.current[i * 3] * delta * 60;
      y += velocities.current[i * 3 + 1] * delta * 60;
      z += velocities.current[i * 3 + 2] * delta * 60;

      posArray[i * 3] = x;
      posArray[i * 3 + 1] = y;
      posArray[i * 3 + 2] = z;
    }

    positions.needsUpdate = true;

    // Animate material size based on scroll
    if (materialRef.current) {
      materialRef.current.size = PARTICLE_SIZE * (0.8 + Math.sin(progress * Math.PI) * 0.4);
    }
  });

  return (
    <points ref={pointsRef} />
  );
}

interface MeshUserData {
  initialPos: THREE.Vector3;
  initialRot: THREE.Euler;
  speed: number;
}

function GeometricShapes({ scrollProgress, reducedMotion }: { scrollProgress: number; reducedMotion: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const meshesRef = useRef<THREE.Mesh[]>([]);

  useEffect(() => {
    if (!groupRef.current) return;

    const group = groupRef.current;
    const accentColor = new THREE.Color(0xffbe38);
    const darkColor = new THREE.Color(0x171715);

    // Create several geometric shapes
    const geometries = [
      new THREE.IcosahedronGeometry(2.5, 0),
      new THREE.OctahedronGeometry(2, 0),
      new THREE.TetrahedronGeometry(2.2, 0),
      new THREE.DodecahedronGeometry(1.8, 0),
    ];

    for (let i = 0; i < 12; i++) {
      const geometry = geometries[i % geometries.length];
      const material = new THREE.MeshPhysicalMaterial({
        color: accentColor.clone().lerp(darkColor, (i / 12) * 0.6),
        metalness: 0.3,
        roughness: 0.4,
        transparent: true,
        opacity: 0.15 + (i % 3) * 0.1,
        transmission: 0.1,
        thickness: 0.5,
        wireframe: i % 3 === 0,
      });

      const mesh = new THREE.Mesh(geometry, material);

      // Position in a sphere
      const radius = 6 + (i % 4) * 2.5;
      const theta = (i / 12) * Math.PI * 2 + (i % 3) * 1.5;
      const phi = Math.acos(1 - 2 * ((i % 4) / 4) * 0.8);

      mesh.position.set(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi)
      );

      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      mesh.scale.setScalar(0.5 + Math.random() * 0.8);

      // Store initial state
      mesh.userData = {
        initialPos: mesh.position.clone(),
        initialRot: mesh.rotation.clone(),
        speed: 0.1 + Math.random() * 0.3,
      } as MeshUserData;

      group.add(mesh);
      meshesRef.current.push(mesh);
    }
  }, []);

  useFrame((state, delta) => {
    if (reducedMotion || !groupRef.current) return;

    const progress = scrollProgress;
    const time = state.clock.elapsedTime;

    // Global rotation based on scroll
    groupRef.current.rotation.y = progress * Math.PI * 0.8;
    groupRef.current.rotation.x = Math.sin(progress * Math.PI) * 0.25;

    meshesRef.current.forEach((mesh, i) => {
      const data = mesh.userData as MeshUserData;

      // Individual rotation
      mesh.rotation.x = data.initialRot.x + time * data.speed * 0.5;
      mesh.rotation.y = data.initialRot.y + time * data.speed;
      mesh.rotation.z = data.initialRot.z + time * data.speed * 0.3;

      // Floating motion
      mesh.position.x = data.initialPos.x + Math.sin(time * data.speed * 2 + i) * 0.3;
      mesh.position.y = data.initialPos.y + Math.cos(time * data.speed * 1.5 + i * 1.7) * 0.3;
      mesh.position.z = data.initialPos.z + Math.sin(time * data.speed + i * 0.9) * 0.3;

      // Scale pulse with scroll
      const pulseScale = 1 + Math.sin(progress * Math.PI * 2 + i) * 0.15;
      mesh.scale.setScalar((0.5 + (i % 3) * 0.3) * pulseScale);

      // Opacity pulse
      if (mesh.material instanceof THREE.MeshPhysicalMaterial) {
        mesh.material.opacity = 0.1 + Math.sin(progress * Math.PI * 3 + i) * 0.08 + 0.05;
      }
    });
  });

  return <group ref={groupRef} />;
}

function Scene({ scrollProgress, reducedMotion }: { scrollProgress: number; reducedMotion: boolean }) {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 15, 10]} intensity={0.8} color="#ffbe38" />
      <directionalLight position={[-10, 5, -10]} intensity={0.4} color="#ffffff" />

      <ParticleSystem scrollProgress={scrollProgress} reducedMotion={reducedMotion} />
      <GeometricShapes scrollProgress={scrollProgress} reducedMotion={reducedMotion} />
    </>
  );
}

function FooterCanvas({ scrollProgress, reducedMotion }: { scrollProgress: number; reducedMotion: boolean }) {
  const { size, camera, gl } = useThree();
  const perspCamera = camera as THREE.PerspectiveCamera;

  useEffect(() => {
    // Set up camera for the footer scene
    perspCamera.position.set(0, 0, 25);
    perspCamera.lookAt(0, 0, 0);
    perspCamera.near = 0.1;
    perspCamera.far = 100;
    perspCamera.fov = 50;
    perspCamera.updateProjectionMatrix();

    // Renderer settings
    gl.setClearColor(0x000000, 0);
    gl.toneMapping = THREE.ACESFilmicToneMapping;
    gl.toneMappingExposure = 1.2;
  }, [perspCamera, gl, size]);

  return <Scene scrollProgress={scrollProgress} reducedMotion={reducedMotion} />;
}

// Main Footer Component
export default function BizFooter() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Check reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const handleScroll = () => {
      const rect = footer.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Footer enters viewport when bottom of footer reaches top of viewport
      // Fully visible when top of footer reaches bottom of viewport
      const start = rect.bottom;
      const end = rect.top + viewportHeight;
      const total = end - start;

      if (total <= 0) return;

      const progress = Math.max(0, Math.min(1, (viewportHeight - rect.top) / total));
      setScrollProgress(progress);
    };

    handleScroll(); // Initial check
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <footer ref={footerRef} id="contact" className={styles.footer} role="contentinfo">
      {/* Three.js Canvas Background */}
      <div className={styles.canvasWrapper} aria-hidden="true">
        <Canvas
          flat
          linear
          dpr={[1, 2]}
          frameloop={reducedMotion ? "never" : "always"}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
          camera={{ fov: 50, position: [0, 0, 25], near: 0.1, far: 100 }}
          style={{ width: "100%", height: "100%", display: "block" }}
        >
          <Suspense fallback={null}>
            <FooterCanvas scrollProgress={scrollProgress} reducedMotion={reducedMotion} />
          </Suspense>
        </Canvas>
      </div>

      {/* Grain Overlay */}
      <div className={styles.grain} aria-hidden="true" />

      {/* Footer Content */}
      <div className={styles.content}>
        <div className={styles.main}>
          <div className={styles.brandSection}>
            <h2 className={styles.brandTitle}>
              Let&apos;s build
              <br />
              <span className={styles.accent}>something great</span>
              together.
            </h2>
            <p className={styles.brandDescription}>
              I&apos;m currently available for freelance projects,<br />
              full-time roles, and consulting engagements.
            </p>

            <a
              href="mailto:avadhutgiri143@gmail.com"
              className={styles.emailButton}
              onClick={(e) => {
                // Let the mailto work naturally
              }}
            >
              <span>Get in touch</span>
              <span className={styles.emailArrow} aria-hidden="true">→</span>
            </a>
          </div>

          <nav className={styles.links} aria-label="Footer navigation">
            <div className={styles.linkGroup}>
              <h3 className={styles.linkGroupTitle}>Work</h3>
              <ul className={styles.linkList}>
                <li><a href="/work">All Projects</a></li>
                <li><a href="/business/services">Services</a></li>
                <li><a href="/hire">Hire Me</a></li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h3 className={styles.linkGroupTitle}>Resources</h3>
              <ul className={styles.linkList}>
                <li><a href="/notes">Free Notes</a></li>
                <li><a href="/library">Library</a></li>
                <li><a href="/academics">Academics</a></li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h3 className={styles.linkGroupTitle}>Connect</h3>
              <ul className={styles.linkList}>
                <li><a href="mailto:avadhutgiri143@gmail.com">Email</a></li>
                <li><a href="https://linkedin.com/in/avadhutgiri" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://github.com/avadhutgiri12" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              </ul>
            </div>
          </nav>
        </div>

        <div className={styles.bottom}>
          <div className={styles.social}>
            {Object.entries(socialLinks).map(([key, link]) => {
              const IconComponent = iconMap[key];
              if (!IconComponent) return null;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className={styles.socialLink}
                  style={{ color: link.color }}
                >
                  <IconComponent size={22} />
                </a>
              );
            })}
          </div>

          <p className={styles.copyright}>
            © {new Date().getFullYear()} Avadhut Giri. Built with Next.js, Three.js, and a lot of coffee.
          </p>
        </div>
      </div>
    </footer>
  );
}