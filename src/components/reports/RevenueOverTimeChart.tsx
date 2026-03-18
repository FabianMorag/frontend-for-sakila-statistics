import { useGlobalFetch } from '@/hooks/useGlobalFetch'
import { getRevenueOverTimeKey } from '@/utils/urlKeys'
import { getRevenueOverTime } from '@/services/reports'
import Chart, { type Props } from 'react-apexcharts'
import { type ApexOptions } from 'apexcharts'

export default function RevenueOverTimeChart({
  chartProps,
}: {
  chartProps: Props
}) {
  const { data, isLoading, error } = useGlobalFetch(
    getRevenueOverTimeKey(),
    getRevenueOverTime
  )

  if (error) return <p className="text-center">Error data reports</p>
  if (isLoading) return <div className="w-full h-112.5 skeleton"></div>
  if (!data?.length) return <p className="text-center">No data available</p>

  const { date, revenues } = data.reduce(
    (acc, item) => {
      acc.date.push(item.date)
      acc.revenues.push(Number(item.total_revenue))
      return acc
    },
    { date: [] as string[], revenues: [] as number[] }
  )

  const options: ApexOptions = {
    ...chartProps.options,
    xaxis: {
      categories: date,
      labels: {
        datetimeUTC: true,
        formatter: (value: string) => value.slice(0, 7),
      },
    },
  }

  const series = [{ name: 'Revenue over time', data: revenues }]

  return (
    <section className="mb-14">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-gray-200 text-xl tracking-wide">
          Revenue over time
        </h2>
      </div>

      <Chart {...chartProps} options={options} series={series} />
    </section>
  )
}
