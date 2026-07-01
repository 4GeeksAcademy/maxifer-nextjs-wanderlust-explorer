import { MapPin, Pencil } from "lucide-react";

interface ProfileHeaderProps {
  name: string;
  location: string;
  avatarInitials: string;
}

export default function ProfileHeader({ name, location, avatarInitials }: ProfileHeaderProps) {
  return (
    <section className="rounded-2xl border border-border bg-surface p-6 text-center shadow-card sm:p-8">
      <div className="relative mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-primary-soft font-heading text-2xl font-bold text-primary shadow-card">
        <span aria-hidden="true">{avatarInitials}</span>
        <button
          type="button"
          aria-label="Editar perfil"
          className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white transition hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <Pencil className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>

      <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{name}</h1>

      <p className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-muted sm:text-base">
        <MapPin className="h-4 w-4" aria-hidden="true" />
        {location}
      </p>
    </section>
  );
}
