import React, { useState, ReactNode, ReactElement, PropsWithChildren  } from 'react'

interface TabsProps  {
  onTabChange?: (index: number) => void
  children?: ReactElement<TabProps>[]
}

export interface TabProps {
  title: string;
  disabled?: boolean;
  href?: string;
  children?: ReactNode;
}

export const Tab = (props: PropsWithChildren<TabProps>) => null;

export const Tabs = ({ onTabChange, children }: TabsProps) => {
  const [selectedTab, setSelectedTab] = useState(0)
  const onClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    if (event.currentTarget.ariaDisabled !== 'true') {
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
        {children && children?.map((tab: ReactElement<TabProps>, index: number) => (
          <a
            href={tab.props.disabled ? undefined : tab.props.href || '#'}
            onClick={onClick}
            role="tab"
            key={index}
            data-index-number={index}
            aria-disabled={tab.props.disabled}
            aria-selected={selectedTab === index}
          >
          {tab.props.title}
          </a>
        ))}
      </nav>
      <section>
        {
        children?.map((tab: ReactElement<TabProps>, index: number) => (
          <article
            role="tabpanel"
            key={index}
            aria-hidden={selectedTab !== index}
          >
          {tab.props.children}
          </article>
        ))}
      </section>
    </>
  )
}

export default Tabs
