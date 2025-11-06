export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} Ministry of Health & Family Welfare · National Communicable Disease Intelligence Prototype
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="https://ncdc.gov.in" target="_blank" rel="noreferrer" className="transition hover:text-primary-600">
            NCDC
          </a>
          <a href="https://ncd.mohfw.gov.in" target="_blank" rel="noreferrer" className="transition hover:text-primary-600">
            NCD Portal
          </a>
          <a href="https://main.mohfw.gov.in" target="_blank" rel="noreferrer" className="transition hover:text-primary-600">
            MoHFW
          </a>
        </div>
      </div>
    </footer>
  );
}
