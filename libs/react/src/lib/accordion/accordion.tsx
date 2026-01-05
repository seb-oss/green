import React from 'react'

import { randomId } from '@sebgroup/extract'
import AccordionItem, { AccordionItemInterface } from './accordion-item'

export interface AccordionInterface {
  items: AccordionItemInterface[]
}

/**
 * @deprecated Please use the `gds-details` web component from green-core instead
 */
export const Accordion = ({ items }: AccordionInterface) => {
  const [uuid, _] = React.useState(randomId())

  return (
    <div className="gds-accordion">
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
