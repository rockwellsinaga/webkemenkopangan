import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SectionTitle from "./components/SectionTitle";
import NewsSection from "./components/NewsSection";

export default function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />

      <SectionTitle
        title="Kegiatan Kementerian Koordinator Bidang Pangan"
        subtitle="Informasi kegiatan dan program strategis dalam mendukung ketahanan pangan nasional"
      />

      <NewsSection />

      <div className="max-w-7xl mx-auto px-6 pb-20">{/* konten */}</div>
    </>
  );
}
