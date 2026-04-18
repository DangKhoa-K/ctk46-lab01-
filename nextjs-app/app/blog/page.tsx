import Link from "next/link";

export default function Blog() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>

      <ul className="space-y-2">
        <li>
          <Link href="/blog/react">Bài viết React</Link>
        </li>

        <li>
          <Link href="/blog/nextjs">Bài viết Next.js</Link>
        </li>
      </ul>
    </main>
  );
}
