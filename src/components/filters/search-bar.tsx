interface SearchBarProps {
  placeholder?: string;
}

export default function SearchBar({ placeholder = "Search experiences" }: SearchBarProps) {
  return (
    <div className="w-full rounded-xl border border-zinc-200 bg-white p-3">
      <input
        type="search"
        placeholder={placeholder}
        className="w-full bg-transparent text-sm text-zinc-700 outline-none placeholder:text-zinc-400"
      />
    </div>
  );
}
