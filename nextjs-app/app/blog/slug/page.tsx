export default function Post({ params }: { params: { slug: string } }) {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">Bài viết: {params.slug}</h1>
    </main>
  );
}
