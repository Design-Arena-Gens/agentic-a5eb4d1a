import { Hero } from '@/components/Hero';
import { TopNav } from '@/components/TopNav';
import { StatsGrid } from '@/components/StatsGrid';
import { ProgramsSection } from '@/components/ProgramsSection';
import { ResourceCards } from '@/components/ResourceCards';
import { UpdatesTimeline } from '@/components/UpdatesTimeline';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <div id="top" className="min-h-screen bg-slate-50">
      <TopNav />
      <main className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-16 pt-12">
        <Hero />
        <section id="dashboard" className="space-y-6">
          <h2 className="text-xl font-semibold text-slate-800">Nationwide surveillance metrics</h2>
          <StatsGrid />
        </section>
        <section id="programmes">
          <ProgramsSection />
        </section>
        <section id="knowledge">
          <ResourceCards />
        </section>
        <section id="updates">
          <UpdatesTimeline />
        </section>
      </main>
      <Footer />
    </div>
  );
}
