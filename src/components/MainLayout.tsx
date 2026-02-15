import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/Territori.png";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

const BRAND = "#0B2A6F"; // premium navy

const MainLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const authRaw = localStorage.getItem("auth");
  const auth = authRaw ? JSON.parse(authRaw) : null;
  const isLoggedIn = auth?.isLoggedIn;

  return (
    <div className="min-h-screen bg-white text-slate-900">

      {/* ✅ SCROLL FIX */}
      <ScrollToTop />

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white">
        <nav className="max-w-7xl mx-auto flex items-center px-8 py-6">
          
          {/* LOGO */}
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

          {/* LINKS */}
          <div className="hidden lg:flex items-center gap-16 mx-auto">
            <NavItem to="/" label="Home" />
            <NavItem to="/about" label="About" />

            {/* SERVICES */}
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

          {/* AUTH BUTTONS */}
          <div className="hidden lg:flex items-center gap-4 ml-auto shrink-0">
            {isLoggedIn ? (
              <>
                <span className="text-sm text-slate-700">
                  Hi, {auth.name}
                </span>

                <button
                  onClick={() => {
                    localStorage.removeItem("auth");
                    window.location.reload();
                  }}
                  className="px-6 py-2.5 text-sm font-medium text-white transition-all duration-200 rounded-none hover:opacity-90"
                  style={{ backgroundColor: BRAND }}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
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
              </>
            )}
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden ml-auto px-3 py-2 text-slate-600 hover:text-slate-900 transition"
          >
            ☰
          </button>
        </nav>
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
    <NavLink to={to} className="text-sm text-slate-600 hover:text-slate-900">
      {label}
    </NavLink>
  );
}

function DropLink({ to, label }: { to: string; label: string }) {
  return (
    <NavLink to={to} className="block px-4 py-2 hover:bg-slate-100">
      {label}
    </NavLink>
  );
}
