export type Film = {
  film_id: number
  title: string
  description: string
  release_year: number
  language_id: number
  rental_duration: number
  rental_rate: string
  length: number
  replacement_cost: string
  rating: string
  last_update: string
  special_features: string[]
}

export type FilmsResponse = {
  films: Film[]
  meta: {
    total: number
    page: number
    perPage: number
    totalPages: number
  }
}
