export type ChartType = 'area' | 'bar' | 'donut' | 'line' | 'spline' | 'pie'

export interface ChartData {
  name: string
  type?: ChartType
  values: number[]
  axis?: 'y' | 'y2'
}

export interface ChartSettings {
  title?: string
  type?: ChartType
  data: ChartData[]
  categories?: string[]
}

interface LegendItem {
  title: string
}

export interface Legend {
  items: LegendItem[]
}

export interface ChartInfo {
  title?: string
  legend?: Legend
}

export interface Chart {
  settings: ChartSettings
  info: ChartInfo
  update: (settings: ChartSettings) => Chart
}
