import "./styles.css"

import React, { useState } from "react"

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
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  onOpen?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  onClose?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const AccordionItemIcon = ({ isOpen }: { isOpen: boolean }) => {
  if (isOpen) {
    return (
      <svg viewBox="0 0 24 24">
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  )
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

  const handleOnClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    onClick && onClick(event)
    setIsOpen((state) => {
      if (!state) {
        onOpen && onOpen(event)
      } else {
        onClose && onClose(event)
      }
      return !state
    })
  }

  if (!id) id = `gds-accordion-item-button--${uuid}`

  return (
    <div className="gds-accordion-item">
      <div role="heading" aria-level={labelElementLevel}>
        <button
          id={id}
          aria-expanded={isOpen}
          aria-controls={`gds-accordion-item-region--${uuid}`}
          onClick={(event) => {
            handleOnClick(event)
          }}
        >
          <span>{label}</span>
          <div className="gds-accordion-item__icon-button">
            <AccordionItemIcon isOpen={isOpen} />
          </div>
        </button>
      </div>
      <div
        role="region"
        id={`gds-accordion-item-region--${uuid}`}
        aria-labelledby={id}
        hidden={!isOpen}
      >
        <div>{children}</div>
      </div>
    </div>
  )
}

export default AccordionItem
