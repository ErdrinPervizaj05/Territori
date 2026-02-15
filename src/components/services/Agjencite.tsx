const BRAND = "#0B2A6F";

const agencies = [
  {
    name: "Territori Partner",
    desc: "Verified agency placeholder — clean profile cards until backend is connected.",
  },
  {
    name: "Premium Realty",
    desc: "Professional listing partners focused on clarity and premium service.",
  },
  {
    name: "City Properties",
    desc: "Trusted agents helping you buy, sell, and rent with confidence.",
  },
];

export default function Agjencite() {
  return (
    <div className="py-10 space-y-10">
      <div>
        <h2 className="text-4xl font-light tracking-wide text-slate-900">
          Agencies
        </h2>
        <p className="mt-3 text-slate-500 font-light">
          Trusted partners and agencies (UI only for now).
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {agencies.map((a) => (
          <div
            key={a.name}
            className="border border-slate-200 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 p-6"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-900">{a.name}</p>
              <span
                className="px-3 py-1 text-[11px] tracking-[0.18em] uppercase text-white"
                style={{ backgroundColor: BRAND }}
              >
                Verified
              </span>
            </div>

            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              {a.desc}
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
