import React, { useMemo, useRef } from "react";
import { NavLink } from "react-router-dom";

// ✅ Premium navy (same as your BRAND)
const BRAND = "#0B2A6F";

type Firm = {
  id: string;
  name: string;
  city: string;
  tagline: string;
  logo?: string; // optional later (backend). For now we use initials
  featured?: boolean;
};

const firmsMock: Firm[] = [
  { id: "aurora", name: "Aurora Realty", city: "Prizren", tagline: "Luxury apartments & villas", featured: true },
  { id: "nova", name: "Nova Estates", city: "Prishtinë", tagline: "Modern homes, clean deals", featured: true },
  { id: "urban", name: "Urban Partners", city: "Pejë", tagline: "City living specialists", featured: true },
  { id: "prime", name: "Prime Agency", city: "Ferizaj", tagline: "Trusted agency network", featured: true },
  { id: "terra", name: "Terra Land", city: "Gjakovë", tagline: "Land & investment plots", featured: true },
  { id: "homeplus", name: "HomePlus", city: "Mitrovicë", tagline: "Family homes & rentals", featured: true },
];

export default function PremiumFirmsCarousel() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const firms = useMemo(() => firmsMock, []);

  const scrollByCards = (dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;

    // scroll about 2 cards
    const amount = Math.round(el.clientWidth * 0.8);
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section className="border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.22em] text-slate-500 uppercase">
              Partnerë të veçuar
            </p>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              Agjenci Premium
            </h2>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Këto agjenci shfaqen në krye për më shumë ekspozim — prezantim i pastër, premium, pa “ads” të shëmtuara.
            </p>
          </div>

          {/* Controls */}
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
          {/* subtle fade edges (premium touch) */}
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
            {firms.map((firm) => (
              <FirmCard key={firm.id} firm={firm} />
            ))}
          </div>

          {/* Mobile hint */}
          <p className="mt-3 text-xs text-slate-500 sm:hidden">
            Rrëshqit majtas/djathtas për më shumë agjenci.
          </p>
        </div>
      </div>
    </section>
  );
}

function FirmCard({ firm }: { firm: Firm }) {
  const initials = firm.name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <NavLink
      to={`/agjenci/${firm.id}`} // later you can build this page
      className="
        snap-start
        min-w-[280px] sm:min-w-[320px]
        rounded-2xl border border-slate-200 bg-white
        shadow-sm hover:shadow-md
        transition-all hover:-translate-y-[2px]
        p-5
      "
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          {/* Logo / initials */}
          <div
            className="h-12 w-12 rounded-xl grid place-items-center border border-slate-200 bg-slate-50 text-slate-900 font-extrabold"
            style={{ letterSpacing: "0.08em" }}
          >
            {initials}
          </div>

          <div>
            <p className="text-base font-extrabold text-slate-900 leading-tight">
              {firm.name}
            </p>
            <p className="text-sm font-semibold text-slate-500">{firm.city}</p>
          </div>
        </div>

        {/* Premium badge */}
        {firm.featured && (
          <span className="text-[11px] font-extrabold tracking-[0.18em] uppercase px-2.5 py-1 rounded-full border border-slate-200 bg-white text-slate-700">
            Premium
          </span>
        )}
      </div>

      <p className="mt-4 text-sm text-slate-600 leading-relaxed">
        {firm.tagline}
      </p>

      <div className="mt-5 flex items-center justify-between">
        <span className="text-sm font-semibold text-slate-700">
          Shiko ofertat
        </span>
        <span className="text-slate-400">→</span>
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
