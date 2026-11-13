"use client";

/**
 * ProjectCard3D
 * WebGL version of the Work carousel image card.
 *  - the active project image is a textured plane (three + @react-three/fiber)
 *  - hover: eased spring tilt toward the cursor (max 7deg) + soft #ffbe38 sheen
 *  - project change: ~0.8s liquid displacement transition between textures
 *  - the status / title / "Open case study" layer sits in front (CSS translateZ)
 * Loaded with next/dynamic (ssr: false) from WorkCarousel, desktop + motion only.
 */

import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { ArrowUpRight } from "lucide-react";

import type { Project } from "@/data/ProjectData";

const MAX_TILT_DEG = 7;
const CAMERA_DISTANCE = 1400; // px, must match the CSS perspective below
const BLEED = 48; // px of canvas around the card so tilted corners are not clipped
const RADIUS = 18; // px, same as .wc-image-wrapper
const TRANSITION_SECONDS = 0.8;
const OVERLAY_DEPTH = 28; // px the overlay floats in front of the image

type Shared = {
  pointer: { x: number; y: number }; // -1..1, y up
  hover: number; // target 0 / 1
  overlay: HTMLDivElement | null;
};

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  precision highp float;
  varying vec2 vUv;

  uniform sampler2D uFrom;
  uniform sampler2D uTo;
  uniform float uFromAspect;
  uniform float uToAspect;
  uniform float uPlaneAspect;
  uniform vec2 uSize;        // plane size in px
  uniform float uRadius;     // corner radius in px
  uniform float uProgress;   // 0 -> 1 liquid transition
  uniform float uTime;
  uniform vec2 uPointer;     // 0..1 uv of the cursor
  uniform float uHover;      // 0..1
  uniform vec3 uAccent;

  // object-fit: cover; object-position: top center
  vec2 coverUv(vec2 uv, float imgAspect) {
    vec2 r = uv;
    if (imgAspect < uPlaneAspect) {
      r.y = 1.0 - (1.0 - uv.y) * (imgAspect / uPlaneAspect);
    } else {
      r.x = 0.5 + (uv.x - 0.5) * (uPlaneAspect / imgAspect);
    }
    // hover zoom, like the flat card's scale(1.025)
    r = 0.5 + (r - 0.5) / (1.0 + 0.025 * uHover);
    return r;
  }

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
               mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
  }
  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 4; i++) {
      v += a * noise(p);
      p *= 2.0;
      a *= 0.5;
    }
    return v;
  }

  float roundedBox(vec2 p, vec2 b, float r) {
    vec2 q = abs(p) - b + r;
    return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
  }

  void main() {
    vec2 uv = vUv;
    float p = uProgress;
    float wave = sin(p * 3.14159265);   // 0 at both ends, 1 mid-transition

    vec3 col;
    if (p >= 1.0) {
      // at rest: a single texture read, no noise work
      col = texture2D(uTo, coverUv(uv, uToAspect)).rgb;
    } else {
      // liquid displacement field
      vec2 aspectUv = vec2(uv.x * uPlaneAspect, uv.y);
      float n = fbm(aspectUv * 3.0 + vec2(uTime * 0.15, 0.0));
      vec2 flow = vec2(
        fbm(aspectUv * 2.0 + 4.0 + uTime * 0.1),
        fbm(aspectUv * 2.0 + 9.0 - uTime * 0.1)
      ) - 0.5;

      // ripple rings from the centre
      vec2 c = (uv - 0.5) * vec2(uPlaneAspect, 1.0);
      float d = length(c);
      float ripple = sin(d * 38.0 - p * 18.0) * 0.012 * wave;
      vec2 rippleDir = d > 0.0001 ? c / d : vec2(0.0);

      vec2 dispFrom = flow * 0.28 * p + rippleDir * ripple;
      vec2 dispTo   = -flow * 0.28 * (1.0 - p) + rippleDir * ripple;

      vec4 colFrom = texture2D(uFrom, clamp(coverUv(uv + dispFrom, uFromAspect), 0.0, 1.0));
      vec4 colTo   = texture2D(uTo,   clamp(coverUv(uv + dispTo,   uToAspect),   0.0, 1.0));

      // melt mask: noisy threshold that sweeps with progress
      float threshold = p * 1.4 - 0.2;
      float m = smoothstep(threshold - 0.18, threshold + 0.18, n + (1.0 - uv.y) * 0.25);
      col = mix(colTo.rgb, colFrom.rgb, m);

      // a thin accent edge on the melt front while the transition runs
      float edge = 1.0 - abs(m - 0.5) * 2.0;
      col += uAccent * pow(edge, 6.0) * 0.35 * wave;
    }

    // flat-card gradient overlay: darker at the top and bottom
    float shade = 0.12 * smoothstep(0.75, 1.0, uv.y) + 0.25 * (1.0 - smoothstep(0.0, 0.35, uv.y));
    col *= 1.0 - shade;

    // sheen: a soft diagonal yellow band through the cursor + a glow at the cursor
    vec2 pq = (uv - uPointer) * vec2(uPlaneAspect, 1.0);
    float diag = dot(pq, normalize(vec2(1.0, -1.0)));
    float band = exp(-pow(diag / 0.14, 2.0));
    float glow = exp(-dot(pq, pq) / 0.06);
    float tint = clamp(glow * 0.55 + band * 0.22, 0.0, 0.65) * uHover;
    col = mix(col, uAccent, tint);                      // warm yellow wash
    col += uAccent * (band * 0.16 + glow * 0.10) * uHover; // light on top

    // rounded corners with a 1px soft edge
    vec2 px = (uv - 0.5) * uSize;
    float sd = roundedBox(px, uSize * 0.5, uRadius);
    float alpha = 1.0 - smoothstep(-1.0, 0.5, sd);

    gl_FragColor = vec4(col * alpha, alpha);
  }
