import { area, bar, ChartOptions, donut, line, pie, spline } from 'billboard.js'
import { Chart, ChartType } from './types'

export { Chart }

const init = () => {
  if (!line) return

  line()
  bar()
  donut()
  area()
  spline()
  pie()
}
init()

export const createOptions = (chart: Chart): ChartOptions => {
  const columns = chart.data.map((d) => [d.name, ...d.values])

  const defaultType: ChartType = chart.type || 'bar'
  const types = chart.data.reduce((res, d) => ({
    ...res,
    [d.name]: d.type || defaultType,
  }), {})

  const options: ChartOptions = {
    data: {
      columns,
      types,
    },
    legend: {
      show: false,
    },
  }

  if (chart.categories) {
    options.axis = {
      x: {
        type: 'category',
        categories: chart.categories,
      }
    }
  }

  return options
}
