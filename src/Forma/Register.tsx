import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage("");

    if (!name || !email || !password) {
      setMessage("Please fill all fields.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const exists = users.find((u: any) => u.email === email);

    if (exists) {
      setMessage("This email is already registered.");
      return;
    }

    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    // optional: auto-login after register
    localStorage.setItem("auth", JSON.stringify({ isLoggedIn: true, name, email }));
    navigate("/");
  }

  return (
    <div className="min-h-screen grid place-items-center bg-slate-50 text-slate-900 px-6">
      <div className="w-full max-w-lg grid gap-6 md:grid-cols-2 items-stretch">
        {/* Left panel */}
        <div className="rounded-2xl bg-[#0B2A6F] text-white p-6 shadow-lg">
          <p className="text-xs tracking-[0.25em] opacity-90">TERRITORI</p>
          <h1 className="text-3xl font-semibold mt-3">Create account</h1>
          <p className="mt-3 text-white/80 text-sm leading-relaxed">
            Join Territori to post listings, manage properties, and access premium features.
          </p>

          <div className="mt-6 text-sm text-white/85 space-y-2">
            <div className="flex gap-2">
              <span>✓</span> <span>Post properties</span>
            </div>
            <div className="flex gap-2">
              <span>✓</span> <span>Save favorites</span>
            </div>
            <div className="flex gap-2">
              <span>✓</span> <span>Contact agencies faster</span>
            </div>
          </div>

          <p className="mt-8 text-sm text-white/80">
            Already have an account?{" "}
            <NavLink to="/login" className="text-white underline underline-offset-4">
              Login
            </NavLink>
          </p>
        </div>

        {/* Form card */}
        <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
          {message && (
            <div className="mb-4 rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900">
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm text-slate-700">Full name</label>
              <input
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-400 transition"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label className="text-sm text-slate-700">Email</label>
              <input
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-400 transition"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="text-sm text-slate-700">Password</label>
              <input
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-400 transition"
                placeholder="Create a password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className="mt-2 text-xs text-slate-500">
                Use at least 6 characters (for real apps you’d hash this on a server).
              </p>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-[#0B2A6F] text-white py-3 font-medium hover:opacity-95 transition"
            >
              Create account
            </button>
          </form>

          <p className="mt-6 text-xs text-slate-500">
            By creating an account you agree to the terms (placeholder).
          </p>
        </div>
      </div>
    </div>
  );
}
