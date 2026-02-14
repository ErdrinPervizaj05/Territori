import React from "react";
import { NavLink } from "react-router-dom";

const BRAND = "#0B2A6F";

const About = () => {
  return (
    <div className="space-y-16">
      {/* HERO */}
      <section className="rounded-3xl border border-slate-200 bg-white overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left */}
          <div className="p-10 lg:p-14">
            <p className="text-xs font-semibold tracking-[0.25em] text-slate-500 uppercase">
              About Territori
            </p>

            <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.05]">
              A luxury marketplace for modern real estate.
            </h1>

            <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
              Territori helps buyers discover properties faster and helps
              sellers present listings professionally — apartments, houses,
              agencies, and land — all in one premium experience.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <NavLink
                to="/listings"
                className="px-6 py-3 rounded-lg text-sm font-semibold text-white shadow-sm hover:opacity-95 transition"
                style={{ backgroundColor: BRAND }}
              >
                Explore listings
              </NavLink>

              <NavLink
                to="/post"
                className="px-6 py-3 rounded-lg text-sm font-semibold border border-slate-200 hover:bg-slate-50 transition"
              >
                Post a listing
              </NavLink>
            </div>

            {/* mini trust line */}
            <div className="mt-10 flex items-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <Dot />
                Verified-style presentation
              </div>
              <div className="flex items-center gap-2">
                <Dot />
                Premium UI-first marketplace
              </div>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative bg-slate-50 border-t lg:border-t-0 lg:border-l border-slate-200">
            <div className="absolute inset-0">
              <div
                className="absolute -top-32 -right-32 h-72 w-72 rounded-full blur-3xl opacity-30"
                style={{ backgroundColor: BRAND }}
              />
              <div
                className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full blur-3xl opacity-20"
                style={{ backgroundColor: BRAND }}
              />
            </div>

            <div className="relative p-10 lg:p-14">
              <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6">
                <p className="text-xs font-semibold tracking-[0.25em] text-slate-500 uppercase">
                  What we focus on
                </p>

                <div className="mt-5 grid grid-cols-2 gap-4">
                  <MiniCard
                    title="Buy"
                    desc="Find the right property with clarity."
                  />
                  <MiniCard
                    title="Sell"
                    desc="List & present like a premium brand."
                  />
                  <MiniCard
                    title="Rent"
                    desc="Discover rentals and contact fast."
                  />
                  <MiniCard
                    title="Land"
                    desc="Sell land with pro details & trust."
                  />
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-white shadow-sm p-6">
                <p className="text-sm font-semibold text-slate-900">
                  Territori = clean listings + trust + speed
                </p>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  We’re designing the interface first so that when the backend
                  arrives, Territori already feels like a real platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Stat value="120+" label="Listings showcased" />
        <Stat value="15+" label="Cities covered" />
        <Stat value="25+" label="Agency partners" />
      </section>

      {/* PILLARS */}
      <section className="space-y-6">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-slate-500 uppercase">
              The marketplace pillars
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">
              Built for buyers and sellers.
            </h2>
          </div>
          <p className="text-slate-600 max-w-xl">
            Territori is not just listings — it’s a structured marketplace with
            a premium feel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Pillar
            title="For Buyers"
            points={[
              "Search faster with clean filters",
              "See clear property details",
              "Contact without friction",
            ]}
          />
          <Pillar
            title="For Sellers"
            points={[
              "Professional listing presentation",
              "Attract higher-quality buyers",
              "Showcase land/apartments/houses",
            ]}
          />
          <Pillar
            title="For Agencies"
            points={[
              "Brand-ready listings layout",
              "Portfolio-like property pages",
              "Trusted marketplace presence",
            ]}
          />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="rounded-3xl border border-slate-200 bg-white p-10 lg:p-12">
        <p className="text-xs font-semibold tracking-[0.25em] text-slate-500 uppercase">
          How it works
        </p>

        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">
          A simple process, built for trust.
        </h2>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Step
            n="01"
            title="Discover"
            desc="Browse listings that look professional and consistent."
          />
          <Step
            n="02"
            title="Compare"
            desc="View details, features, and similar properties quickly."
          />
          <Step
            n="03"
            title="Connect"
            desc="Contact sellers/agencies with a clean CTA flow."
          />
        </div>
      </section>

      {/* VALUES */}
      <section className="space-y-6">
        <div>
          <p className="text-xs font-semibold tracking-[0.25em] text-slate-500 uppercase">
            Values
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">
            Premium doesn’t mean complicated.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Value
            title="Clarity"
            desc="No clutter. Only what matters in a listing."
            icon={<IconClarity />}
          />
          <Value
            title="Trust"
            desc="A marketplace that feels real, not random."
            icon={<IconTrust />}
          />
          <Value
            title="Speed"
            desc="Fast browsing and fast contact flow."
            icon={<IconSpeed />}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-3xl border border-slate-200 bg-slate-900 text-white p-10 lg:p-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <h3 className="text-3xl font-extrabold tracking-tight">
              Ready to showcase a property?
            </h3>
            <p className="mt-2 text-white/70 max-w-2xl">
              Post a listing and present it like a premium brand — apartments,
              houses, land, or agency offers.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <NavLink
              to="/post"
              className="px-6 py-3 rounded-lg text-sm font-semibold text-slate-900 bg-white hover:bg-slate-100 transition"
            >
              Post listing →
            </NavLink>
            <NavLink
              to="/contact"
              className="px-6 py-3 rounded-lg text-sm font-semibold border border-white/15 text-white hover:bg-white/10 transition"
            >
              Contact
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

/* ---------------- UI bits ---------------- */

function Dot() {
  return (
    <span className="h-2 w-2 rounded-full" style={{ backgroundColor: BRAND }} />
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-3xl font-extrabold text-slate-900">{value}</p>
      <p className="mt-1 text-sm font-semibold text-slate-500">{label}</p>
    </div>
  );
}

function MiniCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 hover:shadow-sm transition">
      <p className="text-sm font-extrabold text-slate-900">{title}</p>
      <p className="mt-1 text-xs text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
}

function Pillar({ title, points }: { title: string; points: string[] }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-extrabold text-slate-900">{title}</h3>
      <ul className="mt-4 space-y-2 text-sm text-slate-600">
        {points.map((p) => (
          <li key={p} className="flex gap-2">
            <span
              className="mt-2 h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: BRAND }}
            />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Step({ n, title, desc }: { n: string; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
      <p className="text-xs font-semibold tracking-[0.25em] text-slate-500 uppercase">
        {n}
      </p>
      <h4 className="mt-3 text-lg font-extrabold text-slate-900">{title}</h4>
      <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
}

function Value({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
      <div className="h-10 w-10 rounded-xl grid place-items-center border border-slate-200 bg-slate-50">
        {icon}
      </div>
      <h3 className="mt-4 text-lg font-extrabold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
}

/* --- Small icons (no extra libraries) --- */
function IconClarity() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 7h16M7 12h10M10 17h4"
        stroke={BRAND}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconTrust() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4z"
        stroke={BRAND}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M9 12l2 2 4-5"
        stroke={BRAND}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconSpeed() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 12a8 8 0 1016 0"
        stroke={BRAND}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 12l4-4"
        stroke={BRAND}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M8 5h8" stroke={BRAND} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
