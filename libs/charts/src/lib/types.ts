import { ArrayOrString } from 'billboard.js'

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
  fitHeightToParent?: boolean
}

interface LegendItem {
  title: string
  color: string
}

export interface Legend {
  items: LegendItem[]
  placement: LegendPlacement
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
