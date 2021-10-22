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

export interface Chart {
  settings: ChartSettings
  update: (settings: ChartSettings) => Chart
}
