import Link from "next/link";

export type Post = {
  id: string;
  title: string;
  content: string;
  image?: string;
  createdAt?: string;
  category?: string;
  tags?: string;
};

export default function BlogCard({ post }: { post: Post }) {
  return (
    <Link href={`/posts/${post.id}`} className="group block h-full">
      <article
        className="
          flex h-full flex-col overflow-hidden
          rounded-3xl
          bg-white dark:bg-slate-800
          shadow-sm
          ring-1 ring-slate-200 dark:ring-slate-700
          transition-all duration-300
          hover:-translate-y-2
          hover:shadow-2xl
        "
      >
        {/* Image */}
        {post.image && (
          <div className="overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
        )}

        {/* Content */}
        <div className="flex flex-1 flex-col p-8">

          {/* Date */}
          <div className="mb-6">
            <span className="rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold text-blue-700 dark:bg-slate-700 dark:text-blue-200">
              {post.createdAt
                ? new Date(post.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : "Recent"}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl font-bold leading-tight text-slate-900 transition-colors duration-300 group-hover:text-blue-600 dark:text-white">
            {post.title}
          </h2>

          {/* Description */}
          <p className="mt-5 line-clamp-3 flex-1 text-base leading-8 text-slate-600 dark:text-slate-300">
            {post.content}
          </p>

          {/* Footer */}
          <div className="mt-10 flex items-center justify-between border-t border-slate-100 pt-6 dark:border-slate-700">

            <span className="font-semibold text-blue-600 transition duration-300 group-hover:translate-x-1">
              Read Article →
            </span>

            <span className="rounded-full bg-slate-100 px-4 py-1.5 text-xs font-medium text-slate-500 dark:bg-slate-700 dark:text-slate-300">
              {post.category ?? "Web Development"}
            </span>

          </div>
        </div>
      </article>
    </Link>
  );
}