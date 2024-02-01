/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { act, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { formatISO } from 'date-fns'
import { Datepicker } from './datepicker'
import { GdsDatepicker } from '@sebgroup/green-core'

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
})
