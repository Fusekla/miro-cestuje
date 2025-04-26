import "./globals.css";
import { ReactNode } from "react";
import Header from "@/components/Header";

export const metadata = {
  title: "Miro idze do šveta 🌍",
  description: "My itinerary website for travel planning",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900 font-sans antialiased">
        <Header />
        <main className="flex flex-col items-center p-6 pt-24 bg-yellow-50 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
