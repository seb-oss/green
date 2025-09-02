import React, { ReactNode } from 'react'
import { createComponent } from '@lit/react'
import classNames from 'classnames'

import { GdsSegment as CoreSegment } from '@sebgroup/green-core/components/segmented-control/segment/segment.component'
import { GdsSegmentedControl as CoreSegmentedControl } from '@sebgroup/green-core/components/segmented-control/segmented-control.component'
import { getScopedTagName } from '@sebgroup/green-core/scoping'
import { registerTransitionalStyles } from '@sebgroup/green-core/transitional-styles'

CoreSegmentedControl.define()
registerTransitionalStyles()

/**
 * @deprecated - Use the `gds-segmented-control` web component from green-core instead.
 */
export const GdsSegementedControl = createComponent({
  tagName: getScopedTagName('gds-segmented-control'),
  elementClass: CoreSegmentedControl,
  events: { onchange: 'change' },
  react: React,
})

/**
 * @deprecated - Use the `gds-segmented-control` web component from green-core instead.
 */
export const GdsSegment = createComponent({
  tagName: getScopedTagName('gds-segment'),
  elementClass: CoreSegment,
  react: React,
})

export interface SegmentedControlProps {
  value?: string
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
  width?: string
  minWidth?: string
  maxWidth?: string
  /** @deprecated */
  segMinWidth?: number
}

/** @deprecated - Use the `gds-segmented-control` web component from green-core instead. */
export const SegmentedControl: React.FC<SegmentedControlProps> = ({
  onChange,
  className,
  ...props
}: SegmentedControlProps) => {
  return (
    <GdsSegementedControl
      onchange={onChange}
      className={classNames(className)}
      {...props}
    />
  )
}

/** @deprecated - Use the `gds-segmented-control` web component from green-core instead. */
export const Segment: React.FC<SegmentProps> = ({
  className,
  minWidth,
  maxWidth,
  segMinWidth,
  ...props
}: SegmentProps) => {
  const formattedSegMinWidth = segMinWidth ? `${segMinWidth}px` : undefined
  return (
    <GdsSegment
      className={classNames(className)}
      {...props}
      min-width={minWidth || formattedSegMinWidth}
      max-width={maxWidth}
    />
  )
}
