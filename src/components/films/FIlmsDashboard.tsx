import { useSearchParams } from 'react-router'
import { useGlobalFetch } from '@/hooks/useGlobalFetch'
import { getFilms } from '@/services/films'
import FilmRow from '@/components/films/FilmRow'
import Pagination from '@/components/films/Pagination'
import { getFilmsKey } from '@/utils/urlKeys'

export default function FilmsDashboard() {
  const [searchParams, setSearchParams] = useSearchParams({ page: '1' })
  const currentPage = Number(searchParams.get('page')) || 1

  const { data, error } = useGlobalFetch(getFilmsKey(currentPage), getFilms)

  const setCurrentPage = (page: number) => {
    setSearchParams({ page: page.toString() })
  }

  if (error) return <p className="text-center">Error loading films</p>
  if (!data?.films.length) return

  return (
    <>
      <ul className="bg-base-200 shadow-md rounded-box list">
        <li className="opacity-60 p-4 pb-2 text-xs tracking-wide">
          List of films from the Sakila database. Each film entry includes a
          title, release year, description, and a placeholder image.
        </li>

        {data.films.map(film => (
          <FilmRow key={film.film_id} {...film} />
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
