import { useMemo, useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import { LISTINGS, type Listing } from "../data/listings";

const BRAND = "#0B2A6F";

const money = (n: number) => new Intl.NumberFormat("de-DE").format(n);

const purposeLabel = (p: Listing["purpose"]) =>
  p === "rent" ? "Me Qira" : p === "sale" ? "Në Shitje" : "Tokë";

const badgeClass = (p: Listing["purpose"]) => {
  if (p === "rent") return "bg-emerald-50 text-emerald-800 border-emerald-100";
  if (p === "sale") return "bg-blue-50 text-blue-800 border-blue-100";
  return "bg-amber-50 text-amber-900 border-amber-100";
};

type Sort = "newest" | "price_asc" | "price_desc";

export default function Listings() {
  const [params, setParams] = useSearchParams();
  const [page, setPage] = useState(1);

  const city = params.get("city") ?? "";
  const purpose = (params.get("purpose") ?? "") as "" | Listing["purpose"];
  const type = (params.get("type") ?? "") as "" | Listing["type"];
  const maxPrice = params.get("maxPrice") ?? "";
  const sort = (params.get("sort") ?? "newest") as Sort;

  const maxPriceNum = maxPrice ? Number(maxPrice) : undefined;

  const filtered = useMemo(() => {
    let data = [...LISTINGS];

    if (city.trim()) {
      data = data.filter(
        (l) => l.city.toLowerCase() === city.trim().toLowerCase(),
      );
    }
    if (purpose) data = data.filter((l) => l.purpose === purpose);
    if (type) data = data.filter((l) => l.type === type);
    if (typeof maxPriceNum === "number" && !Number.isNaN(maxPriceNum)) {
      data = data.filter((l) => l.price <= maxPriceNum);
    }

    data.sort((a, b) => {
      if (sort === "price_asc") return a.price - b.price;
      if (sort === "price_desc") return b.price - a.price;
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

    return data;
  }, [city, purpose, type, maxPriceNum, sort]);

  const pageSize = 6;
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));

  const paged = filtered.slice((page - 1) * pageSize, page * pageSize);

  const updateParam = (key: string, value: string) => {
    const next = new URLSearchParams(params);
    if (!value) next.delete(key);
    else next.set(key, value);
    setParams(next);
    setPage(1);
  };

  const clearAll = () => {
    setParams(new URLSearchParams());
    setPage(1);
  };

  return (
    <div className="space-y-6">
      {/* Top bar */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-8">
        <div>
          <p className="text-xs font-light tracking-widest text-slate-500 uppercase">
            Territori • Marketplace
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">
            Ofertat
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Zgjidh filtrat dhe gjej pronën që të përshtatet.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <NavLink
            to="/post"
            className="rounded-none px-5 py-2 text-sm font-semibold text-white hover:opacity-95 transition"
            style={{ backgroundColor: BRAND }}
          >
            Posto Pronë
          </NavLink>

          <button
            onClick={clearAll}
            className="text-sm font-semibold text-slate-700 hover:text-slate-900 transition"
          >
            Pastro filtrat
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="rounded-none border border-slate-200 bg-white p-6 shadow-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <FilterSelect
            label="Qyteti"
            value={city}
            onChange={(v) => updateParam("city", v)}
            options={[
              "",
              "Prizren",
              "Prishtinë",
              "Pejë",
              "Gjakovë",
              "Suharekë",
            ]}
          />

          <FilterSelect
            label="Kategoria"
            value={purpose}
            onChange={(v) => updateParam("purpose", v)}
            options={["", "rent", "sale", "land"]}
            mapLabel={(v) =>
              v === ""
                ? "Të gjitha"
                : v === "rent"
                  ? "Me Qira"
                  : v === "sale"
                    ? "Në Shitje"
                    : "Tokë"
            }
          />

          <FilterSelect
            label="Lloji"
            value={type}
            onChange={(v) => updateParam("type", v)}
            options={["", "apartment", "house", "land"]}
            mapLabel={(v) =>
              v === ""
                ? "Të gjitha"
                : v === "apartment"
                  ? "Apartament"
                  : v === "house"
                    ? "Shtëpi"
                    : "Tokë"
            }
          />

          <FilterInput
            label="Max Çmimi (€)"
            value={maxPrice}
            onChange={(v) => updateParam("maxPrice", v.replace(/[^\d]/g, ""))}
            placeholder="p.sh. 500"
          />

          <FilterSelect
            label="Renditja"
            value={sort}
            onChange={(v) => updateParam("sort", v)}
            options={["newest", "price_asc", "price_desc"]}
            mapLabel={(v) =>
              v === "newest"
                ? "Më të rejat"
                : v === "price_asc"
                  ? "Çmimi: i ulët → i lartë"
                  : "Çmimi: i lartë → i ulët"
            }
          />
        </div>

        <div className="mt-4 flex items-center justify-between text-sm text-slate-600">
          <div>
            <span className="font-semibold text-slate-900">
              {filtered.length}
            </span>{" "}
            rezultate
          </div>
          <div className="hidden sm:block">
            Faqja <span className="font-semibold text-slate-900">{page}</span> /{" "}
            <span className="font-semibold text-slate-900">{totalPages}</span>
          </div>
        </div>
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <EmptyState onClear={clearAll} />
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paged.map((l) => (
              <ListingCard key={l.id} listing={l} />
            ))}
          </div>

          {/* Fake pagination (design) */}
          <div className="flex items-center justify-center gap-2.5 pt-4">
            <PageBtn
              disabled={page === 1}
              onClick={() => setPage((p) => p - 1)}
            >
              ←
            </PageBtn>

            {Array.from({ length: totalPages })
              .slice(0, 5)
              .map((_, idx) => {
                const p = idx + 1;
                return (
                  <PageBtn
                    key={p}
                    active={p === page}
                    onClick={() => setPage(p)}
                  >
                    {p}
                  </PageBtn>
                );
              })}

            <PageBtn
              disabled={page === totalPages}
              onClick={() => setPage((p) => p + 1)}
            >
              →
            </PageBtn>
          </div>
        </>
      )}
    </div>
  );
}

