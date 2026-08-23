import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { enterProject } from '@/lib/transitions';

export function Atlas({ locations, projects }) {
  const [active, setActive] = useState(null);
  const shown = active
    ? projects.filter((p) =>
        p.city === active ||
        (active === 'Other Markets' && !['Lucknow', 'Delhi NCR', 'Varanasi'].includes(p.city))
      )
    : [];

  return (
    <section id="atlas" className="bg-brand-tint py-24 md:py-36">
      <div className="container-edge">
        <p className="label-eyebrow text-brand-green mb-6">Our Places</p>
        <h2 className="fluid-section font-serif text-ink max-w-3xl mb-12 md:mb-16">
          Where we<br />
          <span className="italic">are building.</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="relative aspect-[4/3] bg-brand-cream rounded-sm overflow-hidden border border-line">
            <svg viewBox="0 0 100 75" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
              <path d="M0,0 L100,0 L100,75 L0,75 Z" fill="none" />
              {[...Array(7)].map((_, i) => (
                <line key={`h${i}`} x1="0" y1={i * 10 + 5} x2="100" y2={i * 10 + 5} stroke="#D8DED9" strokeWidth="0.15" strokeDasharray="0.5,0.5" />
              ))}
              {[...Array(9)].map((_, i) => (
                <line key={`v${i}`} x1={i * 10 + 5} y1="0" x2={i * 10 + 5} y2="75" stroke="#D8DED9" strokeWidth="0.15" strokeDasharray="0.5,0.5" />
              ))}
              <path d="M10,20 Q30,15 50,22 T90,18" fill="none" stroke="#044336" strokeWidth="0.3" opacity="0.25" />
              <path d="M15,55 Q40,48 60,52 T88,50" fill="none" stroke="#044336" strokeWidth="0.3" opacity="0.25" />
            </svg>

            {locations.map((loc) => (
              <button
                key={loc.name}
                onClick={() => setActive(active === loc.name ? null : loc.name)}
                data-cursor="hover"
                className="absolute group"
                style={{ left: `${loc.x}%`, top: `${loc.y}%`, transform: 'translate(-50%, -50%)' }}
              >
                <span className={`block w-3 h-3 rounded-full border-2 transition-all duration-500 ${
                  active === loc.name ? 'bg-brand-green border-brand-green scale-150' : 'bg-brand-cream border-brand-green group-hover:scale-125'
                }`} />
                <span className="absolute left-5 top-1/2 -translate-y-1/2 whitespace-nowrap nav-link text-ink group-hover:text-brand-green transition-colors">
                  {loc.name}
                  <span className="ml-1.5 text-ink-muted">({loc.project_count})</span>
                </span>
              </button>
            ))}
          </div>

          <div className="min-h-[300px]">
            <AnimatePresence mode="wait">
              {active ? (
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="label-eyebrow text-ink-muted mb-6">{active}</p>
                  <div className="space-y-4">
                    {shown.length > 0 ? shown.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => enterProject(p)}
                        data-cursor="view"
                        className="group w-full flex items-center justify-between gap-4 py-4 border-b border-line text-left"
                      >
                        <div>
                          <p className="font-serif text-xl md:text-2xl text-ink group-hover:text-brand-green transition-colors">{p.name}</p>
                          <p className="text-ink-muted text-sm">{p.category} · {p.status}</p>
                        </div>
                        <ArrowUpRight size={18} strokeWidth={1.5} className="text-ink-muted group-hover:text-brand-green transition-colors shrink-0" />
                      </button>
                    )) : (
                      <p className="text-ink-muted">New markets in development.</p>
                    )}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col justify-center h-full"
                >
                  <p className="text-ink-muted text-lg leading-relaxed max-w-sm">
                    Select a marker to see the projects we are building in each city.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Archive({ projects }) {
  const [year, setYear] = useState(null);
  const years = [2026, 2025, 2024, 2023, 2022];
  const completed = projects.filter((p) => p.status === 'Completed' || p.year <= 2024);
  const shown = year ? completed.filter((p) => p.year === year) : [];
  const [hovered, setHovered] = useState(null);

  return (
    <section id="archive" className="bg-brand-cream py-24 md:py-36">
      <div className="container-edge">
        <p className="label-eyebrow text-brand-green mb-6">The Archive</p>
        <h2 className="fluid-section font-serif text-ink max-w-3xl mb-12 md:mb-16">
          What we have<br />
          <span className="italic">already made.</span>
        </h2>

        <div className="flex flex-wrap gap-2 md:gap-3 mb-10">
          {years.map((y) => (
            <button
              key={y}
              onClick={() => setYear(year === y ? null : y)}
              data-cursor="hover"
              className={`nav-link px-4 py-2 rounded-full border transition-all duration-500 ${
                year === y ? 'bg-brand-green border-brand-green text-brand-cream' : 'border-line text-ink-muted hover:border-ink hover:text-ink'
              }`}
            >
              {y}
            </button>
          ))}
        </div>

        <div className="relative min-h-[200px]">
          <AnimatePresence mode="wait">
            {year ? (
              <motion.div
                key={year}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2"
              >
                {shown.length > 0 ? shown.map((p) => (
                  <div
                    key={p.id}
                    onMouseEnter={() => setHovered(p.id)}
                    onMouseLeave={() => setHovered(null)}
                    className="relative border-b border-line py-6"
                  >
                    <button onClick={() => enterProject(p)} data-cursor="view" className="block w-full text-left">
                      <div className="flex items-baseline justify-between gap-4">
                        <h3 className="font-serif text-2xl md:text-3xl text-ink hover:text-brand-green transition-colors">{p.name}</h3>
                        <span className="label-eyebrow text-ink-muted shrink-0">{p.city}</span>
                      </div>
                      <p className="text-ink-muted text-sm mt-1">{p.category} · {p.location}</p>
                    </button>
                    {hovered === p.id && (
                      <div className="hidden md:block absolute right-0 -top-4 w-40 h-28 overflow-hidden rounded-sm shadow-xl pointer-events-none">
                        <img src={p.thumbnail} alt="" className="h-full w-full object-cover" />
                      </div>
                    )}
                  </div>
                )) : (
                  <p className="text-ink-muted">No completed projects for this year.</p>
                )}
              </motion.div>
            ) : (
              <motion.p
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-ink-muted text-lg max-w-sm"
              >
                Select a year to browse completed work from the archive.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
