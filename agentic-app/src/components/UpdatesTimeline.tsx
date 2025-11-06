import { updates } from '@/data/content';

export function UpdatesTimeline() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
      <header className="space-y-3 pb-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary-600">Latest Highlights</p>
        <h2 className="text-3xl font-bold text-slate-900">Operational updates from the National Disease Control ecosystem</h2>
        <p className="text-base text-slate-600">
          Curated developments spanning surveillance bulletins, laboratory intelligence, and state-level preparedness drives.
        </p>
      </header>
      <ol className="relative space-y-6 border-l border-dashed border-primary-200 pl-6">
        {updates.map((item) => (
          <li key={item.title} className="ml-2 space-y-3">
            <span className="absolute -left-[9px] mt-1 h-3 w-3 rounded-full border border-white bg-primary-500" />
            <p className="text-xs font-semibold uppercase tracking-wide text-primary-600">{item.date}</p>
            <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
            <p className="text-sm text-slate-600">{item.summary}</p>
            <a href={item.url} target="_blank" rel="noreferrer" className="inline-flex text-sm font-semibold text-primary-600 hover:text-primary-700">
              Read more ↗
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}
