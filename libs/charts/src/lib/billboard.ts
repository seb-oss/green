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
import { Chart, ChartArgs, ChartInfo, ChartSettings, ChartType, ChartUpdateArgs } from './types'

export const init = () => {
  if (!line) return // for some reason these functions do not work in Jest

  line()
  bar()
  donut()
  area()
  spline()
  pie()
}

export const createOptions = ({ settings, chartElement }: ChartArgs): ChartOptions => {
  const columns = settings.data.map((d) => [d.name, ...d.values])

  const defaultType: ChartType = settings.type || 'bar'
  const types = settings.data.reduce((res, d) => ({
    ...res,
    [d.name]: d.type || defaultType,
  }), {})

  const options: ChartOptions = {
    bindto: chartElement,
    data: {
      columns,
      types,
    },
    legend: { show: false },
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

export const createUpdate = ({ settings, chartElement }: ChartUpdateArgs): ChartSettingsUpdate => {
  // const oldOptions = createOptions(oldSettings)
  const newOptions = createOptions({ settings, chartElement })
  const data = newOptions.data || {}

  const update: ChartSettingsUpdate = {
    columns: data.columns || [],
    types: data.types || {},
    categories: settings.categories,
  }

  return update
}

export const createInfo = (settings: ChartSettings): ChartInfo => {
  return {
    title: settings.title,
    legend: {
      items: settings.data.map((d) => ({ title: d.name })),
      placement: settings.legend || 'none',
    }
  }
}

export const create = ({ settings, chartElement }: ChartArgs): Chart => {
  const wrapper: Chart = {
    settings,
    info: createInfo(settings),
    update: (_: ChartArgs) => null as unknown as Chart,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    focus: (_) => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    revert: (_) => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    toggle: (_) => {},
  }

  const options = createOptions({ settings, chartElement })
  const chart = bb.generate(options)
  wrapper.focus = (targetIds) => chart.focus(targetIds)
  wrapper.revert = (targetIds) => chart.revert(targetIds)
  wrapper.toggle = (targetIds) => chart.toggle(targetIds)

  const update = ({ settings, chartElement }: ChartArgs): Chart => {
    const newOptions = createUpdate({ settings, chartElement, oldSettings: wrapper.settings })
    const info = createInfo(settings)

    chart.load(newOptions)

    wrapper.info = info
    wrapper.settings = settings

    return wrapper
  }
  wrapper.update = update

  return wrapper
}
