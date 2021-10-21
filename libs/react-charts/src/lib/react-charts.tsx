import bb, {
  Chart,
  ChartOptions,
} from 'billboard.js'
import { useEffect, useRef, useState } from 'react'
import { ChartData, ComplexChartData, createOptions } from '@sebgroup/green-charts'

/* eslint-disable-next-line */
export interface ReactChartsProps {
  data: ChartData | ComplexChartData
  theme?: string
}

export function ReactCharts({ data, theme }: ReactChartsProps) {
  const chartRef = useRef(null)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const [options, setOptions] = useState<ChartOptions>(createOptions(data))
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

  /*useEffect(() => {
    if (!data || !chart || options.data === data) return
    
    setOptions({
      ...options,
      data,
    })
    const { columns, type, types  } = data
    chart.load({ columns, type, types  })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])*/

  return (
    <i className={theme} ref={chartRef} />
  )
}

export default ReactCharts
