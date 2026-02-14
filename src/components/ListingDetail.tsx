import { NavLink, useParams } from "react-router-dom";
import { LISTINGS, type Listing } from "../data/listings";

const BRAND = "#0B2A6F";
const money = (n: number) => new Intl.NumberFormat("de-DE").format(n);

export default function ListingDetails() {
  const { id } = useParams();
  const listing: Listing =
    LISTINGS.find((l: Listing) => l.id === id) ?? LISTINGS[0]; // UI only fallback

  const images = [
    listing.image,
    "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1600&q=80",
  ];

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <div className="text-sm font-semibold text-slate-600">
        <NavLink to="/listings" className="hover:text-slate-900">
          Ofertat
        </NavLink>{" "}
        <span className="text-slate-400">/</span>{" "}
        <span className="text-slate-900">{listing.city}</span>
      </div>

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
            {listing.title}
          </h1>
          <p className="mt-1 text-slate-600">
            {listing.city} • {listing.area} m²
            {listing.bedrooms ? ` • ${listing.bedrooms} dhoma` : ""}
            {listing.bathrooms ? ` • ${listing.bathrooms} banjo` : ""}
          </p>
        </div>

        <div className="text-2xl font-extrabold text-slate-900">
          €{money(listing.price)}
          {listing.purpose === "rent" ? (
            <span className="text-sm font-semibold text-slate-500"> /muaj</span>
          ) : null}
        </div>
      </div>

      {/* Gallery + sticky contact */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {/* Gallery */}
        <div className="lg:col-span-2 space-y-3">
          <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
            <img src={images[0]} className="h-[420px] w-full object-cover" />
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
            {images.slice(1).map((src, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm"
              >
                <img src={src} className="h-24 w-full object-cover" />
              </div>
            ))}
          </div>

          {/* Specs */}
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-extrabold text-slate-900">Detajet</h2>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <Spec label="Sipërfaqe" value={`${listing.area} m²`} />
              <Spec label="Qyteti" value={listing.city} />
              <Spec
                label="Dhoma"
                value={listing.bedrooms ? `${listing.bedrooms}` : "—"}
              />
              <Spec
                label="Banjo"
                value={listing.bathrooms ? `${listing.bathrooms}` : "—"}
              />
            </div>
          </div>

          {/* Description */}
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-extrabold text-slate-900">
              Përshkrimi
            </h2>
            <p className="mt-3 text-slate-600 leading-relaxed">
              Kjo është një pronë premium me pozicion të përshtatshëm dhe akses
              të lehtë. Dizajn modern, hapësirë e ndriçuar dhe ideale për banim
              ose investim. (Tekst placeholder — backend do sjellë përshkrimin
              real.)
            </p>
          </div>

          {/* Map placeholder */}
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-extrabold text-slate-900">
                Lokacioni
              </h2>
              <span className="text-sm font-semibold text-slate-500">
                Map (UI)
              </span>
            </div>
            <div className="mt-4 h-56 rounded-lg bg-slate-100 border border-slate-200 grid place-items-center text-slate-500">
              Map Placeholder
            </div>
          </div>
        </div>

        {/* Sticky contact */}
        <div className="lg:sticky lg:top-28 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-lg font-extrabold text-slate-900">Kontakto</h3>
          <p className="mt-1 text-sm text-slate-600">
            Shfaq interesin për këtë pronë. (UI only)
          </p>

          <div className="mt-4 space-y-3">
            <button
              className="w-full rounded-md px-4 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95 transition"
              style={{ backgroundColor: BRAND }}
            >
              Dërgo mesazh
            </button>
            <button className="w-full rounded-md px-4 py-3 text-sm font-semibold border border-slate-200 hover:bg-slate-50 transition">
              Thirr
            </button>
            <button className="w-full rounded-md px-4 py-3 text-sm font-semibold border border-slate-200 hover:bg-slate-50 transition">
              WhatsApp
            </button>
          </div>

          <div className="mt-5 pt-5 border-t border-slate-200 text-sm text-slate-600">
            <p className="font-semibold text-slate-900">Agjent/Pronari</p>
            <p className="mt-1">Territori Support</p>
            <p className="mt-1">+383 44 000 000</p>
          </div>
        </div>
      </div>

      {/* Similar */}
      <div className="pt-2">
        <div className="flex items-end justify-between">
          <h2 className="text-xl font-extrabold tracking-tight text-slate-900">
            Prona të ngjashme
          </h2>
          <NavLink
            to="/listings"
            className="text-sm font-semibold text-slate-700 hover:text-slate-900"
          >
            Shiko të gjitha →
          </NavLink>
        </div>

        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {LISTINGS.slice(0, 3).map((l: Listing) => (
            <NavLink
              key={l.id}
              to={`/listings/${l.id}`}
              className="block overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm hover:shadow-md transition"
            >
              <img src={l.image} className="h-44 w-full object-cover" />
              <div className="p-4">
                <p className="text-sm font-extrabold text-slate-900">
                  €{money(l.price)}
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-900 line-clamp-1">
                  {l.title}
                </p>
                <p className="mt-1 text-xs font-semibold tracking-[0.14em] uppercase text-slate-500">
                  {l.city}
                </p>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-slate-200 bg-white px-4 py-3">
      <p className="text-xs font-semibold text-slate-500">{label}</p>
      <p className="mt-1 text-sm font-extrabold text-slate-900">{value}</p>
    </div>
  );
}
