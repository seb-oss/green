import {
  createDropdown,
  AbstractDropdown,
  DropdownHandler,
  DropdownOption,
} from '@sebgroup/extract'
import {
  HTMLAttributes,
  RefObject,
  useEffect,
  useState,
} from 'react'
import { inspect } from 'util'

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
  dropdown?: DropdownHandler

  togglerProps: Props
  listboxProps: Props
  listItems: Props[]
}

export const useDropdown = ({ id, text, options, loop, togglerRef, listboxRef }: HookArgs): HookResult => {
  const [handler, setHandler] = useState<DropdownHandler>()
  const [dropdown, setDropdown] = useState<AbstractDropdown>()
  const [togglerProps, setTogglerProps] = useState<Props>({})
  const [listboxProps, setListboxProps] = useState<Props>({})
  const [listItems, setListItems] = useState<Props[]>([])

  useEffect(() => {
    if (!dropdown) return

    const { elements: { toggler, listbox } } = dropdown

    const newToggleProps: Props = {
      ...toggler?.attributes as unknown as Props,
      className: toggler?.classes?.join(' '),
      children: dropdown.text,
      onClick: () => handler?.toggle(),
    }
    setTogglerProps(newToggleProps)

    const newListboxProps: Props = {
      ...listbox?.attributes as unknown as Props,
      className: listbox?.classes?.join(' '),
    }
    setListboxProps(newListboxProps)

    const newListItems: Props[] = dropdown.options.map((o) => ({
      ...o.attributes as unknown as Props,
      className: o.classes?.join(' '),
      children: o.key,
      onClick: () => handler?.select(o),
    }))
    setListItems(newListItems)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dropdown])

  useEffect(() => {
    if (!handler && togglerRef.current && listboxRef.current) {
      setHandler(createDropdown({ id, text, options, loop }, togglerRef.current, listboxRef.current, setDropdown))
    }
    return () => handler?.destroy()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [togglerRef, listboxRef])

  return {
    dropdown: handler,

    togglerProps,
    listboxProps,
    listItems,
  }
}
