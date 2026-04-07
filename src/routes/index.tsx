import { createBrowserRouter } from 'react-router'
import Layout from '@/App'
import { getFilmDetails } from '@/services/films'
import { getCustomerKey, getFilmDetailsKey } from '@/utils/urlKeys'
import { getCustomerDetails } from '@/services/customers'

export const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      {
        index: true,
        lazy: {
          Component: async () => (await import('@/routes/Home')).default,
        },
      },
      {
        path: 'films',
        children: [
          {
            index: true,
            lazy: {
              Component: async () => (await import('@/routes/Films')).default,
            },
          },
          {
            path: ':id',
            loader: async ({ params }) => {
              const { id } = params
              if (!id) throw new Error('Film ID is required')
              return await getFilmDetails(getFilmDetailsKey(id))
            },
            lazy: {
              Component: async () =>
                (await import('@/routes/Films/FilmDetails')).default,
            },
          },
        ],
      },
      {
        path: 'revenue',
        lazy: {
          Component: async () => (await import('@/routes/Revenue')).default,
        },
      },
      {
        path: 'customers',
        children: [
          {
            index: true,
            lazy: {
              Component: async () =>
                (await import('@/routes/Customers')).default,
            },
          },
          {
            path: ':id',
            loader: async ({ params }) => {
              const { id } = params
              if (!id) throw new Error('Customer ID is required')
              return await getCustomerDetails(getCustomerKey(id))
            },
            lazy: {
              Component: async () =>
                (await import('@/routes/Customers/CustomerDetails')).default,
            },
          },
        ],
      },
    ],
  },
])
