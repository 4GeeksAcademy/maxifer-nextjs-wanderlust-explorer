import ExperienceGrid from "@/components/experience/experience-grid";
import Button from "@/components/ui/button";
import { experiences } from "@/data/experiences";

export default function Home() {
  return (
    <section className="space-y-8">
      <header className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500">Discover your next trip</p>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-zinc-900">
          Curated travel experiences for curious explorers.
        </h1>
        <p className="max-w-2xl text-zinc-600">
          Explore hand-picked activities across culture, nature, wellness, food, and adventure.
        </p>
        <Button href="/experiences">View all experiences</Button>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">Featured experiences</h2>
        <ExperienceGrid items={experiences.slice(0, 6)} />
      </section>
    </section>
  );
}
