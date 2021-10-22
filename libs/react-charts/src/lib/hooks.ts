import { Chart, ChartInfo, ChartSettings, create } from '@sebgroup/green-charts'
import { MutableRefObject, useEffect, useState } from 'react'

export const useChart = (ref: MutableRefObject<null>, settings: ChartSettings) => {
  const [chart, setChart] = useState<Chart>()
  const [info, setInfo] = useState<ChartInfo>({})

  useEffect(() => {
    console.log('ref or chart update')
    if (!chart && ref.current) {
      console.log('create chart')
      setChart(create(ref.current, settings))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, chart])

  useEffect(() => {
    console.log('settings update')
    if (!settings || !chart || chart.settings === settings) return
    console.log('update chart')
    setChart(chart.update(settings))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [settings])

  useEffect(() => {
    console.log('info update')
    if (chart && chart.info) {
      console.log('update info')
      setInfo(chart.info)
    }
  }, [chart, chart?.info])

  return { chart, info }
}
