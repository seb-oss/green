import bb, {
  area,
  bar,
  ChartOptions,
  donut,
  line,
  pie,
  spline
} from 'billboard.js'
import { Chart, ChartSettings } from './types'

export const init = () => {
  if (!line) return // for some reason these functions do not work in Jest

  line()
  bar()
  donut()
  area()
  spline()
  pie()
}

export const createOptions = (chart: ChartSettings): ChartOptions => {
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

export const create = (element: any, settings: ChartSettings): Chart => {
  const options = createOptions(settings)
  const chart = bb.generate({
    ...options,
    bindto: element,
  })

  const update = (settings: ChartSettings): Chart => {
    const newOptions = createOptions(settings)

    if (newOptions.data) {
      const { columns, types  } = newOptions.data
      chart.load({ columns, types  })
    }

    return { settings, update }
  }

  return { settings, update }
}
