import bb, {
  Chart as BBChart,
  ChartOptions,
} from 'billboard.js'
import { useEffect, useRef, useState } from 'react'
import { Chart, createOptions } from '@sebgroup/green-charts'

/* eslint-disable-next-line */
export interface ReactChartsProps {
  data: Chart
  theme?: string
}

export function ReactCharts({ data, theme }: ReactChartsProps) {
  const chartRef = useRef(null)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const [options, setOptions] = useState<ChartOptions>(createOptions(data))
  const [chart, setChart] = useState<BBChart>()
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
    
    const newOptions = createOptions(data)
    setOptions(newOptions)

    if (newOptions.data) {
      const { columns, types  } = newOptions.data
      chart.load({ columns, types  })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  return (
    <i className={theme} ref={chartRef} />
  )
}

export default ReactCharts
