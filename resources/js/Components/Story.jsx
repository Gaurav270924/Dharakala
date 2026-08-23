import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useReducedMotion, useInView } from '@/hooks/useScroll';

export function Manifesto({ manifestoPrinciples }) {
  const reduce = useReducedMotion();
  return (
    <section id="manifesto" className="bg-brand-cream py-24 md:py-40">
      <div className="container-edge">
        <p className="label-eyebrow text-brand-green mb-8">The Way We Build</p>
        <h2 className="fluid-section font-serif text-ink max-w-4xl mb-16 md:mb-28">
          We begin with<br />
          <span className="italic">a place,</span> not a plan.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {manifestoPrinciples.map((p, i) => (
            <ManifestoItem key={p.key} index={i} title={p.title} text={p.text} reduce={reduce} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ManifestoItem({ index, title, text, reduce }) {
  const { ref, inView } = useInView();
  return (
    <motion.div
      ref={ref}
      initial={reduce ? false : { opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="border-t border-line pt-8"
    >
      <h3 className="font-serif text-4xl md:text-5xl text-brand-green mb-4">{title}</h3>
      <p className="text-ink-muted text-base md:text-lg leading-relaxed max-w-md">{text}</p>
    </motion.div>
  );
}

export function Numbers({ stats }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -80]);

  return (
    <section ref={ref} className="relative bg-brand-green py-24 md:py-36 overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute inset-0 opacity-[0.04]">
        <img src="https://images.pexels.com/photos/15663488/pexels-photo-15663488.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className="h-full w-full object-cover" />
      </motion.div>
      <div className="relative container-edge">
        <p className="label-eyebrow text-brand-cream/70 mb-12 md:mb-16">By the Numbers</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 md:gap-y-24 gap-x-12">
          {stats.map((s, i) => (
            <StatItem key={s.id} stat={s} index={i} reduce={reduce} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatItem({ stat, index, reduce }) {
  const { ref, inView } = useInView();
  return (
    <motion.div
      ref={ref}
      initial={reduce ? false : { opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={index % 2 === 1 ? 'md:pt-16' : ''}
    >
      <div className="flex items-baseline">
        <Counter value={stat.value} inView={inView} reduce={reduce} />
        <span className="fluid-stat font-serif text-brand-cream/90">{stat.suffix}</span>
      </div>
      <p className="label-eyebrow text-brand-cream/70 mt-4">{stat.label}</p>
    </motion.div>
  );
}

function Counter({ value, inView, reduce }) {
  const ref = useRef(null);
  const duration = 1500;
  const startRef = useRef(0);

  if (inView && !reduce && ref.current && !startRef.current) {
    startRef.current = performance.now();
    const tick = (now) => {
      const t = Math.min((now - startRef.current) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      if (ref.current) ref.current.textContent = String(Math.round(eased * value));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  } else if (ref.current) {
    ref.current.textContent = String(value);
  }

  return <span ref={ref} className="fluid-stat font-serif text-brand-cream">{inView ? '' : '0'}</span>;
}

export function Interlude() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1.15, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0.4, 1, 1, 0.6]);

  return (
    <section ref={ref} className="relative h-[70svh] min-h-[420px] w-full overflow-hidden bg-brand-deep">
      <motion.div style={{ scale, opacity }} className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/966927/pexels-photo-966927.jpeg?auto=compress&cs=tinysrgb&w=2000"
          alt="Architectural detail — form, light and space"
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-brand-deep/20" />
      <div className="relative h-full flex items-center justify-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="label-eyebrow text-brand-cream/90 tracking-widest2"
        >
          Form / Light / Space
        </motion.p>
      </div>
    </section>
  );
}
