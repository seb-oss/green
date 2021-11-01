import { ChartSettings } from '@sebgroup/green-charts'
import { render } from '@testing-library/react'
import Chart from './chart'

describe('Chart', () => {
  let settings: ChartSettings
  beforeEach(() => {
    settings = {
      title: 'Title',
      data: [],
    }
  })
  it('renders', () => {
    const { baseElement } = render(<Chart settings={settings} />)
    expect(baseElement).toBeTruthy()
  })
  it('renders title', async () => {
    const { findByRole } = render(<Chart settings={settings} />)
    const heading = await findByRole('heading')
    expect(heading.innerHTML).toEqual('Title')
  })
})
