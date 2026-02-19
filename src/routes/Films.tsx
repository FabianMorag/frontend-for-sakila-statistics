import useSWR from "swr";
import { getFilms } from "@/services/films";
import type { Film } from "@/types/films";
import { Link } from "react-router";

export default function Films() {
  return (
    <main className="p-6">
      <h1 className="font-bold text-4xl">Films</h1>
      <section className="w-full">
        <FilmsDashboard />
      </section>
    </main>
  );
}

function FilmsDashboard() {
  const { data, error, isLoading } = useSWR("/films?limit=6", getFilms);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading films</div>;
  if (!data) return <div>No data</div>;

  return (
    <ul className="bg-base-100 shadow-md rounded-box list">
      <li className="opacity-60 p-4 pb-2 text-xs tracking-wide">
        List of films from the Sakila database. Each film entry includes a
        title, release year, description, and a placeholder image.
      </li>

      {data.films.map((film) => (
        <FilmCard key={film.film_id} {...film} />
      ))}
    </ul>
  );
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
  );
}
