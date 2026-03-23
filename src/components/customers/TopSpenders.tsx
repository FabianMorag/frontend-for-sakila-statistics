export default function TopSpenders() {
  return (
    <aside className="flex flex-col gap-6">
      <div className="bg-linear-to-br from-primary/20 to-secondary/20 p-6 border border-secondary/40 rounded-xl h-full">
        <h2 className="flex items-center gap-2 mb-4 font-semibold text-indigo-200 text-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-yellow-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
            />
          </svg>
          Top Spenders
        </h2>
        <p className="mb-6 text-indigo-200/70 text-sm">
          Nuestros clientes más valiosos según el total gastado.
        </p>

        {/* TODO: Reemplazar por tu componente <TopCustomers /> (Ranking o Cards) */}
        <div className="flex justify-center items-center border-2 border-indigo-500/50 border-dashed rounded-lg w-full h-64 text-indigo-300/50">
          [ Componente: Top Customers List ]
        </div>
      </div>
    </aside>
  )
}
