import { createBrowserRouter } from 'react-router'
import Layout from '@/App'

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
        lazy: {
          Component: async () => (await import('@/routes/Films')).default,
        },
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
