import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage("");

    if (!email || !password) {
      setMessage("Please fill all fields.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find((u: any) => u.email === email && u.password === password);

    if (!user) {
      setMessage("Wrong email or password.");
      return;
    }

    localStorage.setItem(
      "auth",
      JSON.stringify({ isLoggedIn: true, name: user.name, email: user.email })
    );

    navigate("/");
  }

  return (
    <div className="min-h-screen grid place-items-center bg-slate-950 text-white px-6">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="mb-8">
          <p className="text-xs tracking-[0.25em] text-slate-300">TERRITORI</p>
          <h1 className="text-3xl font-semibold mt-2">Welcome back</h1>
          <p className="text-slate-300 mt-2">Log in to continue.</p>
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 shadow-xl">
          {message && (
            <div className="mb-4 rounded-lg border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm text-slate-200">Email</label>
              <input
                className="mt-2 w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 outline-none focus:border-white/30 focus:bg-white/15 transition"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="text-sm text-slate-200">Password</label>
              <input
                className="mt-2 w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 outline-none focus:border-white/30 focus:bg-white/15 transition"
                placeholder="••••••••"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-white text-slate-950 py-3 font-medium hover:opacity-90 transition"
            >
              Login
            </button>
          </form>

          <p className="mt-6 text-sm text-slate-300">
            Don’t have an account?{" "}
            <NavLink to="/signup" className="text-white underline underline-offset-4">
              Sign up
            </NavLink>
          </p>
        </div>

        <p className="mt-6 text-xs text-slate-500">
          Tip: You can change the design anytime without touching the logic.
        </p>
      </div>
    </div>
  );
}
