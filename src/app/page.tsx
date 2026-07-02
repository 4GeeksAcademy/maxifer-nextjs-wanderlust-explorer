import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";

export default function Home() {
  return (
    <section className="mx-auto flex min-h-[calc(100svh-220px)] max-w-5xl items-start justify-center py-3 sm:-mt-3 sm:min-h-[calc(100svh-200px)] sm:py-6 lg:-mt-4 lg:min-h-[calc(100svh-180px)]">
      <div className="relative w-full max-w-5xl pb-10 sm:max-w-4xl sm:pb-12 lg:max-w-280">
        <div className="relative h-[min(56svh,36rem)] min-h-72 overflow-hidden rounded-[1.4rem] shadow-panel sm:h-[min(54svh,38rem)] sm:min-h-80 lg:h-[min(52svh,40rem)] lg:min-h-88">
          <Image
            src="https://picsum.photos/id/1018/1200/900"
            alt="Paisaje de montañas al atardecer para inspirar un viaje"
            fill
            priority
            sizes="(max-width: 640px) 100vw, 896px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-foreground/70 via-foreground/20 to-transparent" />
          <HeroTitle />
        </div>
        <HeroCta />
      </div>
    </section>
  );
}

function HeroTitle() {
  return (
    <header className="absolute inset-x-0 bottom-18 px-6 text-white sm:bottom-22 sm:px-9 lg:px-10">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-white/85">
        Wanderlust Explorer
      </p>
      <h1 className="max-w-2xl font-heading text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
        Descubre tu próxima aventura
      </h1>
    </header>
  );
}

function HeroCta() {
  return (
    <Link
      href="/experiences"
      className="absolute inset-x-3 bottom-0 flex min-h-20 items-center justify-between rounded-full bg-surface px-6 text-sm font-semibold text-foreground shadow-panel transition hover:-translate-y-0.5 hover:shadow-card-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:inset-x-5 sm:min-h-22 sm:px-8 sm:text-xl"
      aria-label="Explorar experiencias"
    >
      <span>Explorar experiencias</span>
      <span className="ml-4 flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-white sm:size-14">
        <Search aria-hidden={true} className="size-6" strokeWidth={2.5} />
      </span>
    </Link>
  );
}
