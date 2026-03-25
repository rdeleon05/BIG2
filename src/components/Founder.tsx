import React from 'react';
import { motion } from 'motion/react';
import { Award, GraduationCap, Briefcase, Globe, ShieldCheck } from 'lucide-react';

export const Founder: React.FC = () => {
  return (
    <section id="founder" className="py-32 bg-zinc-950 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-3xl overflow-hidden border border-zinc-800 grayscale hover:grayscale-0 transition-all duration-700">
              <img 
                src="https://media.licdn.com/dms/image/v2/C4E03AQE_9_9_9_9_9/profile-displayphoto-shrink_800_800/0/1651234567890?e=1716422400&v=beta&t=example" 
                alt="Rodolfo De León" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://picsum.photos/seed/founder/800/1200";
                }}
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-3xl hidden md:block">
              <h3 className="text-black font-mono text-4xl font-bold leading-none">RUDY</h3>
              <p className="text-zinc-500 text-xs uppercase tracking-widest mt-2">Founder & CEO</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <span className="text-zinc-500 uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">
                The Architect of Growth
              </span>
              <h2 className="text-5xl md:text-7xl font-light text-white mb-8 tracking-tighter">
                Rodolfo De León
              </h2>
              <p className="text-zinc-400 text-lg font-light leading-relaxed">
                A Deep Sea Freight Analyst and visionary leader with a Master in Science in Transport and Maritime Management from the University of Antwerp. 
                Rodolfo "Rudy" De León founded BIG 2 to solve the most complex decisions in Panama's emerging markets.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {[
                { icon: GraduationCap, title: "Academic Excellence", desc: "US Merchant Marine Academy & University of Antwerp" },
                { icon: Briefcase, title: "Maritime Authority", desc: "Former Trade Manager at Höegh Autoliners" },
                { icon: Award, title: "Decorated Leader", desc: "US Merchant Marine Expeditionary Award" },
                { icon: ShieldCheck, title: "Strategic Precision", desc: "2nd Deck Officer Unlimited Tonnage" }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1">
                    <item.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm mb-1">{item.title}</h4>
                    <p className="text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-zinc-900 flex flex-wrap gap-4">
              {['#ResultDriven', '#DecisionMaking', '#GlobalMarkets', '#Agile', '#Bold'].map((tag) => (
                <span key={tag} className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest border border-zinc-800 px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
