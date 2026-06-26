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
  "Kioto, Japón",
  "Lisboa, Portugal",
  "Cusco, Perú",
  "Marrakech, Marruecos",
  "Reikiavik, Islandia",
  "Split, Croacia",
  "Chiang Mai, Tailandia",
  "Cartagena, Colombia",
  "Ciudad del Cabo, Sudáfrica",
  "Queenstown, Nueva Zelanda",
  "Valencia, España",
  "Seúl, Corea del Sur",
  "Tiflis, Georgia",
  "Hanoi, Vietnam",
  "Vancouver, Canadá",
  "Medellín, Colombia",
  "Auckland, Nueva Zelanda",
  "Nápoles, Italia",
  "Bali, Indonesia",
  "Salzburgo, Austria",
];

const titleByCategory: Record<ExperienceCategory, string[]> = {
  Adventure: [
    "Trekking al acantilado al amanecer",
    "Expedición costera en kayak",
    "Desafío por sendero volcánico",
    "Aventura de tirolesa en cañón",
    "Ruta épica en bicicleta de montaña",
  ],
  Culture: [
    "Paseo por barrio histórico",
    "Tour de talleres artesanales",
    "Museos al caer la noche",
    "Viaje por tradiciones locales",
    "Ruta de historias arquitectónicas",
  ],
  Food: [
    "Descubrimiento de comida callejera",
    "Degustación de la granja a la mesa",
    "Bocados en mercado nocturno",
    "Clase de cocina con chef local",
    "Recorrido de café y pastelería",
  ],
  Wellness: [
    "Sesión de yoga en azotea",
    "Retiro de respiración en bosque",
    "Día de spa termal",
    "Taller de movimiento consciente",
    "Círculo de meditación al atardecer",
  ],
  Nature: [
    "Experiencia de senderismo a cascadas",
    "Ruta de observación de fauna",
    "Escapada a jardín botánico",
    "Caminata al amanecer junto al lago",
    "Observación de estrellas en el valle",
  ],
};

const descriptionByCategory: Record<ExperienceCategory, string> = {
  Adventure:
    "Supera tus límites con una ruta guiada al aire libre, briefing de seguridad y vistas inolvidables.",
  Culture:
    "Conecta con la historia, las tradiciones y los relatos ocultos del lugar en visitas inmersivas.",
  Food:
    "Prueba sabores icónicos junto a locales mientras descubres la historia de cada plato e ingrediente.",
  Wellness:
    "Recarga cuerpo y mente con rituales de calma, guía experta y entornos restauradores.",
  Nature:
    "Explora paisajes escénicos a ritmo relajado con guía enfocada en ecología y conservación.",
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
    description: `${descriptionByCategory[category]} Ideal para viajeros que quieren un día memorable en ${destination}.`,
    category,
    destination,
    price: 35 + ((index * 7) % 185),
    rating: Number((4 + ((index % 10) * 0.1)).toFixed(1)),
    imageUrl: `https://picsum.photos/seed/experience-${id}/800/600`,
  };
});
