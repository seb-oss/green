import { area, bar, ChartOptions, line, pie, spline } from 'billboard.js'

const init = () => {
  if (!line) return

  line()
  bar()
  area()
  spline()
  pie()
}
init()

export type ChartType = 'area' | 'bar' | 'line' | 'spline' | 'pie'

export interface NamedValue {
  name: string
  value: number
}
export type Values = NamedValue[] | number[]
export interface ChartData {
  name: string
  type: ChartType
  values: Values
  axis?: 'y' | 'y2'
}
export interface ComplexChartData {
  name: string
  data: ChartData[]
  categories?: string[]
}

const parseValues = (values: Values): number[] => (
  values.map((v) => (typeof v === 'object') ? v.value : v)
)
const valuesToColumns = (data: ChartData[]): any[] => {
  return data.map((d) => [d.name, ...parseValues(d.values)])
}

export const createOptions = (data: ChartData | ComplexChartData): ChartOptions => {
  
  const charts = ((data as ComplexChartData).data)
    ? (data as ComplexChartData).data
    : [data as ChartData]

  const columns = valuesToColumns(charts)
  const types = charts.reduce((res, c) => ({
    ...res,
    [c.name]: c.type,
  }), {})

  const options: ChartOptions = {
    data: {
      columns,
      types,
    }
  }
  return options
}