`;

function textureAspect(t: THREE.Texture) {
  const img = t.image as { width?: number; height?: number } | undefined;
  return img && img.width && img.height ? img.width / img.height : 1;
}

function springStep(
  value: number,
  velocity: number,
  target: number,
  dt: number,
  stiffness = 140,
  damping = 18
) {
  const force = (target - value) * stiffness - velocity * damping;
  const v = velocity + force * dt;
  return [value + v * dt, v] as const;
}

function CardPlane({
  images,
  activeIndex,
  shared,
  onReady,
}: {
  images: string[];
  activeIndex: number;
  shared: React.MutableRefObject<Shared>;
  onReady: () => void;
}) {
  const textures = useLoader(THREE.TextureLoader, images);
  const gl = useThree((s) => s.gl);
  const size = useThree((s) => s.size);
  const camera = useThree((s) => s.camera) as THREE.PerspectiveCamera;
  const mesh = useRef<THREE.Mesh>(null);

  const planeW = Math.max(1, size.width - BLEED * 2);
  const planeH = Math.max(1, size.height - BLEED * 2);

  useEffect(() => {
    const maxAniso = gl.capabilities.getMaxAnisotropy();
    textures.forEach((t) => {
      t.anisotropy = Math.min(8, maxAniso);
      t.minFilter = THREE.LinearMipmapLinearFilter;
      t.generateMipmaps = true;
      t.needsUpdate = true;
    });
  }, [textures, gl]);

  // camera in px units: the plane is exactly the card's size at z = 0
  useEffect(() => {
    camera.fov =
      (2 * Math.atan(size.height / 2 / CAMERA_DISTANCE) * 180) / Math.PI;
    camera.near = 10;
    camera.far = CAMERA_DISTANCE * 3;
    camera.position.set(0, 0, CAMERA_DISTANCE);
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();
  }, [camera, size.height]);

  // The material is built once by hand: passing `uniforms` as a JSX prop
  // makes R3F copy them, and the per-frame updates would never reach the GPU.
  const [material] = useState(
    () =>
      new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        transparent: true,
        uniforms: {
          uFrom: { value: textures[activeIndex] },
          uTo: { value: textures[activeIndex] },
          uFromAspect: { value: textureAspect(textures[activeIndex]) },
          uToAspect: { value: textureAspect(textures[activeIndex]) },
          uPlaneAspect: { value: 4 / 3 },
          uSize: { value: new THREE.Vector2(1, 1) },
          uRadius: { value: RADIUS },
          uProgress: { value: 1 },
          uTime: { value: 0 },
          uPointer: { value: new THREE.Vector2(0.5, 0.5) },
          uHover: { value: 0 },
          // #ffbe38 as raw sRGB (the canvas is `linear`, no conversion)
          uAccent: { value: new THREE.Vector3(1.0, 0.745, 0.22) },
        },
      })
  );
  const uniforms = material.uniforms;

  useEffect(() => () => material.dispose(), [material]);

  useEffect(() => {
    onReady();
  }, [onReady]);

  // start a liquid transition whenever the active project changes
  const shownIndex = useRef(activeIndex);
  useEffect(() => {
    if (shownIndex.current === activeIndex) return;
    uniforms.uFrom.value = textures[shownIndex.current];
    uniforms.uFromAspect.value = textureAspect(textures[shownIndex.current]);
    uniforms.uTo.value = textures[activeIndex];
    uniforms.uToAspect.value = textureAspect(textures[activeIndex]);
    uniforms.uProgress.value = 0;
    shownIndex.current = activeIndex;
  }, [activeIndex, textures, uniforms]);

  const motion = useRef({
    rx: 0, vrx: 0, ry: 0, vry: 0,
    px: 0.5, vpx: 0, py: 0.5, vpy: 0,
    h: 0, vh: 0,
  });

  useFrame((state, delta) => {
    const dt = Math.min(delta, 1 / 30);
    const s = shared.current;
    const m = motion.current;
    const max = THREE.MathUtils.degToRad(MAX_TILT_DEG);

    // tilt toward the cursor: the corner under the cursor recedes
    const targetRy = s.hover * s.pointer.x * max;
    const targetRx = -s.hover * s.pointer.y * max;
    [m.rx, m.vrx] = springStep(m.rx, m.vrx, targetRx, dt);
    [m.ry, m.vry] = springStep(m.ry, m.vry, targetRy, dt);
    [m.px, m.vpx] = springStep(m.px, m.vpx, (s.pointer.x + 1) / 2, dt, 90, 16);
    [m.py, m.vpy] = springStep(m.py, m.vpy, (s.pointer.y + 1) / 2, dt, 90, 16);
    [m.h, m.vh] = springStep(m.h, m.vh, s.hover, dt, 60, 14);

    if (mesh.current) {
      mesh.current.rotation.set(m.rx, m.ry, 0);
    }

    // keep the DOM overlay on the same tilt, slightly in front
    if (s.overlay) {
      s.overlay.style.transform =
        `perspective(${CAMERA_DISTANCE}px) rotateX(${-m.rx}rad) rotateY(${m.ry}rad) translateZ(${OVERLAY_DEPTH}px)`;
    }

    const u = uniforms;
    u.uTime.value = state.clock.elapsedTime;
    u.uPointer.value.set(m.px, m.py);
    u.uHover.value = Math.max(0, Math.min(1, m.h));
    u.uPlaneAspect.value = planeW / planeH;
    u.uSize.value.set(planeW, planeH);
    if (u.uProgress.value < 1) {
      u.uProgress.value = Math.min(
        1,
        u.uProgress.value + dt / TRANSITION_SECONDS
      );
    }
  });

  return (
    <mesh ref={mesh} material={material}>
      <planeGeometry args={[planeW, planeH, 1, 1]} />
    </mesh>
  );
}

export default function ProjectCard3D({
  projects,
  activeIndex,
  onOpen,
  active = true,
}: {
  projects: Project[];
  activeIndex: number;
  onOpen: () => void;
  active?: boolean;
}) {
  const shared = useRef<Shared>({
    pointer: { x: 0, y: 0 },
    hover: 0,
    overlay: null,
  });
  const wrapperRef = useRef<HTMLDivElement>(null);
  const images = useMemo(() => projects.map((p) => p.image), [projects]);
  const project = projects[activeIndex];

  const markReady = useMemo(
    () => () => wrapperRef.current?.classList.add("wc-3d-ready"),
    []
  );

  const handleMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
    shared.current.pointer = {
      x: Math.max(-1, Math.min(1, x)),
      y: Math.max(-1, Math.min(1, y)),
    };
    shared.current.hover = 1;
  };

  const handleLeave = () => {
    shared.current.hover = 0;
    shared.current.pointer = { x: 0, y: 0 };
  };

  return (
    <div
      ref={wrapperRef}
      className="wc-image-wrapper wc-3d-card"
      role="link"
      tabIndex={0}
      aria-label={`Open the ${project.title} case study`}
      onClick={onOpen}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen();
        }
      }}
      onPointerMove={handleMove}
      onPointerEnter={handleMove}
      onPointerLeave={handleLeave}
    >
      {/* flat image until the textures are on the GPU */}
      <img
        src={project.image}
        alt={`${project.title} project preview`}
        className="wc-project-image wc-3d-placeholder"
        draggable={false}
      />

      <div className="wc-3d-canvas" style={{ inset: -BLEED }} aria-hidden="true">
        <Canvas
          flat
          linear
          dpr={[1, 2]}
          frameloop={active ? "always" : "never"}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
          camera={{ fov: 30, position: [0, 0, CAMERA_DISTANCE], near: 10, far: 5000 }}
        >
          <Suspense fallback={null}>
            <CardPlane
              images={images}
              activeIndex={activeIndex}
              shared={shared}
              onReady={markReady}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* front layer: floats OVERLAY_DEPTH px in front of the image */}
      <div
        className="wc-3d-overlay"
        ref={(el) => {
          shared.current.overlay = el;
        }}
        aria-hidden="true"
      >
        <span key={project.id} className="wc-3d-title">
          {project.title}
        </span>

        <span className="wc-3d-open">
          Open case study
          <ArrowUpRight size={15} />
        </span>

        <span className="wc-image-status">
          <span
            className={`wc-status-dot ${
              project.status === "Live" ? "wc-status-live" : ""
            }`}
          />
          {project.status}
        </span>
      </div>
    </div>
  );
}
