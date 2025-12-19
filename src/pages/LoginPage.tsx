import React, { useState } from "react";
import { LogIn, Mail, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrate authentication service
    console.log("Login attempt:", { email, password });
  };

  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-6 py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-purple-500/10 blur-[150px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full animate-float-slow"></div>
      </div>

      <div className="glass-panel p-10 rounded-[2.5rem] border border-white/10 max-w-md w-full relative z-10 space-y-8 mt-10">
        <div className="text-center space-y-4">
          <LogIn className="w-10 h-10 text-cyan-400 mx-auto" />
          <h1 className="text-3xl font-bold text-white">Welcome Back</h1>
          <p className="text-slate-400 text-sm">Login to continue your journey in Barterverse</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex items-center gap-3 bg-slate-900/70 border border-white/10 rounded-xl px-4 py-3">
            <Mail className="w-5 h-5 text-slate-500" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent text-white placeholder:text-slate-600 focus:outline-none"
              required
            />
          </div>
          <div className="flex items-center gap-3 bg-slate-900/70 border border-white/10 rounded-xl px-4 py-3">
            <Lock className="w-5 h-5 text-slate-500" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="flex-1 bg-transparent text-white placeholder:text-slate-600 focus:outline-none"
              required
            />
          </div>
          <button className="w-full py-4 bg-gradient-to-r from-cyan-400 to-purple-600 text-white rounded-xl font-black text-sm tracking-[0.2em] uppercase hover:scale-[1.02] transition-all">
            Login
          </button>
        </form>

        <p className="text-center text-slate-400 text-sm">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-cyan-400 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </main>
  );
};

export default LoginPage;