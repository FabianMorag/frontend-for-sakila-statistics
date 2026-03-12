import { createBrowserRouter } from 'react-router'
import Layout from '@/App'
import { getFilmDetails } from '@/services/films'

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
              Component: async () =>
                (await import('@/routes/films/Films')).default,
            },
          },
          {
            path: ':id',
            loader: async ({ params }) => {
              const { id } = params
              if (!id) throw new Error('Film ID is required')
              return await getFilmDetails(id)
            },
            lazy: {
              Component: async () =>
                (await import('@/routes/films/FilmDetails')).default,
            },
          },
        ],
      },
      {
        path: 'reports',
        lazy: {
          Component: async () => (await import('@/routes/Reports')).default,
        },
      },
      {
        path: 'customers',
        lazy: {
          Component: async () => (await import('@/routes/Customers')).default,
        },
      },
    ],
  },
])
