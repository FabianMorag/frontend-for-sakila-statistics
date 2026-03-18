import { useGlobalFetch } from '@/hooks/useGlobalFetch'
import { getTopCategoriesKey } from '@/utils/urlKeys'
import { getTopCategories } from '@/services/reports'
import Chart, { type Props } from 'react-apexcharts'

export default function TopCategoriesChart({
  chartProps,
}: {
  chartProps: Props
}) {
  const { data, isLoading, error } = useGlobalFetch(
    getTopCategoriesKey(),
    getTopCategories
  )

  if (error) return <p className="text-center">Error data reports</p>
  if (isLoading) return <div className="mb-14 w-full h-112.5 skeleton"></div>
  if (!data?.length) return

  const { names, revenues } = data.reduce(
    (acc, item) => {
      acc.names.push(item.name)
      acc.revenues.push(item.total_revenue)
      return acc
    },
    { names: [] as string[], revenues: [] as number[] }
  )

  const options = {
    ...chartProps.options,
    xaxis: {
      categories: names,
    },
  }

  const series = [{ name: 'Revenue', data: revenues }]

  return (
    <section className="mb-14">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-gray-200 text-xl tracking-wide">
          Revenue by Category
        </h2>
        <span className="bg-blue-500/10 px-3 py-1 border border-blue-500/20 rounded-full font-medium text-blue-400 text-sm">
          All Time
        </span>
      </div>

      <Chart {...chartProps} options={options} series={series} />
    </section>
  )
}
