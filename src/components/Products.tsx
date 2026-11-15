import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Boxes, Fingerprint, GlobeLock, MapPin, ScanSearch, ShieldCheck, Sparkles, Vault } from 'lucide-react';

/** Totely's mark (a chat bubble carrying a market basket), drawn as on gototely.com. */
export const TotelyMark: React.FC<{ size?: number }> = ({ size = 56 }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true">
    <rect width="40" height="40" rx="11" fill="#2563EB" />
    <path d="M9 13.5A4.5 4.5 0 0 1 13.5 9h13A4.5 4.5 0 0 1 31 13.5v9a4.5 4.5 0 0 1-4.5 4.5H17l-5.2 4.1c-.7.5-1.6 0-1.6-.8V26.6A4.5 4.5 0 0 1 9 22.5z" fill="#fff" />
    <path d="M12.6 17.4h14.8l-1.6 6.1a1.6 1.6 0 0 1-1.5 1.2h-8.6a1.6 1.6 0 0 1-1.5-1.2z" fill="#D99A00" />
    <path d="M14.2 20.4h11.6M14.9 22.6h10.2" stroke="#B57F00" strokeWidth="1" />
    <path d="M13.8 17.4c.6-3.6 3.1-5.4 6.2-5.4s5.6 1.8 6.2 5.4" fill="none" stroke="#14213D" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const VailMark: React.FC<{ size?: number }> = ({ size = 56 }) => (
  <span className="grid shrink-0 place-items-center rounded-[14px] bg-gradient-to-br from-violet-500 to-indigo-600" style={{ width: size, height: size }} aria-hidden="true">
    <GlobeLock className="text-white" style={{ width: size * 0.5, height: size * 0.5 }} />
  </span>
);

const OPERATOR = 'Operated by Barterverse Technologies Ltd, RC 9346924';

/** Totely: AI shopping and delivery on WhatsApp. Shown on the home page and the products page. */
export const TotelyCard: React.FC = () => (
  <article id="totely" className="relative scroll-mt-32 overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#0f1d3d] to-slate-950 p-6 sm:p-10 lg:p-12">
    <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#2563EB]/25 blur-[90px]" aria-hidden="true" />
    <div className="relative grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:items-center">
      <div className="min-w-0">
        <div className="flex items-center gap-4">
          <TotelyMark />
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Totely</h3>
            <p className="text-sm font-semibold text-[#F5C451]">A Barterverse product</p>
          </div>
        </div>
        <p className="mt-6 text-xl sm:text-2xl font-semibold text-white leading-snug">AI shopping and delivery on WhatsApp.</p>
        <p className="mt-3 max-w-xl text-slate-300 text-base sm:text-lg leading-relaxed">
          Customers send their shopping list on WhatsApp by text, voice note or photo. A Totely shopper buys it from markets, supermarkets and restaurants,
          with photos at every step, and a rider delivers it to the door.
        </p>
        <ul className="mt-6 grid gap-3 text-slate-300 sm:grid-cols-2">
          <li className="flex items-center gap-2.5"><MapPin className="h-4 w-4 shrink-0 text-cyan-400" />Serving Kaduna, Nigeria</li>
          <li className="flex items-center gap-2.5"><Sparkles className="h-4 w-4 shrink-0 text-cyan-400" />AI assistant built on Google Gemini</li>
          <li className="flex items-center gap-2.5 sm:col-span-2"><ShieldCheck className="h-4 w-4 shrink-0 text-cyan-400" />{OPERATOR}</li>
        </ul>
        <a
          href="https://gototely.com/"
          target="_blank"
          rel="noopener"
          className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#2563EB] px-6 font-semibold text-white transition-colors hover:bg-[#1D4ED8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
        >
          Visit gototely.com
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
      {/* A short Totely chat, the way customers actually use it */}
      <div className="mx-auto w-full max-w-sm rounded-[1.75rem] bg-[#EFEAE2] p-4 shadow-2xl" aria-hidden="true">
        <div className="flex items-center gap-2 pb-3">
          <TotelyMark size={30} />
          <span className="text-sm font-semibold text-[#14213D]">Totely</span>
        </div>
        <div className="space-y-2 text-[0.95rem] leading-snug">
          <p className="ml-auto max-w-[85%] rounded-2xl rounded-tr-md bg-[#D9FDD3] px-3.5 py-2.5 text-[#14213D]">2 mudu of local rice, a tuber of yam and pepper for stew</p>
          <p className="max-w-[85%] rounded-2xl rounded-tl-md bg-white px-3.5 py-2.5 text-[#14213D]">Got it. Here is your list with today’s market prices, ready to confirm.</p>
        </div>
      </div>
    </div>
  </article>
);

/** VAIL: the privacy suite. Shown on the home page and the products page. */
export const VailCard: React.FC = () => (
  <article id="vail" className="relative scroll-mt-32 overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#1b1240] to-slate-950 p-6 sm:p-10 lg:p-12">
    <div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-violet-600/25 blur-[90px]" aria-hidden="true" />
    <div className="relative min-w-0">
      <div className="flex items-center gap-4">
        <VailMark />
        <div>
          <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">VAIL</h3>
          <p className="text-sm font-semibold text-violet-300">A Barterverse product</p>
        </div>
      </div>
      <p className="mt-6 text-xl sm:text-2xl font-semibold text-white leading-snug">A privacy suite for your most sensitive data.</p>
      <p className="mt-3 max-w-2xl text-slate-300 text-base sm:text-lg leading-relaxed">
        Seal messages and files with strong encryption, keep secrets in an on-device vault, and audit how strong your passwords really are.
      </p>
      <ul className="mt-6 grid max-w-xl gap-3 text-slate-300 sm:grid-cols-3">
        <li className="flex items-center gap-2.5"><Fingerprint className="h-4 w-4 shrink-0 text-violet-300" />Seal</li>
        <li className="flex items-center gap-2.5"><Vault className="h-4 w-4 shrink-0 text-violet-300" />Vault</li>
        <li className="flex items-center gap-2.5"><ScanSearch className="h-4 w-4 shrink-0 text-violet-300" />Audit</li>
        <li className="flex items-center gap-2.5 sm:col-span-3"><ShieldCheck className="h-4 w-4 shrink-0 text-violet-300" />{OPERATOR}</li>
      </ul>
      <Link
        to="/vail"
        className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-violet-600 px-6 font-semibold text-white transition-colors hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-300"
      >
        Learn about VAIL
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </div>
  </article>
);

/** Home page: the products Barterverse builds and runs, with a link to the products page. */
const ProductsSection: React.FC = () => (
  <section className="py-16 sm:py-24 px-4 relative">
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-10 sm:mb-14 px-2">
        <div className="inline-flex items-center gap-2 text-cyan-400 font-black text-[9px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-4 sm:mb-6">
          <Boxes className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          Products
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold text-white font-grotesk tracking-tight leading-tight">Built and run by Barterverse</h2>
      </div>
      <div className="space-y-8">
        <TotelyCard />
        <VailCard />
      </div>
      <div className="mt-10 text-center">
        <Link to="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white">
          See all products
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </div>
  </section>
);

export default ProductsSection;
