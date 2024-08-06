import React, { useRef, useEffect } from 'react'
import { createComponent } from '@lit/react'
import { GdsFlex } from '@sebgroup/green-core/components/layout/flex'

export const Core = createComponent({
  tagName: 'gds-flex',
  elementClass: GdsFlex,
  react: React,
})

export const Flex = React.forwardRef((props: { [key: string]: any }, ref) => {
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

Flex.displayName = 'Flex'

export default Flex
