import React, { useState } from 'react';
import { 
  Smartphone, 
  Star, 
  Share2, 
  Download, 
  ShieldCheck, 
  Cpu, 
  MessageSquare,
  Zap,
  Twitter,
  Linkedin,
  Instagram,
  Music2,
  Mail,
  LifeBuoy,
  Plus,
  Minus,
  HelpCircle
} from 'lucide-react';

const TaxAssistPage: React.FC = () => {
  const appVersion = "1.0.1";
  const rating = 4.8;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "What tax types does TaxAssist cover?",
      answer: "TaxAssist provides comprehensive calculations for Personal Income Tax (PIT), Value Added Tax (VAT), Corporate Income Tax (CIT), and Withholding Tax (WHT) based on current Nigerian Finance Acts and 2026 projections."
    },
    {
      question: "How does the Trilingual AI work?",
      answer: "The integrated AI assistant is trained on Nigerian tax law and can communicate fluently in Yorùbá, Hausa, and Igbo, ensuring that complex fiscal rules are accessible to everyone in their native tongue."
    },
    {
      question: "Is my financial data shared with Barterverse Tech?",
      answer: "No. TaxAssist follows the Zero-Knowledge Privacy protocol. All calculations are performed locally on your device. We do not store, track, or share your financial inputs."
    },
    {
      question: "Can I generate reports for filing?",
      answer: "Yes. The app allows you to export your calculations as professional PDF reports or CSV data files, which can be used to simplify your filing process with relevant tax authorities."
    }
  ];

  const handlePartnershipEmail = () => {
    const email = 'partnership@thebarterverse.com';
    const subject = 'TaxAssist Partnership Opportunity';
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  };

  const handleSupportEmail = () => {
    const email = 'support@thebarterverse.com';
    const subject = 'TaxAssist Support Request';
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  };

  const openSocialMedia = (platform: string) => {
    const urls: Record<string, string> = {
      twitter: 'https://twitter.com/thebarterverse',
      linkedin: 'https://linkedin.com/company/thebarterverse',
      instagram: 'https://www.instagram.com/taxassist_ng/',
      tiktok: "https://www.tiktok.com/@taxassisntng?is_from_webapp=1&sender_device=pc"
    };
    if (urls[platform]) window.open(urls[platform], '_blank');
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'TaxAssist Nigeria',
          text: 'Simplify your Nigerian Tax calculations with AI support!',
          url: window.location.href,
        });
      } catch (err) { console.log(err); }
    } else {
      alert("Link: " + window.location.href);
    }
  };

  return (
    <div className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Background Blurs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[20%] right-[-5%] w-[500px] h-[500px] bg-purple-600/10 blur-[140px] rounded-full animate-float-slow" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HERO SECTION */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-[10px] font-black uppercase tracking-[0.4em]">
              <Smartphone className="w-4 h-4" />
              Mobile Protocol Active
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-white font-grotesk tracking-tighter leading-none">
              Tax<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">Assist</span>
            </h1>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < Math.floor(rating) ? 'text-yellow-500 fill-yellow-500' : 'text-slate-600'}`} 
                  />
                ))}
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl leading-none">{rating} / 5.0</span>
                <span className="text-slate-500 text-[10px] uppercase tracking-widest mt-1">Rating</span>
              </div>
            </div>
            
            <p className="text-slate-400 text-xl leading-relaxed max-w-xl font-light">
              Simplifying the Nigerian tax landscape. A trilingual AI utility tool built to ensure transparency and smart governance for all Nigerians.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <button 
                onClick={() => window.open('https://apps.apple.com/app/idYOUR_APP_ID', '_blank')}
                className="group relative flex items-center justify-center gap-3 bg-white text-slate-950 px-10 py-5 rounded-2xl font-black text-xs tracking-widest uppercase hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.1)]"
              >
                <Download className="w-5 h-5" /> App Store
              </button>
              <button 
                onClick={() => window.open('https://play.google.com/store/apps/details?id=com.thebarterverse.taxassist', '_blank')}
                className="flex items-center justify-center gap-3 bg-transparent border border-white/10 text-white px-10 py-5 rounded-2xl font-black text-xs tracking-widest uppercase hover:bg-white/5 transition-all"
              >
                <Download className="w-5 h-5" /> Google Play
              </button>
            </div>

            <div className="flex gap-4 pt-4">
              <button onClick={() => openSocialMedia('twitter')} className="p-3 rounded-xl border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-400 transition-all"><Twitter className="w-5 h-5" /></button>
              <button onClick={() => openSocialMedia('linkedin')} className="p-3 rounded-xl border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-400 transition-all"><Linkedin className="w-5 h-5" /></button>
              <button onClick={() => openSocialMedia('instagram')} className="p-3 rounded-xl border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-400 transition-all"><Instagram className="w-5 h-5" /></button>
              <button onClick={() => openSocialMedia('tiktok')} className="p-3 rounded-xl border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-400 transition-all"><Music2 className="w-5 h-5" /></button>
            </div>
          </div>

          {/* PHONE FRAME */}
          <div className="relative flex justify-center lg:justify-end group/phone">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[700px] bg-gradient-to-br from-cyan-500/20 to-purple-600/20 blur-[100px] rounded-full opacity-50 animate-pulse" />
            <div className="relative w-[300px] h-[610px] bg-[#0f172a] border-[12px] border-slate-900 rounded-[3rem] shadow-2xl overflow-hidden ring-1 ring-white/20 animate-float transition-all duration-700 group-hover/phone:rotate-3 group-hover/phone:scale-105">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-slate-900 rounded-b-2xl z-40" />
              <img src="images/taxassistImg.jpeg" alt="TaxAssist Preview" className="w-full h-full object-cover object-top relative z-10" />
              <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-tr from-white/5 via-transparent to-white/10 opacity-40" />
            </div>
          </div>
        </div>

        {/* NAIJA-FEEL FEATURE CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {[
            { icon: MessageSquare, title: "Trilingual AI", desc: "Get tax advice in Yorùbá, Hausa, or Igbo.", img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600" },
            { icon: Cpu, title: "2026 Projections", desc: "Syncing with the latest Nigerian tax law evolutions.", img: "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&q=80&w=600" },
            { icon: ShieldCheck, title: "100% Offline", desc: "Your data stays on your device. Private by design.", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600" }
          ].map((feature, i) => (
            <div key={i} className="group relative h-[400px] rounded-[2.5rem] overflow-hidden border border-white/10 transition-all duration-500">
              <img src={feature.img} className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-700" alt={feature.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
              <div className="relative h-full p-10 flex flex-col justify-end">
                <feature.icon className="w-10 h-10 text-cyan-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-3 uppercase tracking-tighter">{feature.title}</h3>
                <p className="text-slate-400 font-light leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* DYNAMIC FAQ SECTION */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-cyan-400 font-black text-[10px] uppercase tracking-[0.4em] mb-4">
              <HelpCircle className="w-4 h-4" /> Frequently Asked
            </div>
            <h2 className="text-4xl font-bold text-white font-grotesk tracking-tight">Tax Protocol {""} <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500'>FAQ</span></h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden transition-all duration-300">
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="text-white font-bold tracking-tight">{faq.question}</span>
                  {openFaq === index ? (
                    <Minus className="w-5 h-5 text-cyan-400" />
                  ) : (
                    <Plus className="w-5 h-5 text-slate-500" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="p-6 pt-0 text-slate-400 leading-relaxed font-light border-t border-white/5 animate-in slide-in-from-top-2">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* PARTNERSHIP & SUPPORT */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          <button onClick={handlePartnershipEmail} className="group p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-cyan-500/50 text-left transition-all">
            <Mail className="w-10 h-10 text-cyan-400 mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold text-white mb-2">Partnerships</h3>
            <p className="text-slate-400 font-light">Explore integration opportunities for your organization.</p>
          </button>
          <button onClick={handleSupportEmail} className="group p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-purple-500/50 text-left transition-all">
            <LifeBuoy className="w-10 h-10 text-purple-400 mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold text-white mb-2">Need Support?</h3>
            <p className="text-slate-400 font-light">Report issues or suggest features to our developers.</p>
          </button>
        </div>

        {/* SHARE SECTION */}
        <div className="relative rounded-[3rem] overflow-hidden bg-white/5 border border-white/10 p-12 lg:p-20 text-center mb-32">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1528605105345-5344ea20e269?auto=format&fit=crop&q=80&w=1200')] opacity-10 grayscale mix-blend-overlay" />
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-400 text-[10px] font-black uppercase tracking-[0.4em]"><Zap className="w-4 h-4" /> Spread the Protocol</div>
            <h2 className="text-4xl md:text-6xl font-bold text-white font-grotesk tracking-tight">Empower Your <span className="text-cyan-400">Network</span></h2>
            <button onClick={handleShare} className="flex items-center justify-center gap-4 mx-auto bg-gradient-to-r from-cyan-400 to-purple-600 text-white px-12 py-6 rounded-2xl font-black text-sm tracking-[0.2em] uppercase hover:shadow-[0_0_50px_rgba(34,211,238,0.3)] transition-all hover:scale-105 active:scale-95"><Share2 className="w-5 h-5" /> Share Now</button>
          </div>
        </div>

              {/*Protocol Version*/}
        <div className="text-center">
          <p className="text-slate-500 text-sm">TaxAssist Protocol Version {appVersion}</p>
        </div>
      </div>
    </div>
  );
};

export default TaxAssistPage;