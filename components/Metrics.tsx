import { METRICS_DATA } from "@/data/portfolio";

export default function Metrics() {
  return (
    <section className="px-6 py-32 md:px-12">

      <div className="mx-auto max-w-6xl">

        <div className="mb-16">
          <p className="text-[13px] text-[#ffbe38]">
            <span className="font-mono">05</span> / Benchmarks
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-6xl">
            Impact & experience
          </h2>
        </div>

        <div className="grid grid-cols-1 divide-y divide-white/10 border-y border-white/10 md:grid-cols-3 md:divide-x md:divide-y-0">

          {METRICS_DATA.map((metric) => (
            <div
              key={metric.label}
              className="px-6 py-10 md:px-10"
            >
              <p className="text-6xl font-bold tracking-tight text-white">
                {metric.num}
              </p>

              <p className="mt-4 text-[13px] text-neutral-500">
                {metric.label}
              </p>
            </div>
          ))}

        </div>

        <div className="mt-24 max-w-3xl">
          <p className="text-2xl font-medium leading-relaxed text-neutral-300 md:text-4xl">
            "Design is not just what it looks like and feels like.
            Design is how it works."
          </p>

          <div className="mt-6">
            <p className="text-sm text-white">
              Steve Jobs
            </p>

            <p className="mt-1 text-xs text-neutral-600">
              Apple Inc.
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}