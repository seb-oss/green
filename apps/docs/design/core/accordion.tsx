import React, { useState } from 'react'
import { GdsButton, GdsDiv, GdsFlex, GdsText } from '$/import/components'
import { IconMinusLarge, IconPlusLarge } from '$/import/icons'

export function Accordion({ children }: { children: React.ReactNode }) {
  return <div className="gds-accordion">{children}</div>
}

interface AccordionItemProps extends AccordionItemInterface {
  uuid?: string
  children: React.ReactNode
  subLabel?: string
}

export interface AccordionItemInterface {
  label: string
  /*
   * https://www.w3.org/WAI/ARIA/apg/patterns/accordion/
   * Each accordion button needs to be wrapped in a heading that has a set value for aria-level.
   * This can be done on a div by setting the heading role and the correct aria-level for the element
   * */
  labelElementLevel: 2 | 3 | 4 | 5 | 6
  id?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | Event) => void
  onOpen?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | Event) => void
  onClose?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | Event) => void
}

const AccordionItemIcon = ({ isOpen }: { isOpen: boolean }) => {
  if (isOpen) {
    return <IconMinusLarge />
  }

  return <IconPlusLarge />
}

export function AccordionItem({
  labelElementLevel,
  label,
  id,
  subLabel,
  uuid = crypto.randomUUID(),
  onClick,
  onOpen,
  onClose,
  children,
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleOnClick = (event: React.MouseEvent | Event) => {
    onClick && onClick(event as React.MouseEvent<HTMLButtonElement>)
    setIsOpen((state) => {
      if (!state) {
        onOpen && onOpen(event as React.MouseEvent<HTMLButtonElement>)
      } else {
        onClose && onClose(event as React.MouseEvent<HTMLButtonElement>)
      }
      return !state
    })
  }

  if (!id) id = `gds-accordion-item-button--${uuid}`

  return (
    <div className="gds-accordion-item">
      <GdsFlex
        role="heading"
        align-items="center"
        justify-content="space-between"
        aria-level={labelElementLevel}
        border="4xs/primary 0 0 0"
        width="100%"
        padding="xs 0"
      >
        <GdsDiv
          user-select="none"
          onClick={(event) => {
            handleOnClick(event)
          }}
          flex="1"
        >
          <GdsText font-size="body-l">{label}</GdsText>
        </GdsDiv>
        <GdsButton
          id={id}
          aria-expanded={isOpen}
          aria-controls={`gds-accordion-item-region--${uuid}`}
          onClick={(event) => {
            handleOnClick(event)
          }}
          rank="tertiary"
        >
          <AccordionItemIcon isOpen={isOpen} />
        </GdsButton>
      </GdsFlex>
      <GdsText
        role="region"
        id={`gds-accordion-item-region--${uuid}`}
        aria-labelledby={id}
        hidden={!isOpen}
      >
        {children}
      </GdsText>
    </div>
  )
}

export default AccordionItem
