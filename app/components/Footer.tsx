export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* LEFT SECTION */}
        <div className="text-center md:text-left">

          <p className="mt-1 text-sm text-slate-500">
            Built with Next.js, Tailwind CSS & MockAPI.
          </p>

          {/* OPTIONAL LINKS */}
          <div className="mt-3 flex justify-center md:justify-start gap-4 text-sm text-slate-500">
            <a href="#" className="hover:text-slate-900 transition">About</a>
            <a href="#" className="hover:text-slate-900 transition">Privacy</a>
            <a href="#" className="hover:text-slate-900 transition">Contact</a>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="text-sm text-slate-500 text-center md:text-right">
          <p>© {new Date().getFullYear()} Nandhakumar K S</p>
          <p className="mt-1">All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}