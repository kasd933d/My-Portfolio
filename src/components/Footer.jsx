export default function Footer() {
  return (
    <footer className="overflow-hidden border-t border-[#e9f1ec]/15">
      <div className="mono mx-auto flex max-w-[1400px] flex-wrap justify-between gap-4 px-6 py-6 text-xs text-[#e9f1ec]/60">
        <span>© {new Date().getFullYear()} Abdullah.. or whatever</span>
        <span>Hand-built in Pakistan. Mostly.</span>
        <a href="#home" className="hover:text-[#d7ff64]">Back to top ↑</a>
      </div>
      <p className="select-none whitespace-nowrap text-center text-[17vw] font-bold leading-none tracking-[0.12em] text-[#e9f1ec]/[0.06]">ABDULLAH</p>
    </footer>
  );
}
