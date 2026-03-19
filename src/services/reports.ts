import { fetcher } from '@/lib/fetcher'
import type { RevenueOverTime, TopCategory } from '@/types/reports'

export const getTopCategories = (url: string) => fetcher<TopCategory[]>(url)
export const getRevenueOverTime = (url: string) =>
  fetcher<RevenueOverTime[]>(url)
