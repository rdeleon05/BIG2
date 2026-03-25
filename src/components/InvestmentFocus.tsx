import React from 'react';
import { motion } from 'motion/react';
import { Ship, Landmark, Sprout, Building2, Globe2 } from 'lucide-react';

export const InvestmentFocus: React.FC = () => {
  const sectors = [
    {
      title: "Shipping Finance",
      icon: Ship,
      desc: "Leveraging Panama's strategic position as the world's maritime hub. We finance the vessels that move global trade.",
      image: "https://picsum.photos/seed/shipping/800/600"
    },
    {
      title: "Banking & Fintech",
      icon: Landmark,
      desc: "Modernizing the financial backbone of Central America through strategic capital and digital innovation.",
      image: "https://picsum.photos/seed/banking/800/600"
    },
    {
      title: "Sustainable Agri-Tech",
      icon: Sprout,
      desc: "Investing in the future of food security. Modernizing rice harvests and agricultural supply chains in Panama.",
      image: "https://picsum.photos/seed/harvest/800/600"
    },
    {
      title: "Urban Development",
      icon: Building2,
      desc: "Shaping the skyline of the New Panama. High-yield real estate and infrastructure projects.",
      image: "https://picsum.photos/seed/skyscrapers/800/600"
    }
  ];

  return (
    <section id="strategy" className="py-32 bg-black px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-zinc-500 uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">
            Our Strategic Pillars
          </span>
          <h2 className="text-5xl md:text-7xl font-light text-white tracking-tighter">
            Investing in the <br />
            <span className="italic font-serif text-zinc-400">New Panama</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-zinc-900 border border-zinc-900">
          {sectors.map((sector, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="group relative bg-black p-12 overflow-hidden"
            >
              <div className="relative z-10">
                <sector.icon className="text-zinc-500 mb-8 group-hover:text-white transition-colors" size={40} />
                <h3 className="text-3xl font-light text-white mb-4 tracking-tight">{sector.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed max-w-sm group-hover:text-zinc-300 transition-colors">
                  {sector.desc}
                </p>
              </div>
              
              {/* Hover Image Reveal */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700">
                <img 
                  src={sector.image} 
                  alt={sector.title} 
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
