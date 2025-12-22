import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import SectionTitle from "./components/SectionTitle"

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />

      {/* JUDUL KEGIATAN */}
      <SectionTitle
        title="Kegiatan Kementerian Koordinator Bidang Pangan"
        subtitle="Informasi kegiatan dan program strategis dalam mendukung ketahanan pangan nasional"
      />

      {/* KONTEN KEGIATAN (ISI NANTI) */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        {/* card kegiatan / berita / galeri nanti di sini */}
      </div>
    </>
  )
}
