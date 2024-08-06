import React, { useRef, useEffect } from 'react'
import { createComponent } from '@lit/react'
import { GdsVideo } from '@sebgroup/green-core/components/media/video'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Core = createComponent({
  tagName: getScopedTagName('gds-video'),
  elementClass: GdsVideo,
  react: React,
})

export const Video = React.forwardRef((props: { [key: string]: any }, ref) => {
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

Video.displayName = 'Video'

export default Video
