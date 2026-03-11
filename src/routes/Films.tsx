import FilmsDashboard from '@/components/films/FIlmsDashboard'

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
