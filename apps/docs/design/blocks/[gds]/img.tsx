import React, { useRef, useEffect } from 'react'
import { createComponent } from '@lit/react'
import { GdsImg } from '@sebgroup/green-core/components/media/img'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Core = createComponent({
  tagName: getScopedTagName('gds-img'),
  elementClass: GdsImg,
  react: React,
})

export const Img = React.forwardRef((props: { [key: string]: any }, ref) => {
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

Img.displayName = 'Img'

export default Img
