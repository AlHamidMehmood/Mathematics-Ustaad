import { motion } from 'motion/react';
import { BookOpen, Compass, Eye, Zap } from 'lucide-react';

export default function Philosophy() {
  return (
    <div id="philosophy-page" className="bg-white min-h-screen py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div id="philosophy-header" className="mb-20 lg:mb-32 text-center max-w-4xl mx-auto">
          <span id="philosophy-label" className="font-sans text-[10px] font-bold tracking-widest uppercase text-academic-accent mb-4 block">
            Our Method
          </span>
          <h1 id="philosophy-title" className="font-sans text-4xl sm:text-6xl lg:text-8xl font-bold uppercase mb-8 lg:mb-12 leading-[0.9] tracking-tighter">
            The Art of <br />
            <span id="philosophy-accent-title" className="text-academic-accent italic font-serif lowercase">Intuition.</span>
          </h1>
          <p id="philosophy-quote" className="font-serif text-xl lg:text-2xl text-academic-gray-dark leading-relaxed italic">
            "Mathematics is not a collection of rules to be followed, but a landscape to be explored. We provide the map and the lens."
          </p>
        </div>

        {/* Core Pillars */}
        <div id="visual-first-section" className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center mb-24 lg:mb-40">
          <div id="visual-first-content">
            <h2 id="visual-first-title" className="font-sans text-3xl lg:text-5xl font-bold uppercase mb-8 leading-tight">
              Visual <br />First.
            </h2>
            <div id="visual-first-text" className="space-y-8 font-serif text-lg text-academic-gray-dark leading-relaxed">
              <p id="visual-first-p1">
                Traditional mathematics education often starts with abstract symbols. We believe this is backwards. The human brain is optimized for spatial reasoning and pattern recognition.
              </p>
              <p id="visual-first-p2">
                Our "Visual First" approach anchors every theorem in a geometric reality. Before we write a single line of algebra, we ensure you can "see" the concept in your mind's eye.
              </p>
              <div id="visual-first-quote-box" className="p-6 lg:p-8 bg-academic-bg border-l-4 border-academic-accent">
                <p id="visual-first-quote-text" className="italic text-academic-ink">
                  "A proof is only complete when it is understood visually. Algebra is just the bookkeeping."
                </p>
              </div>
            </div>
          </div>
          <div id="visual-first-visual" className="relative aspect-square bg-academic-accent/5 flex items-center justify-center overflow-hidden">
             <div id="visual-first-pattern" className="absolute inset-0 geometric-pattern opacity-20" />
             <motion.div 
               id="visual-first-animation"
               animate={{ rotate: 360 }}
               transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
               className="w-64 h-64 border border-academic-accent/20 rounded-full flex items-center justify-center"
             >
               <div id="animation-circle-inner" className="w-48 h-48 border-2 border-academic-accent/40 rounded-full" />
               <div id="animation-line-h" className="absolute w-full h-px bg-academic-accent/10" />
               <div id="animation-line-v" className="absolute h-full w-px bg-academic-accent/10" />
             </motion.div>
          </div>
        </div>

        {/* The Four Pillars */}
        <div id="four-pillars-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-40">
          {[
            { id: "pillar-clarity", icon: Eye, title: "Clarity", desc: "Stripping away the jargon to reveal the core logical structure." },
            { id: "pillar-context", icon: Compass, title: "Context", desc: "Understanding the historical and practical origins of every concept." },
            { id: "pillar-impact", icon: Zap, title: "Impact", desc: "Focusing on the mathematics that drives real-world innovation." },
            { id: "pillar-rigour", icon: BookOpen, title: "Rigour", desc: "Never sacrificing mathematical truth for the sake of simplicity." }
          ].map((pillar, i) => (
            <motion.div 
              key={i}
              id={pillar.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div id={`${pillar.id}-icon-container`} className="w-16 h-16 bg-academic-accent/5 rounded-full flex items-center justify-center mx-auto mb-8 border border-academic-gray">
                <pillar.icon className="text-academic-accent" size={24} />
              </div>
              <h4 id={`${pillar.id}-title`} className="font-sans font-bold text-xs tracking-widest uppercase mb-4">{pillar.title}</h4>
              <p id={`${pillar.id}-desc`} className="font-serif text-sm text-academic-gray-dark leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Final Statement */}
        <div id="philosophy-cta-section" className="max-w-4xl mx-auto text-center py-20 lg:py-32 border-t border-academic-gray">
          <h3 id="philosophy-cta-title" className="font-sans text-3xl sm:text-4xl font-bold uppercase mb-8">Join the Collective.</h3>
          <p id="philosophy-cta-description" className="font-serif text-lg lg:text-xl text-academic-gray-dark mb-12">
            We are more than a school. We are a community of lifelong learners dedicated to the pursuit of mathematical beauty.
          </p>
          <button id="philosophy-cta-button" className="w-full sm:w-auto px-12 py-6 bg-academic-accent text-white font-sans text-sm font-bold tracking-widest uppercase hover:bg-academic-accent-light transition-all">
            Begin Your Journey
          </button>
        </div>
      </div>
    </div>
  );
}
