// 1. Definimos la forma de una sola película (basado en tu modelo de Prisma)
export type Film = {
  film_id: number;
  title: string;
  description: string;
  release_year: number;
  language_id: number;
  rental_duration: number;
  rental_rate: number;
  length: number;
  replacement_cost: number;
  rating: string;
  last_update: string;
  special_features: string[];
};

// 2. Definimos la respuesta completa del endpoint (lista + metadatos)
export type FilmsResponse = {
  films: Film[];
  meta: {
    total: number;
    page: number;
    perPage: number;
    totalPages: number;
  };
};
