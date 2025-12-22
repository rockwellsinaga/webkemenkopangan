import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <div className="p-10">
        <h1 className="text-3xl font-bold">Konten Utama</h1>
      </div>
    </>
  );
}
