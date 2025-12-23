import NewsCard from "./NewsCard";

const dummyNews = [
  {
    id: 1,
    title: "Menko Pangan Dorong Percepatan Ketahanan Pangan Nasional",
    date: "15 Desember 2025",
    image: "https://source.unsplash.com/800x600/?agriculture",
    featured: true,
  },
  {
    id: 2,
    title: "Rapat Koordinasi Nasional Pangan Tahun 2025",
    date: "14 Desember 2025",
    image: "https://source.unsplash.com/400x300/?meeting",
  },
  {
    id: 3,
    title: "Sinergi Lintas Kementerian dalam Program Pangan",
    date: "13 Desember 2025",
    image: "https://source.unsplash.com/400x300/?government",
  },
  {
    id: 4,
    title: "Penguatan Cadangan Pangan Pemerintah",
    date: "12 Desember 2025",
    image: "https://source.unsplash.com/400x300/?rice",
  },
];

export default function NewsSection() {
  const featured = dummyNews.find((n) => n.featured);
  const others = dummyNews.filter((n) => !n.featured);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-slate-800">Berita Utama</h2>
        <button className="text-sm text-emerald-700 hover:underline">
          Lihat Semua →
        </button>
      </div>

      {/* CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* FEATURED */}
        <div className="lg:col-span-2">
          <NewsCard {...featured} large />
        </div>

        {/* SIDE NEWS */}
        <div className="grid gap-4">
          {others.map((item) => (
            <NewsCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
