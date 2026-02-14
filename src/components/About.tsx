import logo from "../assets/Territori.png";

const BRAND = "#0B2A6F";

const About = () => {
  return (
    <div className="space-y-32">
      {/* HERO */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Logo + Content */}
            <div>
              <div className="mb-10">
                <img src={logo} alt="Territori" className="h-24 w-auto" />
              </div>

              <div className="flex items-center gap-3 mb-8">
                <span className="text-xs font-light tracking-widest text-slate-500 uppercase">
                  About Territori
                </span>
                <span className="w-8 h-px bg-slate-300" />
              </div>

              <h1 className="text-5xl lg:text-6xl font-light leading-[1.1] text-slate-900 mb-8">
                A premium <span className="font-semibold">marketplace</span> for
                modern discovery
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl font-light">
                Territori transforms how people explore, buy, sell, and rent
                properties. Designed with clarity, simplicity, and a luxury
                digital experience at its core.
              </p>

              <div className="flex items-center gap-4">
                <button
                  className="rounded-none px-6 py-2.5 text-sm font-semibold text-white hover:opacity-95 transition"
                  style={{ backgroundColor: BRAND }}
                >
                  Get Started
                </button>
                <a
                  href="#"
                  className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition flex items-center gap-2"
                >
                  Learn More <span>→</span>
                </a>
              </div>
            </div>

            {/* Right: Visual Element */}
            <div className="hidden lg:block">
              <div className="relative h-96 bg-gradient-to-br from-slate-100 to-slate-50 rounded-none border border-slate-200" />
            </div>
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="max-w-7xl mx-auto px-8">
        <div className="flex items-center gap-3 mb-12">
          <span className="text-xs font-light tracking-widest text-slate-500 uppercase">
            Foundation
          </span>
          <span className="w-8 h-px bg-slate-300" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SoftBlock
            title="Our Mission"
            text="To simplify property discovery and listing through a structured and transparent digital experience."
          />

          <SoftBlock
            title="Our Vision"
            text="To become the most trusted and refined real estate marketplace in the region."
          />
        </div>
      </section>

      {/* WHY WE EXIST */}
      <section className="max-w-7xl mx-auto px-8">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-light tracking-widest text-slate-500 uppercase">
            Why we exist
          </span>
          <span className="w-8 h-px bg-slate-300" />
        </div>

        <h2 className="text-4xl lg:text-5xl font-light leading-[1.2] text-slate-900 mb-10 max-w-2xl">
          Real estate deserves a{" "}
          <span className="font-semibold">better digital</span> experience
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-slate-600 leading-relaxed font-light">
              The traditional property market often feels fragmented,
              inconsistent, and outdated. Information is scattered, listings
              lack structure, and the browsing experience rarely feels intuitive
              or elegant.
            </p>
          </div>
          <div>
            <p className="text-slate-600 leading-relaxed font-light">
              Territori introduces a cleaner, more refined way to connect buyers
              and sellers in a unified, premium marketplace. We believe property
              discovery should be seamless, transparent, and beautiful.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES / FEATURES */}
      <section className="max-w-7xl mx-auto px-8">
        <div className="flex items-center gap-3 mb-12">
          <span className="text-xs font-light tracking-widest text-slate-500 uppercase">
            What defines us
          </span>
          <span className="w-8 h-px bg-slate-300" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Feature label="Premium Presentation" icon="✨" />
          <Feature label="Direct Communication" icon="💬" />
          <Feature label="Structured Listings" icon="📋" />
          <Feature label="Modern Experience" icon="🚀" />
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-8 py-20">
          <div className="flex items-center gap-3 mb-16">
            <span className="text-xs font-light tracking-widest text-white/60 uppercase">
              By the numbers
            </span>
            <span className="w-8 h-px bg-white/20" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-20">
            <Stat value="120+" label="Active Listings" />
            <Stat value="15+" label="Cities Covered" />
            <Stat value="25+" label="Partner Agencies" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

/* -------------- Components -------------- */

function SoftBlock({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-none border border-slate-200 bg-white p-8 hover:shadow-md transition">
      <h3 className="text-2xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-4 text-slate-600 leading-relaxed font-light">{text}</p>
    </div>
  );
}

function Feature({ label, icon }: { label: string; icon: string }) {
  return (
    <div className="rounded-none border border-slate-200 bg-white px-6 py-8 hover:shadow-lg hover:border-slate-300 transition group">
      <div className="text-3xl mb-4">{icon}</div>
      <p className="text-sm font-semibold text-slate-900 group-hover:text-slate-700 transition">
        {label}
      </p>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-b border-white/20 pb-6">
      <p className="text-5xl font-light text-white mb-2">{value}</p>
      <p className="text-sm text-white/60 font-light tracking-wide uppercase">
        {label}
      </p>
    </div>
  );
}
