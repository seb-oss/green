import React, { useRef, useEffect } from 'react'
import { createComponent } from '@lit/react'
import { GdsButton } from '@sebgroup/green-core/components/button'

export const Core = createComponent({
  tagName: 'gds-button',
  elementClass: GdsButton,
  react: React,
})

export const Button = React.forwardRef((props: { [key: string]: any }, ref) => {
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

Button.displayName = 'Button'

export default Button
