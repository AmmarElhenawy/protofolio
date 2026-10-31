export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full py-5 mt-auto bg-[#0c0e10] border-t border-[#46484a]/15 flex flex-col sm:flex-row justify-between items-center gap-4 px-4 sm:px-8 lg:px-12 text-center sm:text-left">
      <p className="font-headline text-[11px] uppercase tracking-[0.2em] text-slate-400">
        © {year} Ammar Elhenawy
      </p>

      <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-8">
        <a
          href="https://github.com/AmmarElhenawy"
          target="_blank"
          rel="noopener noreferrer"
          className="font-headline text-[11px] uppercase tracking-[0.2em] text-slate-400 hover:text-[#ff8d8d] transition-colors duration-200"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/ammar-elhenawy-393b60252/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-headline text-[11px] uppercase tracking-[0.2em] text-slate-400 hover:text-[#ff8d8d] transition-colors duration-200"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
