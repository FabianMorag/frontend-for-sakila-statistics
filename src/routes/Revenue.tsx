import RevenueOverTimeChart from '@/components/reports/RevenueOverTimeChart'
import TopCategoriesChart from '@/components/reports/TopCategoriesChart'
import { type Props } from 'react-apexcharts'

const chartProps: Props = {
  type: 'bar',
  width: '100%',
  height: 450,
  options: {
    chart: {
      background: 'transparent',
      toolbar: { show: false },
    },
    theme: {
      mode: 'dark',
      palette: 'palette1',
    },
    legend: {
      show: false,
    },
    plotOptions: {
      bar: {
        borderRadius: 6,
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      borderColor: '#666',
      strokeDashArray: 4,
    },
    yaxis: {
      labels: {
        formatter: val => `$${val}`,
      },
    },
  },
}

export default function Revenue() {
  return (
    <main className="mx-auto p-6 max-w-5xl">
      <header className="mb-14">
        <h1 className="mb-2 font-bold text-white text-4xl">Revenue Reports</h1>
        <p className="max-w-3xl text-gray-400 text-lg">
          Visual overview of our top-performing film categories based on total
          rental revenue. Use this data to analyze trends, discover what
          customers are watching, and make informed inventory decisions.
        </p>
      </header>

      <TopCategoriesChart chartProps={chartProps} />
      <RevenueOverTimeChart chartProps={chartProps} />
    </main>
  )
}
