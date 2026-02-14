const BRAND = "#0B2A6F";

export default function TrustedBy() {
  return (
    <section className="border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <div>
            <p className="text-xs font-light tracking-widest text-slate-500 uppercase">
              Trusted by agencies
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
              Agjenci që na besojnë
            </h2>
            <p className="mt-2 text-sm text-slate-600 max-w-xl leading-relaxed">
              Bashkëpunojmë me agjenci dhe pronarë për të sjellë oferta cilësore
              dhe të verifikuara.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span
              className="inline-block h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: BRAND }}
            />
            <span className="text-xs font-semibold text-slate-700">
              Partnerë të verifikuar
            </span>
          </div>
        </div>

        {/* Logos grid (placeholders) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {[
            "Agjencia Prizren",
            "HomePlus",
            "Prona KS",
            "Urban Realty",
            "Estate Hub",
            "Nova Agency",
          ].map((name) => (
            <div
              key={name}
              className="h-16 rounded-none border border-slate-200 bg-slate-50 flex items-center justify-center"
            >
              <span className="text-xs font-semibold tracking-wide text-slate-600 uppercase text-center px-2">
                {name}
              </span>
            </div>
          ))}
        </div>

        {/* Mini stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <Stat label="Ofertat aktive" value="120+" />
          <Stat label="Qytete" value="15+" />
          <Stat label="Agjenci partnere" value="25+" />
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-none border border-slate-200 bg-white p-6 min-h-24 flex flex-col justify-center">
      <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
        {label}
      </p>
      <p className="mt-3 text-3xl font-semibold text-slate-900">{value}</p>
    </div>
  );
}
