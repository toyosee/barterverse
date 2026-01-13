import React, { useState, useEffect } from 'react';
import { 
  Plus, Minus,  Smartphone, ShieldAlert, Fingerprint, 
  Key, Activity, Zap, CheckCircle2, Eye, EyeOff,
  Search, ShieldQuestion, GlobeLock
} from 'lucide-react';
import zxcvbn from 'zxcvbn';

const useTypewriter = (text: string, speed: number = 50, delay: number = 0) => {
  const [displayText, setDisplayText] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (displayText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.substring(0, displayText.length + 1));
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [displayText, text, speed, started]);

  return displayText;
};

const VailLandingPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [testPassword, setTestPassword] = useState('');
  const [showPass, setShowPass] = useState(false);

  // Terminal Hooks
  const s1 = useTypewriter("# vail --seal --payload 'DEEP_STRIKE'", 40, 500);
  const s2 = useTypewriter("> AES-256 GCM Initialization...", 30, 2500);
  const s3 = useTypewriter("> QR Payload: SEALED_LOCAL_ONLY", 20, 3500);

  const c1 = useTypewriter("# vail --audit-active", 40, 4500);
  const c2 = useTypewriter("> Analyzing entropy density...", 30, 5500);
  const c3 = useTypewriter("> Status: ELITE_ENCRYPTION_DETECTED", 20, 6500);

  // Password Logic (Interactive Component)
  const analysis = testPassword ? zxcvbn(testPassword) : null;
  const getScoreColor = (score: number) => {
    const colors = ['#f43f5e', '#fb923c', '#fbbf24', '#a3e635', '#2dd4bf'];
    return colors[score] || '#334155';
  };

  const appleStoreUrl = "https://thebarterverse.com/#/vail";
  const playStoreUrl = "https://thebarterverse.com/#/vail";

  return (
    <div className="bg-[#020617] min-h-screen relative pt-32 pb-20 px-6 overflow-hidden font-sans text-slate-300">
      
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[5%] left-[-10%] w-[800px] h-[800px] bg-violet-600/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] right-[-10%] w-[800px] h-[800px] bg-indigo-600/5 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HERO SECTION */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-60">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-[10px] font-black uppercase tracking-[0.4em]">
              <GlobeLock className="w-4 h-4" /> Sovereign End-to-End Privacy Protocol
            </div>
            
            <h1 className="text-7xl md:text-9xl font-bold text-white tracking-tighter leading-none">
              Va<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-500 to-cyan-400">il</span>
            </h1>

            <p className="text-slate-400 text-xl leading-relaxed max-w-xl font-light">
              The closed-loop privacy suite for the modern digital ghost. <span className="text-white font-medium">Seal</span>, <span className="text-white font-medium">Vault</span>, and <span className="text-white font-medium">Audit</span> your most sensitive data using hardware-level security.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => window.open(appleStoreUrl)} className="flex items-center justify-center gap-3 bg-white text-slate-950 px-8 py-4 rounded-xl font-black text-xs tracking-widest uppercase hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all">
                <Smartphone className="w-5 h-5" /> iOS App Store
              </button>
              <button onClick={() => window.open(playStoreUrl)} className="flex items-center justify-center gap-3 bg-slate-800 text-white px-8 py-4 rounded-xl font-black text-xs tracking-widest uppercase hover:bg-slate-700 transition-all">
                <Smartphone className="w-5 h-5" /> Google Play
              </button>
            </div>
          </div>

          {/* SEAL TERMINAL - TOP RIGHT */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-[#020617] rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
              <div className="bg-white/5 px-6 py-4 flex gap-2 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="p-8 font-mono text-[13px] leading-relaxed min-h-[200px]">
                <p className="text-violet-400">{s1}</p>
                <p className="text-slate-500 mt-2">{s2}</p>
                <p className="text-slate-500">{s3}</p>
                {s3.includes("SEALED") && (
                  <div className="mt-4 p-4 bg-violet-500/5 rounded-xl border border-violet-500/10 text-violet-300/40 text-[11px] break-all italic">
                    X092_VAIL_SEC_ENCLAVE_CIPHER_LOCAL_KEY_2026
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* INTERACTIVE STRENGTH VISUALIZER */}
        <section className="mb-40">
          <div className="grid lg:grid-cols-2 gap-20 items-center bg-white/[0.02] border border-white/5 rounded-[4rem] p-12 lg:p-20">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-white tracking-tight">Test Your <span className="text-violet-500">Resilience</span></h2>
              <p className="text-slate-400 leading-relaxed">Experience our <span className="text-white underline underline-offset-4 decoration-violet-500">Strength Monitor</span> engine right here. This logic runs 100% locally in your browser, just as it does in the mobile app.</p>
              
              <div className="space-y-4 pt-6">
                <div className="relative">
                  <input 
                    type={showPass ? "text" : "password"}
                    placeholder="Enter a password to analyze..."
                    className="w-full bg-slate-950 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-violet-500/50 transition-all"
                    value={testPassword}
                    onChange={(e) => setTestPassword(e.target.value)}
                  />
                  <button onClick={() => setShowPass(!showPass)} className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-500 hover:text-violet-400">
                    {showPass ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>

                {analysis && (
                  <div className="p-6 bg-slate-950 rounded-2xl border border-white/5 space-y-4 animate-in fade-in slide-in-from-top-4">
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black">Strength Level</p>
                        <p className="text-2xl font-black uppercase italic" style={{ color: getScoreColor(analysis.score) }}>
                          {['Critical', 'Weak', 'Average', 'Secure', 'Elite'][analysis.score]}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black">Time to Crack</p>
                        <p className="text-white font-mono text-lg">{analysis.crack_times_display.offline_fast_hashing_1e10_per_second}</p>
                      </div>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div 
                        className="h-full transition-all duration-500 ease-out" 
                        style={{ width: `${(analysis.score + 1) * 20}%`, backgroundColor: getScoreColor(analysis.score) }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* AUDIT TERMINAL - LEFT ALIGNED (Relative to block) */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-3xl blur opacity-10 group-hover:opacity-20 transition"></div>
              <div className="relative bg-slate-950 rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
                <div className="bg-white/5 px-6 py-4 flex gap-2 border-b border-white/5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="p-8 font-mono text-[13px] leading-relaxed min-h-[180px]">
                  <p className="text-cyan-400">{c1}</p>
                  <p className="text-slate-500 mt-2">{c2}</p>
                  <p className="text-slate-500">{c3}</p>
                  {c3.includes("ELITE") && (
                    <div className="mt-4 flex gap-3 p-3 bg-green-500/5 border border-green-500/10 rounded-lg">
                      <CheckCircle2 size={14} className="text-green-500 mt-1" />
                      <p className="text-[11px] text-slate-400">Entropy check passed. Data verified as brute-force resistant.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COMPREHENSIVE FEATURE SET */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-40">
          {[
            { icon: ShieldAlert, title: "QR Sealing", desc: "Turn raw text into AES-256 encrypted QR codes. Unlike standard QRs, Vail codes are unreadable without our proprietary Unvail engine." },
            { icon: Activity, title: "Strength Monitor", desc: "Real-time auditing of your cipher keys. We use offline dictionary pattern matching to ensure your PINs aren't predictable." },
            { icon: Fingerprint, title: "Bio-Vaulting", desc: "Store sensitive credentials in a vault locked by hardware-level biometrics. Data is never cached in your phone's standard memory." },
            { icon: Key, title: "Entropy Engine", desc: "Generate mathematically 'Elite' keys with high-bit randomness. Perfect for master passwords and cold storage seeds." },
            { icon: Zap, title: "Zero-Knowledge", desc: "Vail has no servers. No clouds. No logs. Your keys stay on your hardware, period. Even we can't see your data." },
            { icon: Search, title: "Metadata Scrubbing", desc: "Automatically strips identifying metadata from notes before they are sealed, ensuring absolute anonymity." }
          ].map((f, i) => (
            <div key={i} className="group p-10 rounded-[2.5rem] bg-white/[0.01] border border-white/5 hover:bg-white/[0.03] hover:border-violet-500/40 transition-all">
              <f.icon className="w-12 h-12 text-violet-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tighter">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* HOW IT WORKS DIAGRAM SECTION */}
        <section className="mb-60 py-20 text-center">
            <h2 className="text-4xl font-bold text-white mb-20 tracking-tighter uppercase italic">The Sovereign Architecture</h2>
            
            <div className="grid md:grid-cols-3 gap-12 mt-20 max-w-5xl mx-auto">
                <div className="space-y-4">
                    <div className="w-12 h-12 bg-violet-500/20 rounded-full flex items-center justify-center mx-auto text-violet-400 font-black">1</div>
                    <h4 className="text-white font-bold">Local Encryption</h4>
                    <p className="text-xs text-slate-500">Your data is ciphered using AES-256 GCM on your device CPU. No raw data ever enters the RAM unencrypted.</p>
                </div>
                <div className="space-y-4">
                    <div className="w-12 h-12 bg-violet-500/20 rounded-full flex items-center justify-center mx-auto text-violet-400 font-black">2</div>
                    <h4 className="text-white font-bold">Hardware Handshake</h4>
                    <p className="text-xs text-slate-500">Decryption keys are generated inside the Secure Enclave, accessible only via a successful Biometric match.</p>
                </div>
                <div className="space-y-4">
                    <div className="w-12 h-12 bg-violet-500/20 rounded-full flex items-center justify-center mx-auto text-violet-400 font-black">3</div>
                    <h4 className="text-white font-bold">Closed-Loop Reveal</h4>
                    <p className="text-xs text-slate-500">The QR payload is 'Unvailed' within the app sandbox, preventing clipboard sniffers or OS-level screen recording.</p>
                </div>
            </div>
        </section>

        {/* ENHANCED FAQ */}
        <section className="mb-40 max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <ShieldQuestion className="text-violet-500" size={32} />
            <h2 className="text-4xl font-bold text-white tracking-tighter">Protocol FAQ</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "What is 'Sealing' vs standard encryption?", a: "Standard encryption often leaves metadata or is easily detectable by scanners. 'Sealing' in Vail creates a proprietary QR format that lacks standard headers, making it look like noise to any scanner except the Vail Unvail engine." },
              { q: "Can I recover my Vault if I lose my PIN?", a: "No. This is a Zero-Knowledge system. Because we don't store your keys on a server, we have no way to reset your PIN. This is the ultimate trade-off for absolute privacy." },
              { q: "How accurate is the crack-time estimate?", a: "We use zxcvbn, the industry standard for entropy calculation. It estimates cracking time based on a dictionary of 30,000 common passwords, names, and patterns combined with common brute-force hashing speeds." },
              { q: "Does Vail work offline?", a: "Vail is designed for the 'Air-Gap' lifestyle. 100% of its core features—Sealing, Vaulting, and Auditing—work perfectly without an internet connection." },
              { q: "What is Metadata Scrubbing?", a: "When you type a note in Vail, hidden data (like your GPS location or device ID) is often attached by the OS. Vail scrubs this data before the Sealing process begins." }
            ].map((faq, i) => (
              <div key={i} className="rounded-3xl border border-white/5 bg-white/[0.02] overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-8 text-left">
                  <span className="text-white font-bold text-sm lg:text-base">{faq.q}</span>
                  {openFaq === i ? <Minus className="w-5 h-5 text-violet-400" /> : <Plus className="w-5 h-5 text-slate-700" />}
                </button>
                {openFaq === i && <div className="p-8 pt-0 text-slate-400 text-sm leading-relaxed border-t border-white/5 animate-in slide-in-from-top-2">{faq.a}</div>}
              </div>
            ))}
          </div>
        </section>

        {/* FINAL DOWNLOAD CTA */}
        <div className="bg-gradient-to-br from-violet-600 to-indigo-900 rounded-[3.5rem] p-12 lg:p-24 text-center space-y-10 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none uppercase relative z-10">Go Dark. <br />Go Vail.</h2>
          <p className="text-violet-200 text-lg opacity-80 max-w-lg mx-auto relative z-10">Join the elite users protecting their digital sovereignty with the Vail Protocol.</p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <button onClick={() => window.open(appleStoreUrl)} className="bg-white text-indigo-950 px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:scale-105 transition-all">Download iOS</button>
            <button onClick={() => window.open(playStoreUrl)} className="bg-indigo-500 text-white border border-white/20 px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-indigo-400 transition-all">Download Android</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VailLandingPage;