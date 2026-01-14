
import React from 'react';

interface HeaderProps {
  onCalcClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCalcClick }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200/50">
      <div className="container mx-auto px-4 h-24 flex items-center justify-between">
        <div className="flex items-center space-x-3 group cursor-pointer">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#2A9D8F] to-[#99C24D] rounded-xl blur opacity-25 group-hover:opacity-60 transition duration-300"></div>
            <div className="relative w-12 h-12 bg-[#2A9D8F] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <span className="text-white font-black text-2xl italic tracking-tighter">O</span>
            </div>
          </div>
          <span className="text-2xl font-black tracking-tighter text-slate-900">
            Ontime<span className="text-[#99C24D]">Finance</span>
          </span>
        </div>

        <nav className="hidden lg:flex items-center space-x-10">
          {['Home', 'Why Us', 'Requirements', 'FAQ'].map((item) => (
            <a 
              key={item}
              href={item === 'Home' ? '#' : `#${item.toLowerCase().replace(' ', '')}`} 
              className="text-sm font-black uppercase tracking-[0.2em] text-slate-500 hover:text-[#2A9D8F] transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2A9D8F] transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex flex-col items-end">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Local Help</p>
            <p className="text-sm font-black text-slate-900">+679 333 4444</p>
          </div>
          <button 
            onClick={onCalcClick}
            className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-[0.2em] transition-all shadow-xl shadow-slate-900/10 active:scale-95"
          >
            Calculator
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
