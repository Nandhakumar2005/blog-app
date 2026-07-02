"use client";

export default function Header() {
  return (
  <section className="relative overflow-hidden py-20">
    {/* Background Glow */}
    <div className="absolute inset-0 -z-10">
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute left-1/2 top-10 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-200/20 blur-3xl" />
    </div>

    <div className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center px-6 text-center">

        {/* Title */}
        <h1 className="text-5xl font-black tracking-tight text-slate-900 dark:text-white md:text-7xl">
          Discover Stories
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300 md:text-xl">
          Explore articles on React, Next.js, TypeScript, AI, Git, APIs,
          Tailwind CSS, Cybersecurity and modern web development.
        </p>

      </div>
    </section>
  );
}