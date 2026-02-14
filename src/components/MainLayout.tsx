import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/Territori.png";
import Footer from "./Footer";

const BRAND = "#0B2A6F"; // premium navy

const MainLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white">
        <nav className="max-w-7xl mx-auto flex items-center px-8 py-6">
          {/* LOGO (DOMINANT, LUXURY) */}
          <NavLink to="/" className="flex items-center gap-3 shrink-0 group">
            <img
              src={logo}
              alt="Territori Logo"
              className="h-20 w-auto object-contain group-hover:opacity-80 transition-opacity duration-200"
            />
            <span className="text-xl font-light tracking-widest text-slate-900 hidden sm:inline">
              TERRITORI
            </span>
          </NavLink>

          {/* LINKS (ELEGANT + PREMIUM) */}
          <div className="hidden lg:flex items-center gap-16 mx-auto">
            <NavItem to="/" label="Home" />
            <NavItem to="/about" label="About" />

            {/* SERVICES DROPDOWN */}
            <div className="relative group">
              <NavItem to="/service" label="Services" hasDropdown />

              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="w-56 rounded-sm bg-white border border-slate-200 shadow-lg p-1">
                  <DropLink to="/service/meqira" label="For Rent" />
                  <DropLink to="/service/neshitje" label="For Sale" />
                  <DropLink to="/service/agjencite" label="Agencies" />
                  <DropLink to="/service/toka" label="Land" />
                </div>
              </div>
            </div>

            <NavItem to="/contact" label="Contact" />
          </div>

          {/* BUTTONS (PREMIUM, MINIMAL) */}
          <div className="hidden lg:flex items-center gap-4 ml-auto shrink-0">
            <NavLink
              to="/signup"
              className="px-6 py-2.5 text-sm font-medium text-slate-600 border border-slate-300 hover:border-slate-400 hover:text-slate-900 transition-all duration-200 rounded-none"
            >
              Sign Up
            </NavLink>

            <NavLink
              to="/login"
              className="px-6 py-2.5 text-sm font-medium text-white transition-all duration-200 rounded-none hover:opacity-90"
              style={{ backgroundColor: BRAND }}
            >
              Login
            </NavLink>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden ml-auto px-3 py-2 text-slate-600 hover:text-slate-900 transition"
            aria-label="Open menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 6h18M3 12h18M3 18h18"
              />
            </svg>
          </button>
        </nav>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white">
            <div className="px-8 py-6 flex flex-col gap-4">
              <MobileLink
                to="/"
                label="Home"
                onClick={() => setMobileOpen(false)}
              />
              <MobileLink
                to="/about"
                label="About"
                onClick={() => setMobileOpen(false)}
              />
              <MobileLink
                to="/service"
                label="Services"
                onClick={() => setMobileOpen(false)}
              />
              <div className="pl-4 border-l border-slate-200 flex flex-col gap-3">
                <MobileLink
                  to="/service/meqira"
                  label="For Rent"
                  onClick={() => setMobileOpen(false)}
                />
                <MobileLink
                  to="/service/neshitje"
                  label="For Sale"
                  onClick={() => setMobileOpen(false)}
                />
                <MobileLink
                  to="/service/agjencite"
                  label="Agencies"
                  onClick={() => setMobileOpen(false)}
                />
                <MobileLink
                  to="/service/toka"
                  label="Land"
                  onClick={() => setMobileOpen(false)}
                />
              </div>
              <MobileLink
                to="/contact"
                label="Contact"
                onClick={() => setMobileOpen(false)}
              />

              <div className="flex gap-3 pt-4">
                <NavLink
                  to="/signup"
                  onClick={() => setMobileOpen(false)}
                  className="flex-1 text-center px-4 py-2.5 text-sm font-medium border border-slate-300 hover:border-slate-400 transition rounded-none"
                >
                  Sign Up
                </NavLink>

                <NavLink
                  to="/login"
                  onClick={() => setMobileOpen(false)}
                  className="flex-1 text-center px-4 py-2.5 text-sm font-medium text-white transition rounded-none"
                  style={{ backgroundColor: BRAND }}
                >
                  Login
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* ROUTES */}
      <main className="max-w-7xl mx-auto px-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;

/* ---------------- Components ---------------- */

function NavItem({
  to,
  label,
  hasDropdown,
}: {
  to: string;
  label: string;
  hasDropdown?: boolean;
}) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `group relative inline-flex items-center gap-2 text-sm font-light tracking-wide text-slate-600 hover:text-slate-900 transition-colors duration-200 ${
          isActive ? "text-slate-900" : ""
        }`
      }
    >
      {({ isActive }) => (
        <>
          <span>{label}</span>
          {hasDropdown ? (
            <span className="text-slate-400 text-xs">▾</span>
          ) : null}

          {/* Elegant underline (active + hover) */}
          <span
            className={`absolute left-0 -bottom-1.5 h-px bg-slate-900 transition-all duration-300 ${
              isActive ? "w-full" : "w-0 group-hover:w-full"
            }`}
          />
        </>
      )}
    </NavLink>
  );
}

function DropLink({ to, label }: { to: string; label: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `block px-4 py-3 text-sm font-light transition duration-150 ${
          isActive
            ? "bg-slate-900 text-white"
            : "text-slate-700 hover:bg-slate-50"
        }`
      }
    >
      <div className="flex items-center justify-between">
        <span>{label}</span>
        <span className="text-slate-300 text-xs">→</span>
      </div>
    </NavLink>
  );
}

function MobileLink({
  to,
  label,
  onClick,
}: {
  to: string;
  label: string;
  onClick: () => void;
}) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `px-0 py-2 font-light text-sm transition duration-150 ${
          isActive
            ? "text-slate-900 font-medium"
            : "text-slate-600 hover:text-slate-900"
        }`
      }
    >
      {label}
    </NavLink>
  );
}
