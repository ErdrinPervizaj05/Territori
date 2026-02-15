import React, { useState } from "react";

type Mode = "login" | "register";

type Props = {
  startMode: Mode;
};

export default function LogInRegisterForma({ startMode }: Props) {
  const [mode, setMode] = useState<Mode>(startMode);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage("");

    if (!email || !password) {
      setMessage("Fill fields");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    // REGISTER
    if (mode === "register") {
      const exists = users.find((u: any) => u.email === email);
      if (exists) {
        setMessage("User exists");
        return;
      }

      users.push({ email, password });
      localStorage.setItem("users", JSON.stringify(users));

      setMessage("Registered");
      setMode("login");
      return;
    }

    // LOGIN
    const valid = users.find((u: any) => u.email === email && u.password === password);
    if (!valid) {
      setMessage("Wrong login");
      return;
    }

    localStorage.setItem("auth", "true");
    setMessage("Logged in");
  }

  return (
    <div>
      <h2>{mode === "login" ? "Login" : "Register"}</h2>

      <form onSubmit={handleSubmit}>
        <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">{mode === "login" ? "Login" : "Register"}</button>
      </form>

      <button onClick={() => setMode(mode === "login" ? "register" : "login")}>
        Switch
      </button>

      {message && <p>{message}</p>}
    </div>
  );
}
