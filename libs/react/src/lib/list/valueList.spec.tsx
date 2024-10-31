import { render, screen } from '@testing-library/react'

import { ValueList } from './index'

describe('Value List', () => {
  it('Should render ordered list', () => {
    render(
      <ValueList.List>
        <ValueList.Label>Label</ValueList.Label>
        <ValueList.Value>Value</ValueList.Value>
      </ValueList.List>,
    )

    expect(screen.getByText('Label').tagName).toEqual('DT')
    expect(screen.getByText('Value').tagName).toEqual('DD')
  })

  it('Should add inverted class', () => {
    const { container } = render(
      <ValueList.List inverted>
        <ValueList.Label>Label</ValueList.Label>
        <ValueList.Value>Value</ValueList.Value>
      </ValueList.List>,
    )

    expect(
      container.querySelector('dl')?.classList.contains('gds-list--inverted'),
    ).toEqual(true)
  })
})
