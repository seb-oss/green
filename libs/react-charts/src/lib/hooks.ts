import { Chart, ChartInfo, ChartSettings, create } from '@sebgroup/green-charts'
import { MutableRefObject, useEffect, useState } from 'react'

export const useChart = (ref: MutableRefObject<null>, settings: ChartSettings) => {
  const [chart, setChart] = useState<Chart>()
  const [info, setInfo] = useState<ChartInfo>({})

  useEffect(() => {
    if (!chart && ref.current) {
      setChart(create(ref.current, settings))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, chart])

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
