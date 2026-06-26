import Link from "next/link";

export default function FavoritesPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900">Favorites</h1>
      <p className="text-zinc-600">You have no saved experiences yet.</p>
      <Link href="/experiences" className="text-sm font-semibold text-zinc-900 underline underline-offset-4">
        Explore experiences
      </Link>
    </section>
  );
}
