import { useState } from 'react'
import { useGlobalFetch } from '@/hooks/useGlobalFetch'
import { getFilms } from '@/services/films'
import FilmCard from '@/components/films/FilmCard'
import Pagination from '@/components/films/Pagination'

export default function FilmsDashboard() {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const { data, error } = useGlobalFetch(
    `/films?limit=6&page=${currentPage}`,
    getFilms
  )

  if (error) return <p className="text-center">Error loading films</p>
  if (!data?.films.length) return

  return (
    <>
      <ul className="bg-base-100 shadow-md rounded-box list">
        <li className="opacity-60 p-4 pb-2 text-xs tracking-wide">
          List of films from the Sakila database. Each film entry includes a
          title, release year, description, and a placeholder image.
        </li>

        {data.films.map(film => (
          <FilmCard key={film.film_id} {...film} />
        ))}
      </ul>

      <Pagination
        page={currentPage}
        totalPages={data.meta.totalPages}
        setCurrentPage={setCurrentPage}
      />
    </>
  )
}
