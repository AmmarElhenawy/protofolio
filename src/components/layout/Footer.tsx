import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-5 mt-auto bg-[#0c0e10] border-t border-[#46484a]/15 flex flex-col sm:flex-row justify-between items-center gap-4 px-4 sm:px-8 lg:px-12 text-center sm:text-left">
      <p className="font-headline text-[10px] uppercase tracking-[0.2em] text-slate-500">
        © 2026 Ammar Elhenawy // ROOT_ACCESS_GRANTED
      </p>

      <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-8">
        <Link
          href="https://github.com/AmmarElhenawy"
          target="_blank"
          className="font-headline text-[10px] uppercase tracking-[0.2em] text-slate-500 hover:text-[#ff8d8d] transition-colors duration-200"
        >
          GitHub
        </Link>
        <Link
          href="https://www.linkedin.com/in/ammar-elhenawy-393b60252/"
          target="_blank"
          className="font-headline text-[10px] uppercase tracking-[0.2em] text-slate-500 hover:text-[#ff8d8d] transition-colors duration-200"
        >
          LinkedIn
        </Link>
        <span className="font-headline text-[10px] uppercase tracking-[0.2em] text-[#a9ffdf]">
          Status: Online
        </span>
      </div>
    </footer>
  );
}