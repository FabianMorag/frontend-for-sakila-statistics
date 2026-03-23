import CustomerList from '@/components/customers/CustomerList'
import TopSpenders from '@/components/customers/TopSpenders'

export default function Customers() {
  return (
    <main className="mx-auto p-6 max-w-7xl">
      <header className="mb-10">
        <h1 className="mb-2 font-bold text-white text-4xl">
          Customer Insights
        </h1>
        <p className="max-w-3xl text-gray-400 text-lg">
          Explore our customer base with detailed insights into demographics,
          rental history, and spending patterns. Use this information to tailor
          marketing strategies, improve customer retention, and enhance the
          overall rental experience.
        </p>
      </header>

      <section className="gap-8 grid grid-cols-1 lg:grid-cols-3">
        <CustomerList />
        <TopSpenders />
      </section>
    </main>
  )
}
