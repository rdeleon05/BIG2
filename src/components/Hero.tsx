import React from 'react';
import { motion } from 'motion/react';
import { Anchor, Ship, Landmark, Sprout, TrendingUp } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Background imagery - Panama Canal + Skyscrapers */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img 
          src="https://picsum.photos/seed/panama-canal/1920/1080?blur=2" 
          alt="Panama Canal" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-zinc-500 uppercase tracking-[0.4em] text-xs font-bold mb-6 block">
            The Future of Panama is Here
          </span>
          <h1 className="text-6xl md:text-9xl font-light text-white mb-8 tracking-tighter leading-tight">
            <span className="font-mono">BIG</span> 2 <br />
            <span className="italic font-serif text-zinc-400">Visionary Capital</span>
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed mb-12">
            A daring private equity firm solving complex decisions to drive the growth of a New Panama. 
            Blending shipping finance, banking, and sustainable agriculture.
          </p>

          <div className="flex flex-wrap justify-center gap-12 mt-20">
            {[
              { icon: Ship, label: "Shipping Finance" },
              { icon: Landmark, label: "Banking & Fintech" },
              { icon: Sprout, label: "Agri-Tech" },
              { icon: TrendingUp, label: "National Growth" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + (i * 0.1) }}
                className="flex flex-col items-center gap-3 group cursor-pointer"
              >
                <div className="w-16 h-16 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-zinc-500 transition-all bg-zinc-900/50 backdrop-blur-sm">
                  <item.icon className="text-zinc-400 group-hover:text-white transition-colors" size={24} />
                </div>
                <span className="text-[10px] uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors font-bold">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <div className="w-[1px] h-20 bg-gradient-to-b from-transparent to-white" />
        <span className="text-[10px] uppercase tracking-widest text-white">Scroll</span>
      </div>
    </section>
  );
};
