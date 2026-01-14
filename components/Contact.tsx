
import React from 'react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-50 border-t border-slate-200 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-[#2A9D8F] rounded flex items-center justify-center shadow">
                <span className="text-white font-bold">O</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Ontime<span className="text-[#99C24D]">Finance</span>
              </span>
            </div>
            <p className="text-slate-500 max-w-sm mb-6">
              Fast, reliable financing solutions for the residents and businesses of Suva, Fiji. Regulated and trusted.
            </p>
            <div className="flex space-x-4">
              {['FB', 'IG', 'LI'].map((social) => (
                <div key={social} className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#2A9D8F] hover:border-[#2A9D8F] cursor-pointer transition-all">
                  <span className="text-xs font-bold">{social}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h5 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-xs">Contact Us</h5>
            <ul className="space-y-4 text-slate-600">
              <li className="flex items-start gap-3">
                <span className="text-[#2A9D8F]">📍</span>
                123 Victoria Parade,<br />Suva City, Fiji
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#2A9D8F]">📞</span>
                +679 333 4444
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#2A9D8F]">✉️</span>
                hello@ontimefinance.com.fj
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-xs">Working Hours</h5>
            <ul className="space-y-4 text-slate-600">
              <li>Mon - Fri: 8:00 AM - 4:30 PM</li>
              <li>Sat: 9:00 AM - 1:00 PM</li>
              <li>Sun: Closed</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p>© 2024 Ontime Finance Fiji. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-600">Privacy Policy</a>
            <a href="#" className="hover:text-slate-600">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
