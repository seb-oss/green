import { ChartSettings } from '@sebgroup/green-charts'
import { render } from '@testing-library/react'
import ReactCharts from './react-charts'

describe('ReactCharts', () => {
  let settings: ChartSettings
  beforeEach(() => {
    settings = {
      title: 'Title',
      data: [],
    }
  })
  it('renders', () => {
    const { baseElement } = render(<ReactCharts settings={settings} />)
    expect(baseElement).toBeTruthy()
  })
  it('renders title', async () => {
    const { findByRole } = render(<ReactCharts settings={settings} />)
    const heading = await findByRole('heading')
    expect(heading.innerHTML).toEqual('Title')
  })
})
