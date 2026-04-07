import { fetcher } from '@/lib/fetcher'
import type { Customer, CustomerProfile, TopCustomer } from '@/types/customer'

export const getCustomerList = (url: string) => fetcher<Customer[]>(url)
export const getTopCustomerList = (url: string) => fetcher<TopCustomer[]>(url)
export const getCustomerDetails = (url: string) => fetcher<CustomerProfile>(url)
