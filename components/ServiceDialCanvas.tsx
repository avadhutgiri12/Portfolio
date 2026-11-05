"use client";

import { Canvas, useFrame, useThree, type ThreeEvent } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import type { DialItem } from "./ServiceDial";

/* A matte ink ring. The six service names run around its outer rim, drawn
   into one canvas texture (no font fetch, no extra text library). One yellow
   notch at the front marks the active service. The ring turns with page
   scroll through the hero; there is no idle spin, and frames render only
   while it is moving (frameloop="demand"). */

const ACCENT = "#ffbe38";
const RING_BG = "#242622";
const TEXT_DIM = "#8f938b";
const TEXT_ON = "#ffffff";
const R_OUT = 1.6;
const R_IN = 1.12;
const BAND_H = 0.46;
const TEX_W = 4096;
const TEX_H = 236;

function siteFont() {
  const v = getComputedStyle(document.body).getPropertyValue("--font-xmind").trim();
  return v ? `${v}, "Helvetica Neue", Arial, sans-serif` : `"Helvetica Neue", Arial, sans-serif`;
}

function drawBand(ctx: CanvasRenderingContext2D, items: DialItem[], active: number, font: string) {
  const n = items.length;
  const seg = TEX_W / n;
  ctx.fillStyle = RING_BG;
  ctx.fillRect(0, 0, TEX_W, TEX_H);
  // hairline ticks between segments
  ctx.fillStyle = "rgba(255,255,255,0.10)";
  for (let i = 0; i < n; i++) ctx.fillRect(Math.round(i * seg), TEX_H * 0.3, 3, TEX_H * 0.4);
  ctx.textBaseline = "middle";
  ctx.textAlign = "left";
  items.forEach((item, i) => {
    const on = i === active;
    const cx = (i + 0.5) * seg;
    const label = item.label;
    ctx.font = `500 104px ${font}`;
    const lw = ctx.measureText(label).width;
    ctx.font = `500 52px ${font}`;
    const nw = ctx.measureText(item.number).width;
    const gap = 22;
    const start = cx - (nw + gap + lw) / 2;
    ctx.fillStyle = on ? ACCENT : TEXT_DIM;
    ctx.fillText(item.number, start, TEX_H / 2 + 4);
    ctx.font = `500 104px ${font}`;
    ctx.fillStyle = on ? TEXT_ON : TEXT_DIM;
    ctx.fillText(label, start + nw + gap, TEX_H / 2 + 6);
  });
}

/** Owns the rim canvas + texture, outside React state. */
class BandPainter {
  readonly texture: THREE.CanvasTexture;
  private ctx: CanvasRenderingContext2D;
  private items: DialItem[];
  constructor(items: DialItem[]) {
    const canvas = document.createElement("canvas");
    canvas.width = TEX_W;
    canvas.height = TEX_H;
    this.ctx = canvas.getContext("2d")!;
    this.items = items;
    this.texture = new THREE.CanvasTexture(canvas);
    this.texture.colorSpace = THREE.SRGBColorSpace;
    this.texture.anisotropy = 8;
  }
  paint(active: number) {
    drawBand(this.ctx, this.items, active, siteFont());
    this.texture.needsUpdate = true;
  }
  dispose() {
    this.texture.dispose();
  }
}

function setCursor(el: HTMLElement, value: string) {
  el.style.cursor = value;
}

/** Angle that brings segment `f` (0..n-1, may be fractional) to the front. */
const angleFor = (f: number, n: number) => -((f + 0.5) / n) * Math.PI * 2;

