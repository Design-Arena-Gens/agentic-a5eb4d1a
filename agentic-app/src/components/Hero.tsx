'use client';

import { motion } from 'framer-motion';

const heroStats = [
  { label: 'Integrated Platforms', value: 'IDSP · IHIP · VRDL' },
  { label: 'Focus Areas', value: 'Vector-borne, Zoonotic, AMR' },
  { label: 'Last Update', value: 'Live feeds · 15 min sync' }
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden rounded-3xl border border-white/50 bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700 px-10 py-16 shadow-2xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.35),_transparent_50%)]" aria-hidden />
      <div className="relative flex flex-col gap-12 lg:flex-row lg:items-center">
        <div className="max-w-xl space-y-6 text-white">
          <motion.span
            className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1 text-sm font-semibold backdrop-blur"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            National Centre for Disease Control · NCD Dashboard
          </motion.span>
          <motion.h1
            className="text-4xl font-bold tracking-tight sm:text-5xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Unified Intelligence for Communicable Disease Surveillance
          </motion.h1>
          <motion.p
            className="text-lg text-white/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.24 }}
          >
            Access real-time surveillance indicators, program resources, outbreak analytics, and operational toolkits curated by the
            Ministry of Health and Family Welfare, Government of India.
          </motion.p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://ncd.mohfw.gov.in"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-primary-700 shadow-lg transition hover:shadow-xl"
            >
              Visit Official Portal
            </a>
            <a
              href="https://ncdc.gov.in"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/60 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              Explore NCDC
            </a>
          </div>
        </div>
        <motion.div
          className="grid max-w-md gap-4 rounded-2xl bg-white/20 p-6 text-sm text-white backdrop-blur"
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.32 }}
        >
          {heroStats.map((stat) => (
            <div key={stat.label} className="rounded-xl border border-white/30 bg-white/10 p-4">
              <p className="text-xs uppercase tracking-wide text-white/70">{stat.label}</p>
              <p className="mt-1 text-base font-semibold">{stat.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
