import React, { useRef, useEffect } from 'react'
import { createComponent } from '@lit/react'
import { GdsDivider } from '@sebgroup/green-core/components/content/divider'

export const Core = createComponent({
  tagName: 'gds-divider',
  elementClass: GdsDivider,
  react: React,
})

export const Divider = React.forwardRef(
  (props: { [key: string]: any }, ref) => {
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
  },
)

Divider.displayName = 'Divider'

export default Divider
