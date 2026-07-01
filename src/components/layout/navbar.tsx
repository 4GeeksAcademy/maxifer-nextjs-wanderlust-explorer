"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Compass, Heart, Home, Search, User } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Inicio", icon: "home" },
  { href: "/experiences", label: "Explorar", icon: "search" },
  { href: "/favorites", label: "Favoritos", icon: "heart" },
  { href: "/profile", label: "Perfil", icon: "user" },
];

function NavIcon({ name }: { name: string }) {
  const iconProps = { className: "h-5 w-5", "aria-hidden": true };

  if (name === "search") {
    return <Search {...iconProps} />;
  }

  if (name === "heart") {
    return <Heart {...iconProps} />;
  }

  if (name === "user") {
    return <User {...iconProps} />;
  }

  if (name === "home") {
    return <Home {...iconProps} />;
  }

  return <Compass {...iconProps} />;
}

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileHeaderVisible, setIsMobileHeaderVisible] = useState(true);
  const lastScrollY = useRef(0);
  const isExperiencesRoute = pathname === "/experiences" || pathname.startsWith("/experiences/");
  const isExperienceDetailRoute = pathname.startsWith("/experiences/");

  useEffect(() => {
    if (isExperienceDetailRoute) {
      return;
    }

    const handleScroll = () => {
      const currentY = window.scrollY;

      if (isExperiencesRoute) {
        setIsMobileHeaderVisible(currentY <= 8);
        lastScrollY.current = currentY;
        return;
      }

      if (currentY <= 8) {
        setIsMobileHeaderVisible(true);
        lastScrollY.current = currentY;
        return;
      }

      if (currentY > lastScrollY.current + 4) {
        setIsMobileHeaderVisible(false);
      }

      if (currentY < lastScrollY.current - 4) {
        setIsMobileHeaderVisible(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isExperienceDetailRoute, isExperiencesRoute]);

  if (isExperienceDetailRoute) {
    return null;
  }

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === href;
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 px-4 pt-[calc(env(safe-area-inset-top)+0.5rem)] transition-transform duration-300 md:hidden",
          isMobileHeaderVisible ? "translate-y-0" : "-translate-y-full",
        )}
      >
        <div className="mx-auto flex h-13 max-w-7xl items-center justify-between rounded-2xl border border-border bg-surface/95 px-4 shadow-card backdrop-blur">
          <Link href="/" className="flex items-center gap-2 text-foreground">
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-primary/20 bg-primary-soft font-heading text-sm font-bold text-primary">
              W
            </span>
            <span className="font-heading text-[1rem] font-semibold tracking-tight">Wanderlust Explorer</span>
          </Link>
          <Link
            href="/profile"
            aria-label="Ir al perfil"
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface-low text-muted transition hover:border-primary/40 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
              isActiveLink("/profile") && "border-primary/50 bg-primary-soft text-primary",
            )}
          >
            <NavIcon name="user" />
          </Link>
        </div>
      </header>

      <header className="fixed inset-x-0 bottom-0 z-40 bg-transparent px-2 pb-[calc(env(safe-area-inset-bottom)+0.25rem)] pt-1 md:sticky md:top-0 md:bottom-auto md:border-b md:border-border md:bg-background/90 md:px-0 md:py-0 md:backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center rounded-2xl border border-border bg-surface/95 p-1 shadow-panel backdrop-blur md:justify-between md:rounded-none md:border-0 md:bg-transparent md:p-0 md:px-6 md:py-4 md:shadow-none md:backdrop-blur-none lg:px-8">
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
                    "flex min-h-12 flex-col items-center justify-center gap-1 rounded-2xl px-2 py-1 text-center transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:min-h-0 md:flex-row md:rounded-full md:px-4 md:py-2",
                    "hover:bg-surface-low hover:text-foreground",
                    isActive && "md:bg-primary md:text-white md:shadow-card md:hover:bg-primary-hover md:hover:text-white",
                  )}
                >
                  <span
                    className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-full transition",
                      isActive && "bg-primary text-white shadow-card md:bg-transparent md:text-current md:shadow-none",
                    )}
                  >
                    <NavIcon name={link.icon} />
                  </span>
                  <span className="hidden truncate md:inline">{link.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
}
