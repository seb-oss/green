import bb, {
  area,
  bar,
  Chart as BBChart,
  ChartOptions,
  donut,
  line,
  pie,
  spline
} from 'billboard.js'
import { ChartSettingsUpdate } from './billboardtypes'
import { Chart, ChartArgs, ChartInfo, ChartSettings, ChartType, ChartUpdateArgs } from './types'
import { tmplTooltip } from './templates'

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
    tooltip: { contents: { template: tmplTooltip } },
  }

  let hasNegativeValue = false
  for (const dt of columns) {
    for (const val of dt) {
      if (val < 0) {
        hasNegativeValue = true
        break
      }
    }
    if (hasNegativeValue) break
  }
  if (hasNegativeValue) {
    options.grid = {
      y: {
        lines: [ {
          value: 0, class: 'base-line',
        } ],
      },
    }
  }

  if (settings.categories) {
    options.axis = {
      x: {
        type: 'category',
        categories: settings.categories,
        tick: {
          text: {
            show: false,
          },
        },
        height: 10,
      },
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

export const createInfo = (settings: ChartSettings, chart: BBChart): ChartInfo => {
  const info: Partial<ChartInfo> = {
    legend: {
      items: settings.data.map((d) => ({ title: d.name })),
      placement: settings.legend || 'none',
    },
  }

  info.xAxis = {
    ticks: chart.categories().map((text) => ({ text }))
  }

  info.style = {
    '--chart-width': '768px',
    '--chart-height': '500px',
    '--chart-space-left': '49px',
    '--chart-space-right': 0,
  }

  return info as ChartInfo
}

export const create = ({ settings, chartElement }: ChartArgs): Chart => {
  const options = createOptions({ settings, chartElement })
  const chart = bb.generate(options)
  const info = createInfo(settings, chart)

  const wrapper: Chart = {
    settings,
    info,
    focus: (targetIds) => chart.focus(targetIds),
    revert: (targetIds) => chart.revert(targetIds),
    toggle: (targetIds) => chart.toggle(targetIds),
    update: () => null as unknown as Chart,
  }

  const update = ({ settings, chartElement }: ChartArgs): Chart => {
    const newOptions = createUpdate({ settings, chartElement, oldSettings: wrapper.settings })
    chart.load(newOptions)
    const info = createInfo(settings, chart)

    wrapper.info = info
    wrapper.settings = settings

    return wrapper as Chart
  }
  wrapper.update = update

  return wrapper as Chart
}
