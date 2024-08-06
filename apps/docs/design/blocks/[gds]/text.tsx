import React, { useRef, useEffect } from 'react'
import { createComponent } from '@lit/react'
import { GdsText } from '@sebgroup/green-core/components/content/text'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Core = createComponent({
  tagName: getScopedTagName('gds-text'),
  elementClass: GdsText,
  react: React,
})

export const Text = React.forwardRef((props: { [key: string]: any }, ref) => {
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

Text.displayName = 'Text'

export default Text
