import { useMemo } from 'react'
import { Link, useLoaderData } from 'react-router'
import type { Customer } from '@/types/customer'
import { formatIsoDate } from '@/utils/date'

function CustomerField({ label, value }: { label: string; value?: string }) {
  return (
    <div className="bg-base-200 p-4 border border-base-300 rounded-box">
      <p className="text-xs text-base-content/60 uppercase tracking-wide">
        {label}
      </p>
      <p className="mt-1 font-medium">{value || '—'}</p>
    </div>
  )
}

export default function CustomerDetails() {
  const customer = useLoaderData<Customer>()

  const initials = useMemo(
    () =>
      `${customer.first_name?.[0] ?? 'U'}${customer.last_name?.[0] ?? ''}`.toUpperCase(),
    [customer]
  )

  return (
    <div className="bg-base-200 p-4 md:p-6 min-h-screen">
      <div className="space-y-6 mx-auto max-w-6xl">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-bold text-2xl md:text-3xl">
              Detalles del usuario
            </h1>
          </div>
          <Link to="/customers" className="btn btn-ghost">
            Volver
          </Link>
        </div>

        <div className="gap-6 grid lg:grid-cols-3">
          <div className="lg:col-span-1 bg-base-100 shadow-xl card">
            <div className="items-center text-center card-body">
              <div className="avatar placeholder">
                <div className="bg-primary rounded-full w-24 text-primary-content">
                  <span className="font-bold text-2xl">{initials}</span>
                </div>
              </div>

              <h2 className="mt-4 font-semibold text-xl">
                {customer.first_name} {customer.last_name}
              </h2>
              <p className="text-sm text-base-content/70">{customer.email}</p>

              <div className="mt-2">
                <span
                  className={`badge ${
                    customer.activebool ? 'badge-success' : 'badge-neutral'
                  }`}
                >
                  {customer.activebool ?? 'Activo'}
                </span>
              </div>

              <div className="my-2 divider" />

              <div className="space-y-3 w-full text-left">
                <div>
                  <p className="text-xs text-base-content/60 uppercase tracking-wide">
                    ID
                  </p>
                  <p className="font-mono text-sm">{customer.customer_id}</p>
                </div>
                <div>
                  <p className="text-xs text-base-content/60 uppercase tracking-wide">
                    Fecha de alta
                  </p>
                  <p className="text-sm">
                    {formatIsoDate(customer.create_date)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 bg-base-100 shadow-xl card">
            <div className="card-body">
              <div className="flex justify-between items-center">
                <h3 className="card-title">Información general</h3>
              </div>

              <div className="gap-4 grid md:grid-cols-2">
                <CustomerField label="Nombre" value={customer.first_name} />
                <CustomerField label="Apellido" value={customer.last_name} />
                <CustomerField label="Email" value={customer.email} />
                {/* <CustomerField label="Dirección" value={customer.address} /> */}
              </div>

              <div className="bg-base-200 mt-4 p-4 border border-base-300 rounded-box">
                <p className="text-xs text-base-content/60 uppercase tracking-wide">
                  Notas
                </p>
                <p className="mt-1 text-sm text-base-content/80 leading-relaxed">
                  Sin notas disponibles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
