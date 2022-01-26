import React, { useState, ReactNode } from 'react'

interface IList {
  text?: string
  href?: string
  disabled?: boolean
}

interface TabsProps {
  list?: IList[]
  onTabChange?: (index: number) => void
  children?: ReactNode[]
}

export const Tabs = ({ list, onTabChange, children }: TabsProps) => {
  const [selectedTab, setSelectedTab] = useState(0)
  const onClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    if (event.currentTarget.dataset.disabled !== 'true') {
      const focusedIndex: number = parseInt(
        event.currentTarget.dataset.indexNumber as string
      )
      setSelectedTab(focusedIndex)
      onTabChange && onTabChange(focusedIndex)
    }
  }
  return (
    <>
      <nav role="tablist">
        {list?.map((value: IList, index: number) => (
          <a
            href={value.href || '#'}
            onClick={onClick}
            role="tab"
            key={index}
            data-index-number={index}
            data-disabled={value.disabled}
            aria-selected={selectedTab === index}
          >
            {value.text}
          </a>
        ))}
      </nav>
      <section>
        {list?.map((value: IList, index: number) => (
          <article
            role="tabpanel"
            key={index}
            aria-hidden={selectedTab !== index}
          >
            {value.text}
          </article>
        ))}
      </section>
    </>
  )
}

export default Tabs
