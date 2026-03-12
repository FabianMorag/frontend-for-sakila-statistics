import FilmsDashboard from '@/components/films/FIlmsDashboard'

export default function Films() {
  return (
    <main className="mx-auto p-6 max-w-5xl">
      <h1 className="font-bold text-4xl">Films</h1>
      <section className="w-full">
        <FilmsDashboard />
      </section>
    </main>
  )
}
