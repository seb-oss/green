import { render, screen } from '@testing-library/react'

import { Segment, SegmentedControl } from './segmented-control'

class ResizeObserver {
  observe() {
    return
  }
  unobserve() {
    return
  }
  disconnect() {
    return {}
  }
}

describe('SegmentedControl', () => {
  ;(window as any).ResizeObserver = ResizeObserver
  it('Should render', () => {
    render(
      <SegmentedControl>
        <Segment>Button 1</Segment>
        <Segment>Button 2</Segment>
        <Segment>Button 3</Segment>
      </SegmentedControl>,
    )
    expect(screen.getAllByText(/Button/)).toHaveLength(3)
  })
})
