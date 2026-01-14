
import React, { useState, useMemo, useEffect } from 'react';
import { getFinancialTip } from '../services/geminiService';

const Calculator: React.FC = () => {
  // Input State: Principal ($300 to $2,000)
  const [principal, setPrincipal] = useState<number>(1000);
  const [purpose, setPurpose] = useState<string>("Personal Use");
  
  // UI States
  const [aiTip, setAiTip] = useState<string>("");
  const [isLoadingTip, setIsLoadingTip] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  // Business Logic Calculations (Strictly as per rules)
  const calculations = useMemo(() => {
    // 1. Documentation Fee = Amount * 0.48
    const docFee = principal * 0.48;
    
    // 2. Interest = Amount * 0.12
    const interest = principal * 0.12;
    
    // 3. Total Repayment = Amount + Doc Fee + Interest
    const totalRepayment = principal + docFee + interest;

    // 4. Dynamic Repayment Frequency (Fortnightly terms based on amount)
    let fortnightsCount = 14;
    if (principal >= 300 && principal <= 950) {
      fortnightsCount = 14;
    } else if (principal >= 1000 && principal <= 1500) {
      fortnightsCount = 18;
    } else if (principal >= 1550 && principal <= 2000) {
      fortnightsCount = 20;
    }

    // 5. Fortnightly (F/N) Repayment amount
    const fortnightlyAmount = totalRepayment / fortnightsCount;

    return {
      docFee,
      interest,
      totalRepayment,
      fortnightsCount,
      fortnightlyAmount
    };
  }, [principal]);

  // Animation trigger for value updates
  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 200);
    return () => clearTimeout(timer);
  }, [principal]);

  const handleGetTip = async () => {
    setIsLoadingTip(true);
    const tip = await getFinancialTip(principal, purpose);
    setAiTip(tip);
    setIsLoadingTip(false);
  };

  const formatCurrency = (val: number) => 
    new Intl.NumberFormat('en-FJ', { 
      style: 'currency', 
      currency: 'FJD',
      minimumFractionDigits: 2 
    }).format(val);

  return (
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
          Suva's <span className="text-[#2A9D8F]">Instant Quote</span>
        </h2>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
          Transparent financing for your everyday needs. Clear figures and fixed repayments for your peace of mind.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Side: Inputs and Sliders */}
        <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.06)] border border-slate-100 flex flex-col justify-between">
          <div className="space-y-12">
            <div>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                <div className="space-y-1">
                  <label className="text-xl font-bold text-slate-800 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-[#2A9D8F] rounded-full"></span>
                    Desired Amount
                  </label>
                  <p className="text-sm text-slate-400 font-medium">Fiji Dollars (FJ$)</p>
                </div>
                <div className="relative">
                  <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 font-black text-xl">$</span>
                  <input 
                    type="number"
                    min="300"
                    max="2000"
                    value={principal}
                    onChange={(e) => setPrincipal(Math.min(2000, Math.max(0, Number(e.target.value))))}
                    onBlur={() => {
                      if (principal < 300) setPrincipal(300);
                      if (principal > 2000) setPrincipal(2000);
                    }}
                    className="pl-10 pr-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl w-full md:w-40 text-2xl font-black text-[#2A9D8F] focus:border-[#2A9D8F]/20 focus:bg-white outline-none transition-all shadow-inner"
                  />
                </div>
              </div>
              
              <div className="relative group pt-2 pb-6">
                <input 
                  type="range" 
                  min="300" 
                  max="2000" 
                  step="50"
                  value={principal}
                  onChange={(e) => setPrincipal(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-100 rounded-full appearance-none cursor-pointer accent-[#2A9D8F] transition-all"
                />
                <div className="flex justify-between mt-5 font-black text-[10px] text-slate-300 uppercase tracking-widest">
                  <span>$300</span>
                  <span className="text-[#2A9D8F] opacity-50">Drag to Adjust</span>
                  <span>$2,000</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="block text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Select Purpose</label>
                <div className="relative">
                  <select 
                    value={purpose}
                    onChange={(e) => setPurpose(e.target.value)}
                    className="w-full p-5 bg-slate-50 border-2 border-slate-100 rounded-2xl font-bold text-slate-700 focus:bg-white focus:border-[#2A9D8F]/30 outline-none appearance-none cursor-pointer"
                  >
                    <option>Personal Use</option>
                    <option>School Fees</option>
                    <option>Medical Emergency</option>
                    <option>Home Repair</option>
                    <option>Small Business</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <label className="block text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Auto-Calculated Term</label>
                <div className={`p-5 rounded-2xl border-2 transition-all duration-300 flex items-center justify-between shadow-sm ${isAnimating ? 'bg-[#2A9D8F]/5 border-[#2A9D8F]/20' : 'bg-slate-50 border-slate-100'}`}>
                   <span className="text-3xl font-black text-slate-900">{calculations.fortnightsCount}</span>
                   <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Fortnights</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 bg-slate-50 rounded-3xl border border-slate-100 flex items-center gap-5">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#2A9D8F] shadow-lg shrink-0">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <div className="flex-grow">
              <p className="text-slate-500 text-sm italic font-medium">
                {aiTip ? `"${aiTip}"` : `Thinking of a financial tip for your ${purpose} loan...`}
              </p>
            </div>
            <button onClick={handleGetTip} className="text-[#2A9D8F] font-black text-[10px] uppercase tracking-widest hover:underline shrink-0">
              {isLoadingTip ? '...' : 'Get Advice'}
            </button>
          </div>
        </div>

        {/* Right Side: Redesigned Summary Card (Replacing Lime Green with Teal) */}
        <div className="lg:col-span-5 flex flex-col h-full">
          <div className="bg-slate-900 rounded-[3rem] p-10 md:p-12 text-white shadow-2xl relative overflow-hidden flex flex-col justify-between h-full border border-white/5 group">
            {/* Background Polish (Using Teal Glow) */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#2A9D8F] opacity-[0.05] rounded-full -mr-40 -mt-40 blur-[100px] transition-opacity group-hover:opacity-10 duration-700"></div>
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-12">
                <div className="px-4 py-2 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#2A9D8F]">Loan Snapshot</span>
                </div>
                <div className="text-right">
                   <div className="flex items-center gap-2 text-[10px] font-black text-[#2A9D8F] uppercase tracking-widest">
                     <span className="w-2 h-2 rounded-full bg-[#2A9D8F] animate-pulse"></span>
                     Live Quote
                   </div>
                </div>
              </div>
              
              <div className="mb-14">
                <p className="text-slate-500 font-bold mb-3 text-xs uppercase tracking-[0.2em]">Fortnightly Installment</p>
                <div className={`text-7xl font-black tracking-tighter text-[#2A9D8F] transition-all duration-300 flex items-baseline gap-1 ${isAnimating ? 'scale-105 opacity-80' : 'scale-100 opacity-100'}`}>
                  <span className="text-4xl">$</span>
                  {calculations.fortnightlyAmount.toFixed(2)}
                </div>
                <p className="mt-4 text-slate-400 font-medium text-sm flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#2A9D8F]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
                  Payable every 14 days
                </p>
              </div>

              <div className="space-y-6 pt-10 border-t border-white/10 mb-12">
                <div className="flex justify-between items-center group/row">
                  <div className="flex flex-col">
                    <span className="text-slate-400 font-bold text-sm">Principal Sum</span>
                    <span className="text-[9px] text-slate-600 font-black uppercase tracking-widest group-hover/row:text-[#2A9D8F] transition-colors">Amount you receive</span>
                  </div>
                  <span className="font-bold text-slate-100 text-xl tracking-tight">{formatCurrency(principal)}</span>
                </div>
                <div className="flex justify-between items-center group/row">
                  <div className="flex flex-col">
                    <span className="text-slate-400 font-bold text-sm">Repayment Cycle</span>
                    <span className="text-[9px] text-slate-600 font-black uppercase tracking-widest group-hover/row:text-[#2A9D8F] transition-colors">Total installments</span>
                  </div>
                  <span className="font-bold text-slate-100 text-xl tracking-tight">{calculations.fortnightsCount} Payments</span>
                </div>
                <div className="flex justify-between items-center pt-8 border-t border-white/10 mt-4">
                  <div className="flex flex-col">
                    <span className="text-slate-500 font-black text-[10px] uppercase tracking-widest tracking-tight">Total Commitment</span>
                    <span className="text-white font-bold text-lg">Total Repayable</span>
                  </div>
                  <span className="text-4xl font-black text-[#2A9D8F] tracking-tighter">{formatCurrency(calculations.totalRepayment)}</span>
                </div>
              </div>
            </div>

            <div className="relative group/btn">
              <div className="absolute -inset-1 bg-[#2A9D8F] rounded-[1.5rem] blur-lg opacity-20 group-hover/btn:opacity-50 transition duration-500"></div>
              <button className="relative w-full py-6 bg-[#2A9D8F] hover:bg-[#238478] text-white text-2xl font-black rounded-[1.5rem] shadow-2xl transition-all hover:-translate-y-2 active:scale-95 uppercase tracking-tighter flex items-center justify-center gap-4">
                Apply for Loan
                <svg className="w-8 h-8 group-hover:translate-x-3 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
