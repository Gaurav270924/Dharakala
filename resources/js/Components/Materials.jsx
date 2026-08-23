import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useScroll';

export default function Materials({ materials }) {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const current = materials[active];

  return (
    <section id="materials" className="relative bg-brand-cream py-24 md:py-36">
      <div className="container-edge">
        <p className="label-eyebrow text-brand-green mb-6">Materials of Place</p>
        <h2 className="fluid-section font-serif text-ink max-w-3xl mb-12 md:mb-16">
          What a place<br />
          <span className="italic">is made of.</span>
        </h2>
      </div>

      <div className="relative h-[60svh] min-h-[360px] w-full overflow-hidden bg-brand-deep">
        <AnimatePresence mode="wait">
          <motion.img
            key={active}
            src={current.image}
            alt={current.name}
            initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/80 via-brand-deep/20 to-transparent" />

        <div className="relative h-full flex flex-col justify-end">
          <div className="container-edge pb-10 md:pb-14">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="max-w-md"
              >
                <h3 className="font-serif text-3xl md:text-4xl text-brand-cream mb-3">{current.name}</h3>
                <p className="text-brand-cream/80 text-sm md:text-base leading-relaxed">{current.description}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="container-edge mt-10 md:mt-14">
        <div className="flex flex-wrap gap-2 md:gap-3">
          {materials.map((m, i) => (
            <button
              key={m.name}
              onClick={() => setActive(i)}
              data-cursor="hover"
              className={`nav-link px-5 py-3 rounded-full border transition-all duration-500 ${
                active === i
                  ? 'bg-brand-green border-brand-green text-brand-cream'
                  : 'border-line text-ink-muted hover:border-ink hover:text-ink'
              }`}
            >
              {m.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
