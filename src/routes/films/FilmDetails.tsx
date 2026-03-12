import { Link, useLoaderData } from 'react-router'
import type { Film } from '@/types/films'

const formatDuration = (minutes: number) => {
  const hrs = Math.floor(minutes / 60)
  const mins = minutes % 60
  return hrs > 0 ? `${hrs}h ${mins}m` : `${mins}m`
}

const getRatingColor = (rating: string) => {
  const colors: Record<string, string> = {
    G: 'badge-success',
    PG: 'badge-info',
    'PG-13': 'badge-warning',
    R: 'badge-error',
    'NC-17': 'badge-error',
  }
  return colors[rating] || 'badge-neutral'
}

export default function FilmDetails() {
  const film = useLoaderData<Film>()

  return (
    <main className="mx-auto p-6 max-w-5xl">
      <div className="mb-4 text-sm breadcrumbs">
        <ul>
          <li>
            <Link to="/films">Films</Link>
          </li>
          <li className="font-medium">{film.title}</li>
        </ul>
      </div>

      <div className="bg-base-200 shadow-xl card">
        <figure className="px-6 pt-6">
          <div className="flex justify-center items-center bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl w-full h-48">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-30 w-20 h-20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
              />
            </svg>
          </div>
        </figure>

        <div className="card-body">
          <div className="flex flex-wrap justify-between items-start gap-2">
            <div>
              <h1 className="font-bold text-3xl card-title">{film.title}</h1>
              <p className="text-base-content/60">{film.release_year}</p>
            </div>
            <span className={`badge ${getRatingColor(film.rating)} badge-lg`}>
              {film.rating}
            </span>
          </div>

          <p className="mt-4 text-base-content/80 leading-relaxed">
            {film.description}
          </p>

          <div className="bg-base-100 shadow mt-6 stats stats-vertical sm:stats-horizontal">
            <div className="stat">
              <div className="text-primary stat-figure">
                <span className="text-2xl icon-[tabler--clock]" />
              </div>
              <div className="stat-title">Duration</div>
              <div className="text-lg stat-value">
                {formatDuration(film.length)}
              </div>
            </div>

            <div className="stat">
              <div className="text-secondary stat-figure">
                <span className="text-2xl icon-[solar--dollar-linear]" />
              </div>
              <div className="stat-title">Rental Rate</div>
              <div className="text-lg stat-value">${film.rental_rate}</div>
              <div className="stat-desc">{film.rental_duration} days</div>
            </div>

            <div className="stat">
              <div className="text-accent stat-figure">
                <span className="text-2xl icon-[lineicons--calculator-alt]" />
              </div>
              <div className="stat-title">Replacement</div>
              <div className="text-lg stat-value">${film.replacement_cost}</div>
            </div>
          </div>

          {film.special_features.length > 0 && (
            <div className="mt-6">
              <h3 className="mb-3 font-semibold text-sm text-base-content/60 uppercase tracking-wider">
                Special Features
              </h3>
              <div className="flex flex-wrap gap-2">
                {film.special_features.map(feature => (
                  <span key={feature} className="badge-outline badge badge-lg">
                    {feature.replace(/_/g, ' ')}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="justify-end mt-6 card-actions">
            <Link to="/films" className="btn btn-ghost">
              ← Back to Films
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
