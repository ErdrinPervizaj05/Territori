const BRAND = "#0B2A6F";

export default function Agjencite() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-light tracking-wide text-slate-900">Agencies</h2>
        <p className="mt-2 text-slate-500 font-light">
          Trusted partners and agencies. (UI now — backend later)
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((x) => (
          <div
            key={x}
            className="border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-900">Territori Partner</p>
              <span
                className="px-3 py-1 text-[11px] tracking-[0.18em] uppercase text-white"
                style={{ backgroundColor: BRAND }}
              >
                Verified
              </span>
            </div>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Agency profile placeholder — will be replaced with real partners, phone and location.
            </p>
            <div className="mt-6 text-xs tracking-wider text-slate-500">
              VIEW PROFILE →
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
