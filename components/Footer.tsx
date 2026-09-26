"use client";

export default function Footer() {
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-white/5 bg-black px-6 py-10 md:px-12 md:py-12">
      <div className="mx-auto max-w-6xl">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-16">
          
          {/* Left — Brand + Socials */}
          <div className="flex flex-col">
            <button
              onClick={backToTop}
              className="
                w-fit
                font-serif
                text-3xl
                italic
                tracking-[-0.06em]
                text-neutral-100
                transition-colors
                hover:text-emerald-400
              "
            >
              Avadhut
            </button>

            <p className="mt-2 max-w-[220px] font-mono text-[8px] leading-relaxed tracking-[0.12em] text-neutral-600">
              ML Enthusiast
              <br />
              & DEVELOPER
            </p>

            {/* Social Icons */}
            <div className="mt-5 flex items-center gap-2">
              {["IG", "LI", "GH", "X"].map((social) => (
                <a
                  key={social}
                  href="#"
                  aria-label={social}
                  className="
                    flex h-7 w-7 items-center justify-center
                    rounded-full
                    border border-white/10
                    font-mono text-[7px]
                    tracking-wider
                    text-neutral-500
                    transition-all
                    hover:border-emerald-400/50
                    hover:text-emerald-400
                  "
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Center — Mailing List */}
          <div>
            <h3 className="font-serif text-lg text-neutral-100">
              Mailing List
            </h3>

            <p className="mt-2 max-w-[280px] font-mono text-[8px] leading-relaxed tracking-wider text-neutral-600">
              Join the mailing list for occasional updates,
              <br />
              new work and creative projects.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-5 flex h-9 max-w-[300px] border border-white/10"
            >
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="
                  min-w-0 flex-1
                  bg-transparent
                  px-3
                  font-mono text-[8px]
                  tracking-[0.12em]
                  text-neutral-200
                  outline-none
                  placeholder:text-neutral-600
                "
              />

              <button
                type="submit"
                className="
                  px-3
                  font-mono text-sm
                  text-neutral-500
                  transition-colors
                  hover:text-emerald-400
                "
                aria-label="Subscribe"
              >
                +
              </button>
            </form>
          </div>

          {/* Right — Navigation */}
          <div className="md:flex md:justify-end">
            <nav className="flex flex-col gap-2">
              {[
                ["FAQ", "#faq"],
                ["PRIVACY POLICY", "#privacy"],
                ["TERMS & CONDITIONS", "#terms"],
                ["DELIVERY & RETURNS", "#delivery"],
                ["SITEMAP", "#sitemap"],
                ["CONTACT", "#contact"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="
                    w-fit
                    font-mono text-[8px]
                    tracking-[0.14em]
                    text-neutral-600
                    transition-colors
                    hover:text-emerald-400
                  "
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-white/5 pt-5 text-center">
          <p className="font-mono text-[8px] tracking-[0.15em] text-neutral-700">
            © 2026 AVADHUT GIRI. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}