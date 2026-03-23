import { fetcher } from '@/lib/fetcher'
import type { Customer } from '@/types/customer'

export const getCustomerList = (url: string) => fetcher<Customer[]>(url)
