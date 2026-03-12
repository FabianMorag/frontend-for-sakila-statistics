import { useLoaderData } from 'react-router'
import type { Film } from '@/types/films'

export default function FilmDetails() {
  const data = useLoaderData<Film>()

  return (
    <main className="p-6">
      <h1 className="font-bold text-4xl">{data.title}</h1>
      <section className="w-full">
        <p className="mt-4 text-center">{data.description}</p>
      </section>
    </main>
  )
}
