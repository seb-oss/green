import { useRef } from 'react'
import { ChartSettings } from '@sebgroup/green-charts'
import { useChart } from './hooks'

/* eslint-disable-next-line */
export interface ReactChartsProps {
  settings: ChartSettings
  theme?: string
}

export function ReactCharts({ settings, theme }: ReactChartsProps) {
  const ref = useRef(null)
  const { info } = useChart(ref, settings)

  return (
    <div className="chart">
      { info.title &&
        <h1>{ info.title }</h1>
      }
      <div className={theme} ref={ref} />
      { info.legend &&
        <ul className="legend">
          { info.legend.items.map((li) => (
            <li>{ li.title }</li>
          ))}
        </ul>
      }
    </div>
  )
}

export default ReactCharts
