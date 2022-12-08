import React, {useRef, useState, useLayoutEffect, useEffect} from "react";
import {debounce} from "@sebgroup/extract";

interface AccordionItemProps {
  item: AccordionItemInterface
  index: number
  uuid: string
}

export interface AccordionItemInterface {
  label: string
  labelElementLevel: 2 | 3 | 4 | 5 | 6
  subLabel?: string
  content: JSX.Element
}

const AccordionItem = ({item, index, uuid}:AccordionItemProps) => {

  const { labelElementLevel, label, subLabel, content } = item

  const [isOpen, setIsOpen] = useState(false)
  const [height, setHeight] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const debounceListener = debounce(() => {
      ref.current && setHeight(ref.current.clientHeight)
    }, 300)

    window.addEventListener('resize', debounceListener)

    return () => {
      window.removeEventListener('resize', debounceListener)
    }
  })

  useLayoutEffect(() => {
    ref.current && setHeight(ref.current.clientHeight)
  }, []);

  return (
    <div>
      <div role="heading" aria-level={labelElementLevel}>
        <button id={`accordion-${index}-${uuid}`} aria-expanded={isOpen} onClick={() => { setIsOpen((state) => !state)}}>
          <span>{label}</span>
          { subLabel && <span>{subLabel}</span> }
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18.8095 9.22817L18.1907 8.60942C18.0438 8.46255 17.8063 8.46255 17.6595 8.60942L12.0001 14.2563L6.34072 8.60942C6.19385 8.46255 5.95635 8.46255 5.80947 8.60942L5.19072 9.22817C5.04385 9.37505 5.04385 9.61255 5.19072 9.75942L11.7345 16.3032C11.8813 16.45 12.1188 16.45 12.2657 16.3032L18.8095 9.75942C18.9563 9.61255 18.9563 9.37505 18.8095 9.22817Z"
              fill="#333333"/>
          </svg>
        </button>
      </div>
      <div role="region" aria-labelledby={`accordion-${index}-${uuid}`} style={{height: isOpen ? height : 0}}>
        <div ref={ref}>
          {content}
        </div>
      </div>
    </div>
  )
}

export default AccordionItem
