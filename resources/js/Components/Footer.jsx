export default function Footer({ onNavigate }) {
  const links = [
    { label: 'Projects', target: 'collection' },
    { label: 'About', target: 'about' },
    { label: 'Journal', target: 'journal' },
    { label: 'Contact', target: 'contact' },
  ];

  return (
    <footer className="bg-brand-deep text-brand-cream">
      <div className="container-edge py-16 md:py-24">
        <div className="flex items-center gap-2 mb-12 md:mb-16">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-brand-cream" />
          <span className="font-serif text-xl md:text-2xl">Dharakala</span>
        </div>

        <h2 className="fluid-section font-serif text-brand-cream max-w-4xl mb-16 md:mb-24">
          Places with<br />
          <span className="italic">purpose.</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pb-12 border-b border-brand-cream/15">
          <div>
            <p className="label-eyebrow text-brand-cream/50 mb-4">Navigate</p>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.target}>
                  <button onClick={() => onNavigate(l.target)} data-cursor="hover" className="text-sm text-brand-cream/80 hover:text-brand-cream transition-colors">
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label-eyebrow text-brand-cream/50 mb-4">Studio</p>
            <p className="text-sm text-brand-cream/80 leading-relaxed">Hazratganj<br />Lucknow, India</p>
          </div>
          <div>
            <p className="label-eyebrow text-brand-cream/50 mb-4">Connect</p>
            <ul className="space-y-2">
              <li><a href="#" data-cursor="hover" className="text-sm text-brand-cream/80 hover:text-brand-cream transition-colors">Instagram</a></li>
              <li><a href="#" data-cursor="hover" className="text-sm text-brand-cream/80 hover:text-brand-cream transition-colors">LinkedIn</a></li>
              <li><a href="mailto:hello@studiovastu.in" data-cursor="hover" className="text-sm text-brand-cream/80 hover:text-brand-cream transition-colors">Email</a></li>
            </ul>
          </div>
          <div>
            <p className="label-eyebrow text-brand-cream/50 mb-4">Legal</p>
            <ul className="space-y-2">
              <li><a href="#" data-cursor="hover" className="text-sm text-brand-cream/80 hover:text-brand-cream transition-colors">Privacy</a></li>
              <li><a href="#" data-cursor="hover" className="text-sm text-brand-cream/80 hover:text-brand-cream transition-colors">Terms</a></li>
              <li><a href="#" data-cursor="hover" className="text-sm text-brand-cream/80 hover:text-brand-cream transition-colors">Disclaimer</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs text-brand-cream/50">© {new Date().getFullYear()} Dharakala. All rights reserved.</p>
          <p className="text-xs text-brand-cream/50">Designed and built with intent.</p>
        </div>
      </div>
    </footer>
  );
}
