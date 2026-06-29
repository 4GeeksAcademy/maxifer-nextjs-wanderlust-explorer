import Image from "next/image";
import Button from "@/components/ui/button";

export default function Home() {
  return (
    <div className="space-y-10">
      <section className="grid min-h-[calc(100svh-160px)] overflow-hidden rounded-2xl border border-border bg-surface shadow-panel lg:grid-cols-[1fr_0.92fr]">
        <div className="flex items-center px-6 py-12 sm:px-10 lg:px-12">
          <header className="max-w-2xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Wanderlust Explorer</p>
            <div className="space-y-4">
              <h1 className="font-heading text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
                Descubre experiencias de viaje que no vas a olvidar.
              </h1>
              <p className="max-w-xl text-base leading-7 text-muted sm:text-lg">
                Encuentra actividades seleccionadas en cultura, naturaleza, aventura y bienestar para planear tu
                proxima escapada de forma simple y visual.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="/experiences">Explorar experiencias</Button>
              <Button href="/favorites" variant="secondary">Ver favoritos</Button>
            </div>
          </header>
        </div>

        <div className="relative min-h-[360px] lg:min-h-full">
          <Image
            src="https://picsum.photos/seed/wanderlust-hero/1200/1400"
            alt="Paisaje de viaje con montanas y ruta escenica"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-foreground/45 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 rounded-full bg-surface/90 px-4 py-2 text-sm font-semibold text-foreground backdrop-blur">
            100 experiencias curadas
          </div>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        {["Aventura", "Cultura", "Bienestar"].map((item) => (
          <div key={item} className="rounded-2xl border border-border bg-surface-low p-5">
            <p className="text-sm font-semibold text-primary">{item}</p>
            <p className="mt-2 text-sm leading-6 text-muted">Rutas claras, detalles utiles y descubrimiento sin friccion.</p>
          </div>
        ))}
      </section>
    </div>
  );
}
