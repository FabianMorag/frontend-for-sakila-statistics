import { fetcher } from '@/lib/fetcher'
import type { Film, FilmsResponse } from '@/types/films'

export const getFilms = (url: string) => fetcher<FilmsResponse>(url)

export const getFilmDetails = (id: string) => fetcher<Film>(`/films/${id}`)
