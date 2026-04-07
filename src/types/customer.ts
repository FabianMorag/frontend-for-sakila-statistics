export type Customer = {
  customer_id: number
  first_name: string
  last_name: string
  email: string
  address_id: number
  activebool: boolean
  create_date: string
  last_update: string
  active: number
}

export type TopCustomer = {
  first_name: string
  last_name: string
  total_spent: string
}
