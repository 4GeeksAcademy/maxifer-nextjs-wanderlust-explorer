import ExperienceGrid from "@/components/experience/experience-grid";
import SearchBar from "@/components/filters/search-bar";
import { experiences } from "@/data/experiences";

export default function ExperiencesPage() {
  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900">Experiences</h1>
        <p className="text-zinc-600">Browse curated activities for your next trip.</p>
      </header>

      <SearchBar />
      <ExperienceGrid items={experiences.slice(0, 9)} />
    </section>
  );
}