function Dial({
  items,
  onActiveChange,
  onPick,
}: {
  items: DialItem[];
  onActiveChange: (i: number) => void;
  onPick: (i: number) => void;
}) {
  const n = items.length;
  const spin = useRef<THREE.Group>(null);
  const target = useRef(0);
  const activeRef = useRef(-1);
  const { invalidate, gl } = useThree();

  const [band] = useState(() => new BandPainter(items));

  useEffect(() => {
    band.paint(0);
    invalidate();
    // repaint once the web font is ready so the rim uses the site font
    document.fonts?.ready.then(() => {
      band.paint(Math.max(activeRef.current, 0));
      invalidate();
    });
    return () => band.dispose();
  }, [band, invalidate]);

  // scroll → target angle
  useEffect(() => {
    const hero = document.getElementById("services");
    const update = () => {
      const span = hero ? hero.offsetTop + hero.offsetHeight * 0.5 : window.innerHeight * 0.5;
      const p = Math.min(1, Math.max(0, window.scrollY / Math.max(1, span)));
      const f = p * (n - 1);
      target.current = angleFor(f, n);
      const a = Math.round(f);
      if (a !== activeRef.current) {
        activeRef.current = a;
        band.paint(a);
        onActiveChange(a);
      }
      invalidate();
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [n, band, invalidate, onActiveChange]);

  useFrame((_, delta) => {
    const g = spin.current;
    if (!g) return;
    const d = target.current - g.rotation.y;
    if (Math.abs(d) < 0.0005) {
      g.rotation.y = target.current;
      return;
    }
    g.rotation.y += d * (1 - Math.exp(-delta * 9));
    invalidate();
  });

  const pick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    if (!e.uv) return;
    const i = Math.min(n - 1, Math.max(0, Math.floor(e.uv.x * n)));
    onPick(i);
  };

  const ringMat = useMemo(
    () => new THREE.MeshStandardMaterial({ color: "#262824", roughness: 0.9, metalness: 0 }),
    [],
  );
  useEffect(() => () => ringMat.dispose(), [ringMat]);

  return (
    <group rotation={[0.34, 0, 0]} position={[0, 0.12, 0]}>
      <group ref={spin} rotation={[0, angleFor(0, n), 0]}>
        {/* outer rim with the names */}
        <mesh
          onClick={pick}
          onPointerOver={() => setCursor(gl.domElement, "pointer")}
          onPointerOut={() => setCursor(gl.domElement, "")}
        >
          <cylinderGeometry args={[R_OUT, R_OUT, BAND_H, 128, 1, true]} />
          <meshStandardMaterial map={band.texture} roughness={0.85} metalness={0} />
        </mesh>
        {/* top and bottom faces of the ring */}
        <mesh position={[0, BAND_H / 2, 0]} rotation={[-Math.PI / 2, 0, 0]} material={ringMat}>
          <ringGeometry args={[R_IN, R_OUT, 128]} />
        </mesh>
        <mesh position={[0, -BAND_H / 2, 0]} rotation={[Math.PI / 2, 0, 0]} material={ringMat}>
          <ringGeometry args={[R_IN, R_OUT, 128]} />
        </mesh>
        {/* inner wall */}
        <mesh>
          <cylinderGeometry args={[R_IN, R_IN, BAND_H, 128, 1, true]} />
          <meshStandardMaterial color="#1a1c19" roughness={0.9} metalness={0} side={THREE.BackSide} />
        </mesh>
      </group>
      {/* the one yellow notch, fixed at the front */}
      <mesh position={[0, BAND_H / 2 + 0.045, R_OUT - 0.06]}>
        <boxGeometry args={[0.07, 0.09, 0.2]} />
        <meshStandardMaterial color={ACCENT} roughness={0.6} metalness={0} />
      </mesh>
    </group>
  );
}

export default function ServiceDialCanvas({
  items,
  onActiveChange,
  onPick,
}: {
  items: DialItem[];
  onActiveChange: (i: number) => void;
  onPick: (i: number) => void;
}) {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      camera={{ position: [0, 0, 4.7], fov: 38 }}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      aria-label="Service dial. Scroll to turn it, or click a name to jump to that service."
      role="img"
    >
      <ambientLight intensity={0.9} />
      <directionalLight position={[-2.5, 4, 5]} intensity={1.6} />
      <directionalLight position={[3, -1, 2]} intensity={0.35} />
      <Dial items={items} onActiveChange={onActiveChange} onPick={onPick} />
    </Canvas>
  );
}
