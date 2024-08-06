import React, { useRef, useEffect } from 'react'
import { createComponent } from '@lit/react'
import { GdsGrid } from '@sebgroup/green-core/components/layout/grid'

export const Core = createComponent({
  tagName: 'gds-grid',
  elementClass: GdsGrid,
  react: React,
})

export const Grid = React.forwardRef((props: { [key: string]: any }, ref) => {
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

Grid.displayName = 'Grid'

export default Grid
