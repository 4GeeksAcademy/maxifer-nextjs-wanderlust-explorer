import Button from "@/components/ui/button";

export default function Home() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-border bg-surface p-6 shadow-sm sm:p-10">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-secondary/15 blur-3xl"
      />

      <header className="relative z-10 mx-auto flex max-w-3xl flex-col items-start gap-5">
        <p className="rounded-full bg-background px-3 py-1 text-xs font-semibold uppercase tracking-wide text-muted">
          Wanderlust Explorer
        </p>
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
          Descubre experiencias de viaje que no vas a olvidar.
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          Encuentra actividades seleccionadas en cultura, naturaleza, aventura y bienestar para planear tu
          proxima escapada de forma simple y visual.
        </p>
        <Button href="/experiences">Explorar experiencias</Button>
      </header>
    </section>
  );
}
