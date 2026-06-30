type Post = {
  id: string;
  title: string;
  content: string;
  image?: string;
  createdAt?: string;
};

async function getPost(id: string): Promise<Post> {
  const res = await fetch(
    `https://6a43c3da6dba791499ab59d7.mockapi.io/posts/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }

  return res.json();
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getPost(id);

  return (
    <main className="min-h-screen bg-gray-100">
      {/* Hero Image */}
      {post.image && (
        <div className="w-full h-80 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Content */}
      <article className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl -mt-16 relative z-10 p-8">
        <p className="text-sm text-gray-500 mb-3">
          {new Date(post.createdAt ?? "").toLocaleDateString()}
        </p>

        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          {post.title}
        </h1>

        <p className="text-gray-700 leading-8 whitespace-pre-line">
          {post.content}
        </p>
      </article>
    </main>
  );
}