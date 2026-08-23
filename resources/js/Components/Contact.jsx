import { motion } from 'framer-motion';
import { useForm } from '@inertiajs/react';
import { ArrowUpRight, ChevronDown, Mail, MapPin, Phone } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useScroll';

export function FinalCTA({ onNavigate }) {
  const reduce = useReducedMotion();
  return (
    <section id="contact" className="relative bg-brand-green py-28 md:py-44 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05]">
        <img src="https://images.pexels.com/photos/15663488/pexels-photo-15663488.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className="h-full w-full object-cover" />
      </div>
      <div className="relative container-edge text-center">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="label-eyebrow text-brand-cream/70 mb-8"
        >
          Start a Conversation
        </motion.p>
        <motion.h2
          initial={reduce ? false : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="fluid-hero font-serif text-brand-cream max-w-5xl mx-auto mb-12"
        >
          Let's build<br />
          something<br />
          <span className="italic">worth remembering.</span>
        </motion.h2>
        <motion.button
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onClick={() => onNavigate('enquire-form')}
          data-cursor="hover"
          className="group inline-flex items-center gap-3 bg-brand-cream text-brand-green px-8 py-4 rounded-full hover:bg-brand-deep hover:text-brand-cream transition-all duration-500"
        >
          <span className="nav-link">Start a Conversation</span>
          <ArrowUpRight size={18} strokeWidth={1.5} className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </motion.button>
      </div>
    </section>
  );
}

export function EnquireForm() {
  const { data, setData, post, processing, wasSuccessful, errors } = useForm({
    name: '',
    email: '',
    phone: '',
    interest: 'Residential',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post('/enquiry');
  };

  return (
    <section id="enquire-form" className="bg-brand-cream py-24 md:py-32">
      <div className="container-edge max-w-2xl">
        <p className="label-eyebrow text-brand-green mb-6">Enquire</p>
        <h2 className="fluid-title font-serif text-ink mb-10">Tell us about your project or interest.</h2>

        {wasSuccessful ? (
          <div className="border border-brand-green/30 bg-brand-tint rounded-sm p-10 text-center">
            <p className="font-serif text-2xl text-ink mb-2">Thank you.</p>
            <p className="text-ink-muted">We will be in touch within two working days.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field
                label="Name"
                name="name"
                type="text"
                required
                value={data.name}
                onChange={(v) => setData('name', v)}
                error={errors.name}
              />
              <Field
                label="Email"
                name="email"
                type="email"
                required
                value={data.email}
                onChange={(v) => setData('email', v)}
                error={errors.email}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field
                label="Phone"
                name="phone"
                type="tel"
                value={data.phone}
                onChange={(v) => setData('phone', v)}
                error={errors.phone}
              />
              <div>
                <label htmlFor="interest" className="label-eyebrow text-ink-muted block mb-2">Interest</label>
                <div className="relative">
                  <select
                    id="interest"
                    name="interest"
                    value={data.interest}
                    onChange={(e) => setData('interest', e.target.value)}
                    data-cursor="hover"
                    className="w-full appearance-none bg-transparent border-b border-line py-3 pr-8 text-ink focus:border-brand-green focus:outline-none transition-colors"
                  >
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Townships</option>
                    <option>Plotted</option>
                    <option>Mixed-Use</option>
                    <option>General Enquiry</option>
                  </select>
                  <ChevronDown size={16} strokeWidth={1.5} className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 text-ink-muted" />
                </div>
                {errors.interest && <p className="text-red-500 text-xs mt-1">{errors.interest}</p>}
              </div>
            </div>
            <div>
              <label htmlFor="message" className="label-eyebrow text-ink-muted block mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={data.message}
                onChange={(e) => setData('message', e.target.value)}
                data-cursor="hover"
                className="w-full bg-transparent border-b border-line py-3 text-ink focus:border-brand-green focus:outline-none transition-colors resize-none"
                placeholder="Tell us a little about what you are looking for."
              />
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>
            <button
              type="submit"
              disabled={processing}
              data-cursor="hover"
              className="group inline-flex items-center gap-2 bg-brand-green text-brand-cream px-8 py-4 rounded-full hover:bg-brand-deep transition-colors duration-500 disabled:opacity-60"
            >
              <span className="nav-link">{processing ? 'Sending…' : 'Send Enquiry'}</span>
              <ArrowUpRight size={16} strokeWidth={1.5} className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </form>
        )}

        <div className="mt-16 pt-10 border-t border-line grid grid-cols-1 md:grid-cols-3 gap-6">
          <ContactItem icon={Mail} label="Email" value="hello@dharakala.in" />
          <ContactItem icon={Phone} label="Phone" value="+91 522 400 4400" />
          <ContactItem icon={MapPin} label="Studio" value="Hazratganj, Lucknow" />
        </div>
      </div>
    </section>
  );
}

function Field({
  label, name, type, required, value, onChange, error,
}) {
  return (
    <div>
      <label htmlFor={name} className="label-eyebrow text-ink-muted block mb-2">
        {label}{required && <span className="text-brand-green"> *</span>}
      </label>
      <input
        name={name}
        id={name}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        data-cursor="hover"
        className="w-full bg-transparent border-b border-line py-3 text-ink focus:border-brand-green focus:outline-none transition-colors"
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}

function ContactItem({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      <Icon size={18} strokeWidth={1.5} className="text-brand-green mt-0.5 shrink-0" />
      <div>
        <p className="label-eyebrow text-ink-muted mb-1">{label}</p>
        <p className="text-ink text-sm">{value}</p>
      </div>
    </div>
  );
}
