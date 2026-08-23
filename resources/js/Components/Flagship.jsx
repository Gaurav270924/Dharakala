import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useScroll';
import { enterProject } from '@/lib/transitions';

export default function Flagship({ projects }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1.1, 1]);
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [60, -60]);
  const textY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [80, -40]);

  const project = projects.find((p) => p.featured && p.status === 'Ongoing') ?? projects[0];

  return (
    <section ref={ref} id="flagship" className="relative h-[100svh] min-h-[600px] w-full overflow-hidden bg-brand-deep">
      <motion.div style={{ scale, y }} className="absolute inset-0">
        <img
          src={project.hero_image}
          alt={`${project.name} — featured development in ${project.city}`}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/80 via-brand-deep/30 to-brand-deep/40" />
      </motion.div>

      <motion.div style={{ y: textY }} className="relative h-full flex flex-col justify-end">
        <div className="container-edge pb-16 md:pb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="label-eyebrow text-brand-cream/80 mb-5"
          >
            Featured Development
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="fluid-section font-serif text-brand-cream max-w-4xl mb-6"
          >
            {project.name}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 max-w-5xl"
          >
            <div>
              <p className="text-brand-cream/80 text-sm md:text-base mb-2">{project.location}, {project.city}</p>
              <p className="text-brand-cream/70 text-sm md:text-base max-w-md leading-relaxed">{project.short_description}</p>
            </div>
            <button
              onClick={() => enterProject(project)}
              data-cursor="view"
              className="group inline-flex items-center gap-2 nav-link text-brand-cream self-start md:self-auto"
            >
              Discover Project
              <ArrowUpRight size={16} strokeWidth={1.5} className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
