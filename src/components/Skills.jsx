import { FaRobot, FaLayerGroup, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiReact, SiNextdotjs, SiTypescript, SiPhp, SiMysql, SiLaravel, SiPython } from 'react-icons/si';
import Reveal from './Reveal';

const skills = [
  { n: 'HTML', i: FaHtml5, g: 'Frontend' },
  { n: 'CSS', i: FaCss3Alt, g: 'Frontend' },
  { n: 'Tailwind CSS', i: SiTailwindcss, g: 'Frontend' },
  { n: 'JavaScript', i: SiJavascript, g: 'Language' },
  { n: 'React.js', i: SiReact, g: 'Frontend' },
  { n: 'Next.js', i: SiNextdotjs, g: 'Framework' },
  { n: 'TypeScript', i: SiTypescript, g: 'Language' },
  { n: 'PHP', i: SiPhp, g: 'Backend' },
  { n: 'MySQLi', i: SiMysql, g: 'Database' },
  { n: 'Laravel', i: SiLaravel, g: 'Backend' },
  { n: 'Python', i: SiPython, g: 'Language' },
  { n: 'AI Implementation', i: FaRobot, g: 'AI' },
];

const spot = (e) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--x', e.clientX - r.left + 'px');
  e.currentTarget.style.setProperty('--y', e.clientY - r.top + 'px');
};

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-[1400px] px-6 py-32">
      <Reveal className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="mono mb-4 text-sm uppercase tracking-widest text-[#d7ff64]">( 01 ) Skills</p>
          <h2 className="text-6xl font-bold leading-none tracking-tighter md:text-8xl">What I<br />work with</h2>
        </div>
        <p className="max-w-sm text-[#e9f1ec]/60">From frontend to backend, from database to AI — a single developer, a complete product." </p>
      </Reveal>

      <Reveal className="card mb-4 flex items-center justify-between gap-6 p-8 md:p-12" >
        <div onMouseMove={spot} className="contents">
          <div>
            <p className="mono text-xs uppercase text-[#e9f1ec]/50">Title</p>
            <h3 className="text-4xl font-bold md:text-6xl">Full Stack Developer</h3>
            <p className="mt-3 text-[#e9f1ec]/60">Design → Frontend → Backend → Database → Deploy.</p>
          </div>
          <FaLayerGroup className="hidden text-7xl text-[#d7ff64] md:block" />
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map(({ n, i: Icon, g }, idx) => (
          <Reveal key={n} delay={(idx % 4) * 90}>
            <div className="card group h-56 p-6" onMouseMove={spot}>
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div className="flex items-start justify-between">
                  <Icon className="text-4xl text-[#d7ff64] transition-transform duration-500 group-hover:rotate-12 group-hover:scale-125" />
                  <span className="mono text-xs text-[#e9f1ec]/40">{String(idx + 1).padStart(2, '0')}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{n}</h3>
                  <span className="mono mt-1 inline-block text-xs uppercase text-[#e9f1ec]/50">{g}</span>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
