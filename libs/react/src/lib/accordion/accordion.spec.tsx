import React, {ReactNode} from 'react'
import { render, screen } from '@testing-library/react'
import Accordion from './accordion'
import {AccordionItemInterface} from "./accordion-item";

const items: AccordionItemInterface[] = [
  {
    label: 'This is an Accordion label',
    subLabel: 'This is an Accordion label',
    content: <> <p>This is a paragraph</p><a href="#">And this is a link</a> </>,
    labelElementLevel: 2
  },
  {
    label: 'This is an Accordion label',
    subLabel: 'This is an Accordion label',
    content: <> <p>This is a paragraph</p><a href="#">And this is a link</a> </>,
    labelElementLevel: 2
  },
  {
    label: 'This is an Accordion label',
    subLabel: 'This is an Accordion label',
    content: <> <p>This is a paragraph</p><a href="#">And this is a link</a> </>,
    labelElementLevel: 2
  }
]

describe('Accordion', () => {
  it('renders',  () => {
    render(<Accordion items={items}/>)
  });
})
