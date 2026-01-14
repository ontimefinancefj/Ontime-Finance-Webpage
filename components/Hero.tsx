
import React from 'react';

interface HeroProps {
  onCalcClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCalcClick }) => {
  return (
    <section className="relative overflow-hidden bg-white pt-20 pb-32 lg:pt-32 lg:pb-48">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-[#99C24D]/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#2A9D8F]/5 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 mb-8 text-[11px] font-black tracking-[0.2em] text-[#2A9D8F] uppercase bg-[#2A9D8F]/5 rounded-full border border-[#2A9D8F]/10">
            <span className="w-2 h-2 rounded-full bg-[#2A9D8F] animate-pulse"></span>
            Fiji's Premier Choice Since 2018
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[1.05] mb-8 tracking-tighter">
            Fast, Reliable <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2A9D8F] via-[#2A9D8F] to-[#99C24D]">
              Financing for Suva.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-500 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            Get the funds you need, when you need them. <br className="hidden md:block" />
            Empathetic local service with <span className="text-slate-900 font-bold">transparent rates</span> you can trust.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={onCalcClick}
              className="w-full sm:w-auto px-12 py-5 bg-[#2A9D8F] hover:bg-[#238478] text-white text-xl font-black rounded-2xl shadow-[0_20px_40px_-10px_rgba(42,157,143,0.3)] transition-all hover:-translate-y-2 active:scale-95 uppercase tracking-tight"
            >
              Calculate Your Loan
            </button>
            <a 
              href="#requirements"
              className="w-full sm:w-auto px-12 py-5 bg-white hover:bg-slate-50 text-slate-700 text-xl font-black rounded-2xl border-2 border-slate-100 transition-all hover:-translate-y-1 shadow-sm uppercase tracking-tight"
            >
              Requirements
            </a>
          </div>
        </div>
      </div>
      
      {/* Visual Component: Floating elements or high-quality image mask */}
      <div className="mt-24 container mx-auto px-4 relative">
        <div className="relative max-w-6xl mx-auto group">
          <div className="absolute -inset-4 bg-gradient-to-r from-[#2A9D8F] to-[#99C24D] rounded-[3rem] blur-2xl opacity-10 group-hover:opacity-20 transition duration-700"></div>
          <div className="relative aspect-[21/9] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src="https://images.unsplash.com/photo-1596422846543-75c6fc18a5ce?auto=format&fit=crop&q=80&w=1600" 
              alt="Suva City" 
              className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-10 left-10 text-left">
               <p className="text-white/80 font-bold text-lg uppercase tracking-widest">Headquarters</p>
               <h3 className="text-white text-3xl font-black">Victoria Parade, Suva</h3>
            </div>
          </div>
          
          {/* Floating stat badges */}
          <div className="absolute -top-10 -right-10 hidden lg:block p-6 bg-white rounded-3xl shadow-2xl border border-slate-50 rotate-3 animate-float">
             <div className="flex items-center gap-4">
               <div className="w-12 h-12 bg-[#99C24D]/20 text-[#99C24D] rounded-2xl flex items-center justify-center">
                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
               </div>
               <div>
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Speed</p>
                 <p className="text-lg font-black text-slate-800">4hr Approval</p>
               </div>
             </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(3deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
      `}} />
    </section>
  );
};

export default Hero;
