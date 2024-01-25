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
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.5 11H6.5C6.22375 11 6 11.2237 6 11.5V12.5C6 12.7763 6.22375 13 6.5 13H17.5C17.7763 13 18 12.7763 18 12.5V11.5C18 11.2237 17.7763 11 17.5 11Z"
          fill="#353531"
        />
      </svg>
    )
  }

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.5 11H13V6.5C13 6.22375 12.7763 6 12.5 6H11.5C11.2237 6 11 6.22375 11 6.5V11H6.5C6.22375 11 6 11.2237 6 11.5V12.5C6 12.7763 6.22375 13 6.5 13H11V17.5C11 17.7763 11.2237 18 11.5 18H12.5C12.7763 18 13 17.7763 13 17.5V13H17.5C17.7763 13 18 12.7763 18 12.5V11.5C18 11.2237 17.7763 11 17.5 11Z"
        fill="#353531"
      />
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
