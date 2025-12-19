import React from "react";
import { AlertTriangle, Home } from "lucide-react";
import { Link } from "react-router-dom"; // assuming you're using react-router

const NotFoundPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-24 flex items-center justify-center relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-purple-500/10 blur-[150px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full animate-float-slow"></div>
      </div>

      <div className="max-w-2xl mx-auto relative z-10 text-center space-y-8 mt-10">
        {/* Icon + Heading */}
        <div className="flex flex-col items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center">
            <AlertTriangle className="w-10 h-10 text-red-400" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white font-grotesk tracking-tight">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-300">
            Page Not Found
          </h2>
        </div>

        {/* Description */}
        <p className="text-slate-400 text-lg leading-relaxed max-w-md mx-auto">
          The page you’re looking for doesn’t exist or may have been moved.
          Let’s get you back on track.
        </p>

        {/* CTA Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-cyan-400 to-purple-600 text-white rounded-xl font-black text-sm tracking-[0.2em] uppercase hover:scale-[1.02] transition-all"
        >
          <Home className="w-5 h-5" />
          Back to Home
        </Link>
      </div>
    </main>
  );
};

export default NotFoundPage;