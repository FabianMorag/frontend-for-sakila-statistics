import { useGlobalFetch } from '@/hooks/useGlobalFetch'
import { getCustomerList } from '@/services/customers'
import type { Customer } from '@/types/customer'
import { getCustomerListKey } from '@/utils/urlKeys'

export default function CustomerList() {
  return (
    <div className="flex flex-col gap-6 lg:col-span-2 bg-gray-800/50 p-6 border border-gray-700 rounded-xl h-full">
      <header className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-white text-xl">All Customers</h2>
        {/* <div>Filtros</div> */}
      </header>

      <CustomerTable />
    </div>
  )
}

function CustomerTable() {
  const { data, isLoading, error } = useGlobalFetch(
    getCustomerListKey(),
    getCustomerList
  )
  if (isLoading) {
    return (
      <div className="flex flex-col gap-4">
        <div className="w-full h-20 skeleton" />
        <div className="w-full h-20 skeleton" />
        <div className="w-full h-20 skeleton" />
        <div className="w-full h-20 skeleton" />
        <div className="w-full h-20 skeleton" />
        <div className="w-full h-20 skeleton" />
      </div>
    )
  }
  if (error)
    return <div className="text-error-content">Error loading customers</div>
  if (!data) return

  return (
    <div className="flex flex-col gap-4">
      {data.map(customer => (
        <CustomerRow customer={customer} />
      ))}
    </div>
  )
}

function CustomerRow({ customer }: { customer: Customer }) {
  const initials = `${customer.first_name.charAt(0)}${customer.last_name.charAt(0)}`

  return (
    <div className="flex items-center gap-4 bg-gray-900/50 hover:bg-gray-800 p-4 border border-gray-700/50 rounded-xl transition-colors cursor-pointer">
      <div className="avatar placeholder">
        <div className="flex justify-center items-center bg-neutral rounded-full w-12 h-12 font-semibold text-neutral-content text-lg">
          <span>{initials}</span>
        </div>
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-white text-base truncate">
          {customer.first_name} {customer.last_name}
        </h3>
        <p className="text-gray-400 text-sm truncate">{customer.email}</p>
      </div>

      <div className="flex items-center gap-3">
        {customer.activebool ? (
          <div className="gap-1 badge-outline font-medium badge badge-success">
            Active
          </div>
        ) : (
          <div className="gap-1 badge-outline font-medium badge badge-error">
            Inactive
          </div>
        )}
      </div>
    </div>
  )
}
