import React, { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

/* ----------------------------- Helpers ----------------------------- */
const shuffle = <T,>(array: T[]) => {
  const a = [...array];
  let currentIndex = a.length;
  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [a[currentIndex], a[randomIndex]] = [a[randomIndex], a[currentIndex]];
  }
  return a;
};

/* ------------------------ Real Estate Images ------------------------ */
const squareData = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1565183928294-7063f23ce0f8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1600573472550-8090b596d785?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1600566753151-384129cf4e3f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 16,
    src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
  },
];

const generateSquares = () =>
  shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.1, type: "spring" }}
      className="w-full h-full rounded-md"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  ));

const ShuffleGrid = () => {
  const timeoutRef = useRef<number | null>(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    const doShuffle = () => {
      setSquares(generateSquares());
      timeoutRef.current = window.setTimeout(doShuffle, 2800);
    };
    doShuffle();
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[420px] gap-3">
      {squares}
    </div>
  );
};

/* ------------------------------ Component ------------------------------ */
const HeroBanner = () => {
  const navigate = useNavigate();

  const [city, setCity] = useState("");
  const [type, setType] = useState("all");
  const [price, setPrice] = useState("any");

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();

    const params = new URLSearchParams();
    if (city.trim()) params.set("city", city.trim());
    if (type !== "all") params.set("type", type);
    if (price !== "any") params.set("price", price);

    navigate(`/service?${params.toString()}`);
  }

  return (
    <section className="bg-white text-slate-900 min-h-[calc(100vh-88px)] flex items-center">
      <div className="max-w-7xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-20">
        {/* LEFT: PREMIUM COPY */}
        <div className="py-12 lg:py-0">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-xs font-light tracking-widest text-slate-500 uppercase">
              Luxury Real Estate
            </span>
            <span className="w-8 h-px bg-slate-300"></span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-[1.0] tracking-tight mb-6">
            Find Your
            <br />
            <span className="font-semibold text-slate-900">
              Perfect Property
            </span>
          </h1>

          <p className="text-lg text-slate-600 font-light leading-relaxed max-w-lg mb-12">
            Discover curated properties across rental, sale, agencies, and land
            offerings. Search effortlessly and find your next investment.
          </p>

          {/* SEARCH FORM - PREMIUM MINIMAL */}
          <form onSubmit={handleSearch} className="mb-12">
            {/* INPUTS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <FieldPremium label="City">
                <div className="relative">
                  <LocationIconPremium />
                  <input
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Prizren, Prishtinë..."
                    className="w-full bg-transparent border-b border-slate-300 pl-10 pr-3 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-slate-900 transition-colors duration-300 text-sm"
                  />
                </div>
              </FieldPremium>

              <FieldPremium label="Property Type">
                <div className="relative">
                  <HomeIconPremium />
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="w-full bg-transparent border-b border-slate-300 pl-10 pr-3 py-3 text-slate-900 outline-none focus:border-slate-900 transition-colors duration-300 appearance-none text-sm"
                  >
                    <option value="all">All Types</option>
                    <option value="meqira">For Rent</option>
                    <option value="neshitje">For Sale</option>
                    <option value="agjencite">Agencies</option>
                    <option value="toka">Land</option>
                  </select>
                </div>
              </FieldPremium>

              <FieldPremium label="Budget">
                <div className="relative">
                  <MoneyIconPremium />
                  <select
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full bg-transparent border-b border-slate-300 pl-10 pr-3 py-3 text-slate-900 outline-none focus:border-slate-900 transition-colors duration-300 appearance-none text-sm"
                  >
                    <option value="any">Any Price</option>
                    <option value="0-200">€0 – €200</option>
                    <option value="200-500">€200 – €500</option>
                    <option value="500-1000">€500 – €1,000</option>
                    <option value="1000+">€1,000+</option>
                  </select>
                </div>
              </FieldPremium>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <button
                type="submit"
                className="px-8 py-3 bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors duration-200 rounded-none"
              >
                Search Properties
              </button>

              <NavLink
                to="/service"
                className="text-sm font-light text-slate-600 hover:text-slate-900 transition-colors duration-200 flex items-center gap-2"
              >
                Browse All
                <span>→</span>
              </NavLink>
            </div>
          </form>   
        </div>

        {/* RIGHT: PROPERTY SHOWCASE */}
        <div className="rounded-lg border border-slate-200 bg-white overflow-hidden hidden lg:block">
          <ShuffleGrid />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;

/* --------------------------- UI Pieces --------------------------- */
function FieldPremium({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-light tracking-widest text-slate-600 uppercase">
        {label}
      </label>
      {children}
    </div>
  );
}

function LocationIconPremium() {
  return (
    <svg
      className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2" />
    </svg>
  );
}

function HomeIconPremium() {
  return (
    <svg
      className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V21h14V9.5" />
    </svg>
  );
}

function MoneyIconPremium() {
  return (
    <svg
      className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}
