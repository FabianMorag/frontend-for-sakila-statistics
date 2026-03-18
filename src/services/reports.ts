import { fetcher } from '@/lib/fetcher'

type TopCategory = {
  name: string
  total_revenue: number
}

type RevenueOverTime = {
  date: string
  total_revenue: string
}

export const getTopCategories = (url: string) => fetcher<TopCategory[]>(url)
export const getRevenueOverTime = (url: string) =>
  fetcher<RevenueOverTime[]>(url)
