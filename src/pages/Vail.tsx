import React, { useState, useEffect } from 'react';
import { 
  Plus, ShieldCheck,Github, Mail, Minus, 
  Terminal, Smartphone, ShieldAlert, Fingerprint, 
  Key, Activity
} from 'lucide-react';

// Custom Typewriter Hook for the Terminal
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
  const appVersion = "1.0.0";
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Terminal Content
  const line1 = useTypewriter("# vail-protocol --seal --data 'Top Secret'", 40, 500);
  const line2 = useTypewriter("> Initializing Secure Enclave...", 30, 2500);
  const line3 = useTypewriter("> Salt generated: 0x8F2...91A", 20, 3500);

  const appleStoreUrl = "https://thebarterverse.com/#/vail";
  const playStoreUrl = "https://thebarterverse.com/#/vail";
  const repoUrl = "https://github.com/toyosee";

  const faqs = [
    {
      question: "Can standard QR scanners read my sealed messages?",
      answer: "Absolutely not. While a standard scanner might see the code, it will only display a jumble of AES-256 encrypted characters. To actually 'Unvail' the content, the recipient MUST use the Vail App and provide the specific password/PIN set by the sender."
    },
    {
      question: "How does the 'Secure Vault' protect my notes?",
      answer: "Vail uses a Zero-Knowledge architecture. Your notes are encrypted using hardware-backed keys on your device. Access requires a biometric handshake (FaceID/TouchID). Even if your phone is stolen, without your biometrics, your vault remains an undecipherable black box."
    },
    {
      question: "What is the 'Entropy Generator'?",
      answer: "Most passwords are weak due to human patterns. Our Entropy tool generates mathematically complex strings that are resistant to brute-force attacks. You can customize length and character sets to create master keys for your most sensitive accounts."
    },
    {
      question: "Does the app store data on a cloud server?",
      answer: "No. Vail has no database, no cloud sync, and no backend. All encryption happens locally (on-device). This ensures that your data never leaves your hand in an unencrypted state."
    },
    {
      question: "What does the 'Strength Auditor' actually check?",
      answer: "The auditor simulates real-world cracking attempts. It checks for patterns, common substitutions, and dictionary words, giving you a 'Time-to-Crack' estimate for any password you test."
    }
  ];

  return (
    <div className="bg-[#020617] min-h-screen relative pt-32 pb-20 px-6 overflow-hidden font-sans text-slate-300">
      
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[5%] left-[-10%] w-[600px] h-[600px] bg-violet-600/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-indigo-600/10 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HERO SECTION */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-40">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-[10px] font-black uppercase tracking-[0.4em]">
              <ShieldCheck className="w-4 h-4" /> End-to-End Local Privacy
            </div>
            
            <h1 className="text-7xl md:text-9xl font-bold text-white tracking-tighter leading-none">
              Va<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-500 to-cyan-400">il</span>
            </h1>

            <p className="text-slate-400 text-xl leading-relaxed max-w-xl font-light">
              The elite closed-loop privacy suite. <span className="text-white">Seal</span> messages only Vail users can decrypt, <span className="text-white">Vault</span> secrets with biometrics, and <span className="text-white">Generate</span> uncrackable entropy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => window.open(appleStoreUrl)} className="flex items-center justify-center gap-3 bg-white text-slate-950 px-8 py-4 rounded-xl font-black text-xs tracking-widest uppercase hover:scale-105 transition-all shadow-xl">
                <Smartphone className="w-5 h-5" /> App Store
              </button>
              <button onClick={() => window.open(playStoreUrl)} className="flex items-center justify-center gap-3 bg-slate-800 text-white px-8 py-4 rounded-xl font-black text-xs tracking-widest uppercase hover:bg-slate-700 transition-all">
                <Smartphone className="w-5 h-5" /> Play Store
              </button>
            </div>
          </div>

          {/* PHONE MOCKUP */}
          <div className="relative flex justify-center lg:justify-end group">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[750px] bg-violet-500/20 blur-[120px] rounded-full opacity-30 animate-pulse" />
            <div className="relative w-[310px] h-[630px] bg-[#020617] border-[10px] border-slate-900 rounded-[3rem] shadow-2xl overflow-hidden ring-1 ring-white/10 transition-transform duration-700 hover:rotate-1">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-900 rounded-b-2xl z-40" />
              <div className="w-full h-full bg-slate-950">
                <img 
                  src="/images/vail.jpg" 
                  alt="Vail Mobile Interface" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<div class="h-full flex items-center justify-center text-slate-700 font-mono text-xs">VAIL_MOCKUP_LOAD</div>';
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* COMPREHENSIVE FUNCTIONALITY GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-40">
          {[
            { icon: ShieldAlert, title: "Message Sealing", desc: "Convert text into AES-256 QR codes. Recipient MUST have Vail and your PIN to reveal the content." },
            { icon: Fingerprint, title: "Secure Vault", desc: "Local-only storage for high-sensitivity notes. Protected by hardware-backed biometrics." },
            { icon: Key, title: "Entropy Gen", desc: "Generate truly random, high-complexity strings for master passwords. Zero predictable patterns." },
            { icon: Activity, title: "Strength Audit", desc: "Real-time analysis of your existing passwords with 'Time-to-Crack' estimates." }
          ].map((feature, i) => (
            <div key={i} className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] transition-all group">
              <feature.icon className="w-10 h-10 text-violet-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold text-white mb-3 uppercase tracking-tight">{feature.title}</h3>
              <p className="text-sm text-slate-400 font-light leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* SEAL LIFECYCLE - TYPEWRITER VERSION */}
        <section className="mb-40 py-24 rounded-[4rem] bg-white/[0.01] border border-white/5 px-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center max-w-5xl mx-auto">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 text-violet-400 font-black text-[10px] uppercase tracking-[0.4em]">
                <Terminal className="w-4 h-4" /> Cryptographic Flow
              </div>
              <h2 className="text-5xl font-bold text-white tracking-tight">The Seal <span className="text-violet-500">Lifecycle</span></h2>
              <div className="space-y-6">
                {[
                  { s: "01", t: "Entropy Input", d: "Sender enters text and defines a unique cipher PIN." },
                  { s: "02", t: "Encrypted Transit", d: "Share the generated QR. It is unreadable to anyone without the Vail app." },
                  { s: "03", t: "Biometric Unvail", d: "Recipient scans + PIN + FaceID to decrypt the raw data." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <span className="text-violet-500 font-black">{item.s}</span>
                    <p className="text-slate-400"><strong className="text-white">{item.t}:</strong> {item.d}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-violet-500/20 blur-[100px] opacity-10" />
              <div className="relative bg-[#020617] rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
                <div className="bg-white/5 px-6 py-4 flex gap-2 border-b border-white/5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="p-8 font-mono text-[13px] leading-relaxed min-h-[280px]">
                  <p className="text-violet-400">{line1}</p>
                  <p className="text-slate-500 mt-2">{line2}</p>
                  <p className="text-slate-500">{line3}</p>
                  {line3.length > 20 && (
                    <>
                      <div className="my-4 py-4 px-4 bg-white/[0.03] rounded-xl border border-white/5 break-all text-violet-200/40 italic animate-pulse">
                        U2FsdGVkX19W5K+QzM5UeXN0ZW0gdG8gc2VjdXJlIHlvdXIgZGF0YSAyMDI2
                      </div>
                      <p className="text-green-500">{'>'} [SUCCESS] QR Cipher Ready.</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-40 max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white tracking-tighter uppercase italic">Protocol Intel</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-3xl border border-white/5 bg-white/[0.02] overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-8 text-left hover:bg-white/[0.01] transition-colors"
                >
                  <span className="text-white font-bold">{faq.question}</span>
                  {openFaq === index ? <Minus className="w-5 h-5 text-violet-400" /> : <Plus className="w-5 h-5 text-slate-700" />}
                </button>
                {openFaq === index && (
                  <div className="p-8 pt-0 text-slate-400 text-sm leading-relaxed border-t border-white/5 animate-in slide-in-from-top-2">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* DOWNLOAD CTA */}
        <div className="bg-gradient-to-br from-violet-600 to-indigo-900 rounded-[3.5rem] p-12 lg:p-24 text-center space-y-10 shadow-2xl">
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none uppercase">Ready to <br />Go Dark?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => window.open(appleStoreUrl)} className="bg-white text-indigo-950 px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:scale-105 transition-all">
              Download for iOS
            </button>
            <button onClick={() => window.open(playStoreUrl)} className="bg-indigo-500 text-white border border-white/20 px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-indigo-400 transition-all">
              Download for Android
            </button>
          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/5 pt-12 opacity-40">
          <div className="flex gap-6">
             <button onClick={() => window.open(repoUrl)} className="hover:text-white transition-colors"><Github size={20} /></button>
             <button onClick={() => window.location.href = 'mailto:support@thebarterverse.com'} className="hover:text-white transition-colors"><Mail size={20} /></button>
          </div>
          <p className="text-slate-500 text-[10px] uppercase tracking-[0.5em] font-bold">VAIL PROTOCOL v{appVersion} | BY BARTERVERSE TECH</p>
        </div>
      </div>
    </div>
  );
};

export default VailLandingPage;