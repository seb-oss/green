import { RefObject, useEffect, useState } from 'react'

import {
  Chart,
  ChartArgs,
  ChartInfo,
  ChartSettings,
  create,
} from '@sebgroup/green-charts'

interface ChartProps {
  chartRef: RefObject<HTMLDivElement | null>
  settings: ChartSettings
}

export const useChart = ({ chartRef, settings }: ChartProps) => {
  const [chart, setChart] = useState<Chart>()
  const [info, setInfo] = useState<ChartInfo>()

  useEffect(() => {
    if (!chart && chartRef.current) {
      const args: ChartArgs = { settings, chartElement: chartRef.current }
      setChart(create(args))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chartRef, chart])

  useEffect(() => {
    if (
      !chartRef ||
      !chartRef.current ||
      !settings ||
      !chart ||
      chart.settings === settings
    )
      return
    setChart(chart.update({ settings, chartElement: chartRef.current }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [settings])

  useEffect(() => {
    if (chart && chart.info) {
      setInfo(chart.info)
    }
  }, [chart, chart?.info, settings])

  return { chart, info }
}
