import { NavLink } from "react-router-dom";
import logo from "../assets/Territori.png";

const BRAND = "#0B2A6F";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Territori" className="h-14 w-auto" />
              <div>
                <p className="text-lg font-semibold tracking-tight text-slate-900">
                  Territori
                </p>
                <p className="text-xs font-light text-slate-600 tracking-wide uppercase">
                  Luxury Real Estate Marketplace
                </p>
              </div>
            </div>

            <p className="mt-5 text-sm text-slate-600 max-w-lg leading-relaxed">
              Territori lidh blerësit dhe shitësit në një platformë moderne për
              prona: me qira, në shitje dhe toka. Fokus tek oferta cilësore dhe
              prezantim premium.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                className="rounded-none border border-slate-200 px-5 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
              >
                Instagram
              </a>
              <a
                href="#"
                className="rounded-none border border-slate-200 px-5 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
              >
                Facebook
              </a>
              <a
                href="#"
                className="rounded-none border border-slate-200 px-5 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs font-semibold tracking-widest text-slate-900 uppercase">
              Links
            </p>
            <ul className="mt-5 space-y-3 text-sm font-light text-slate-700">
              <li>
                <NavLink className="hover:text-slate-900 transition" to="/">
                  Ballina
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="hover:text-slate-900 transition"
                  to="/listings"
                >
                  Ofertat
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="hover:text-slate-900 transition"
                  to="/service"
                >
                  Shërbimet
                </NavLink>
              </li>
              <li>
                <NavLink className="hover:text-slate-900 transition" to="/post">
                  Posto Pronë
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="hover:text-slate-900 transition"
                  to="/contact"
                >
                  Kontakti
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold tracking-widest text-slate-900 uppercase">
              Contact
            </p>
            <div className="mt-5 space-y-3 text-sm font-light text-slate-700">
              <p>Prizren, Kosovë</p>
              <p>+383 44 000 000</p>
              <p>support@territori.com</p>

              <button
                className="mt-4 w-full rounded-none px-4 py-2.5 text-xs font-semibold text-white hover:opacity-95 transition"
                style={{ backgroundColor: BRAND }}
              >
                Dërgo mesazh
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-200 pt-8 mb-8" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-2">
            <p className="text-xs font-light text-slate-600">
              © {new Date().getFullYear()} Territori. All rights reserved.
            </p>
            <p className="text-xs font-light text-slate-600">
              Made by{" "}
              <span className="font-semibold text-slate-900">TitanNetwork</span>
            </p>
          </div>

          <div className="flex items-center gap-6 text-xs font-semibold text-slate-600">
            <a className="hover:text-slate-900 transition" href="#">
              Privacy
            </a>
            <a className="hover:text-slate-900 transition" href="#">
              Terms
            </a>
            <a className="hover:text-slate-900 transition" href="#">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
