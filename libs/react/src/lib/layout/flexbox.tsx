import { useEffect, useState, PropsWithChildren } from 'react'

interface FlexboxProps {
  alignContent?: 'start' | 'between' | 'center' | 'stretch' | 'around' | 'end'
  alignItems?: 'start' | 'end' | 'center' | 'baseline' | 'stretch'
  alignSelf?: 'auto' | 'start' | 'end' | 'center' | 'baseline' | 'stretch'
  justifyContent?: 'start' | 'between' | 'center' | 'evenly' | 'around' | 'end'
}
export const Flexbox = ({
  alignContent,
  alignItems,
  alignSelf,
  children,
  justifyContent,
}: PropsWithChildren<FlexboxProps>) => {
  const [classes, setClasses] = useState<string[]>(['d-flex'])
  const [className, setClassName] = useState<string>('d-flex')

  // update className when classes change
  useEffect(() => {
    const newClassName = classes.join(' ')
    if (newClassName !== className) setClassName(newClassName)
  }, [classes, className])

  // update classes when props change
  useEffect(() => {
    const newClasses = ['d-flex']
    if (alignItems) newClasses.push(`align-items-${alignItems}`)
    if (alignContent) newClasses.push(`align-content-${alignContent}`)
    if (alignSelf) newClasses.push(`align-content-${alignSelf}`)
    if (justifyContent) newClasses.push(`justify-content-${justifyContent}`)

    setClasses(newClasses)
  }, [alignContent, alignItems, alignSelf, justifyContent])
  return (
    <div className={className}>{ children }</div>
  )
}

export default Flexbox
