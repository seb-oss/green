import bb, {
  Chart,
  ChartOptions,
  Data,
  LegendOptions,
  ZoomOptions,
  areaSpline,
  areaStep,
  line,
  bar,
  gauge,
  area,
  pie,
  donut,
  spline,
  radar,
  Axis,
} from 'billboard.js'
import { useEffect, useRef, useState } from 'react'
import '@sebgroup/green-charts'

const rand = () => Math.round(3000 * Math.random()) - 1000

/* eslint-disable-next-line */
export interface ReactChartsProps {
  data: Data
  axis?: Axis
  legend?: LegendOptions
  zoom?: ZoomOptions
  theme?: string
}

export function ReactCharts({ data, axis, legend, zoom, theme }: ReactChartsProps) {
  line()
  bar()
  area()
  spline()
  pie()
  areaSpline()
  areaStep()
  gauge()
  donut()
  radar()
  const chartRef = useRef(null)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const [options, setOptions] = useState<ChartOptions>({
    data,
    axis,
    zoom,
    legend,
    interaction: { enabled: true },
    transition: { duration: 1000 },
  })
  const [chart, setChart] = useState<Chart>()
  useEffect(() => {
    if (!chart && chartRef.current) {
      setChart(bb.generate({
        ...options,
        bindto: chartRef.current,
      }))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chartRef, chart])

  useEffect(() => {
    if (!data || !chart || options.data === data) return
    
    setOptions({
      ...options,
      data,
    })
    const { columns, type, types  } = data
    chart.load({ columns, type, types  })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])
  return (
    <i className={theme} ref={chartRef} />
  )
}

export default ReactCharts
