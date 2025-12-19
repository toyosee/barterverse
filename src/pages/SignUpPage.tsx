import React, { useState } from "react";
import { UserPlus, Mail, Lock, User } from "lucide-react";
import { Link } from "react-router-dom";

const SignUpPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrate signup service
    console.log("Signup attempt:", formData);
  };

  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-6 py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full animate-float-slow"></div>
      </div>

      <div className="glass-panel p-10 rounded-[2.5rem] border border-white/10 max-w-md w-full relative z-10 space-y-8 mt-10">
        <div className="text-center space-y-4">
          <UserPlus className="w-10 h-10 text-purple-400 mx-auto" />
          <h1 className="text-3xl font-bold text-white">Create Account</h1>
          <p className="text-slate-400 text-sm">Join Barterverse and start exchanging value</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex items-center gap-3 bg-slate-900/70 border border-white/10 rounded-xl px-4 py-3">
            <User className="w-5 h-5 text-slate-500" />
            <input
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="flex-1 bg-transparent text-white placeholder:text-slate-600 focus:outline-none"
              required
            />
          </div>
          <div className="flex items-center gap-3 bg-slate-900/70 border border-white/10 rounded-xl px-4 py-3">
            <Mail className="w-5 h-5 text-slate-500" />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="flex-1 bg-transparent text-white placeholder:text-slate-600 focus:outline-none"
              required
            />
          </div>
          <div className="flex items-center gap-3 bg-slate-900/70 border border-white/10 rounded-xl px-4 py-3">
            <Lock className="w-5 h-5 text-slate-500" />
            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="flex-1 bg-transparent text-white placeholder:text-slate-600 focus:outline-none"
              required
            />
          </div>
          <button className="w-full py-4 bg-gradient-to-r from-purple-400 to-cyan-600 text-white rounded-xl font-black text-sm tracking-[0.2em] uppercase hover:scale-[1.02] transition-all">
            Sign Up
          </button>
        </form>

        <p className="text-center text-slate-400 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
};

export default SignUpPage;