import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useInView, useReducedMotion } from '@/hooks/useScroll';

export default function OurVentures({ ventures }) {
  const reduce = useReducedMotion();
  return (
    <section id="ventures" className="bg-brand-cream py-24 md:py-36">
      <div className="container-edge">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="label-eyebrow text-brand-green mb-5">Our Ventures</p>
        </motion.div>

        <motion.h2
          initial={reduce ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="fluid-section font-serif text-ink max-w-3xl mb-8"
        >
          Beyond<br />
          <span className="italic">Spaces.</span>
        </motion.h2>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-md text-ink-muted text-sm md:text-base leading-relaxed mb-16 md:mb-24"
        >
          Exploring ideas, disciplines and experiences that extend beyond real estate.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {ventures.map((v, i) => (
            <VentureCard key={v.number} venture={v} index={i} reduce={reduce} />
          ))}
        </div>
      </div>
    </section>
  );
}

function VentureCard({ venture, index, reduce }) {
  const { ref, inView } = useInView();
  const isGreen = venture.accent === 'green';

  return (
    <motion.a
      ref={ref}
      href={venture.url}
      target="_blank"
      rel="noopener noreferrer"
      data-cursor="view"
      initial={reduce ? false : { opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: 0.3 + index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="group block relative aspect-[4/5] md:aspect-[16/13] overflow-hidden rounded-sm bg-brand-deep"
    >
      <img
        src={venture.image}
        alt={`${venture.title} — ${venture.category}`}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[800ms] ease-smooth group-hover:scale-[1.04]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/90 via-brand-deep/30 to-brand-deep/10 transition-opacity duration-700 group-hover:from-brand-deep/95" />

      <div className="absolute top-6 left-6 md:top-8 md:left-8 flex items-start gap-4">
        <span className="font-serif text-5xl md:text-6xl text-brand-cream/30 transition-colors duration-700 group-hover:text-brand-cream/45">
          {venture.number}
        </span>
      </div>

      <div className="absolute top-6 right-6 md:top-8 md:right-8">
        <span className="label-eyebrow text-brand-cream/70 transition-all duration-700 group-hover:text-brand-cream group-hover:tracking-[0.32em]">
          {venture.category}
        </span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 transition-transform duration-700 ease-smooth group-hover:-translate-y-1">
        <h3 className="fluid-title font-serif text-brand-cream mb-3 transition-colors duration-500">
          {venture.title}
        </h3>
        <p className="text-brand-cream/80 text-sm md:text-base leading-relaxed mb-5 max-w-sm">
          {venture.description}
        </p>
        <span className="inline-flex items-center gap-2 nav-link text-brand-cream">
          Visit Project
          <ArrowUpRight size={16} strokeWidth={1.5} className="transition-transform duration-700 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </span>
      </div>

      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none ${
        isGreen ? 'bg-brand-green/10' : 'bg-brand-deep/20'
      }`} />
    </motion.a>
  );
}
