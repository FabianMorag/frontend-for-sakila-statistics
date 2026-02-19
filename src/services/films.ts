import { fetcher } from "@/lib/fetcher";
import type { FilmsResponse } from "@/types/films";

export const getFilms = (url: string) => {
  return fetcher<FilmsResponse>(url);
};
