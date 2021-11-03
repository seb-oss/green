import { AbstractDropdown, create, DropdownOption, ExtendedDropdownOption } from '@sebgroup/extract'
import { HTMLAttributes, useEffect, useState } from 'react'

interface HookArgs {
  id?: string
  text?: string
  options: DropdownOption[]
}

type Props = HTMLAttributes<HTMLElement>

interface HookResult {
  toggleProps: Props
  listboxProps: Props
  listItems: Props[]
}

export const useDropdown = ({ id, text, options }: HookArgs): HookResult => {
  const [dropdown, setDropdown] = useState<AbstractDropdown>()
  const [toggleProps, setToggleProps] = useState<Props>({})
  const [listboxProps, setListboxProps] = useState<Props>({})
  const [listItems, setListItems] = useState<Props[]>([])

  useEffect(() => {
    console.log('dropdown changed', dropdown)
    if (!dropdown) return
    const { elements: { toggle, listbox } } = dropdown

    const newToggleProps: Props = {
      ...toggle.attributes,
      className: toggle.classes.join(' '),
      children: dropdown.text,
      onClick: () => {
        setDropdown({...dropdown.toggle()})
      },
    }
    setToggleProps(newToggleProps)

    const newListboxProps: Props = {
      ...listbox.attributes,
      className: listbox.classes.join(' '),
    }
    setListboxProps(newListboxProps)

    const newListItems: Props[] = dropdown.options.map((o) => ({
      ...o.attributes,
      className: o.classes.join(' '),
      children: o.key,
    }))
    setListItems(newListItems)

  }, [dropdown])

  useEffect(() => {
    setDropdown({...create({ id, text, options })})
  }, [])

  return { toggleProps, listboxProps, listItems }
}
