import {
  AbstractDropdown,
  create,
  DropdownOption,
  select,
  toggle,
} from '@sebgroup/extract'
import { HTMLAttributes, useEffect, useState } from 'react'

interface HookArgs {
  id?: string
  text?: string
  options: DropdownOption[]
}

type Props = HTMLAttributes<HTMLElement>

interface HookResult {
  togglerProps: Props
  listboxProps: Props
  listItems: Props[]
}

export const useDropdown = ({ id, text, options }: HookArgs): HookResult => {
  const [dropdown, setDropdown] = useState<AbstractDropdown>()
  const [togglerProps, setTogglerProps] = useState<Props>({})
  const [listboxProps, setListboxProps] = useState<Props>({})
  const [listItems, setListItems] = useState<Props[]>([])

  useEffect(() => {
    if (!dropdown) return
    const { elements: { toggler, listbox } } = dropdown

    const newToggleProps: Props = {
      ...toggler.attributes,
      className: toggler.classes?.join(' '),
      children: dropdown.text,
      onClick: () => setDropdown(toggle(dropdown)),
    }
    setTogglerProps(newToggleProps)

    const newListboxProps: Props = {
      ...listbox.attributes,
      className: listbox.classes?.join(' '),
    }
    setListboxProps(newListboxProps)

    const newListItems: Props[] = dropdown.options.map((o) => ({
      ...o.attributes,
      className: o.classes?.join(' '),
      children: o.key,
      onClick: () => setDropdown(select(dropdown, o))
    }))
    setListItems(newListItems)

  }, [dropdown])

  useEffect(() => {
    setDropdown({...create({ id, text, options })})
  }, [])

  return {
    togglerProps,
    listboxProps,
    listItems,
  }
}
