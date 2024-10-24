import React, {
  PropsWithChildren,
  ReactElement,
  ReactNode,
  useState,
} from 'react'

export interface IList {
  text?: string
  href?: string
  disabled?: boolean
  selected?: boolean
}

interface TabsProps {
  /**
   * **Deprecated**
   * @deprecated use `<Tab>` child components instead
   */
  list?: IList[]
  onTabChange?: (index: number) => void
  children?: ReactElement<TabProps>[]
}

export interface TabProps {
  title: string
  disabled?: boolean
  href?: string
  children?: ReactNode
  selected?: boolean
}

export const Tab = (props: PropsWithChildren<TabProps>) => null

export const Tabs = ({ list, onTabChange, children }: TabsProps) => {
  const [selectedTab, setSelectedTab] = useState(getDefaultSelectedTab())
  const onClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    if (event.currentTarget.ariaDisabled !== 'true') {
      const focusedIndex: number = parseInt(
        event.currentTarget.dataset.indexNumber as string,
      )
      setSelectedTab(focusedIndex)
      onTabChange && onTabChange(focusedIndex)
    }
  }

  function getDefaultSelectedTab(): number {
    let selectedTabIndex = 0

    if (children) selectedTabIndex = children.findIndex((x) => x.props.selected)
    else if (list) {
      selectedTabIndex = list.findIndex((x) => x.selected)
    }

    return selectedTabIndex !== -1 ? selectedTabIndex : 0
  }

  return (
    <>
      <nav role="tablist">
        {!children &&
          list?.map((value: IList, index: number) => (
            <a
              href={value.disabled ? undefined : value.href || '#'}
              onClick={onClick}
              role="tab"
              key={index}
              data-index-number={index}
              aria-disabled={value.disabled}
              aria-selected={selectedTab === index}
            >
              {value.text}
            </a>
          ))}
        {children?.map((tab: ReactElement<TabProps>, index: number) => (
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
        {!children &&
          list?.map((value: IList, index: number) => (
            <article
              role="tabpanel"
              key={index}
              aria-hidden={selectedTab !== index}
            >
              {value.text}
            </article>
          ))}
        {children?.map((tab: ReactElement<TabProps>, index: number) => (
          <article
            role="tabpanel"
            key={index}
            aria-hidden={selectedTab !== index}
          >
            {selectedTab === index && tab.props.children}
          </article>
        ))}
      </section>
    </>
  )
}

export default Tabs
