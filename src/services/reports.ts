import { fetcher } from '@/lib/fetcher'

type TopCategory = {
  name: string
  total_revenue: number
}

export const getTopCategories = (url: string) => fetcher<TopCategory[]>(url)
