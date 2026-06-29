export default function Footer() {
  return (
    <footer className="border-t border-border bg-inverse text-white">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-2 px-4 py-8 text-sm sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <p className="font-heading font-semibold">Wanderlust Explorer</p>
        <p className="text-inverse-on-surface text-white/70">Built for travelers who collect memories, not things.</p>
      </div>
    </footer>
  );
}
