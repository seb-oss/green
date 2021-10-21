import { area, bar, ChartOptions, line, pie, spline } from 'billboard.js'

line()
bar()
area()
spline()
pie()

export type ChartType = 'area' | 'bar' | 'line' | 'spline' | 'pie'

export interface NamedValue {
  name: string
  value: number
}
export type Value = NamedValue | number
export interface ChartData {
  name: string
  type: ChartType
  values: Value[]
  axis?: 'y' | 'y2'
}
export interface ComplexChartData {
  name: string
  data: ChartData[]
  categories?: string[]
}

const parseValues = (values: Value[]): number[] => (
  values.map((v) => (typeof v === 'object') ? v.value : v)
)
const valuesToColumns = (data: ChartData | ComplexChartData): any[] => {
  if ((data as ComplexChartData).data) {
    return (data as ComplexChartData).data.map((d) => parseValues(d.values))
  } else {
    return parseValues((data as ChartData).values)
  }
}

export const createOptions = (data: ChartData | ComplexChartData): ChartOptions => {
  const options: ChartOptions = {
    data: {
      columns: valuesToColumns(data)
    }
  }
  return options
}
