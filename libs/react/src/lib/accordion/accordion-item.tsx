import React, { JSX, ReactNode, RefObject, useRef, useState } from 'react'

interface AccordionItemProps {
  item: AccordionItemInterface
  index: number
  uuid: string
}

export interface AccordionItemInterface {
  label?: string
  customLabel?: ReactNode
  /*
   * https://www.w3.org/WAI/ARIA/apg/patterns/accordion/
   * Each accordion button needs to be wrapped in a heading that has a set value for aria-level.
   * This can be done on a div by setting the heading role and the correct aria-level for the element
   * */
  labelElementLevel: 2 | 3 | 4 | 5 | 6
  subLabel?: string
  content: JSX.Element
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  onOpen?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  onClose?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  defaultOpen?: boolean
}

const AccordionItem = ({ item, index, uuid }: AccordionItemProps) => {
  const { labelElementLevel, label, subLabel, content, customLabel } = item
  const contentRef = useRef<HTMLDivElement>(null)

  const [isOpen, setIsOpen] = useState(item.defaultOpen || false)

  const handleOnClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    item.onClick && item.onClick(event)
    setIsOpen((state) => {
      if (!state) {
        item.onOpen && item.onOpen(event)
        window.requestAnimationFrame(() => {
          contentRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
          })
        })
      } else {
        item.onClose && item.onClose(event)
      }
      return !state
    })
  }

  return (
    <div>
      <div role="heading" aria-level={labelElementLevel}>
        <button
          id={`accordion-item-button-${index}-${uuid}`}
          aria-expanded={isOpen}
          aria-controls={`accordion-item-region-${index}-${uuid}`}
          onClick={(event) => {
            handleOnClick(event)
          }}
        >
          {customLabel ? customLabel : <span>{label}</span>}
          {subLabel && <span>{subLabel}</span>}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.8095 9.22817L18.1907 8.60942C18.0438 8.46255 17.8063 8.46255 17.6595 8.60942L12.0001 14.2563L6.34072 8.60942C6.19385 8.46255 5.95635 8.46255 5.80947 8.60942L5.19072 9.22817C5.04385 9.37505 5.04385 9.61255 5.19072 9.75942L11.7345 16.3032C11.8813 16.45 12.1188 16.45 12.2657 16.3032L18.8095 9.75942C18.9563 9.61255 18.9563 9.37505 18.8095 9.22817Z"
              fill="#333333"
            />
          </svg>
        </button>
      </div>
      <div
        role="region"
        id={`accordion-item-region-${index}-${uuid}`}
        aria-labelledby={`accordion-item-button-${index}-${uuid}`}
        hidden={!isOpen}
      >
        <div ref={contentRef}>{content}</div>
      </div>
    </div>
  )
}

export default AccordionItem
