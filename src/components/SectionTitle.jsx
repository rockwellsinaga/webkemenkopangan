export default function SectionTitle({ title, subtitle }) {
  return (
    <section className="w-full py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-3 text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}

        {/* garis bawah */}
        <div className="mt-5 flex justify-center">
          <span className="w-20 h-1 bg-emerald-700 rounded-full" />
        </div>
      </div>
    </section>
  );
}
