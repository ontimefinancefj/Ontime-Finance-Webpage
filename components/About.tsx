
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6">Why Choose <span className="text-[#99C24D]">Ontime Finance</span>?</h2>
            <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
              <p>
                We aren't just a business; we're your neighbors. Based right here in <span className="text-white font-semibold">Suva City</span>, we understand the unique heartbeat of Fiji. We know that when you're looking for <span className="text-[#99C24D]">loans in Suva</span>, you're looking for a face you can trust and a partner who understands the local context.
              </p>
              <p>
                From the bustling markets of Nabua to the offices in Victoria Parade, we've seen it all. Our roots in Suva mean we don't just look at numbers on a screen; we look at the person behind the application. We believe in providing <span className="italic">timely financial relief</span> with the dignity you deserve.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <h4 className="text-[#99C24D] font-bold text-2xl mb-1">100%</h4>
                  <p className="text-sm">Locally Owned & Operated</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <h4 className="text-[#99C24D] font-bold text-2xl mb-1">Suva</h4>
                  <p className="text-sm">Central City Headquarters</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
             <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
               <img src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&q=80&w=800" alt="Suva Street Life" className="w-full h-auto object-cover aspect-[4/3]" />
             </div>
             <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-[#99C24D] rounded-full blur-3xl opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
