import Card from "@/components/ui/card";

interface ProfileStatsProps {
  savedCount: number;
  tripCount: number;
  reviewCount: number;
}

const statsConfig = [
  { key: "saved", label: "Guardados" },
  { key: "trips", label: "Viajes" },
  { key: "reviews", label: "Reseñas" },
] as const;

export default function ProfileStats({ savedCount, tripCount, reviewCount }: ProfileStatsProps) {
  const values = {
    saved: savedCount,
    trips: tripCount,
    reviews: reviewCount,
  } as const;

  return (
    <Card className="grid grid-cols-3 gap-0 overflow-hidden p-0">
      {statsConfig.map((item, index) => (
        <div
          key={item.key}
          className={
            index === 1
              ? "border-x border-border px-3 py-4 text-center"
              : "px-3 py-4 text-center"
          }
        >
          <p className="font-heading text-2xl font-bold text-primary">{values[item.key]}</p>
          <p className="text-xs font-semibold tracking-[0.08em] text-muted">{item.label}</p>
        </div>
      ))}
    </Card>
  );
}
