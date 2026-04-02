import { useGlobalFetch } from '@/hooks/useGlobalFetch'
import { getTopCustomerList } from '@/services/customers'
import type { TopCustomer } from '@/types/customer'
import { getTopCustomerKey } from '@/utils/urlKeys'

export default function TopSpenders() {
  return (
    <aside className="flex flex-col gap-6">
      <div className="bg-linear-to-br from-primary/20 to-secondary/20 p-6 border border-secondary/40 rounded-xl">
        <h2 className="flex items-center gap-2 mb-4 font-semibold text-indigo-200 text-xl">
          <span className="icon-[twemoji--sparkles]" />
          Top Spenders
        </h2>
        <p className="mb-6 text-indigo-200/70 text-sm">
          Our most valuable customers based on total amount spent.
        </p>

        <TopSpenderTable />
      </div>
    </aside>
  )
}

function TopSpenderTable() {
  const { data, isLoading, error } = useGlobalFetch(
    getTopCustomerKey(),
    getTopCustomerList
  )

  if (isLoading) {
    return (
      <div className="flex flex-col gap-4">
        <div className="w-full h-16 skeleton" />
        <div className="w-full h-16 skeleton" />
        <div className="w-full h-16 skeleton" />
        <div className="w-full h-16 skeleton" />
        <div className="w-full h-16 skeleton" />
      </div>
    )
  }
  if (error)
    return <div className="text-error-content">Error loading customers</div>
  if (!data) return

  return (
    <div className="flex flex-col gap-4">
      {data.map(customer => (
        <TopCustomerRow customer={customer} />
      ))}
    </div>
  )
}

function TopCustomerRow({ customer }: { customer: TopCustomer }) {
  const initials = `${customer.first_name.charAt(0)}${customer.last_name.charAt(0)}`

  return (
    <div className="flex items-center gap-3 bg-gray-900/50 hover:bg-gray-800 p-3 border border-secondary/20 rounded-xl transition-colors cursor-default">
      <div className="avatar placeholder">
        <div className="flex justify-center items-center bg-secondary/20 rounded-full w-10 h-10 font-bold text-secondary-content text-sm">
          <span>{initials}</span>
        </div>
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-white text-sm truncate">
          {customer.first_name} {customer.last_name}
        </h3>
      </div>

      <div className="text-right">
        <p className="font-bold text-emerald-400 text-sm">
          ${customer.total_spent}
        </p>
      </div>
    </div>
  )
}
