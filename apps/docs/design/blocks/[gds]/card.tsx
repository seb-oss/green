import React, { useRef, useEffect } from 'react'
import { createComponent } from '@lit/react'
import { GdsCard } from '@sebgroup/green-core/components/layout/card'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Core = createComponent({
  tagName: getScopedTagName('gds-card'),
  elementClass: GdsCard,
  react: React,
})

export const Card = React.forwardRef((props: { [key: string]: any }, ref) => {
  const { children, ...restProps } = props
  const gridRef = useRef(null)

  useEffect(() => {
    const element = gridRef.current as unknown as HTMLElement
    if (element) {
      Object.keys(restProps).forEach((key) => {
        if (restProps[key] !== undefined) {
          element.setAttribute(key, restProps[key])
        }
      })
    }
  }, [restProps])

  return (
    <Core {...restProps} ref={gridRef}>
      {children}
    </Core>
  )
})

Card.displayName = 'Card'

export default Card
