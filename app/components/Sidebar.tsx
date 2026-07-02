import Link from "next/link";

type Post = {
  id: string;
  title: string;
  content: string;
  image?: string;
  createdAt?: string;
};

export default function Sidebar({
  posts,
  currentId,
}: {
  posts: Post[];
  currentId: string;
}) {
  // filter out current post
  const related = posts
    .filter((post) => post.id !== currentId)
    .slice(0, 5);

  return (
    <aside className="w-full lg:w-80">
      <div className="sticky top-24 space-y-6">

        {/* TITLE */}
        <h3 className="text-lg font-bold text-slate-900">
          Related Articles
        </h3>

        {/* LIST */}
        <div className="space-y-4">

          {related.map((post) => (
            <Link
              key={post.id}
              href={`/posts/${post.id}`}
              className="block rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
            >
              <h4 className="text-sm font-semibold text-slate-900 line-clamp-2">
                {post.title}
              </h4>

              <p className="mt-2 text-xs text-slate-500 line-clamp-2">
                {post.content}
              </p>

              <span className="mt-3 inline-block text-xs text-blue-600 font-medium">
                Read →
              </span>
            </Link>
          ))}

        </div>
      </div>
    </aside>
  );
}