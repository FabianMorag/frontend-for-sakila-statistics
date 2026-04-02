import { fetcher } from '@/lib/fetcher'
import type { Customer, TopCustomer } from '@/types/customer'

export const getCustomerList = (url: string) => fetcher<Customer[]>(url)
export const getTopCustomerList = (url: string) => fetcher<TopCustomer[]>(url)
