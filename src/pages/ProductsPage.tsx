import React from 'react';
import { Boxes } from 'lucide-react';
import { TotelyCard, VailCard } from '../components/Products';

/** Every product Barterverse Technologies Ltd builds and operates. */
const ProductsPage: React.FC = () => (
  <div className="bg-[#020617] min-h-screen relative pt-32 pb-20 px-4 sm:px-6 overflow-hidden text-slate-300">
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div className="absolute top-[5%] left-[-10%] w-[600px] h-[600px] bg-cyan-500/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-violet-600/5 blur-[140px] rounded-full" />
    </div>
    <div className="max-w-7xl mx-auto relative z-10">
      <header className="max-w-3xl mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 text-cyan-400 font-black text-[10px] uppercase tracking-[0.4em] mb-6">
          <Boxes className="w-4 h-4" />
          Products
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold text-white font-grotesk tracking-tight leading-tight">Products by Barterverse</h1>
        <p className="mt-6 text-lg sm:text-xl text-slate-400 font-light leading-relaxed">
          Barterverse Technologies Ltd (RC 9346924), Abuja, Nigeria, builds and runs these products. Each has its own name and brand; all are operated by
          Barterverse.
        </p>
      </header>
      <div className="space-y-8">
        <TotelyCard />
        <VailCard />
      </div>
    </div>
  </div>
);

export default ProductsPage;
