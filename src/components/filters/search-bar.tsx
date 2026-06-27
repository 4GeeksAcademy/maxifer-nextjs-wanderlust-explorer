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
    <div className="w-full rounded-xl border border-zinc-200 bg-white p-3">
      <input
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full bg-transparent text-sm text-zinc-700 outline-none placeholder:text-zinc-400"
      />
    </div>
  );
}
