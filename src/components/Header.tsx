"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-yellow-100 shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-bold text-sky-700 flex items-center gap-2"
        >
          <span role="img" aria-label="globe">🌍</span> Miro idze do šveta
        </Link>
        <Link href="/" className="text-sm hover:underline text-sky-600">
          Home
        </Link>
      </div>
    </header>
  );
}