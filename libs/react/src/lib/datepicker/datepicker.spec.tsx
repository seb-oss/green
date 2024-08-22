/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { act, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { formatISO } from 'date-fns'
import { Datepicker } from './datepicker'
import { getScopedTagName } from '@sebgroup/green-core/scoping'
import { GdsDatepicker } from '@sebgroup/green-core'
import exp from 'constants'

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

    expect(gdsDatepicker.invalid).toBeTruthy()
    expect(
      container
        ?.querySelector(getScopedTagName('gds-datepicker'))
        ?.shadowRoot?.querySelector('slot[name="message"]')
        ?.assignedNodes()[0].textContent,
    ).toEqual('My custom message')
  })
})
