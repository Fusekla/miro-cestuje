import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--clay)]">
        Not Found
      </p>
      <h1 className="mb-4 text-5xl text-[var(--forest)] sm:text-6xl">
        This trip is not on the board yet.
      </h1>
      <p className="max-w-xl text-lg text-[var(--muted)]">
        The page you asked for does not exist in the current roadbook.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full border border-[var(--line)] bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--forest)] transition hover:border-[var(--forest)]"
      >
        Back Home
      </Link>
    </main>
  );
}
