import { ArrayOrString, ChartOptions } from 'billboard.js'

export type ChartType = 'area' | 'bar' | 'donut' | 'line' | 'spline' | 'pie'
export type LegendPlacement = 'top' | 'right' | 'none'

export interface ChartData {
  name: string
  type?: ChartType
  values: number[]
  axis?: 'y' | 'y2'
}

export interface ChartSettings {
  type?: ChartType
  data: ChartData[]
  categories?: string[]
  legend?: LegendPlacement
  style?: ChartStyle
}

interface LegendItem {
  title: string
  color: string
}

export interface Legend {
  items: LegendItem[]
  placement: LegendPlacement
}

export interface ChartAxis {
  show?: boolean
  label?: string
  ticksCount?: number
  stepSize?: number
  values?: Array<number> | (() => Array<number>)
  format?: (value: number) => string
  min?: number
  max?: number
  height?: number
  padding?: {
    top?: number
    bottom?: number
  }
}

export interface ChartStyle extends Pick<ChartOptions, 'color'> {
  fitHeightToParent?: boolean
  axis?:
    | boolean
    | {
        x?: ChartAxis
        y?: ChartAxis
        y2?: ChartAxis
      }
  point?: {
    show?: boolean | 'focus'
  }
  tooltipNumberFormat?: (
    value: number,
    ratio: number | undefined,
    id: string,
    index: number,
  ) => string
}

interface Tick {
  text: string
}
export interface Axis {
  ticks: Tick[]
}

export interface ChartProperties {
  '--chart-width': string | number
  '--chart-height': string | number
  '--chart-space-left': string | number
  '--chart-space-right': string | number
}
export interface ChartInfo {
  legend: Legend
  properties: ChartProperties
  xAxis: Axis
}

export interface ChartArgs {
  settings: ChartSettings
  chartElement: ElementReference
}
export interface ChartUpdateArgs extends ChartArgs {
  oldSettings: ChartSettings
}

export type ElementReference = string | HTMLElement
export interface Chart {
  settings: ChartSettings
  info: ChartInfo
  update: (args: ChartArgs) => Chart
  focus: (targetIds: ArrayOrString) => void
  revert: (targetIds?: ArrayOrString) => void
  toggle: (targetIds: ArrayOrString) => void
}
