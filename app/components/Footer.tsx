export default function Footer() {
  return (
    <footer className="mt-32 border-t border-slate-200 bg-white transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col justify-between gap-10 px-6 py-16 lg:flex-row lg:px-10 xl:px-14">

        {/* LEFT */}
        <div>
          <h2 className="text-3xl font-black text-slate-900 dark:text-white">
            Blogzera
          </h2>

          <p className="mt-4 max-w-md leading-7 text-slate-600 dark:text-slate-400">
            Discover insightful articles on React, Next.js, TypeScript,
            Artificial Intelligence, Cybersecurity and modern web development.
          </p>

          <p className="mt-6 text-sm text-slate-500 dark:text-slate-500">
            Built with Next.js, Tailwind CSS & MockAPI.
          </p>
        </div>

        {/* CENTER */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
            Quick Links
          </h3>

          <div className="flex flex-col gap-3">
            <a
              href="#"
              className="text-slate-600 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
            >
              Home
            </a>

            <a
              href="#articles"
              className="text-slate-600 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
            >
              Articles
            </a>

            <a
              href="#"
              className="text-slate-600 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
            >
              About
            </a>

            <a
              href="#"
              className="text-slate-600 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
            >
              Contact
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="lg:text-right">
          <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
            Developer
          </h3>

          <p className="text-slate-600 dark:text-slate-400">
            Nandhakumar K S
          </p>

          <p className="mt-6 text-sm text-slate-500 dark:text-slate-500">
            © {new Date().getFullYear()} Blogzera.
          </p>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-500">
            All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}