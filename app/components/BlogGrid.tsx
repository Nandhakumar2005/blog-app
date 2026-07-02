import BlogCard, { Post } from "./BlogCard";

type Props = {
  posts: Post[];
};

export default function BlogGrid({ posts }: Props) {
  if (posts.length === 0) {
    return (
      <div className="py-24 text-center">
        <div className="text-6xl">📚</div>

        <h2 className="mt-6 text-3xl font-bold text-slate-800">
          No articles found
        </h2>

        <p className="mt-3 text-slate-500">
          Try searching with another keyword.
        </p>
      </div>
    );
  }

  return (
    <section className="pb-20">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}