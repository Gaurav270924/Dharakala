import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useMediaQuery, useReducedMotion } from '@/hooks/useScroll';
import { enterProject } from '@/lib/transitions';

const filters = ['All', 'Residential', 'Commercial', 'Townships', 'Plotted', 'Mixed-Use', 'Ongoing', 'Upcoming', 'Completed'];

function matches(p, f) {
  if (f === 'All') return true;
  return p.category === f || p.status === f;
}

export default function Collection({ projects = [] }) {
  const [filter, setFilter] = useState('All');
  const [hovered, setHovered] = useState(null);
  const isTouch = useMediaQuery('(hover: none), (pointer: coarse)');
  const reduce = useReducedMotion();

  const list = projects.filter(Boolean).filter((p) => matches(p, filter));

  return (
    <section id="collection" className="relative bg-brand-cream">
      <div className="container-edge pt-24 md:pt-36 pb-12 md:pb-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="label-eyebrow text-brand-green mb-5">The Collection</p>
            <h2 className="fluid-section font-serif text-ink max-w-3xl">
              Places<br />
              <span className="italic">we have made.</span>
            </h2>
          </div>
          <p className="max-w-xs text-ink-muted text-sm leading-relaxed">
            Each project is a destination with its own brief, its own ground and its own way of being lived in.
          </p>
        </div>

        <div className="mt-12 md:mt-16 flex flex-wrap gap-2 md:gap-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              data-cursor="hover"
              className={`nav-link px-4 py-2 rounded-full border transition-all duration-500 ${
                filter === f
                  ? 'bg-brand-green border-brand-green text-brand-cream'
                  : 'border-line text-ink-muted hover:border-ink hover:text-ink'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {list.map((p, i) => (
              <ProjectChapter
                key={p.id}
                project={p}
                index={i + 1}
                isLast={i === list.length - 1}
                onHover={isTouch ? undefined : setHovered}
                reduce={reduce}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {!isTouch && <HoverPreview project={hovered} />}
    </section>
  );
}

function ProjectChapter({
  project,
  index,
  isLast,
  onHover,
  reduce,
}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setInView(true), { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative ${isLast ? '' : 'border-b border-line/60'}`}
    >
      <div className="container-edge py-16 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="md:col-span-5 order-2 md:order-1">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-serif text-5xl md:text-6xl text-brand-green/40">
                {String(index).padStart(2, '0')}
              </span>
              <div className="h-px flex-1 bg-line" />
            </div>

            <p className="label-eyebrow text-ink-muted mb-3">{project.category}</p>
            <h3
              className="fluid-title font-serif text-ink mb-4"
              onMouseEnter={() => onHover?.(project)}
              onMouseLeave={() => onHover?.(null)}
              data-cursor="view"
            >
              {project.name}
            </h3>
            <p className="text-ink-muted text-sm md:text-base leading-relaxed mb-6 max-w-md">
              {project.short_description}
            </p>

            <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-8 max-w-sm">
              <Meta label="Location" value={`${project.location}, ${project.city}`} />
              <Meta label="Status" value={project.status} />
              <Meta label="Type" value={project.project_type} />
              <Meta label="Area" value={project.area} />
            </div>

            <button
              onClick={() => enterProject(project)}
              data-cursor="view"
              className="group inline-flex items-center gap-2 nav-link text-brand-green"
            >
              Explore Project
              <ArrowUpRight size={16} strokeWidth={1.5} className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>

          <div className="md:col-span-7 order-1 md:order-2">
            <motion.button
              onClick={() => enterProject(project)}
              data-cursor="view"
              initial={reduce ? false : { opacity: 0, scale: 1.04 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative block w-full aspect-[4/3] md:aspect-[16/11] overflow-hidden bg-brand-beige rounded-sm"
            >
              <img
                src={project.hero_image}
                alt={`${project.name} — ${project.category} in ${project.city}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1.4s] ease-smooth hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute top-5 left-5 flex items-center gap-2">
                <span className="label-eyebrow text-brand-cream bg-brand-deep/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  {project.status}
                </span>
              </div>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Meta({ label, value }) {
  return (
    <div>
      <p className="label-eyebrow text-ink-muted mb-1">{label}</p>
      <p className="text-ink text-sm">{value}</p>
    </div>
  );
}

function HoverPreview({ project }) {
  const ref = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (ref.current) {
        const w = 280;
        const x = Math.min(e.clientX + 24, window.innerWidth - w - 16);
        const y = Math.min(e.clientY + 16, window.innerHeight - 200);
        ref.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  useEffect(() => {
    setVisible(!!project);
  }, [project]);

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 z-40 pointer-events-none"
      style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.4s ease' }}
    >
      <AnimatePresence>
        {project && (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="w-[280px] aspect-[3/4] overflow-hidden rounded-sm shadow-2xl"
          >
            <img src={project.thumbnail} alt="" className="h-full w-full object-cover" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
