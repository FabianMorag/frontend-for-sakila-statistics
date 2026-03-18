import useSWR from 'swr'
import { useGlobalLoading } from '@/stores/useGlobalLoading'
import { useEffect } from 'react'

export const useGlobalFetch = <T>(
  url: string,
  fn: (url: string) => Promise<T>
) => {
  const { data, error, isLoading } = useSWR(url, fn)

  const setGlobalLoading = useGlobalLoading(state => state.setGlobalLoading)
  useEffect(() => setGlobalLoading(isLoading), [isLoading])

  return { data, isLoading, error }
}
