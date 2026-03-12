import { fetcher } from '@/lib/fetcher'
import type { Film, FilmsResponse } from '@/types/films'

export const getFilms = (url: string) => fetcher<FilmsResponse>(url)

export const getFilmDetails = (url: string) => fetcher<Film>(url)
