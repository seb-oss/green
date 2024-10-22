import React, { ReactNode } from 'react'
import { createComponent } from '@lit/react'
import classNames from 'classnames'

import { GdsSegmentedControl } from '@sebgroup/green-core/components/segmented-control/index.js'
import { GdsSegment } from '@sebgroup/green-core/components/segmented-control/segment/index.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'
import { registerTransitionalStyles } from '@sebgroup/green-core/transitional-styles'

registerTransitionalStyles()

export const CoreSegementedControl = createComponent({
  tagName: getScopedTagName('gds-segmented-control'),
  elementClass: GdsSegmentedControl,
  events: { onchange: 'change' },
  react: React,
})

export const CoreSegment = createComponent({
  tagName: getScopedTagName('gds-segment'),
  elementClass: GdsSegment,
  react: React,
})

export interface SegmentedControlProps {
  value?: string
  segMinWidth?: number
  size?: 'small' | 'medium'
  onChange?: (event: Event) => void
  className?: string
  children?: ReactNode | ReactNode[]
}

export interface SegmentProps {
  value?: string
  className?: string
  disabled?: boolean
  children?: ReactNode | ReactNode[]
}

const SegmentedControl: React.FC<SegmentedControlProps> = ({
  onChange,
  className,
  ...props
}: SegmentedControlProps) => {
  return (
    <CoreSegementedControl
      onchange={onChange}
      className={classNames(className)}
      {...props}
    />
  )
}

const Segment: React.FC<SegmentProps> = ({
  className,
  ...props
}: SegmentProps) => {
  return <CoreSegment className={classNames(className)} {...props} />
}

export { SegmentedControl, Segment }
