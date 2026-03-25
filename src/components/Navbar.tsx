import React from 'react';
import { Logo } from './Logo';
import { motion } from 'motion/react';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-zinc-900 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Logo className="w-10 h-10" />
          <div className="flex flex-col">
            <span className="text-white font-bold tracking-tighter text-xl leading-none">
              <span className="font-mono">BIG</span> 2
            </span>
            <span className="text-zinc-500 text-[10px] uppercase tracking-widest font-medium">
              Private Equity
            </span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {['Strategy', 'Founder', 'Insights', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-zinc-400 hover:text-white text-sm font-medium transition-colors uppercase tracking-widest"
            >
              {item}
            </a>
          ))}
        </div>

        <button className="bg-white text-black px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-zinc-200 transition-all">
          Invest Now
        </button>
      </div>
    </nav>
  );
};
