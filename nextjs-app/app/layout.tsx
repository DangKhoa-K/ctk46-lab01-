import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Portfolio Khoa",
  description: "Lab 02 Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>
        {/* Navbar */}
        <nav className="bg-blue-600 text-white p-4 flex gap-6 justify-center">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white text-center p-4 mt-10">
          © 2026 Ngo Dang Khoa
        </footer>
      </body>
    </html>
  );
}
