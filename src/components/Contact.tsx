import React, { useState } from "react";

const BRAND = "#0B2A6F";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // UI only for now
    alert("Mesazhi u dërgua (UI only) ✅");
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <div className="space-y-16">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <div className="absolute inset-0 bg-slate-100" />
        <div className="relative px-10 py-14 max-w-4xl">
          <p className="text-xs font-semibold tracking-[0.25em] text-slate-500 uppercase">
            Contact Territori
          </p>

          <h1 className="mt-5 text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Let’s talk property.
          </h1>

          <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-2xl">
            Whether you want to list a property, ask about an offer, or partner
            as an agency — reach out and we’ll respond as soon as possible.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#form"
              className="rounded-md px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-95 transition"
              style={{ backgroundColor: BRAND }}
            >
              Dërgo mesazh
            </a>

            <a
              href="tel:+38344000000"
              className="rounded-md px-5 py-2.5 text-sm font-semibold border border-slate-200 bg-white hover:bg-slate-50 transition"
            >
              Thirr tani
            </a>

            <a
              href="#map"
              className="rounded-md px-5 py-2.5 text-sm font-semibold border border-slate-200 bg-white hover:bg-slate-50 transition"
            >
              Lokacioni
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* LEFT: info cards */}
        <div className="space-y-4">
          <InfoCard title="Phone" value="+383 44 000 000" sub="Mon–Sat, 09:00–18:00" />
          <InfoCard title="Email" value="support@territori.com" sub="We reply within 24h" />
          <InfoCard title="Office" value="Prizren, Kosovë" sub="By appointment" />

          {/* WhatsApp CTA */}
          <div className="rounded-2xl border border-slate-200 bg-slate-900 p-6 text-white">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-white/60">
              Fast response
            </p>
            <h3 className="mt-3 text-xl font-extrabold">WhatsApp</h3>
            <p className="mt-2 text-white/70 leading-relaxed">
              Prefer quick messaging? Chat with us directly for listings and viewings.
            </p>

            <a
              href="#"
              className="mt-5 inline-flex rounded-md px-5 py-2.5 text-sm font-semibold text-slate-900 bg-white hover:bg-slate-100 transition"
            >
              Open WhatsApp →
            </a>
          </div>
        </div>

        {/* RIGHT: form */}
        <div
          id="form"
          className="lg:col-span-2 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
        >
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">
                Send a message
              </h2>
              <p className="mt-1 text-slate-600">
                Fill the form and we’ll get back to you.
              </p>
            </div>

            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-slate-500">
              UI only
            </span>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Full Name">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full rounded-md border border-slate-200 px-4 py-3 text-sm outline-none focus:border-slate-400"
                />
              </Field>

              <Field label="Email">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  type="email"
                  className="w-full rounded-md border border-slate-200 px-4 py-3 text-sm outline-none focus:border-slate-400"
                />
              </Field>
            </div>

            <Field label="Message">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us what you need…"
                rows={6}
                className="w-full rounded-md border border-slate-200 px-4 py-3 text-sm outline-none focus:border-slate-400"
              />
            </Field>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <button
                type="submit"
                className="rounded-md px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95 transition"
                style={{ backgroundColor: BRAND }}
              >
                Submit Message
              </button>

              <p className="text-sm text-slate-500">
                By sending, you agree to be contacted by Territori.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* MAP */}
      <section
        id="map"
        className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">
            Location
          </h2>
          <span className="text-sm font-semibold text-slate-500">
            Map placeholder
          </span>
        </div>

        <div className="mt-6 h-72 rounded-xl bg-slate-100 border border-slate-200 grid place-items-center text-slate-500">
          Map Placeholder (Prizren)
        </div>
      </section>
    </div>
  );
};

export default Contact;

/* ----------------- Components ----------------- */

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase">
        {label}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  );
}

function InfoCard({
  title,
  value,
  sub,
}: {
  title: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-xs font-semibold tracking-[0.25em] text-slate-500 uppercase">
        {title}
      </p>
      <p className="mt-3 text-lg font-extrabold text-slate-900">{value}</p>
      <p className="mt-1 text-sm text-slate-600">{sub}</p>
    </div>
  );
}
