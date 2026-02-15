import { NavLink } from "react-router-dom";
import type { Listing } from "../data/listings";

const BRAND = "#0B2A6F";
const money = (n: number) => new Intl.NumberFormat("de-DE").format(n);

type Props = {
  listing: Listing;
  variant?: "default" | "compact";
};

export default function ListingCard({ listing, variant = "default" }: Props) {
  const isRent = listing.purpose === "rent";

  return (
    <NavLink
      to={`/listings/${listing.id}`}
      className="group block focus:outline-none"
      aria-label={`Open listing: ${listing.title}`}
    >
      <article
        className={[
          "overflow-hidden border border-slate-200 bg-white shadow-sm",
          "transition-all duration-300 ease-out",
          "hover:-translate-y-0.5 hover:shadow-md hover:border-slate-300",
          "focus-within:ring-2 focus-within:ring-slate-900/10",
        ].join(" ")}
      >
        {/* IMAGE */}
        <div className="relative">
          <img
            src={listing.image}
            alt={listing.title}
            className={[
              "w-full object-cover transition-transform duration-500 ease-out",
              variant === "compact" ? "h-44" : "h-56",
              "group-hover:scale-[1.03]",
            ].join(" ")}
            loading="lazy"
          />

          {/* subtle gradient for premium feel */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-black/0" />

          {/* BADGES */}
          <div className="absolute left-4 top-4 flex items-center gap-2">
            <span
              className="px-3 py-1 text-[11px] tracking-[0.18em] uppercase text-white"
              style={{ backgroundColor: BRAND }}
            >
              {isRent ? "Rent" : "Sale"}
            </span>

            {/* UI-only premium badge (optional visual) */}
            <span className="px-3 py-1 text-[11px] tracking-[0.18em] uppercase bg-white/90 text-slate-900 border border-slate-200">
              Verified
            </span>
          </div>

          {/* PRICE */}
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
            <p className="text-white drop-shadow-sm">
              <span className="text-lg font-extrabold">€{money(listing.price)}</span>
              {isRent ? (
                <span className="text-xs font-semibold opacity-90"> /muaj</span>
              ) : null}
            </p>

            <span className="text-[11px] tracking-[0.18em] uppercase text-white/90">
              {listing.area} m²
            </span>
          </div>
        </div>

        {/* BODY */}
        <div className={variant === "compact" ? "p-4" : "p-5"}>
          {/* TITLE */}
          <h3 className="text-sm font-semibold text-slate-900 line-clamp-1">
            {listing.title}
          </h3>

          {/* META */}
          <p className="mt-2 text-xs font-semibold tracking-[0.14em] uppercase text-slate-500">
            {listing.city}
            <span className="mx-2 text-slate-300">•</span>
            {listing.area} m²
          </p>

          {/* SPECS */}
          <div className="mt-4 flex items-center gap-3 text-xs text-slate-600">
            <SpecChip label="Rooms" value={listing.bedrooms} />
            <SpecChip label="Baths" value={listing.bathrooms} />
          </div>

          {/* CTA */}
          <div className="mt-5 flex items-center justify-between">
            <span className="text-xs tracking-wider text-slate-500 group-hover:text-slate-900 transition">
              VIEW DETAILS →
            </span>

            <span className="text-xs text-slate-400 group-hover:text-slate-600 transition">
              #{listing.id}
            </span>
          </div>
        </div>
      </article>
    </NavLink>
  );
}

function SpecChip({ label, value }: { label: string; value?: number }) {
  if (typeof value !== "number") return null;

  return (
    <span className="inline-flex items-center gap-2 border border-slate-200 bg-white px-3 py-1">
      <span className="text-[11px] tracking-[0.16em] uppercase text-slate-500">
        {label}
      </span>
      <span className="text-xs font-semibold text-slate-900">{value}</span>
    </span>
  );
}
