"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Inicio", icon: "home" },
  { href: "/experiences", label: "Explorar", icon: "search" },
  { href: "/favorites", label: "Favoritos", icon: "heart" },
  { href: "/profile", label: "Perfil", icon: "user" },
];

function NavIcon({ name }: { name: string }) {
  const iconProps = {
    className: "h-5 w-5",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 2,
    viewBox: "0 0 24 24",
  };

  if (name === "search") {
    return (
      <svg aria-hidden="true" {...iconProps}>
        <path d="m21 21-4.3-4.3" />
        <circle cx="11" cy="11" r="7" />
      </svg>
    );
  }

  if (name === "heart") {
    return (
      <svg aria-hidden="true" {...iconProps}>
        <path d="M19.5 12.6 12 20l-7.5-7.4a5 5 0 0 1 7.1-7.1l.4.4.4-.4a5 5 0 1 1 7.1 7.1Z" />
      </svg>
    );
  }

  if (name === "user") {
    return (
      <svg aria-hidden="true" {...iconProps}>
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5 20a7 7 0 0 1 14 0" />
      </svg>
    );
  }

  if (name === "home") {
    return (
      <svg aria-hidden="true" {...iconProps}>
        <path d="m3 11 9-8 9 8" />
        <path d="M5 10v10h14V10" />
        <path d="M10 20v-6h4v6" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" {...iconProps}>
      <path d="m15 9-2 6-4 2 2-6 4-2Z" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === href;
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="fixed inset-x-0 bottom-0 z-40 bg-transparent px-2 pb-[calc(env(safe-area-inset-bottom)+0.5rem)] pt-2 md:sticky md:top-0 md:bottom-auto md:border-b md:border-border md:bg-background/90 md:px-0 md:py-0 md:backdrop-blur">
      <div className="mx-auto flex w-full max-w-[1280px] items-center rounded-2xl border border-border bg-surface/95 p-1 shadow-panel backdrop-blur md:justify-between md:rounded-none md:border-0 md:bg-transparent md:p-0 md:px-6 md:py-4 md:shadow-none md:backdrop-blur-none lg:px-8">
        <Link href="/" className="hidden items-center gap-3 text-foreground md:flex">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary font-heading text-base font-bold text-white">
            W
          </span>
          <span className="font-heading text-lg font-bold tracking-tight">Wanderlust Explorer</span>
        </Link>
        <nav
          aria-label="Navegacion principal"
          className="grid w-full grid-cols-4 gap-1 rounded-2xl text-xs font-semibold text-muted md:flex md:w-auto md:items-center md:gap-2 md:text-sm"
        >
          {links.map((link) => {
            const isActive = isActiveLink(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "flex min-h-16 flex-col items-center justify-center gap-1 rounded-2xl px-2 py-2 text-center transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:min-h-0 md:flex-row md:rounded-full md:px-4 md:py-2",
                  "hover:bg-surface-low hover:text-foreground",
                  isActive && "bg-primary text-white shadow-card hover:bg-primary-hover hover:text-white",
                )}
              >
                <NavIcon name={link.icon} />
                <span className="truncate">{link.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
