import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Founder } from './components/Founder';
import { InvestmentFocus } from './components/InvestmentFocus';
import { ImageAnalyzer } from './components/ImageAnalyzer';
import { ChatBot } from './components/ChatBot';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <h3 className="text-white font-bold text-2xl mb-6 tracking-tighter">
              <span className="font-mono">BIG</span> 2
            </h3>
            <p className="text-zinc-500 max-w-sm text-sm leading-relaxed mb-8">
              A premier private equity firm dedicated to the strategic growth of Panama. 
              Solving complex decisions through visionary capital and maritime expertise.
            </p>
            <div className="flex gap-4">
              <a href="https://linkedin.com/in/rodolfo-de-leon-56330ab" target="_blank" className="text-zinc-500 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium text-sm mb-6 uppercase tracking-widest">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-zinc-500 text-sm">
                <Mail size={16} />
                <a href="mailto:chartering@bigbulkers.com" className="hover:text-white transition-colors">chartering@bigbulkers.com</a>
              </li>
              <li className="flex items-center gap-3 text-zinc-500 text-sm">
                <Phone size={16} />
                <span>+507 6545-6011</span>
              </li>
              <li className="flex items-center gap-3 text-zinc-500 text-sm">
                <MapPin size={16} />
                <span>Panama City, Republic of Panama</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium text-sm mb-6 uppercase tracking-widest">Legal</h4>
            <ul className="space-y-4">
              {['Privacy Policy', 'Terms of Service', 'Investment Disclosure'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-zinc-500 text-sm hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-600 text-[10px] uppercase tracking-widest font-bold">
            © 2026 BIG 2 PRIVATE EQUITY. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-8">
            <span className="text-zinc-600 text-[10px] uppercase tracking-widest font-bold">Designed for the New Panama</span>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 text-xs uppercase tracking-widest"
            >
              Back to top <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />
      
      <main>
        <Hero />
        
        <section id="insights" className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-zinc-900/30 border border-zinc-800 rounded-[40px] p-12 md:p-20 text-center">
              <span className="text-zinc-500 uppercase tracking-[0.3em] text-[10px] font-bold mb-6 block">
                The BIG 2 Advantage
              </span>
              <h2 className="text-4xl md:text-6xl font-light text-white mb-8 tracking-tighter leading-tight">
                Solving the most <span className="italic font-serif text-zinc-400">complex decisions</span> <br />
                to unlock national prosperity.
              </h2>
              <p className="text-zinc-500 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                We don't just invest; we architect the future. Our approach combines deep maritime 
                intelligence with a commitment to Panama's sovereign growth.
              </p>
            </div>
          </div>
        </section>

        <InvestmentFocus />
        
        <Founder />

        <section className="py-32 bg-zinc-950 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <span className="text-zinc-500 uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">
                AI Intelligence
              </span>
              <h2 className="text-5xl md:text-7xl font-light text-white tracking-tighter">
                Project Analysis
              </h2>
            </div>
            <ImageAnalyzer />
          </div>
        </section>

        <section id="contact" className="py-32 bg-black px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl md:text-8xl font-light text-white mb-12 tracking-tighter">
              Ready to build the <br />
              <span className="italic font-serif text-zinc-400">New Panama?</span>
            </h2>
            <p className="text-zinc-500 text-xl font-light mb-12">
              Join us in our mission to reinvest profits into the growth of Panama as a country.
            </p>
            <button className="bg-white text-black px-12 py-6 rounded-full text-sm font-bold uppercase tracking-[0.2em] hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95">
              Contact Rodolfo De León
            </button>
          </div>
        </section>
      </main>

      <Footer />
      <ChatBot />
    </div>
  );
}
