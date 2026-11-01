import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedinIn, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { SiFiverr, SiUpwork } from 'react-icons/si';
import { LINKS, WHATSAPP } from '../data';
import Reveal from './Reveal';

const icons = { GitHub: FaGithub, LinkedIn: FaLinkedinIn, Fiverr: SiFiverr, Upwork: SiUpwork, Instagram: FaInstagram, WhatsApp: FaWhatsapp };

export default function Contact() {
  const [time, setTime] = useState('');
  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Karachi' }));
    tick(); const t = setInterval(tick, 1000); return () => clearInterval(t);
  }, []);

  return (
    <section id="contact" className="mx-auto max-w-[1400px] px-6 pb-32 pt-16">
      <Reveal className="mono mb-10 flex items-center justify-between border-b border-[#e9f1ec]/15 pb-4 text-xs uppercase">
        <span className="flex items-center gap-2"><i className="dot" /> Available for work</span>
        <span>Pakistan // {time} PKT</span>
      </Reveal>

      <Reveal><h2 className="text-[14vw] font-bold leading-[0.88] tracking-tighter md:text-[10vw]">Let's build<br /><span className="text-[#d7ff64]">stuff.</span></h2></Reveal>

      <div className="mt-20 grid gap-16 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <p className="mono mb-4 text-sm uppercase text-[#e9f1ec]/50">Elsewhere</p>
          <p className="mb-8 max-w-sm text-[#e9f1ec]/60">Fiverr ya Upwork pe hire karo, ya seedha WhatsApp karo.</p>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn">Start a project ↗</a>
        </Reveal>
        <div>
          {LINKS.map(({ name, url }, i) => {
            const Icon = icons[name];
            return (
              <Reveal key={name} delay={i * 70}>
                <a href={url} target="_blank" rel="noopener noreferrer" className="row">
                  <span className="flex items-center gap-5 text-3xl font-bold md:text-5xl"><Icon className="text-2xl md:text-3xl" />{name}</span>
                  <span className="arr text-3xl">↗</span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
