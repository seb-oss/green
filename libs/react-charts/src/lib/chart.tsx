import { CSSProperties, useRef } from 'react'
import { ChartSettings } from '@sebgroup/green-charts'
import { useChart } from './hooks'

/* eslint-disable-next-line */
export interface ChartProps {
  settings: ChartSettings
  theme?: string
}

interface ChartLayoutInfo extends CSSProperties {
  '--chart-width': string | number
  '--chart-height': string | number
  '--chart-space-left': string | number
  '--chart-space-right': string | number
}

export function Chart({ settings, theme }: ChartProps) {
  const chartRef = useRef<HTMLDivElement>(null)
  const { chart, info } = useChart({ chartRef, settings })
  const chartLayoutInfo: ChartLayoutInfo = {
    '--chart-width': '768px',
    '--chart-height': '500px',
    '--chart-space-left': '49px',
    '--chart-space-right': 0,
  }
  return (
    <div className="chart" style={chartLayoutInfo}>
      {info?.title && <h2>{info.title}</h2>}
      <div className={theme} ref={chartRef} />

      {info?.xAxis && (
        <div>
          <ul className="x-axis">
            {info.xAxis.ticks.map((t) => (
              <li>{t.text}</li>
            ))}
          </ul>
        </div>
      )}

      {info?.legend?.placement !== 'none' && (
        <div>
          <ul className="legend">
            {info?.legend?.items.map((i) => (
              <li
                onMouseOver={() => chart?.focus(i.title)}
                onMouseOut={() => chart?.revert()}
                onMouseUp={() => chart?.toggle(i.title)}
              >
                {i.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Chart
