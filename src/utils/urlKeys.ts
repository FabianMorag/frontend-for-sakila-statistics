export const getFilmsKey = (page: number) => `/films?limit=6&page=${page}`
export const getFilmDetailsKey = (id: string) => `/films/${id}`
export const getTopCategoriesKey = () => `/reports/top-categories`
export const getRevenueOverTimeKey = () => `/reports/revenue-over-time`
