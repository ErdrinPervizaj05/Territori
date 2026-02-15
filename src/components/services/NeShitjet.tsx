import { NavLink } from "react-router-dom";
import { LISTINGS, type Listing } from "../../data/listings";

const BRAND = "#0B2A6F";
const money = (n: number) => new Intl.NumberFormat("de-DE").format(n);

export default function NeShitjet() {
  const items = LISTINGS.filter((l: Listing) => l.purpose === "sale");

  return (
    <div className="space-y-8">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-light tracking-wide text-slate-900">For Sale</h2>
          <p className="mt-2 text-slate-500 font-light">
            Explore high-quality properties for sale, curated for serious buyers.
          </p>
        </div>
        <div className="text-sm text-slate-600">
          <span className="font-semibold text-slate-900">{items.length}</span> results
        </div>
      </div>

      {items.length === 0 ? (
        <div className="border border-slate-200 bg-white p-8 text-slate-600">
          No sale listings available yet.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((l) => (
            <NavLink
              key={l.id}
              to={`/listings/${l.id}`}
              className="group block overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-md transition"
            >
              <div className="relative">
                <img src={l.image} alt={l.title} className="h-52 w-full object-cover" />
                <span
                  className="absolute left-4 top-4 px-3 py-1 text-[11px] tracking-[0.18em] uppercase text-white"
                  style={{ backgroundColor: BRAND }}
                >
                  Sale
                </span>
              </div>

              <div className="p-5 space-y-2">
                <p className="text-sm font-extrabold text-slate-900">€{money(l.price)}</p>
                <p className="text-sm font-semibold text-slate-900 line-clamp-1">{l.title}</p>
                <p className="text-xs font-semibold tracking-[0.14em] uppercase text-slate-500">
                  {l.city} • {l.area} m²
                </p>

                <div className="pt-3 text-xs tracking-wider text-slate-500 group-hover:text-slate-900 transition">
                  VIEW DETAILS →
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}
