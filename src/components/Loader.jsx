import { useEffect, useState } from 'react';

export default function Loader({ onDone }) {
  const [n, setN] = useState(0);
  const [out, setOut] = useState(false);
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const t = setInterval(() => setN((v) => Math.min(v + Math.ceil(Math.random() * 7), 100)), 60);
    return () => clearInterval(t);
  }, []);
  useEffect(() => {
    if (n >= 100) {
      setTimeout(() => { setOut(true); onDone(); document.body.style.overflow = ''; }, 350);
    }
  }, [n, onDone]);
  return (
    <div className="fixed inset-0 z-[10000] flex flex-col justify-between bg-[#071919] p-6 md:p-10 transition-transform duration-[900ms] ease-[cubic-bezier(.7,0,.2,1)]"
      style={{ transform: out ? 'translateY(-100%)' : 'none' }}>
      <div className="mono flex justify-between text-xs uppercase tracking-widest text-[#e9f1ec]/60">
        <span>Abdullah_</span><span>Loading</span>
      </div>
      <h1 className="text-[18vw] font-bold leading-none text-[#e9f1ec]">Salam<span className="text-[#d7ff64]">!</span></h1>
      <div>
        <div className="h-px w-full bg-[#e9f1ec]/15"><div className="h-px bg-[#d7ff64] transition-all" style={{ width: n + '%' }} /></div>
        <p className="mono mt-3 text-right text-sm text-[#d7ff64]">{String(n).padStart(2, '0')}/100</p>
      </div>
    </div>
  );
}
