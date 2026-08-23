import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useScroll';

export default function Hero({ onExplore }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1, 1.12]);
  const yText = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const labelY = useTransform(scrollYProgress, [0, 0.3], [0, -40]);

  return (
    <section ref={ref} id="hero" className="relative h-[100svh] w-full overflow-hidden bg-brand-deep">
      <motion.div style={{ scale }} className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          aria-label="Dharakala architecture"
          className="h-full w-full object-cover"
        >
          <source src="/images/Home.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-deep/50 via-brand-deep/30 to-brand-deep/70" />
        <div className="absolute inset-0 bg-brand-deep/20" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative h-full flex flex-col">
        <motion.div
          style={{ y: labelY }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="container-edge pt-28 md:pt-32"
        >
          <p className="label-eyebrow text-brand-cream/80">A Collection of Places</p>
        </motion.div>

        <div className="flex-1 flex items-center">
          <motion.div style={{ y: yText }} className="container-edge">
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="fluid-hero font-serif text-brand-cream"
              >
                Made for
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="fluid-hero font-serif italic text-brand-cream"
              >
                Living.
              </motion.h1>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="container-edge pb-10 md:pb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <p className="max-w-sm text-brand-cream/80 text-sm md:text-base leading-relaxed">
            We are a design-led developer building residential, commercial and township projects across India — places made to outlast their own trend.
          </p>
          <button
            onClick={onExplore}
            data-cursor="hover"
            className="group flex items-center gap-3 self-start md:self-auto"
          >
            <span className="nav-link text-brand-cream">Explore the Collection</span>
            <span className="w-10 h-10 rounded-full border border-brand-cream/50 flex items-center justify-center group-hover:bg-brand-cream group-hover:text-brand-green transition-all duration-500">
              <ArrowDown size={16} strokeWidth={1.5} />
            </span>
          </button>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10 bg-brand-cream/40"
        />
      </div>
    </section>
  );
}
