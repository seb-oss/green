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
  it('renders simple bar chart', () => {
    settings = {
      data: [
        {
          type: 'bar',
          name: 'Foo',
          values: [1, 2, 3, 4],
        },
      ],
      categories: ['A', 'B', 'C', 'D'],
    }
    const { baseElement } = render(<Chart settings={settings} />)
    expect(baseElement).toBeTruthy()
  })
  it('renders simple pie chart', () => {
    settings = {
      type: 'pie',
      data: [
        { name: 'Foo', values: [1] },
        { name: 'Bar', values: [2] },
        { name: 'Baz', values: [3] },
      ],
    }
    const { baseElement } = render(<Chart settings={settings} />)
    expect(baseElement).toBeTruthy()
  })
  it('re-renders simple pie chart', () => {
    settings = {
      type: 'pie',
      data: [
        { name: 'Foo', values: [1] },
        { name: 'Bar', values: [2] },
        { name: 'Baz', values: [3] },
      ],
    }
    const { baseElement, rerender } = render(<Chart settings={settings} />)
    expect(baseElement).toBeTruthy()

    settings.data[2].values = [4]
    settings.categories = ['foo', 'bar']

    expect(() => rerender(<Chart settings={settings} />)).not.toThrow()
  })
  it('renders simple donut chart', () => {
    settings = {
      type: 'donut',
      data: [
        { name: 'Foo', values: [1] },
        { name: 'Bar', values: [2] },
        { name: 'Baz', values: [3] },
      ],
    }
    const { baseElement } = render(<Chart settings={settings} />)
    expect(baseElement).toBeTruthy()
  })
})
