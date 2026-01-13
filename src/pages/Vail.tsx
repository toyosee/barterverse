import React, { useState } from 'react';
import { 
    Star,
  Plus,  
  Share2, 
  Download, 
  ShieldCheck, 
  Lock, 
  ScanFace,
  Zap,
  Twitter,
  Github,
  Mail,
  Minus,
  EyeOff,
  Terminal,
} from 'lucide-react';

const VailLandingPage: React.FC = () => {
  const appVersion = "1.0.0";
  const rating = 4.9;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const downloadUrl = "https://thebarterverse.com/#/vail";
  const repoUrl = "https://github.com/toyosee";

  const faqs = [
    {
      question: "Can anyone else read my scanned messages?",
      answer: "No. Vail uses AES-256 encryption. Without the exact PIN used to 'Seal' the message, the data remains a scrambled cryptographic string that is mathematically impossible to decipher by standard QR scanners."
    },
    {
      question: "Does Vail store my data on a cloud?",
      answer: "Never. Vail operates on a Zero-Knowledge architecture. All notes and scan history are stored locally on your device's secure enclave. We have no servers and no access to your information."
    },
    {
      question: "What happens if I lose my PIN?",
      answer: "Due to our high-security protocol, we cannot recover forgotten PINs. Your device is the only vault key. We recommend using our 'Entropy Gen' tool to create and safely store master passwords."
    },
    {
      question: "Does the app support biometric login?",
      answer: "Yes. Vail integrates with FaceID, TouchID, and Android Biometrics to provide a seamless 'Handshake' before revealing any sensitive data."
    }
  ];

  const handleSupportEmail = () => {
    window.location.href = `mailto:support@thebarterverse.com?subject=Vail Protocol Support`;
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Vail Vault Protocol',
          text: 'Secure your digital footprint with biometric-locked utilities and AES encryption.',
          url: downloadUrl,
        });
      } catch (err) { console.log(err); }
    } else {
      navigator.clipboard.writeText(downloadUrl);
      alert("Link copied to clipboard!");
    }
  };

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
              <ShieldCheck className="w-4 h-4" /> 2026 Mobile Protocol Active
            </div>
            
            <h1 className="text-7xl md:text-9xl font-bold text-white tracking-tighter leading-none">
              Vail<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-500 to-cyan-400">Vault</span>
            </h1>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-violet-500 fill-violet-500" />
                ))}
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl leading-none">{rating} / 5.0</span>
                <span className="text-slate-500 text-[10px] uppercase tracking-widest mt-1">Audit Score</span>
              </div>
            </div>
            
            <p className="text-slate-400 text-xl leading-relaxed max-w-xl font-light">
              An elite privacy suite built for high-stakes security. 
              <span className="text-white"> Seal </span> sensitive data, 
              <span className="text-white"> Lock </span> digital notes, and 
              <span className="text-white"> Purge </span> your history with local-only AES-256 encryption.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <button 
                onClick={() => window.open(downloadUrl, '_blank')}
                className="group relative flex items-center justify-center gap-3 bg-white text-slate-950 px-10 py-5 rounded-2xl font-black text-xs tracking-widest uppercase hover:scale-105 transition-all shadow-[0_0_50px_rgba(167,139,250,0.4)]"
              >
                <Download className="w-5 h-5" /> Deploy Protocol
              </button>
              <button 
                onClick={() => window.open(repoUrl, '_blank')}
                className="flex items-center justify-center gap-3 bg-transparent border border-white/10 text-white px-10 py-5 rounded-2xl font-black text-xs tracking-widest uppercase hover:bg-white/5 transition-all"
              >
                <Github className="w-5 h-5" /> View Source
              </button>
            </div>
          </div>

          {/* PHONE PREVIEW */}
          <div className="relative flex justify-center lg:justify-end group">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[750px] bg-violet-500/20 blur-[120px] rounded-full opacity-30 animate-pulse" />
            <div className="relative w-[310px] h-[630px] bg-[#020617] border-[12px] border-slate-900 rounded-[3.5rem] shadow-2xl overflow-hidden ring-1 ring-white/20 transition-transform duration-700 hover:rotate-2">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-8 bg-slate-900 rounded-b-3xl z-40" />
              {/* UI Mockup Content */}
              <div className="w-full h-full bg-[#020617] flex flex-col items-center justify-center space-y-8 p-10">
                <div className="relative">
                  <ScanFace className="w-24 h-24 text-violet-500 animate-pulse" />
                  <div className="absolute -inset-4 border-2 border-violet-500/20 rounded-full animate-ping" />
                </div>
                <div className="w-full space-y-3">
                  <div className="h-2 w-3/4 bg-white/5 rounded-full mx-auto" />
                  <div className="h-2 w-1/2 bg-white/5 rounded-full mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CORE FEATURES */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-40">
          {[
            { icon: Lock, title: "AES-256 Sealed", desc: "Data is scrambled using military-grade standards. Not even the Vail developers can read your vault." },
            { icon: EyeOff, title: "Spy-Proof UI", desc: "Native screenshot prevention and observer alerts keep your revealed data private in public." },
            { icon: Zap, title: "Auto-Purge", desc: "Set a self-destruct timer on your scan logs. Once it's gone, it's mathematically unrecoverable." }
          ].map((feature, i) => (
            <div key={i} className="group relative p-12 rounded-[3rem] bg-white/[0.03] border border-white/5 hover:border-violet-500/40 transition-all duration-500">
              <feature.icon className="w-12 h-12 text-violet-500 mb-8 transition-transform group-hover:scale-110" />
              <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tighter">{feature.title}</h3>
              <p className="text-slate-400 font-light leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* PROTOCOL VISUAL DEMO */}
        
        <section className="mb-40 py-24 rounded-[4rem] bg-white/[0.02] border border-white/5 px-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center max-w-5xl mx-auto">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 text-violet-400 font-black text-[10px] uppercase tracking-[0.4em]">
                <Terminal className="w-4 h-4" /> Execution Logic
              </div>
              <h2 className="text-5xl font-bold text-white tracking-tight">The Seal <span className="text-violet-500">Lifecycle</span></h2>
              <div className="space-y-6">
                {[
                  { step: "01", t: "Entropy Input", d: "User provides raw data and defines a unique cipher PIN." },
                  { step: "02", t: "Cryptographic Seal", d: "Vail generates a local-only AES-256 QR payload." },
                  { step: "03", t: "Secure Reveal", d: "Scan requires Biometric Handshake + PIN verification." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <span className="text-violet-500 font-mono font-black text-xl opacity-40 group-hover:opacity-100 transition-opacity">{item.step}</span>
                    <div>
                      <h4 className="text-white font-bold text-lg">{item.t}</h4>
                      <p className="text-slate-500 font-light">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-violet-500/20 blur-[100px] opacity-20" />
              <div className="relative bg-slate-950 rounded-3xl border border-white/10 p-8 font-mono text-[12px] shadow-2xl">
                <div className="flex gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500/30" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/30" />
                  <div className="w-3 h-3 rounded-full bg-green-500/30" />
                </div>
                <div className="space-y-3">
                  <p className="text-violet-400"># vail-protocol --seal "Top Secret"</p>
                  <p className="text-slate-500">{'>'} Loading Secure Enclave...</p>
                  <p className="text-slate-500">{'>'} Salt: 0x8F2...91A</p>
                  <div className="py-4 px-3 bg-white/5 rounded border border-white/10 break-all text-violet-200 opacity-60">
                    U2FsdGVkX19W5K+QzM5UeXN0ZW0gdG8gc2VjdXJlIHlvdXIgZGF0YSAyMDI2
                  </div>
                  <p className="text-green-500">{'>'} [SUCCESS] QR Cipher Ready.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-40">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">Frequently Asked <span className="text-violet-500">Security</span></h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-3xl border border-white/5 bg-white/[0.02] overflow-hidden transition-all duration-300">
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-8 text-left hover:bg-white/[0.04]"
                >
                  <span className="text-white font-bold text-lg">{faq.question}</span>
                  {openFaq === index ? <Minus className="w-5 h-5 text-violet-400" /> : <Plus className="w-5 h-5 text-slate-600" />}
                </button>
                {openFaq === index && (
                  <div className="p-8 pt-0 text-slate-400 leading-relaxed font-light border-t border-white/5">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* FINAL CALL TO ACTION */}
        <div className="relative rounded-[4rem] overflow-hidden bg-gradient-to-br from-violet-600 to-indigo-900 p-16 lg:p-32 text-center mb-20">
          <div className="relative z-10 max-w-4xl mx-auto space-y-10">
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-none">Your Privacy is <br /><span className="text-cyan-300 italic">Non-Negotiable</span></h2>
            <p className="text-indigo-100 text-xl opacity-80 max-w-2xl mx-auto">Join the Vail beta protocol today and secure your communications on-device.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button onClick={handleShare} className="flex items-center justify-center gap-4 bg-white text-indigo-900 px-12 py-6 rounded-2xl font-black text-xs tracking-widest uppercase hover:scale-105 transition-all">
                <Share2 className="w-5 h-5" /> Share Protocol
              </button>
              <button onClick={() => window.open(downloadUrl, '_blank')} className="flex items-center justify-center gap-4 bg-indigo-500 text-white px-12 py-6 rounded-2xl font-black text-xs tracking-widest uppercase border border-white/20 hover:bg-indigo-400 transition-all">
                <Download className="w-5 h-5" /> Get Vail
              </button>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/5 pt-12 opacity-40">
          <div className="flex gap-6">
             <button onClick={() => window.open(repoUrl)} className="hover:text-white transition-colors"><Github size={20} /></button>
             <button onClick={handleSupportEmail} className="hover:text-white transition-colors"><Mail size={20} /></button>
             <button className="hover:text-white transition-colors"><Twitter size={20} /></button>
          </div>
          <p className="text-slate-500 text-[10px] uppercase tracking-[0.5em] font-bold">VAIL PROTOCOL VERSION {appVersion} | BY BARTERVERSE TECH</p>
        </div>
      </div>
    </div>
  );
};

export default VailLandingPage;