import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(24,56,47,0.84)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-[var(--paper)]">
        <Link href="/" className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-lg">
            M
          </span>
          <span>
            <span className="block text-[0.65rem] uppercase tracking-[0.34em] text-white/60">
              Travel magazine
            </span>
            <span className="block text-xl">Miro&apos;s Roadbook</span>
          </span>
        </Link>

        <nav className="flex items-center gap-6 text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
          <Link href="/" className="transition hover:text-white">
            Journeys
          </Link>
        </nav>
      </div>
    </header>
  );
}
