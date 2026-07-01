import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/layout/navbar";
import { FavoritesProvider } from "@/components/providers/favorites-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wanderlust Explorer",
  description: "Travel experiences curated for explorers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <FavoritesProvider>
          <div className="flex min-h-screen flex-col pb-24 md:pb-0">
            <Navbar />
            <main className="mx-auto w-full max-w-7xl flex-1 px-4 pb-8 pt-20 sm:px-6 md:pt-8 lg:px-8 lg:py-12">
              {children}
            </main>
          </div>
        </FavoritesProvider>
      </body>
    </html>
  );
}
