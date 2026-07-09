export default function Footer() {
  return (
    <footer className="mt-36 border-t border-slate-200 bg-white transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col gap-20 px-6 py-24 lg:flex-row lg:justify-between lg:px-12 xl:px-16">

        {/* LEFT */}
        <div className="max-w-lg">
          <h2 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white">
            Blogzera
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Discover insightful articles on React, Next.js, TypeScript,
            Artificial Intelligence, Cybersecurity, APIs and modern web
            development.
          </p>

          <p className="mt-8 text-sm text-slate-500 dark:text-slate-500">
            Built with Next.js, Tailwind CSS & MockAPI.
          </p>
        </div>

        {/* CENTER */}
        <div>
          <h3 className="mb-6 text-xl font-bold text-slate-900 dark:text-white">
            Quick Links
          </h3>

          <div className="flex flex-col gap-4">
            <a
              href="#"
              className="text-base text-slate-600 transition duration-300 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
            >
              Home
            </a>

            <a
              href="#latest-articles"
              className="text-base text-slate-600 transition duration-300 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
            >
              Articles
            </a>

            <a
              href="#"
              className="text-base text-slate-600 transition duration-300 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
            >
              About
            </a>

            <a
              href="#"
              className="text-base text-slate-600 transition duration-300 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
            >
              Contact
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-4 lg:text-right">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Developer
          </h3>

          <p className="text-lg text-slate-600 dark:text-slate-400">
            Nandhakumar K S
          </p>

          <div className="pt-6 text-sm text-slate-500 dark:text-slate-500">
            <p>© {new Date().getFullYear()} Blogzera.</p>
            <p className="mt-2">All rights reserved.</p>
          </div>
        </div>

      </div>
    </footer>
  );
}