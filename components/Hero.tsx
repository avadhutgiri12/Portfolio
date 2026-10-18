"use client";
import Button from "./Button";
import HeroGridPattern from "./heroGridPattern";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
    >

      {/* Moving Yellow Dot Pattern (Replaces grid pattern) */}

      {/* Red Background Overlay */}
      <div className="absolute inset-0 bg-[#fb030b]"></div>
      <HeroGridPattern />

      {/* Text on Left Side - Centered */}
      <div className="absolute left-1/5 top-[-5] h-full w-1/2 flex flex-col justify-center">
        <p className="text-white mb-2 frijole-regular text-4xl ml-3">I am </p>
        <h1 className="text-9xl font-bold text-black mb-2 frijole-regular">Avadhut</h1>
        <p className="text-white text-2xl frijole-regular ml-[450px]">ML-Enthusiast</p>
        <div className="mt-6">
          <Button />
        </div>
      </div>

      {/* Image on Right Side - Increased Size */}
      <div className="absolute right-0 h-full w-1/2 z-20">
        <img
          src="/profile.png"
          alt="Avadhut Giri"
          className="h-screen w-auto max-w-none -translate-x-1"
        />
      </div>
    </section>
  );
}