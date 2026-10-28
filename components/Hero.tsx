"use client";
import Button from "./Button";
import HeroButtton from "./ui/HeroButton";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
    >

      {/* Moving Yellow Dot Pattern (Replaces grid pattern) */}

      {/* Red Background Overlay */}
      {/* <div className="absolute inset-0 bg-[#fb030b]"></div> */}
      <div className="hero-ghost" aria-hidden="true">
        <div className="hero-ghost-track">
          <span className="bebas-neue text-[200px] font-bold uppercase text-white/10">
            PORTFOLIO · PORTFOLIO · PORTFOLIO ·
          </span>
          <span className="bebas-neue text-[200px] font-bold uppercase text-white/10">
            PORTFOLIO · PORTFOLIO · PORTFOLIO ·
          </span>
        </div>
      </div>

      {/* Responsive Container */}
      <div className="relative flex flex-col md:flex-row">

        {/* Image on Top (Mobile) / Right Side (Desktop) */}
        <div className="flex-1 min-h-40 md:w-2/5 md:min-h-full  flex md:flex-col">
          <img
            src="/profile.webp"
            alt="Avadhut Giri"
            width={1000}
            height={928}
            fetchPriority="high"
            decoding="async"
            className="w-[450px] usernone max-w-[140vw] h-[450px] md:h-full md:w-[50vw] md:max-w-none -translate-x-15 md:-translate-x-[-850px] md:-translate-y-[-20px]"
          />
        </div>

        {/* Text on Bottom (Mobile) / Left Side (Desktop) */}
        <div className="flex-1 flex flex-col justify-center items-start md:absolute mt-3 md:left-1/5 md:top-[-5] md:h-full md:w-1/2 md:items-start md:text-left px-6 md:px-0">
          <p className="text-white mb-2 frijole-regular text-[clamp(1rem,5vw,3rem)] ml-3 md:text-4xl md:ml-5">I am </p>
          <h1 className="text-9xl font-bold text-red-700 mb-1 frijole-regular text-[clamp(4rem,8vw,9rem)] md:text-9xl md:mb-4">Avadhut</h1>
          <p className="text-white text-2xl frijole-regular text-[clamp(0.8rem,4vw,2rem)] ml-[180px] md:text-2xl md:ml-[450px]">ML-Enthusiast</p>
          <div className="mt-6 md:mt-8 ml-22 md:ml-0">
            <Button />
            <HeroButtton />
          </div>
        </div>
      </div>
    </section>
  );
}