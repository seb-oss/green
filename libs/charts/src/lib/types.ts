import { ArrayOrString } from "billboard.js"

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
}

interface LegendItem {
  title: string
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

export interface ChartInfo {
  legend: Legend
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
