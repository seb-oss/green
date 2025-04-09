/* eslint-disable @typescript-eslint/no-non-null-assertion */
import exp from 'constants'
import React from 'react'
import { act, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { formatISO } from 'date-fns'

import { GdsDatepicker } from '@sebgroup/green-core'
import { getScopedTagName } from '@sebgroup/green-core/scoping'
import { Datepicker } from './datepicker'

const tick = (ms?: number) => new Promise<void>((r) => setTimeout(r, ms || 0))

const pad = (num: number): string => `${num < 10 ? '0' : ''}${num}`

describe('Datepicker', () => {
  it('renders', async () => {
    const component = render(<Datepicker />)
    await act(() => tick())
    expect(component).toBeTruthy()
  })

  it('finds web component by testId', async () => {
    const { findByTestId } = render(<Datepicker testId="datepicker" />)
    await act(() => tick())

    const gdsDatepicker = (await findByTestId('datepicker')) as GdsDatepicker

    expect(gdsDatepicker).toBeTruthy()
  })

  it('gets invalidated', async () => {
    const { container, findByTestId } = render(
      <Datepicker testId="datepicker" invalid>
        <span slot="message">My custom message</span>
      </Datepicker>,
    )

    const gdsDatepicker = (await findByTestId('datepicker')) as GdsDatepicker

    gdsDatepicker.invalid = true
    await gdsDatepicker.updateComplete

    expect(gdsDatepicker.invalid).toBeTruthy()
    expect(
      container
        ?.querySelector(getScopedTagName('gds-datepicker'))
        ?.shadowRoot?.querySelector('slot[name="message"]')
        ?.assignedNodes()[0].textContent,
    ).toEqual('My custom message')
  })

  it('gets the correct ref element', async () => {
    const ref = React.createRef<GdsDatepicker>()
    const { container } = render(<Datepicker ref={ref} />)
    await act(() => tick())

    const gdsDatepicker = (await container?.querySelector(
      getScopedTagName('gds-datepicker'),
    )) as GdsDatepicker

    expect(ref.current).toEqual(gdsDatepicker)
  })
})
