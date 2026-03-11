import { fetcher } from '@/lib/fetcher'
import type { FilmsResponse } from '@/types/films'

export const getFilms = (url: string) => fetcher<FilmsResponse>(url)
