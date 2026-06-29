interface SearchBarProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({
  placeholder = "Busca experiencias por titulo",
  value,
  onChange,
}: SearchBarProps) {
  return (
    <div className="w-full rounded-lg border border-border bg-surface px-4 py-3 shadow-card transition focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/15">
      <input
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted/60"
      />
    </div>
  );
}
