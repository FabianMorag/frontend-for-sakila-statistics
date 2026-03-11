import useSWR from 'swr'
import { getFilms } from '@/services/films'
import type { Film } from '@/types/films'
import { Link } from 'react-router'
import { useEffect, useState } from 'react'
import { useGlobalLoading } from '@/stores/useGlobalLoading'

export default function Films() {
  return (
    <main className="p-6">
      <h1 className="font-bold text-4xl">Films</h1>
      <section className="w-full">
        <FilmsDashboard />
      </section>
    </main>
  )
}

function FilmsDashboard() {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const { data, error, isLoading } = useSWR(
    `/films?limit=6&page=${currentPage}`,
    getFilms
  )
  const setGlobalLoading = useGlobalLoading(state => state.setGlobalLoading)

  useEffect(() => setGlobalLoading(isLoading), [isLoading])

  if (error) return <p className="text-center">Error loading films</p>
  if (!data?.films.length) return <p className="text-center">No data</p>

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

function FilmCard({ film_id, title, release_year, description }: Film) {
  return (
    <Link key={film_id} to={`/films/${film_id}`} className="list-row">
      <div>
        <img
          className="rounded-box size-10"
          src={`https://picsum.photos/seed/${film_id}/200`}
        />
      </div>
      <div>
        <div>{title}</div>
        <div className="opacity-60 font-semibold text-xs uppercase">
          {release_year}
        </div>
      </div>
      <p className="text-xs list-col-wrap">{description}</p>
      <span className="icon-[fluent--arrow-circle-right-24-filled] text-3xl" />
    </Link>
  )
}

function Pagination({
  page,
  totalPages,
  setCurrentPage,
}: {
  page: number
  totalPages: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}) {
  return (
    <div className="flex justify-center mt-4 join">
      {page >= 2 && (
        <button onClick={() => setCurrentPage(1)} className="join-item btn">
          1
        </button>
      )}
      {page >= 3 && (
        <button
          onClick={() => setCurrentPage(page - 1)}
          className="join-item btn"
        >
          {page - 1}
        </button>
      )}
      <button
        onClick={() => setCurrentPage(page)}
        className="join-item btn btn-disabled"
      >
        {page}
      </button>
      {page < totalPages - 1 && (
        <button
          onClick={() => setCurrentPage(page + 1)}
          className="join-item btn"
        >
          {page + 1}
        </button>
      )}
      {page < totalPages && (
        <button
          onClick={() => setCurrentPage(totalPages)}
          className="join-item btn"
        >
          {totalPages}
        </button>
      )}
    </div>
  )
}
