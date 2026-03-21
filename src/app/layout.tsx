import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: {
    default: "Miro idze do šveta",
    template: "%s | Miro idze do šveta",
  },
  description:
    "Elegant, shareable holiday itineraries with day-by-day plans, accommodation names, and highlight moments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
