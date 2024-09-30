import React from 'react'
import AccordionItem, { AccordionItemInterface } from './accordion-item'
import { randomId } from '@sebgroup/extract'

export interface AccordionInterface {
  items: AccordionItemInterface[]
}

export const Accordion = ({ items }: AccordionInterface) => {
  const [uuid, _] = React.useState(randomId())

  return (
    <div className="accordion">
      {items &&
        items.map((item, index) => (
          <AccordionItem
            key={`accordion-${uuid}-${index}`}
            item={item}
            index={index}
            uuid={uuid}
          />
        ))}
    </div>
  )
}

export default Accordion
