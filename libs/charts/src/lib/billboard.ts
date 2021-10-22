import bb, {
  area,
  bar,
  ChartOptions,
  donut,
  line,
  pie,
  spline
} from 'billboard.js'
import { ChartSettingsUpdate } from './billboardtypes'
import { Chart, ChartInfo, ChartSettings, ChartType, Legend } from './types'

export const init = () => {
  if (!line) return // for some reason these functions do not work in Jest

  line()
  bar()
  donut()
  area()
  spline()
  pie()
}

export const createOptions = (settings: ChartSettings): ChartOptions => {
  const columns = settings.data.map((d) => [d.name, ...d.values])

  const defaultType: ChartType = settings.type || 'bar'
  const types = settings.data.reduce((res, d) => ({
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

  if (settings.categories) {
    options.axis = {
      x: {
        type: 'category',
        categories: settings.categories,
      }
    }
  }

  return options
}

export const createUpdate = (_oldSettings: ChartSettings, newSettings: ChartSettings): ChartSettingsUpdate => {
  // const oldOptions = createOptions(oldSettings)
  const newOptions = createOptions(newSettings)
  const data = newOptions.data || {}

  const update: ChartSettingsUpdate = {
    columns: data.columns || [],
    types: data.types || {},
    categories: newSettings.categories,
  }

  return update
}

export const createInfo = (settings: ChartSettings): ChartInfo => {
  return {
    title: settings.title
  }
}

export const create = (element: any, settings: ChartSettings): Chart => {
  const wrapper: Chart = {
    settings,
    info: createInfo(settings),
    update: (_) => null as unknown as Chart,
  }

  const options = createOptions(settings)
  const chart = bb.generate({
    ...options,
    bindto: element,
  })

  const update = (settings: ChartSettings): Chart => {
    const newOptions = createUpdate(wrapper.settings, settings)
    const info = createInfo(settings)

    chart.load(newOptions)

    return {
      ...wrapper,
      info,
      settings,
    }
  }
  wrapper.update = update

  return wrapper
}
