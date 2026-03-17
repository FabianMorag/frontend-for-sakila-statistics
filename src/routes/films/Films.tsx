import FilmsDashboard from '@/components/films/FIlmsDashboard'

export default function Films() {
  return (
    <main className="mx-auto p-6 max-w-5xl">
      <header className="mb-14">
        <h1 className="mb-2 font-bold text-white text-4xl">Film list</h1>
        <p className="max-w-3xl text-gray-400 text-lg">
          Explore our extensive collection of films, from timeless classics to
          contemporary hits. Dive into a world of cinematic storytelling and
          discover your next favorite movie.
        </p>
      </header>
      <section className="w-full">
        <FilmsDashboard />
      </section>
    </main>
  )
}