function ListingCard({ listing }: { listing: Listing }) {
  return (
    <NavLink
      to={`/listings/${listing.id}`}
      className="group block overflow-hidden rounded-none border border-slate-200 bg-white shadow-sm hover:shadow-lg transition"
    >
      {/* Image */}
      <div className="relative">
        <img
          src={listing.image}
          alt={listing.title}
          className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <div
          className={`absolute left-3 top-3 px-2.5 py-1 rounded-none text-xs font-semibold border ${badgeClass(
            listing.purpose,
          )}`}
        >
          {purposeLabel(listing.purpose)}
        </div>

        {/* View details hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />
        <div className="absolute bottom-3 right-3 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition">
          <span className="inline-flex items-center gap-2 rounded-none bg-white/95 border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-900 shadow-sm">
            Shiko detaje →
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-baseline justify-between gap-3">
          <p className="text-lg font-extrabold text-slate-900">
            €{money(listing.price)}
            {listing.purpose === "rent" ? (
              <span className="text-xs font-semibold text-slate-500">
                {" "}
                /muaj
              </span>
            ) : null}
          </p>
          <p className="text-xs font-semibold tracking-[0.14em] uppercase text-slate-500">
            {listing.city}
          </p>
        </div>

        <h3 className="mt-2 text-sm font-semibold text-slate-900 line-clamp-2 min-h-[40px]">
          {listing.title}
        </h3>

        <div className="mt-3 flex items-center gap-3 text-xs font-semibold text-slate-600">
          <span>{listing.area} m²</span>
          <span className="h-1 w-1 rounded-full bg-slate-300" />
          {typeof listing.bedrooms === "number" ? (
            <>
              <span>{listing.bedrooms} dhoma</span>
              <span className="h-1 w-1 rounded-full bg-slate-300" />
            </>
          ) : null}
          {typeof listing.bathrooms === "number" ? (
            <span>{listing.bathrooms} banjo</span>
          ) : (
            <span className="text-slate-500">Detaje</span>
          )}
        </div>
      </div>
    </NavLink>
  );
}

/* UI helpers */
function FilterSelect({
  label,
  value,
  onChange,
  options,
  mapLabel,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  mapLabel?: (v: string) => string;
}) {
  return (
    <div>
      <label className="text-xs font-semibold text-slate-600">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-none border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-slate-400 transition-colors"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {mapLabel ? mapLabel(o) : o || "Të gjitha"}
          </option>
        ))}
      </select>
    </div>
  );
}

function FilterInput({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-xs font-semibold text-slate-600">{label}</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full rounded-none border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-slate-400 transition-colors"
        inputMode="numeric"
      />
    </div>
  );
}

function PageBtn({
  children,
  onClick,
  disabled,
  active,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  active?: boolean;
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`h-10 min-w-10 px-3 rounded-none border text-sm font-semibold transition ${
        active
          ? "border-slate-900 bg-slate-900 text-white"
          : "border-slate-200 bg-white text-slate-800 hover:bg-slate-50"
      } ${disabled ? "opacity-40 cursor-not-allowed" : ""}`}
    >
      {children}
    </button>
  );
}

function EmptyState({ onClear }: { onClear: () => void }) {
  return (
    <div className="rounded-none border border-slate-200 bg-white p-12 text-center shadow-sm">
      <p className="text-lg font-semibold text-slate-900">S'ka rezultate</p>
      <p className="mt-2 text-sm text-slate-600">
        Ndrysho filtrat ose pastro filtrat për të parë të gjitha ofertat.
      </p>
      <button
        onClick={onClear}
        className="mt-6 inline-flex items-center justify-center rounded-none px-6 py-2 text-sm font-semibold text-white hover:opacity-95 transition"
        style={{ backgroundColor: BRAND }}
      >
        Pastro filtrat
      </button>
    </div>
  );
}
