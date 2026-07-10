import BlogCard from "./BlogCard";
import type { Post } from "@/types/post";

type Props = {
  posts: Post[];
};

export default function BlogGrid({ posts }: Props) {
  if (posts.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50/50 py-16 text-center sm:py-24 dark:border-slate-700 dark:bg-slate-900/30">
        <div className="text-5xl sm:text-6xl">📚</div>
        <h2 className="mt-6 text-2xl font-bold text-slate-800 sm:text-3xl dark:text-white">
          No articles found
        </h2>
        <p className="mx-auto mt-3 max-w-md px-4 text-sm text-slate-500 sm:text-base dark:text-slate-400">
          Try a different search term or select another tag to explore more articles.
        </p>
      </div>
    );
  }

  return (
    <section className="w-full pb-16 sm:pb-24 lg:pb-32">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10 xl:grid-cols-4">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
