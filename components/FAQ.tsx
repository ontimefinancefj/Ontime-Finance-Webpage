
import React from 'react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      q: "What happens if I'm late on a payment?",
      a: "We understand that unexpected things happen. We offer a generous 7-day Grace Period for all our clients. If payment is received after this period, a late fee of 5% of the installment amount will apply."
    },
    {
      q: "How long does the approval process take?",
      a: "For most Suva-based employees, we can provide a decision within 2 to 4 hours of receiving all required documentation."
    },
    {
      q: "Can I repay my loan earlier?",
      a: "Yes! We encourage financial freedom. You can settle your loan early with zero penalty fees, saving you on interest."
    },
    {
      q: "Is Ontime Finance regulated?",
      a: "Absolutely. We are a registered money lender in Fiji, adhering to all local financial regulations and ethical lending practices."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-600">Everything you need to know about our lending process.</p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-start gap-3">
                <span className="text-[#2A9D8F]">Q.</span>
                {faq.q}
              </h4>
              <p className="text-slate-600 leading-relaxed pl-7">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-slate-500 italic">
            Have more questions? Visit us at our Victoria Parade branch or call <span className="text-[#2A9D8F] font-bold">+679 333 4444</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
