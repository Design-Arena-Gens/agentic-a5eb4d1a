import { Bars3Icon } from '@heroicons/react/24/outline';

const navLinks = [
  { label: 'Dashboard', href: '#dashboard' },
  { label: 'Programmes', href: '#programmes' },
  { label: 'Knowledge Hub', href: '#knowledge' },
  { label: 'Updates', href: '#updates' }
];

export function TopNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/30 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-semibold tracking-tight text-primary-700">
          NCD Intelligence
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          {navLinks.map((item) => (
            <a key={item.label} href={item.href} className="transition hover:text-primary-600">
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="https://ncd.mohfw.gov.in/login"
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-primary-700 md:inline-flex"
        >
          Secure Login
        </a>
        <button className="inline-flex rounded-lg border border-slate-200 p-2 text-slate-600 md:hidden" aria-label="Open navigation">
          <Bars3Icon className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
