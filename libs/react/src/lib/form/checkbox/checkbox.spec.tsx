import React from 'react'
import { render, screen } from '@testing-library/react'

import { Checkbox } from './checkbox'

describe('Checkbox', () => {
  it('ref becomes checkbox input element', () => {
    const ref = React.createRef<HTMLInputElement>()
    render(<Checkbox ref={ref} />)

    expect(ref.current).toBeInstanceOf(HTMLInputElement)
    expect(ref.current?.type).toBe('checkbox')
  })
})
