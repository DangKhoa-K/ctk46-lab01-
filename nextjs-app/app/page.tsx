import Counter from "./components/counter";

export default function Home() {
  return (
    <main className="text-center p-10">
      <h1 className="text-4xl font-bold mb-4">Xin chào! 👋</h1>

      <p className="text-xl">Tôi là NGO DANG KHOA</p>
      <p>MSSV: 2212393</p>
      <p>Lớp: CTK46</p>

      <p className="mt-4">Sinh viên CNTT yêu thích lập trình web 🚀</p>

      <Counter />
    </main>
  );
}
