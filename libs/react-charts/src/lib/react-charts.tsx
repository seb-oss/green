import { useEffect, useRef, useState } from 'react'
import { create, Chart, ChartSettings } from '@sebgroup/green-charts'

/* eslint-disable-next-line */
export interface ReactChartsProps {
  settings: ChartSettings
  theme?: string
}

export function ReactCharts({ settings, theme }: ReactChartsProps) {
  const chartRef = useRef(null)
  const [chart, setChart] = useState<Chart>()
  
  useEffect(() => {
    if (!chart && chartRef.current) {
      setChart(create(chartRef.current, settings))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chartRef, chart])

  useEffect(() => {
    if (!settings || !chart || chart.settings === settings) return
    chart.update(settings)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [settings])

  return (
    <i className={theme} ref={chartRef} />
  )
}

export default ReactCharts
