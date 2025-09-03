import { HTMLProps, PropsWithChildren, useLayoutEffect, useState } from 'react'

import {
  AlignContentType,
  AlignType,
  FlexDirectionType,
  FlexWrapType,
  JustifyContentType,
} from './types'

export interface FlexboxProps extends HTMLProps<HTMLDivElement> {
  alignContent?: AlignContentType
  alignItems?: AlignType
  alignSelf?: AlignType | 'auto'
  justifyContent?: JustifyContentType
  flexDirection?: FlexDirectionType
  flexWrap?: FlexWrapType
  className?: string
}

/**
 * @deprecated Please use the `gds-flex` web component from green-core instead
 */
export const Flexbox = ({
  alignContent,
  alignItems,
  alignSelf,
  children,
  justifyContent,
  flexDirection,
  flexWrap,
  className,
  ...props
}: PropsWithChildren<FlexboxProps>) => {
  const [classes, setClasses] = useState<string[]>(['d-flex'])
  const [flexClassName, setFlexClassName] = useState<string>('d-flex')

  // // update className when classes change
  useLayoutEffect(() => {
    const newClassName = classes.join(' ')
    if (newClassName !== flexClassName) setFlexClassName(newClassName)
  }, [classes, flexClassName])

  // // update classes when props change
  useLayoutEffect(() => {
    const newClasses = ['d-flex']
    alignItems && newClasses.push(`align-items-${alignItems}`)
    alignContent && newClasses.push(`align-content-${alignContent}`)
    alignSelf && newClasses.push(`align-self-${alignSelf}`)
    justifyContent && newClasses.push(`justify-content-${justifyContent}`)
    flexDirection && newClasses.push(`flex-${flexDirection}`)
    flexWrap && newClasses.push(`flex-${flexWrap}`)
    className && newClasses.push(className)

    setClasses(newClasses)
  }, [
    alignContent,
    alignItems,
    alignSelf,
    justifyContent,
    flexDirection,
    flexWrap,
    className,
  ])

  return (
    <div className={flexClassName} {...props}>
      {children}
    </div>
  )
}

export default Flexbox
