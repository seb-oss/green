import { Chart, ChartInfo, ChartSettings, create } from '@sebgroup/green-charts'
import { MutableRefObject, useEffect, useState } from 'react'

export const useChart = (chartRef: MutableRefObject<null>, settings: ChartSettings) => {
  const [chart, setChart] = useState<Chart>()
  const [info, setInfo] = useState<ChartInfo>({})

  useEffect(() => {
    if (!chart && chartRef.current) {
      setChart(create(chartRef.current, settings))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chartRef, chart])

  useEffect(() => {
    if (!settings || !chart || chart.settings === settings) return
    setChart(chart.update(settings))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [settings])

  useEffect(() => {
    if (chart && chart.info) {
      setInfo(chart.info)
    }
  }, [chart, chart?.info])

  return { chart, info }
}
