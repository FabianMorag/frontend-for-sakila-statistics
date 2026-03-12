import { Link } from 'react-router'
import type { Film } from '@/types/films'

export default function FilmCard({
  film_id,
  title,
  release_year,
  description,
}: Film) {
  return (
    <Link to={`/films/${film_id}`} className="list-row">
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
