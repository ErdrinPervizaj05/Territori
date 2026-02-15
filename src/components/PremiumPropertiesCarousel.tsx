import { useMemo, useRef } from "react";
import { NavLink } from "react-router-dom";


type PremiumProperty = {
  id: string;
  title: string;
  location: string;
  price: string;
  tag: "Penthouse" | "Villa" | "Exclusive" | "New";
  specs: string; // e.g. "210 m² • 4 dhoma • 2 banjo"
  image: string;
};

const mockPremium: PremiumProperty[] = [
  {
    id: "p1",
    title: "Penthouse me Pamje në Qendër",
    location: "Prizren",
    price: "€320,000",
    tag: "Penthouse",
    specs: "210 m² • 4 dhoma • 2 banjo",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "p2",
    title: "Villa Moderne me Oborr",
    location: "Prishtinë",
    price: "€540,000",
    tag: "Villa",
    specs: "340 m² • 5 dhoma • 3 banjo",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "p3",
    title: "Apartament Ekskluziv për Investim",
    location: "Pejë",
    price: "€185,000",
    tag: "Exclusive",
    specs: "120 m² • 3 dhoma • 2 banjo",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "p4",
    title: "Objekt i Ri Premium (Rezidencë)",
    location: "Ferizaj",
    price: "€249,000",
    tag: "New",
    specs: "150 m² • 3 dhoma • 2 banjo",
    image:
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1600&q=80",
  },
];

export default function PremiumPropertiesCarousel() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const items = useMemo(() => mockPremium, []);

  const scrollByCards = (dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = Math.round(el.clientWidth * 0.85);
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section className="border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.22em] text-slate-500 uppercase">
              Zgjedhje Ekskluzive
            </p>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              Premium Properties
            </h2>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Penthouse, villa dhe oferta të veçuara — të shfaqura në krye për ekspozim maksimal.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scrollByCards("left")}
              className="h-10 w-10 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition grid place-items-center"
              aria-label="Scroll left"
              title="Majtas"
            >
              <ArrowLeft />
            </button>
            <button
              onClick={() => scrollByCards("right")}
              className="h-10 w-10 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition grid place-items-center"
              aria-label="Scroll right"
              title="Djathtas"
            >
              <ArrowRight />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="mt-8 relative">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-white to-transparent" />

          <div
            ref={scrollerRef}
            className="
              flex gap-4 overflow-x-auto pb-2
              snap-x snap-mandatory scroll-smooth
              [-ms-overflow-style:none] [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            {items.map((p) => (
              <PremiumCard key={p.id} item={p} />
            ))}
          </div>

          <p className="mt-3 text-xs text-slate-500 sm:hidden">
            Rrëshqit majtas/djathtas për oferta premium.
          </p>
        </div>
      </div>
    </section>
  );
}

function PremiumCard({ item }: { item: PremiumProperty }) {
  // Link to detail page if you have /listings/:id — otherwise use /listings
  const to = `/listings/${item.id}`;

  return (
    <NavLink
      to={to}
      className="
        snap-start min-w-[300px] sm:min-w-[360px]
        rounded-2xl border border-slate-200 bg-white shadow-sm
        hover:shadow-md transition-all hover:-translate-y-[2px]
        overflow-hidden
      "
    >
      <div className="relative h-44">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0" />

        <span
          className="absolute left-4 top-4 text-[11px] font-extrabold tracking-[0.18em] uppercase px-3 py-1 rounded-full bg-white/95 border border-slate-200 text-slate-800"
        >
          {item.tag}
        </span>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-base font-extrabold text-slate-900 leading-tight">
              {item.title}
            </p>
            <p className="mt-1 text-sm font-semibold text-slate-500">{item.location}</p>
          </div>

          <p className="text-sm font-extrabold text-slate-900 whitespace-nowrap">
            {item.price}
          </p>
        </div>

        <p className="mt-3 text-sm text-slate-600">{item.specs}</p>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-sm font-semibold text-slate-700">View details</span>
          <span className="text-slate-400">→</span>
        </div>
      </div>
    </NavLink>
  );
}

function ArrowLeft() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M15 18l-6-6 6-6" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function ArrowRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M9 6l6 6-6 6" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
