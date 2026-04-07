import CustomerList from '@/components/customers/CustomerList'
import TopSpenders from '@/components/customers/TopSpenders'

export default function Customers() {
  return (
    <main className="mx-auto p-6 max-w-7xl">
      <header className="mb-10">
        <h1 className="mb-2 font-bold text-white text-4xl">Customers</h1>
        <p className="max-w-3xl text-gray-400 text-lg">
          Browse the complete customer directory and identify our top spenders.
          Use this overview to manage your customer base and track our most
          valuable patrons.
        </p>
      </header>

      <section className="gap-8 grid grid-cols-1 lg:grid-cols-3">
        <CustomerList />
        <TopSpenders />
      </section>
    </main>
  )
}
