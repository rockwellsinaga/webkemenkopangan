export default function NewsCard({ title, date, image, large = false }) {
  return (
    <div className="group cursor-pointer overflow-hidden rounded-xl bg-white shadow hover:shadow-lg transition">
      {/* IMAGE */}
      <div className={`relative ${large ? "h-80" : "h-32"}`}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
        />
      </div>

      {/* CONTENT */}
      <div className="p-4">
        <p className="text-xs text-slate-500 mb-1">{date}</p>
        <h3
          className={`font-semibold text-slate-800 leading-snug ${
            large ? "text-lg" : "text-sm"
          }`}
        >
          {title}
        </h3>
      </div>
    </div>
  );
}
