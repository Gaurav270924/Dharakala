import { useCallback } from 'react';
import { usePage } from '@inertiajs/react';

import Cursor from '@/Components/Cursor';
import Navigation from '@/Components/Navigation';
import Hero from '@/Components/Hero';
import Collection from '@/Components/Collection';
import OurVentures from '@/Components/OurVentures';
import Flagship from '@/Components/Flagship';
import { Manifesto, Numbers, Interlude } from '@/Components/Story';
import Materials from '@/Components/Materials';
import { Atlas, Archive } from '@/Components/AtlasArchive';
import { About, Journal } from '@/Components/AboutJournal';
import { FinalCTA, EnquireForm } from '@/Components/Contact';
import Footer from '@/Components/Footer';

export default function Home() {
const {
  projects = [],
  journalEntries = [],
  materials = [],
  locations = [],
  stats = [],
  manifestoPrinciples = [],
  ventures = [],
} = usePage().props;

  const navigate = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <>
      <Cursor />
      <Navigation onNavigate={navigate} />
      <main>
        <Hero onExplore={() => navigate('collection')} />
        <Collection projects={projects} />
        <OurVentures ventures={ventures} />
        <Flagship projects={projects} />
        <Manifesto manifestoPrinciples={manifestoPrinciples} />
        <Numbers stats={stats} />
        <Interlude />
        <Materials materials={materials} />
        <Atlas locations={locations} projects={projects} />
        <Archive projects={projects} />
        <About onNavigate={navigate} />
        <Journal journalEntries={journalEntries} />
        <FinalCTA onNavigate={navigate} />
        <EnquireForm />
      </main>
      <Footer onNavigate={navigate} />
    </>
  );
}
