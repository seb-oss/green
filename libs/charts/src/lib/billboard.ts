import bb, {
  area,
  Axis,
  bar,
  Chart as BBChart,
  ChartOptions,
  donut,
  line,
  pie,
  PointOptions,
  spline,
} from 'billboard.js'
import { ChartSettingsUpdate } from './billboardtypes'
import {
  Chart,
  ChartArgs,
  ChartInfo,
  ChartSettings,
  ChartType,
  ChartUpdateArgs,
} from './types'
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

// TODO: This createOption function should be more of a billboard config with sensible defaults adder rather than being passed a Green Charts settings object that then is converted to a billboard config.
export const createOptions = ({
  settings,
  chartElement,
}: ChartArgs): ChartOptions => {
  const columns = settings.data.map((d) => [d.name, ...d.values])

  const defaultType: ChartType = settings.type || 'bar'

  const types = settings.data.reduce(
    (res, d) => ({
      ...res,
      [d.name]: d.type || defaultType,
    }),
    {},
  )
  const axes = settings.data.reduce(
    (res, d) => ({
      ...res,
      [d.name]: d.axis || 'y',
    }),
    {},
  )

  const color = Object.assign({}, settings.style?.color)

  const defaultTooltipNumberFormat = (num: number) =>
    num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

  const defaultTooltipPercentageFormat = (ratio: number) =>
    `${Number((ratio * 100).toFixed(2))}%`

  const options: ChartOptions = {
    bindto: chartElement,
    data: {
      columns,
      types,
      axes,
    },
    legend: { show: false },
    tooltip: {
      format: {
        value: (value, ratio, id, index) => {
          const formatOverride = settings?.style?.tooltipNumberFormat
          if (typeof formatOverride === 'function') {
            return formatOverride(value, ratio, id, index)
          }
          if (typeof ratio == 'number')
            return defaultTooltipPercentageFormat(ratio)
          else {
            return defaultTooltipNumberFormat(value)
          }
        },
      },
      contents: { template: tmplTooltip },
    },
    color,
  }

  let hasY2Axis = false

  hasY2Axis = Object.values(axes).indexOf('y2') !== -1

  if (hasY2Axis) {
    options.axis = {
      ...(options.axis || {}),
      y2: {
        show: true,
      },
    }
  }

  // add settings for point
  if (settings?.style?.point != null) {
    let pointSetting: PointOptions

    if (settings?.style.point.show === 'focus') {
      pointSetting = {
        focus: { only: true },
      }
    } else {
      pointSetting = {
        show: settings?.style.point.show,
      }
    }
    options.point = {
      ...pointSetting,
    }
  }

  // add settings for axis
  if (settings?.style?.axis != null) {
    let axesSetting: Axis

    if (settings?.style.axis === false) {
      // hide all axes
      axesSetting = {
        y: { show: false },
        y2: { show: false },
        x: { show: false },
      }
    } else {
      axesSetting = Object.entries(settings?.style.axis).reduce(
        (axes, [axis, settings]) => ({
          ...axes,
          [axis]: {
            ...(axes[<'y' | 'y2' | 'x'>axis] || {}),
            ...((settings?.ticksCount ||
              settings?.stepSize ||
              settings?.values ||
              settings?.format) && {
              tick: {
                ...(settings?.ticksCount && {
                  count: settings?.ticksCount,
                }),
                ...(settings?.stepSize && {
                  stepSize: settings?.stepSize,
                }),
                ...(settings?.values && {
                  values: settings.values,
                }),
                ...(settings?.format && {
                  format: settings.format,
                }),
              },
            }),
            show: settings?.show === false ? false : true,
            label: settings?.label,
            min: settings?.min,
            max: settings?.max,
            padding: settings?.padding,
            height: settings?.height,
            ...(axis === 'y' || axis === 'x' ? { clipPath: false } : {}),
          },
        }),
        {
          ...(options.axis || {}),
        },
      )
    }
    options.axis = {
      ...options.axis,
      ...axesSetting,
    }
  }

  let hasNegativeValue = false
  for (const dt of columns) {
    for (const val of dt) {
      if (typeof val !== 'number') continue
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
        lines: [
          {
            value: 0,
            class: 'base-line',
          },
        ],
      },
    }
  }

  if (settings.categories) {
    options.axis = {
      ...(options.axis || {}),
      x: {
        ...(options?.axis?.x || {}),
        type: 'category',
        categories: settings.categories,
      },
    }
  }
  return options
}

export const createUpdate = ({
  settings,
  chartElement,
}: ChartUpdateArgs): ChartSettingsUpdate => {
  // const oldOptions = createOptions(oldSettings)
  const newOptions = createOptions({ settings, chartElement })
  const data = newOptions.data || {}

  const update: ChartSettingsUpdate = {
    columns: data.columns || [],
    types: data.types || {},
  }
  if (settings.categories) update.categories = settings.categories

  return update
}

export const createInfo = (
  settings: ChartSettings,
  chart: BBChart,
): ChartInfo => {
  const info: Partial<ChartInfo> = {
    legend: {
      items: settings.data.map((d) => ({
        title: d.name,
        color: chart.color(d.name),
      })),
      placement: settings.legend || 'none',
    },
  }

  // expose values for axis unless hidden
  if (
    settings.style?.axis === true ||
    (settings.style?.axis !== false && settings.style?.axis?.x?.show !== false)
  ) {
    info.xAxis = {
      ticks: chart.categories()?.map((text) => ({ text })),
    }
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
    const newOptions = createUpdate({
      settings,
      chartElement,
      oldSettings: wrapper.settings,
    })
    chart.load(newOptions)
    const info = createInfo(settings, chart)

    wrapper.info = info
    wrapper.settings = settings

    return wrapper as Chart
  }
  wrapper.update = update

  return wrapper as Chart
}
