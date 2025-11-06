import { spotlightPrograms } from '@/data/content';

export function ProgramsSection() {
  return (
    <section className="space-y-6 rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary-600">National Programmes</p>
        <h2 className="text-3xl font-bold text-slate-900">Coordinated action across surveillance and response</h2>
        <p className="text-base text-slate-600">
          Priority initiatives led by the Ministry of Health & Family Welfare with multi-sectoral coordination, digital reporting,
          and rapid response protocols.
        </p>
      </header>
      <div className="grid gap-6 lg:grid-cols-3">
        {spotlightPrograms.map((program) => (
          <article
            key={program.name}
            className="flex h-full flex-col gap-4 rounded-2xl border border-slate-100 bg-slate-50/80 p-6 transition hover:border-primary-200 hover:bg-primary-50"
          >
            <div>
              <h3 className="text-xl font-semibold text-slate-900">{program.name}</h3>
              <p className="mt-2 text-sm text-slate-600">{program.description}</p>
            </div>
            <ul className="mt-auto space-y-2 text-sm text-slate-700">
              {program.bulletPoints.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-1.5 w-1.5 flex-none rounded-full bg-primary-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
