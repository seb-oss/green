import { render, screen } from '@testing-library/react'

import Flexbox, { FlexboxProps } from './flexbox'

describe('Component: FlexBox', () => {
  const flexboxProps: FlexboxProps = {
    alignContent: 'start',
    alignItems: 'start',
    alignSelf: 'auto',
    justifyContent: 'start',
    flexDirection: 'column',
    flexWrap: 'wrap',
  }

  it('Should render', () => {
    render(<Flexbox>i am child</Flexbox>)
    expect(screen.getByText('i am child'))
  })

  it('Should render props', () => {
    render(<Flexbox {...flexboxProps}>i am child</Flexbox>)
    const className: string = screen
      .getByText('i am child')
      .getAttribute('class') as string
    expect(className).toBe(
      'd-flex align-items-start align-content-start align-self-auto justify-content-start flex-column flex-wrap',
    )
  })

  it('Should pass in custom classname', () => {
    render(
      <Flexbox className="customName" {...flexboxProps}>
        i am child
      </Flexbox>,
    )
    expect(screen.getByText('i am child').getAttribute('class')).toContain(
      'customName',
    )
  })
})
