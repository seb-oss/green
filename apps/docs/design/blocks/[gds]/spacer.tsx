import React, { useRef, useEffect } from 'react'
import { createComponent } from '@lit/react'
import { GdsSpacer } from '@sebgroup/green-core/components/content/spacer'

export const Core = createComponent({
  tagName: 'gds-spacer',
  elementClass: GdsSpacer,
  react: React,
})

export const Spacer = React.forwardRef((props: { [key: string]: any }, ref) => {
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

Spacer.displayName = 'Spacer'

export default Spacer
