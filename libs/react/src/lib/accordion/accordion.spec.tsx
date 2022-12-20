import React from 'react'
import {fireEvent, render, screen} from '@testing-library/react'
import Accordion from './accordion'
import {AccordionItemInterface} from "./accordion-item";

const items: AccordionItemInterface[] = [
  {
    label: 'This the first Accordion label',
    subLabel: 'This is the first Accordion sub label',
    content: <> <p>This is the expanded content. Please consider the use of accordion as the content might not be found by search engines. Use if you really need to. The text should not contain more than 75 characters in a row for best readability.</p><a href="#">And this is a link</a> </>,
    labelElementLevel: 2
  },
  {
    label: 'This is the second Accordion label',
    subLabel: 'This is the second Accordion sub label',
    content: <> <p>This is a paragraph</p><a href="#">And this is a link</a> </>,
    labelElementLevel: 2
  },
  {
    label: 'This is the third Accordion label',
    content: <> <p>This is the expanded content. Please consider the use of accordion as the content might not be found by search engines. Use if you really need to. The text should not contain more than 75 characters in a row for best readability.</p><a href="#">And this is a link</a> </>,
    labelElementLevel: 2
  }
]

describe('Accordion', () => {
  it('renders',  () => {
    render(<Accordion items={items}/>)
    expect(screen.getByText('This the first Accordion label')).toBeTruthy()
  });

  it('should have buttons ', () => {
    render(<Accordion items={items}/>)

    expect(screen.getAllByRole('button').length).toEqual(3)
  });

  it('should show item when clicked', () => {
    render(<Accordion items={items}/>)


    fireEvent.click(screen.getAllByRole('button')[0])

    expect(screen.getAllByRole('region')[0].hidden).toBeFalsy()
    expect(screen.getAllByRole('button')[0].getAttribute('aria-expanded')).toEqual("true")
  });

  it('should have correct aria attributes', () => {
    render(<Accordion items={items}/>)

    expect(screen.getAllByRole('button')[0].getAttribute('aria-expanded')).toEqual("false")
    expect(screen.getAllByRole('button')[0].id).toEqual(screen.getAllByRole('region')[0].getAttribute("aria-labelledby"))
  });
})
