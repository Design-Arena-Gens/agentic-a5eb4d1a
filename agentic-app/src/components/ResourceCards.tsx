import { knowledgeHub } from '@/data/content';

const categoryClasses: Record<string, string> = {
  Guidelines: 'bg-emerald-100 text-emerald-800',
  Surveillance: 'bg-indigo-100 text-indigo-800',
  Training: 'bg-amber-100 text-amber-800',
  'Public Awareness': 'bg-rose-100 text-rose-800'
};

export function ResourceCards() {
  return (
    <section className="space-y-6">
      <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-600">Knowledge Hub</p>
          <h2 className="text-3xl font-bold text-slate-900">Official guidance, dashboards, and operational toolkits</h2>
        </div>
        <a
          href="https://ncd.mohfw.gov.in"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-primary-300 bg-white px-4 py-2 text-sm font-semibold text-primary-700 shadow-sm transition hover:bg-primary-50"
        >
          Full resource index ↗
        </a>
      </header>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {knowledgeHub.map((resource) => (
          <article
            key={resource.title}
            className="flex h-full flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary-200 hover:shadow-lg"
          >
            <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${categoryClasses[resource.category]}`}>
              {resource.category}
            </span>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-slate-900">{resource.title}</h3>
              <p className="text-sm text-slate-600">{resource.description}</p>
            </div>
            <div className="mt-auto">
              <a
                href={resource.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 transition hover:text-primary-700"
              >
                View resource ↗
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
