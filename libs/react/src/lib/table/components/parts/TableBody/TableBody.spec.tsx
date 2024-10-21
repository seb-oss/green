import React from 'react'
import { TableBody } from './TableBody'
import { TableRow } from '../TableRow'
import { render } from '@testing-library/react'

describe('Component: Table body', () => {
  it('Should render correctly', () => {
    render(
      <table>
        <TableBody />
      </table>,
    )
    expect(document.body.querySelector('tbody')).toBeInTheDocument()
  })

  it('Should render children correctly', () => {
    render(
      <table>
        <TableBody>
          <TableRow />
        </TableBody>
      </table>,
    )
    expect(document.body.querySelector('tr')).toBeInTheDocument()
  })

  it('Should render append parent key to sub row correctly', () => {
    const uniqueKey = 'test'
    render(
      <table>
        <TableBody>
          <TableRow uniqueKey={uniqueKey}></TableRow>
          <TableRow isSubRow></TableRow>
        </TableBody>
      </table>,
    )
    expect(document.body.querySelector('.sub-row')).toBeInTheDocument()
  })

  it('Should render append parent key to sub row correctly within fragment', () => {
    const uniqueKey = 'test'
    render(
      <table>
        <TableBody>
          <React.Fragment>
            <TableRow uniqueKey={uniqueKey}></TableRow>
            <TableRow isSubRow></TableRow>
            <tr className="custom" />
          </React.Fragment>
        </TableBody>
      </table>,
    )
    expect(document.body.querySelector('.sub-row')).toBeInTheDocument()
    expect(document.body.querySelector('.custom')).toBeInTheDocument()
  })
})
