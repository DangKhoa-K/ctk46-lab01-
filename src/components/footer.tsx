export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-auto">
      <div className="max-w-5xl mx-auto px-4 py-6 text-center text-gray-500 text-sm">
        <p>
          © 2025 — Ngô Đăng Khoa | CTK46-PM · MSSV: 2212393 ·{" "}
          <a
            href="https://github.com/DangKhoa-K/ctk46-lab01-"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            GitHub
          </a>{" "}
          ·{" "}
          <a
            href="mailto:2212393@dlu.edu.vn"
            className="hover:text-blue-600 transition-colors"
          >
            2212393@dlu.edu.vn
          </a>
        </p>
        <p className="mt-1 text-xs text-gray-400">
          Các công nghệ mới trong phát triển phần mềm — Đại học Đà Lạt
        </p>
      </div>
    </footer>
  );
}
