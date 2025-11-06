import { keyMetrics } from '@/data/content';
import { ArrowTrendingUpIcon, ArrowTrendingDownIcon, MinusIcon } from '@heroicons/react/24/outline';

const iconMap = {
  up: ArrowTrendingUpIcon,
  down: ArrowTrendingDownIcon,
  steady: MinusIcon
} as const;

type TrendKey = keyof typeof iconMap;

export function StatsGrid() {
  return (
    <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {keyMetrics.map((metric) => {
        const TrendIcon = iconMap[metric.trend as TrendKey];
        return (
          <article
            key={metric.label}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">{metric.label}</p>
            <p className="mt-4 text-3xl font-bold text-slate-900">{metric.value}</p>
            <div className="mt-5 flex items-center gap-2 text-sm font-medium text-primary-600">
              <TrendIcon className="h-4 w-4" aria-hidden />
              <span>{metric.change}</span>
            </div>
          </article>
        );
      })}
    </section>
  );
}
