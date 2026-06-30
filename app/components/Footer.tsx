export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-4">

        <div>
          <h3 className="text-xl font-bold text-slate-900">
            Modern Blog
          </h3>

          <p className="text-sm text-slate-500 mt-1">
            Built with Next.js, Tailwind CSS & MockAPI.
          </p>
        </div>

        <div className="text-sm text-slate-500">
          © {new Date().getFullYear()} Nandhakumar K S
        </div>

      </div>
    </footer>
  );
}