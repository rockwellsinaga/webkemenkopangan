import heroImage from "../assets/Hero1.jpg";

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh]">
      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 flex items-center">
        <div className="max-w-2xl text-white">
          <p className="text-sm uppercase tracking-widest text-emerald-300 mb-3">
            Kementerian Koordinator
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Kementerian Koordinator <br />
            Bidang Pangan
          </h1>

          <p className="text-base md:text-lg text-gray-200 mb-8">
            Mewujudkan ketahanan dan kedaulatan pangan nasional melalui
            koordinasi, sinkronisasi, dan pengendalian kebijakan.
          </p>

          <button
            className="
            inline-flex items-center gap-2
            bg-emerald-600 hover:bg-emerald-700
            text-white font-medium
            px-6 py-3 rounded-lg
            transition
          "
          >
            Lihat Program
          </button>
        </div>
      </div>
    </section>
  );
}
