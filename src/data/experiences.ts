export type ExperienceCategory =
  | "Adventure"
  | "Culture"
  | "Food"
  | "Wellness"
  | "Nature";

export interface Experience {
  id: number;
  title: string;
  description: string;
  category: ExperienceCategory;
  destination: string;
  price: number;
  rating: number;
  imageUrl: string;
}

const categories: ExperienceCategory[] = [
  "Adventure",
  "Culture",
  "Food",
  "Wellness",
  "Nature",
];

const destinations = [
  "Kyoto, Japan",
  "Lisbon, Portugal",
  "Cusco, Peru",
  "Marrakech, Morocco",
  "Reykjavik, Iceland",
  "Split, Croatia",
  "Chiang Mai, Thailand",
  "Cartagena, Colombia",
  "Cape Town, South Africa",
  "Queenstown, New Zealand",
  "Valencia, Spain",
  "Seoul, South Korea",
  "Tbilisi, Georgia",
  "Hanoi, Vietnam",
  "Vancouver, Canada",
  "Medellin, Colombia",
  "Auckland, New Zealand",
  "Naples, Italy",
  "Bali, Indonesia",
  "Salzburg, Austria",
];

const titleByCategory: Record<ExperienceCategory, string[]> = {
  Adventure: [
    "Sunrise Cliff Trek",
    "Coastal Kayak Expedition",
    "Volcano Trail Challenge",
    "Canyon Zipline Escape",
    "Mountain Bike Quest",
  ],
  Culture: [
    "Historic Neighborhood Walk",
    "Artisan Workshop Tour",
    "Museums After Dark",
    "Local Traditions Journey",
    "Architecture Stories Route",
  ],
  Food: [
    "Street Food Discovery",
    "Farm-to-Table Tasting",
    "Night Market Bites",
    "Chef-Led Cooking Class",
    "Coffee and Pastry Crawl",
  ],
  Wellness: [
    "Rooftop Yoga Session",
    "Forest Breathwork Retreat",
    "Thermal Spa Day",
    "Mindful Movement Workshop",
    "Sunset Meditation Circle",
  ],
  Nature: [
    "Waterfall Hike Experience",
    "Wildlife Observation Trail",
    "Botanical Garden Escape",
    "Lakeside Sunrise Walk",
    "Stargazing in the Valley",
  ],
};

const descriptionByCategory: Record<ExperienceCategory, string> = {
  Adventure:
    "Push your limits with a guided outdoor route, safety briefing, and unforgettable views.",
  Culture:
    "Connect with local history, traditions, and hidden stories through immersive guided visits.",
  Food:
    "Taste iconic flavors with locals while learning the stories behind each dish and ingredient.",
  Wellness:
    "Recharge body and mind with calm rituals, expert guidance, and restorative environments.",
  Nature:
    "Explore scenic landscapes at a relaxed pace with a guide focused on ecology and conservation.",
};

export const experiences: Experience[] = Array.from({ length: 100 }, (_, index) => {
  const id = index + 1;
  const category = categories[index % categories.length];
  const destination = destinations[index % destinations.length];
  const titles = titleByCategory[category];
  const baseTitle = titles[index % titles.length];

  return {
    id,
    title: `${baseTitle} #${id}`,
    description: `${descriptionByCategory[category]} Perfect for travelers who want a memorable day in ${destination}.`,
    category,
    destination,
    price: 35 + ((index * 7) % 185),
    rating: Number((4 + ((index % 10) * 0.1)).toFixed(1)),
    imageUrl: `https://picsum.photos/seed/experience-${id}/800/600`,
  };
});
