import { create } from 'zustand'
import { combine } from 'zustand/middleware'

export const useGlobalLoading = create(
  combine({ globalLoading: false }, set => ({
    setGlobalLoading: (loading: boolean) => set({ globalLoading: loading }),
  }))
)
