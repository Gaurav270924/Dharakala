import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useReducedMotion, useInView } from '@/hooks/useScroll';

export function About({ onNavigate }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [40, -40]);

  return (
    <section ref={ref} id="about" className="bg-brand-cream py-24 md:py-40">
      <div className="container-edge">
        <p className="label-eyebrow text-brand-green mb-8">About</p>
        <motion.h2
          initial={reduce ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="fluid-section font-serif text-ink max-w-4xl mb-16 md:mb-24"
        >
          We believe<br />
          great places<br />
          <span className="italic">change people.</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="prose max-w-none">
              <p className="text-ink text-lg md:text-xl leading-relaxed mb-6 font-serif">
                Dharakala began with a simple conviction — that a building is finished not when the scaffolding comes down, but when the people inside it stop noticing it and start living in it.
              </p>
              <p className="text-ink-muted text-base md:text-lg leading-relaxed mb-6">
                For over twenty-five years we have worked as architects first and developers second. Every project starts on the site, not on the spreadsheet. We walk the ground, study the light, keep the trees, and only then do we draw.
              </p>
              <p className="text-ink-muted text-base md:text-lg leading-relaxed mb-10">
                Today our work spans residential, commercial, township, plotted and mixed-use developments across Lucknow, Delhi NCR and Varanasi — each one a place with its own character, built to age well and belong to where it stands.
              </p>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              data-cursor="hover"
              className="group inline-flex items-center gap-2 nav-link text-brand-green"
            >
              Our Story
              <ArrowRight size={16} strokeWidth={1.5} className="transition-transform duration-500 group-hover:translate-x-1" />
            </button>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2">
            <motion.div style={{ y }} className="relative aspect-[4/5] overflow-hidden rounded-sm bg-brand-beige">
              <img
                src="https://images.pexels.com/photos/7031591/pexels-photo-7031591.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Interior of a Dharakala residence — light, wood and concrete"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Journal({ journalEntries }) {
  const reduce = useReducedMotion();
  return (
    <section id="journal" className="bg-brand-tint py-24 md:py-36">
      <div className="container-edge">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <p className="label-eyebrow text-brand-green mb-5">Journal</p>
            <h2 className="fluid-section font-serif text-ink max-w-2xl">
              Notes on<br />
              <span className="italic">making places.</span>
            </h2>
          </div>
          <p className="max-w-xs text-ink-muted text-sm leading-relaxed">
            Writing on architecture, cities, materials and the slow craft of building.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
          {journalEntries.map((entry, i) => (
            <JournalCard key={entry.id} entry={entry} index={i} reduce={reduce} />
          ))}
        </div>
      </div>
    </section>
  );
}

function JournalCard({ entry, index, reduce }) {
  const { ref, inView } = useInView();
  return (
    <motion.a
      ref={ref}
      href="#"
      data-cursor="view"
      initial={reduce ? false : { opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group block"
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-brand-beige mb-6">
        <img
          src={entry.image}
          alt={entry.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1.4s] ease-smooth group-hover:scale-105"
        />
      </div>
      <div className="flex items-center gap-4 mb-3">
        <span className="label-eyebrow text-brand-green">Journal / {entry.number}</span>
        <span className="h-px flex-1 bg-line" />
        <span className="label-eyebrow text-ink-muted">{entry.category}</span>
      </div>
      <h3 className="fluid-title font-serif text-ink mb-3 group-hover:text-brand-green transition-colors duration-500">
        {entry.title}
      </h3>
      <p className="text-ink-muted text-sm md:text-base leading-relaxed mb-4 max-w-md">{entry.excerpt}</p>
      <span className="inline-flex items-center gap-2 nav-link text-brand-green">
        Read Article
        <ArrowUpRight size={14} strokeWidth={1.5} className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </span>
    </motion.a>
  );
}
