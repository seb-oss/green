import { render } from '@testing-library/react'

import ReactCharts from './react-charts'

describe('ReactCharts', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactCharts />)
    expect(baseElement).toBeTruthy()
  })
})
