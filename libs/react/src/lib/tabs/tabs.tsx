import React, { useState, ReactNode } from 'react'

interface IList {
  text?: string
  href?: string
}

interface TabsProps {
  list?: IList[]
  disabled?: boolean
  children?: ReactNode[]
}

export const Tabs = ({ list, disabled, children, ...props }: TabsProps) => {
  const [selectedTab, setSelectedTab] = useState(0)
  const onClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    setSelectedTab(Number(event.currentTarget.dataset.indexNumber))
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
