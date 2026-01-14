
import React from 'react';

const Requirements: React.FC = () => {
  const docs = [
    { title: "Valid ID", desc: "Joint Card, Passport, or Driver's License.", icon: "🪪" },
    { title: "Recent Payslip", desc: "Two of your most recent consecutive payslips.", icon: "📄" },
    { title: "Utility Bill", desc: "Water or EFL bill under your name (past 3 months).", icon: "🏠" },
    { title: "Bank Statement", desc: "3-month statement showing regular income.", icon: "🏦" }
  ];

  return (
    <section id="requirements" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">What You'll Need</h2>
          <p className="text-slate-600 text-lg">
            We keep our process straightforward. To apply for <span className="font-semibold">fast cash in Fiji</span>, please have the following documents ready:
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6">
          {docs.map((doc, i) => (
            <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-[#2A9D8F] transition-all group">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">
                {doc.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">{doc.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{doc.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-[#2A9D8F]/5 rounded-3xl border border-[#2A9D8F]/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h4 className="font-bold text-slate-900 text-xl mb-1">Ready to start your application?</h4>
            <p className="text-slate-600">Bring these to our Victoria Parade office or apply online.</p>
          </div>
          <button className="px-8 py-3 bg-[#2A9D8F] text-white font-bold rounded-xl shadow-lg hover:shadow-[#2A9D8F]/30 transition-all">
            Start Application
          </button>
        </div>
      </div>
    </section>
  );
};

export default Requirements;
