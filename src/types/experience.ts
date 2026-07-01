export type ExperienceCategory =
  | "Aventura"
  | "Cultura"
  | "Gastronomia"
  | "Bienestar"
  | "Naturaleza";

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
