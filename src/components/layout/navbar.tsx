import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/experiences", label: "Experiences" },
  { href: "/favorites", label: "Favorites" },
  { href: "/profile", label: "Profile" },
];

export default function Navbar() {
  return (
    <header className="border-b border-zinc-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <p className="text-lg font-bold tracking-tight text-zinc-900">Wanderlust Explorer</p>
        <nav className="flex items-center gap-4 text-sm font-medium text-zinc-700">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-zinc-900">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
