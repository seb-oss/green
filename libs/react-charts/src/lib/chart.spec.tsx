import { ChartSettings } from '@sebgroup/green-charts'
import { render } from '@testing-library/react'
import Chart from './chart'

describe('Chart', () => {
  let settings: ChartSettings
  beforeEach(() => {
    settings = {
      data: [],
    }
  })
  it('renders', () => {
    const { baseElement } = render(<Chart settings={settings} />)
    expect(baseElement).toBeTruthy()
  })
})
