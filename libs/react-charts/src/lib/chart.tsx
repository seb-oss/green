import { CSSProperties, useRef } from 'react'
import { ChartSettings } from '@sebgroup/green-charts'
import { useChart } from './hooks'

/* eslint-disable-next-line */
export interface ChartProps {
  settings: ChartSettings
  theme?: string
}

export function Chart({ settings, theme }: ChartProps) {
  const chartRef = useRef<HTMLDivElement>(null)
  const { chart, info } = useChart({ chartRef, settings })

  return (
    <div
      className={'chart' + (settings?.fitHeightToParent ? ' fit-height' : '')}
      style={info?.style as unknown as CSSProperties}
    >
      <div className={theme} ref={chartRef} />

      {info?.xAxis && (
        <div>
          <ul className="x-axis">
            {info.xAxis.ticks.map((t, ix) => (
              <li key={`tick--${ix}`}>{t.text}</li>
            ))}
          </ul>
        </div>
      )}

      {info?.legend?.placement !== 'none' && (
        <div className={'legend-container ' + info?.legend?.placement}>
          <ul className="legend">
            {info?.legend?.items.map((i, ix) => (
              <li
                style={{ '--color': i.color } as unknown as CSSProperties}
                key={`legend--${ix}`}
                onMouseOver={() => chart?.focus(i.title)}
                onMouseOut={() => chart?.revert()}
                onMouseUp={() => chart?.toggle(i.title)}
              >
                <span>{i.title}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Chart
