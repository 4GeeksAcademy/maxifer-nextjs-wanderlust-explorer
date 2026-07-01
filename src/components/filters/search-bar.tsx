import { Search } from "lucide-react";

interface SearchBarProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({
  placeholder = "Busca tu próxima experiencia",
  value,
  onChange,
}: SearchBarProps) {
  return (
    <div className="relative w-full rounded-full border border-border bg-surface px-4 py-3 shadow-card transition focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/15">
      <Search
        className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted/70"
        aria-hidden="true"
      />
      <input
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full bg-transparent pl-7 text-sm text-foreground outline-none placeholder:text-muted/60"
      />
    </div>
  );
}
