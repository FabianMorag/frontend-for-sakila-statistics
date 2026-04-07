import axios from 'axios'
import { API_URL } from '@/utils/apiUrl'

export const fetcher = <T>(url: string): Promise<T> =>
  axios.get<T>(`${API_URL}${url}`).then(res => res.data)
