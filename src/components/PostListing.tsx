import React, { useMemo, useState } from "react";

const BRAND = "#0B2A6F";
const money = (n: number) => new Intl.NumberFormat("de-DE").format(n);

export default function PostListing() {
  const [title, setTitle] = useState("Apartament 2+1 modern");
  const [city, setCity] = useState("Prizren");
  const [purpose, setPurpose] = useState<"rent" | "sale" | "land">("rent");
  const [type, setType] = useState<"apartment" | "house" | "land">("apartment");
  const [price, setPrice] = useState("450");
  const [area, setArea] = useState("92");
  const [bedrooms, setBedrooms] = useState("2");
  const [bathrooms, setBathrooms] = useState("1");
  const [image, setImage] = useState(
    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1800&q=80"
  );
  const [desc, setDesc] = useState(
    "Përshkrim i shkurtër i pronës — modern, i ndriçuar, lokacion i mirë. (UI only)"
  );

  const badge = useMemo(() => {
    if (purpose === "rent") return "bg-emerald-50 text-emerald-800 border-emerald-100";
    if (purpose === "sale") return "bg-blue-50 text-blue-800 border-blue-100";
    return "bg-amber-50 text-amber-900 border-amber-100";
  }, [purpose]);

  const purposeLabel = purpose === "rent" ? "Me Qira" : purpose === "sale" ? "Në Shitje" : "Tokë";

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase">
            Territori • Seller
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900">
            Posto Pronën
          </h1>
          <p className="mt-1 text-slate-600">
            Krijo ofertën tënde. (UI only — backend vjen më vonë)
          </p>
        </div>

        <button
          className="rounded-md px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-95 transition"
          style={{ backgroundColor: BRAND }}
          type="button"
        >
          Ruaj Draft
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {/* FORM */}
        <div className="lg:col-span-2 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-extrabold text-slate-900">Detajet bazë</h2>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Titulli">
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm outline-none focus:border-slate-400"
              />
            </Field>

            <Field label="Qyteti">
              <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm outline-none focus:border-slate-400"
              />
            </Field>

            <Field label="Kategoria">
              <select
                value={purpose}
                onChange={(e) => setPurpose(e.target.value as any)}
                className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-slate-400"
              >
                <option value="rent">Me Qira</option>
                <option value="sale">Në Shitje</option>
                <option value="land">Tokë</option>
              </select>
            </Field>

            <Field label="Lloji">
              <select
                value={type}
                onChange={(e) => setType(e.target.value as any)}
                className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-slate-400"
              >
                <option value="apartment">Apartament</option>
                <option value="house">Shtëpi</option>
                <option value="land">Tokë</option>
              </select>
            </Field>

            <Field label="Çmimi (€)">
              <input
                value={price}
                onChange={(e) => setPrice(e.target.value.replace(/[^\d]/g, ""))}
                className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm outline-none focus:border-slate-400"
                inputMode="numeric"
              />
            </Field>

            <Field label="Sipërfaqe (m²)">
              <input
                value={area}
                onChange={(e) => setArea(e.target.value.replace(/[^\d]/g, ""))}
                className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm outline-none focus:border-slate-400"
                inputMode="numeric"
              />
            </Field>

            <Field label="Dhoma (opsionale)">
              <input
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value.replace(/[^\d]/g, ""))}
                className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm outline-none focus:border-slate-400"
                inputMode="numeric"
              />
            </Field>

            <Field label="Banjo (opsionale)">
              <input
                value={bathrooms}
                onChange={(e) => setBathrooms(e.target.value.replace(/[^\d]/g, ""))}
                className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm outline-none focus:border-slate-400"
                inputMode="numeric"
              />
            </Field>
          </div>

          <div className="mt-6">
            <h3 className="text-sm font-extrabold text-slate-900">Media</h3>
            <p className="mt-1 text-sm text-slate-600">
              Për tani përdorim URL. Më vonë backend do lejojë upload.
            </p>

            <div className="mt-3">
              <Field label="Image URL">
                <input
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm outline-none focus:border-slate-400"
                />
              </Field>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-sm font-extrabold text-slate-900">Përshkrimi</h3>
            <textarea
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              rows={5}
              className="mt-2 w-full rounded-md border border-slate-200 px-3 py-2 text-sm outline-none focus:border-slate-400"
            />
          </div>

          <div className="mt-6 flex gap-3">
            <button
              type="button"
              className="rounded-md px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-95 transition"
              style={{ backgroundColor: BRAND }}
            >
              Publiko (UI)
            </button>

            <button
              type="button"
              className="rounded-md px-5 py-2.5 text-sm font-semibold border border-slate-200 hover:bg-slate-50 transition"
            >
              Anulo
            </button>
          </div>
        </div>

        {/* PREVIEW */}
        <div className="lg:sticky lg:top-28 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-extrabold text-slate-900">Preview</h2>
            <span className={`px-2.5 py-1 rounded-md text-xs font-semibold border ${badge}`}>
              {purposeLabel}
            </span>
          </div>

          <div className="mt-4 overflow-hidden rounded-lg border border-slate-200">
            <img src={image} alt="preview" className="h-44 w-full object-cover" />
          </div>

          <div className="mt-4">
            <p className="text-lg font-extrabold text-slate-900">
              €{money(Number(price || 0))}
              {purpose === "rent" ? (
                <span className="text-xs font-semibold text-slate-500"> /muaj</span>
              ) : null}
            </p>

            <p className="mt-1 text-sm font-semibold text-slate-900">{title}</p>
            <p className="mt-1 text-xs font-semibold tracking-[0.14em] uppercase text-slate-500">
              {city}
            </p>

            <div className="mt-3 text-sm text-slate-600 leading-relaxed line-clamp-4">
              {desc}
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2 text-xs font-semibold text-slate-700">
              <Chip label="m²" value={area || "—"} />
              <Chip label="Dhoma" value={bedrooms || "—"} />
              <Chip label="Banjo" value={bathrooms || "—"} />
              <Chip label="Lloji" value={type} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold text-slate-600">{label}</span>
      <div className="mt-1">{children}</div>
    </label>
  );
}

function Chip({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-slate-200 bg-white px-3 py-2">
      <span className="text-slate-500">{label}: </span>
      <span className="text-slate-900">{value}</span>
    </div>
  );
}
