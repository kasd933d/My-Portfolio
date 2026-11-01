import { useEffect, useRef } from 'react';

export default function Cursor() {
  const el = useRef(null);
  useEffect(() => {
    let x = 0, y = 0, cx = 0, cy = 0, raf;
    const move = (e) => { x = e.clientX; y = e.clientY; };
    const over = (e) => el.current?.classList.toggle('big', !!e.target.closest('a,button'));
    const loop = () => { cx += (x - cx) * 0.18; cy += (y - cy) * 0.18; if (el.current) el.current.style.transform = `translate(${cx}px,${cy}px)`; raf = requestAnimationFrame(loop); };
    window.addEventListener('mousemove', move); window.addEventListener('mouseover', over); loop();
    return () => { window.removeEventListener('mousemove', move); window.removeEventListener('mouseover', over); cancelAnimationFrame(raf); };
  }, []);
  return <div ref={el} className="cursor" />;
}
