import { useRef } from 'react'
import { ChartSettings } from '@sebgroup/green-charts'
import { useChart } from './hooks'

/* eslint-disable-next-line */
export interface ReactChartsProps {
  settings: ChartSettings
  theme?: string
}

export function ReactCharts({ settings, theme }: ReactChartsProps) {
  const chartRef = useRef<HTMLDivElement>(null)
  const { chart, info } = useChart({ chartRef, settings })

  return (
    <div className="chart">
      { info?.title &&
        <h2>{ info.title }</h2>
      }
      <div className={theme} ref={chartRef} />

      { info?.xAxis &&
        <div>
          x axis:
          <ul className="x-axis">
          { info.xAxis.ticks.map((t) => (
            <li>{ t.text }</li>
          )) }
          </ul>
        </div>
      }

      { info?.legend?.placement !== 'none' && (
        <div>
          Legend:
          <ul className="legend">
            { info?.legend?.items.map((i) => (
              <li
                onMouseOver={() => chart?.focus(i.title)}
                onMouseOut={() => chart?.revert()}
                onMouseUp={() => chart?.toggle(i.title)}
              >
                {i.title}
              </li>
            )) }
          </ul>
        </div>
      ) }
    </div>
  )
}

export default ReactCharts
