const links = [['Home', '#home'], ['Skills', '#skills'], ['Contact', '#contact']];

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 mix-blend-difference">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 text-[#e9f1ec]">
        <a href="#home" className="text-lg font-bold tracking-tight">Abdullah<span className="text-[#d7ff64]">_</span></a>
        <div className="hidden items-center gap-10 md:flex">
          {links.map(([l, h]) => <a key={l} href={h} className="text-sm hover:text-[#d7ff64] transition-colors">{l}</a>)}
        </div>
        <span className="mono flex items-center gap-2 text-xs uppercase"><i className="dot" /> Available for work</span>
      </div>
    </nav>
  );
}
