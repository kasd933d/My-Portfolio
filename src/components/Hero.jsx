const Line = ({ children, d = 0 }) => (
  <span className="block overflow-hidden pb-[0.08em]">
    <span className="line-in block" style={{ animationDelay: `${d}ms` }}>{children}</span>
  </span>
);

const meta = [
  ['Role', 'Full Stack Developer'],
  ['Base', 'Pakistan'],
  ['Stack', 'PHP / Laravel / Next.js / React'],
  ['For', 'Clients, startups & agencies'],
];
const tags = ['HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'React.js', 'Next.js', 'TypeScript', 'PHP', 'MySQLi', 'Laravel', 'Python', 'AI Implementation'];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-28">
      <div className="mx-auto grid max-w-[1400px] items-end gap-10 px-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="pb-10">
          <p className="mono fade-up mb-6 text-sm uppercase tracking-widest text-[#d7ff64]" style={{ animationDelay: '300ms' }}>Hi, I'm Abdullah —</p>
          <h1 className="text-[13vw] font-bold leading-[0.9] tracking-tighter lg:text-[8.5vw]">
            <Line d={100}>Full Stack</Line>
            <Line d={220}><span className="text-[#d7ff64]">Developer</span></Line>
          </h1>
          <p className="fade-up mt-8 max-w-xl text-lg text-[#e9f1ec]/70" style={{ animationDelay: '700ms' }}>
            Full-time builder. I turn ideas into fast, clean web apps — from pixel-perfect frontends to solid Laravel backends and AI-powered features.
          </p>
          <div className="fade-up mt-10 flex flex-wrap gap-4" style={{ animationDelay: '850ms' }}>
            <a href="#contact" className="btn">Start a project ↗</a>
            <a href="#skills" className="rounded-full border border-[#e9f1ec]/25 px-7 py-4 font-medium transition hover:border-[#d7ff64] hover:text-[#d7ff64]">My skills</a>
          </div>
        </div>
        <div className="fade-up relative mx-auto w-full max-w-md" style={{ animationDelay: '500ms' }}>
          <div className="absolute inset-x-8 bottom-0 top-16 rounded-t-[999px] bg-[#d7ff64]/90 blur-[2px]" />
          <img src="/hero.png" alt="Abdullah" className="float relative z-10 w-full object-contain" />
        </div>
      </div>

      <dl className="mx-auto mt-16 grid max-w-[1400px] grid-cols-2 gap-6 border-t border-[#e9f1ec]/15 px-6 py-8 md:grid-cols-4">
        {meta.map(([k, v]) => (
          <div key={k}><dt className="mono text-xs uppercase text-[#e9f1ec]/50">{k}</dt><dd className="mt-1 font-medium">{v}</dd></div>
        ))}
      </dl>

      <div className="overflow-hidden border-y border-[#e9f1ec]/15 py-6">
        <div className="marquee">
          {[...tags, ...tags].map((t, i) => (
            <span key={i} className="mx-6 flex items-center gap-12 whitespace-nowrap text-5xl font-bold uppercase text-transparent [-webkit-text-stroke:1px_#e9f1ec55] md:text-7xl">
              {t}<span className="text-[#d7ff64] [-webkit-text-stroke:0]">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
