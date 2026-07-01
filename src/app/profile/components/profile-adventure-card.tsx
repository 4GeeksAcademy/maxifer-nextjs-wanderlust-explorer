import { CalendarDays, CirclePlus } from "lucide-react";

interface ProfileAdventureCardProps {
  dateRange: string;
  destination: string;
}

export default function ProfileAdventureCard({ dateRange, destination }: ProfileAdventureCardProps) {
  return (
    <section className="space-y-4">
      <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground">Mis aventuras</h2>

      <div
        className="relative h-52 w-full overflow-hidden rounded-2xl bg-[linear-gradient(135deg,rgba(16,185,129,0.24),rgba(15,23,42,0.22)),radial-gradient(circle_at_12%_18%,rgba(249,115,22,0.34),transparent_50%),radial-gradient(circle_at_78%_12%,rgba(14,165,233,0.28),transparent_44%),linear-gradient(160deg,#2A3C2F_0%,#617A6B_44%,#D3B690_100%)] shadow-card"
        role="img"
        aria-label={`Próximo viaje a ${destination}`}
      >
        <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/25 to-transparent" />
        <div className="absolute bottom-4 left-4 z-10">
          <p className="text-sm font-semibold text-white/90">{dateRange}</p>
          <p className="font-heading text-3xl font-bold leading-tight text-white">{destination}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          className="flex min-h-14 flex-col items-center justify-center gap-1 rounded-2xl border border-border bg-surface px-4 py-3 text-sm font-semibold text-foreground shadow-card transition hover:border-primary/35 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <CirclePlus className="h-5 w-5 text-primary" aria-hidden={true} />
          Nuevo plan
        </button>
        <button
          type="button"
          className="flex min-h-14 flex-col items-center justify-center gap-1 rounded-2xl border border-border bg-surface px-4 py-3 text-sm font-semibold text-foreground shadow-card transition hover:border-primary/35 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <CalendarDays className="h-5 w-5 text-muted" aria-hidden={true} />
          Ver calendario
        </button>
      </div>
    </section>
  );
}
