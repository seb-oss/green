import {
  activate,
  close,
  create,
  deactivate,
  observe,
  select,
  toggle,
  unobserve,
  AbstractDropdown,
  DropdownOption,
} from '@sebgroup/extract'
import { HTMLAttributes, RefObject, useEffect, useState, CSSProperties } from 'react'

interface HookArgs {
  id?: string
  text?: string
  options: DropdownOption[]
  loop?: boolean
  togglerRef: RefObject<HTMLElement>
  listboxRef: RefObject<HTMLElement>
}

type Props = HTMLAttributes<HTMLElement>

interface HookResult {
  togglerProps: Props
  listboxProps: Props
  listItems: Props[]
  activate: () => void
  deactivate: () => void
  close: () => void
}

export const useDropdown = ({ id, text, options, loop, togglerRef, listboxRef }: HookArgs): HookResult => {
  const [dropdown, setDropdown] = useState<AbstractDropdown>()
  const [togglerProps, setTogglerProps] = useState<Props>({})
  const [listboxProps, setListboxProps] = useState<Props>({})
  const [listItems, setListItems] = useState<Props[]>([])

  useEffect(() => {
    if (!dropdown || !togglerRef.current || !listboxRef.current) return
    observe(dropdown, togglerRef.current, listboxRef.current, setDropdown)

    const { elements: { toggler, listbox } } = dropdown

    const newToggleProps: Props = {
      ...toggler?.attributes,
      className: toggler?.classes?.join(' '),
      children: dropdown.text,
      onClick: () => setDropdown(toggle(dropdown)),
    }
    setTogglerProps(newToggleProps)

    const newListboxProps: Props = {
      ...listbox?.attributes,
      className: listbox?.classes?.join(' '),
    }
    setListboxProps(newListboxProps)

    const newListItems: Props[] = dropdown.options.map((o) => ({
      ...o.attributes,
      className: o.classes?.join(' '),
      children: o.key,
      onClick: () => setDropdown(close(select(dropdown, o)))
    }))
    setListItems(newListItems)

    return () => {
      unobserve(dropdown)
    }
  }, [dropdown, togglerRef, listboxRef])

  useEffect(() => {
    setDropdown(create({ id, text, options, loop }))

    return () => {
      if (dropdown) unobserve(dropdown)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, loop, options, text])

  return {
    activate: () => dropdown && setDropdown(activate(dropdown)),
    deactivate: () => dropdown && setDropdown(deactivate(dropdown)),
    close: () => dropdown && setDropdown(close(dropdown)),

    togglerProps,
    listboxProps,
    listItems,
  }
}
