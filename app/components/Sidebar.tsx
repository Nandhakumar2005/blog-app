import Link from "next/link";
import type { Post } from "@/types/post";
import { getExcerpt, getReadingTime } from "@/types/post";

export default function Sidebar({
  posts,
  currentId,
}: {
  posts: Post[];
  currentId: string;
}) {
  const related = posts
    .filter((post) => post.id !== currentId)
    .slice(0, 5);

  return (
    <aside className="w-full">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 lg:sticky lg:top-28 dark:border-slate-700 dark:bg-slate-900">
        <h3 className="text-base font-bold text-slate-900 sm:text-lg dark:text-white">
          Related Articles
        </h3>
        <p className="mt-1 text-xs text-slate-500 sm:text-sm dark:text-slate-400">
          More from our collection
        </p>

        <div className="mt-5 space-y-3 sm:space-y-4">
          {related.map((post) => (
            <Link
              key={post.id}
              href={`/posts/${post.id}`}
              className="group block rounded-xl border border-slate-200 bg-slate-50/50 p-4 transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-white hover:shadow-md dark:border-slate-700 dark:bg-slate-800/50 dark:hover:border-blue-800 dark:hover:bg-slate-800"
            >
              <h4 className="line-clamp-2 text-sm font-semibold text-slate-900 transition group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                {post.title}
              </h4>
              <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                {getExcerpt(post.content, 80)}
              </p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
                  Read →
                </span>
                <span className="text-xs text-slate-400 dark:text-slate-500">
                  {getReadingTime(post.content)} min
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
