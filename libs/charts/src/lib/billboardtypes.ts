import { ArrayOrString, Chart, PrimitiveArray } from 'billboard.js'

export interface ChartSettingsUpdate {
  append?: boolean
  url?: string
  json?:
    | [{ [key: string]: string | number }]
    | { [key: string]: string[] | number[] }
  rows?: PrimitiveArray[]
  columns?: PrimitiveArray[]
  data?: Array<{ [key: string]: number }>
  names?: { [key: string]: string }
  xs?: { [key: string]: string }
  classes?: { [key: string]: string }
  categories?: string[]
  axes?: { [key: string]: string | string[] }
  colors?: { [key: string]: string }
  headers?: { [key: string]: string }
  keys?: { [key: string]: string }
  mimeType?: string
  type?: string
  types?: { [key: string]: string }
  unload?: boolean | ArrayOrString
  done?: (this: Chart) => void
}
