import { Link } from 'react-router'

export default function Home() {
  return (
    <main className="hero">
      <div className="mt-52 text-center hero-content">
        <div className="max-w-lg">
          <h1 className="font-bold text-5xl">Welcome to Sakila App</h1>
          <p className="py-6">
            This is the frontend interface for the Sakila database system. Use
            this application to explore detailed information about films and
            actors, view customer records, and analyze key business statistics
            provided by my backend service.
          </p>
          <div className="lg:w-full join join-vertical lg:join-horizontal">
            <Link
              to="/films"
              className="lg:flex-1 btn btn-wide join-item btn-primary"
            >
              Films
            </Link>
            <Link
              to="/reports"
              className="lg:flex-1 btn btn-wide join-item btn-primary"
            >
              Reports
            </Link>
            <Link
              to="/customers"
              className="lg:flex-1 btn btn-wide join-item btn-primary"
            >
              Customers
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
