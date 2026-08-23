import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useScrolled } from '@/hooks/useScroll';

const menuItems = [
  { num: '01', label: 'Projects', target: 'collection' },
  { num: '02', label: 'Philosophy', target: 'manifesto' },
  { num: '03', label: 'About', target: 'about' },
  { num: '04', label: 'Journal', target: 'journal' },
  { num: '05', label: 'Contact', target: 'contact' },
];

// These hover images are static Pexels URLs, not project data — kept hardcoded
const hoverImages = {
  Projects: 'https://images.pexels.com/photos/18506889/pexels-photo-18506889.jpeg?auto=compress&cs=tinysrgb&w=1200',
  Philosophy: 'https://images.pexels.com/photos/966927/pexels-photo-966927.jpeg?auto=compress&cs=tinysrgb&w=1200',
  About: 'https://images.pexels.com/photos/7031591/pexels-photo-7031591.jpeg?auto=compress&cs=tinysrgb&w=1200',
  Journal: 'https://images.pexels.com/photos/137083/pexels-photo-137083.jpeg?auto=compress&cs=tinysrgb&w=1200',
  Contact: 'https://images.pexels.com/photos/15663488/pexels-photo-15663488.jpeg?auto=compress&cs=tinysrgb&w=1200',
};

export default function Navigation({ onNavigate }) {
  const scrolled = useScrolled(80);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const go = (id) => {
    setMenuOpen(false);
    setTimeout(() => onNavigate(id), menuOpen ? 400 : 0);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-smooth ${
          scrolled
            ? 'bg-brand-cream/85 backdrop-blur-md border-b border-line/60'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <nav className="container-edge flex items-center justify-between h-20 md:h-28">
          <button
            onClick={() => go('hero')}
            className="flex items-center gap-2 text-ink group"
            data-cursor="hover"
            aria-label="Dharakala home"
          >
            <span className={`inline-block w-2.5 h-2.5 rounded-full transition-colors duration-500 ${scrolled ? 'bg-brand-green' : 'bg-brand-cream'}`} />
            <span className={`font-serif text-2xl md:text-3xl tracking-tight transition-colors duration-500 ${scrolled ? 'text-ink' : 'text-brand-cream'}`}>
              Dharakala
            </span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {menuItems.slice(0, 4).map((item) => (
              <button
                key={item.target}
                onClick={() => go(item.target)}
                data-cursor="hover"
                className={`nav-link transition-colors duration-500 ${
                  scrolled ? 'text-ink hover:text-brand-green' : 'text-brand-cream/90 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => go('contact')}
              data-cursor="hover"
              className={`nav-link px-5 py-2.5 rounded-full border transition-all duration-500 ${
                scrolled
                  ? 'border-brand-green text-brand-green hover:bg-brand-green hover:text-brand-cream'
                  : 'border-brand-cream/60 text-brand-cream hover:bg-brand-cream hover:text-brand-green'
              }`}
            >
              Enquire
            </button>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            data-cursor="hover"
            className={`md:hidden flex items-center gap-2 nav-link transition-colors duration-500 ${scrolled ? 'text-ink' : 'text-brand-cream'}`}
            aria-label="Open menu"
          >
            <Menu size={20} strokeWidth={1.5} />
            Menu
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-brand-cream"
          >
            <div className="absolute inset-0 overflow-hidden">
              <AnimatePresence>
                {hovered && (
                  <motion.img
                    key={hovered}
                    src={hoverImages[hovered]}
                    alt=""
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 0.18, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute right-0 top-0 h-full w-1/2 object-cover"
                  />
                )}
              </AnimatePresence>
            </div>

            <div className="relative container-edge h-full flex flex-col">
             <div className="flex items-center justify-between h-20 md:h-28">
                <span className="font-serif text-xl md:text-2xl text-ink">Dharakala</span>
                <button
                  onClick={() => setMenuOpen(false)}
                  data-cursor="hover"
                  className="flex items-center gap-2 nav-link text-ink"
                  aria-label="Close menu"
                >
                  <X size={20} strokeWidth={1.5} />
                  Close
                </button>
              </div>

              <div className="flex-1 flex flex-col justify-start pt-6 md:pt-20 gap-2 md:gap-4 max-w-3xl">
                {menuItems.map((item, i) => (
                  <motion.button
                    key={item.target}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    onClick={() => go(item.target)}
                    onMouseEnter={() => setHovered(item.label)}
                    onMouseLeave={() => setHovered(null)}
                    data-cursor="hover"
                    className="group flex items-baseline gap-4 md:gap-8 text-left"
                  >
                    <span className="label-eyebrow text-ink-muted">{item.num}</span>
                    <span className="fluid-title font-serif text-ink group-hover:text-brand-green transition-colors duration-500">
                      {item.label}
                    </span>
                  </motion.button>
                ))}
              </div>

              <div className="py-8 md:py-10 border-t border-line flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
                <p className="text-ink-muted text-sm max-w-md">
                  A collection of places designed to last. Building across Lucknow, Delhi NCR and Varanasi.
                </p>
                <div className="flex gap-6 nav-link text-ink-muted">
                  <a href="#" data-cursor="hover" className="hover:text-brand-green transition-colors">Instagram</a>
                  <a href="#" data-cursor="hover" className="hover:text-brand-green transition-colors">LinkedIn</a>
                  <a href="mailto:hello@dharakala.in" data-cursor="hover" className="hover:text-brand-green transition-colors">Email</a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
