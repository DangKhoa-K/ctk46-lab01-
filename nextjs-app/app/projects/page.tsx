export default function Projects() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">Dự án</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="border p-4">Website bán sách</div>
        <div className="border p-4">App Android</div>
        <div className="border p-4">Game Unity</div>
      </div>
    </main>
  );
}
