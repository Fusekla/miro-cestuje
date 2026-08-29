import type { ImageCredit } from "@/content/types";

type ImageCreditsProps = {
  credits: ImageCredit[];
};

function dedupe(credits: ImageCredit[]) {
  const seen = new Set<string>();

  return credits.filter((credit) => {
    const key = `${credit.author}|${credit.platform}|${credit.license ?? ""}`;

    if (seen.has(key)) {
      return false;
    }

    seen.add(key);

    return true;
  });
}

export function ImageCredits({ credits }: ImageCreditsProps) {
  const unique = dedupe(credits);

  if (!unique.length) {
    return null;
  }

  return (
    <section className="mx-auto mt-14 max-w-6xl px-6">
      <div className="border-t border-[var(--line)] pt-8">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--clay)]">
          Image credits
        </p>
        <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm leading-6 text-[var(--muted)]">
          {unique.map((credit) => (
            <li key={`${credit.author}-${credit.platform}-${credit.license ?? ""}`}>
              {credit.source ? (
                <a
                  href={credit.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-[var(--line)] underline-offset-4 transition hover:text-[var(--forest)]"
                >
                  {credit.author}
                </a>
              ) : (
                credit.author
              )}
              <span>{` · ${credit.platform}`}</span>
              {credit.license && credit.licenseUrl ? (
                <>
                  <span>{" · "}</span>
                  <a
                    href={credit.licenseUrl}
                    target="_blank"
                    rel="noopener noreferrer license"
                    className="underline decoration-[var(--line)] underline-offset-4 transition hover:text-[var(--forest)]"
                  >
                    {credit.license}
                  </a>
                </>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
