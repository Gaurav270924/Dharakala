import { createRoot } from 'react-dom/client';
import { AnimatePresence, motion } from 'framer-motion';

let root = null;
let container = null;

function openTransition(project) {
  if (!container) {
    container = document.createElement('div');
    container.id = 'project-transition';
    container.style.position = 'fixed';
    container.style.inset = '0';
    container.style.zIndex = '100';
    container.style.pointerEvents = 'none';
    document.body.appendChild(container);
    root = createRoot(container);
  }

  const Overlay = () => (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-brand-deep flex items-center justify-center overflow-hidden"
        initial={{ clipPath: 'inset(100% 0 0 0)' }}
        animate={{ clipPath: 'inset(0% 0 0 0)' }}
        exit={{ clipPath: 'inset(0 0 100% 0)' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.img
          src={project.hero_image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-40"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-brand-deep/50" />
        <div className="relative text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="label-eyebrow text-brand-cream/70 mb-4"
          >
            Entering Project
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="fluid-title font-serif text-brand-cream"
          >
            {project.name}
          </motion.h2>
        </div>
      </motion.div>
    </AnimatePresence>
  );

  root?.render(<Overlay />);

  setTimeout(() => {
    window.open(project.website_url, '_blank', 'noopener,noreferrer');
  }, 1300);

  setTimeout(() => {
    root?.render(<AnimatePresence></AnimatePresence>);
  }, 2000);
}

export function enterProject(project) {
  openTransition(project);
}
