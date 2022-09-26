import {
  createDropdown,
  AbstractDropdown,
  DropdownHandler,
  OnChange,
  DropdownArgs,
} from '@sebgroup/extract'
import {
  HTMLAttributes,
  InputHTMLAttributes,
  RefObject,
  useEffect,
  useState,
} from 'react'
import { IValidator } from '@sebgroup/extract'

interface HookArgs extends DropdownArgs {
  togglerRef: RefObject<HTMLElement>
  listboxRef: RefObject<HTMLElement>
  onChange?: OnChange
  validator?: IValidator
}

type Props = HTMLAttributes<HTMLElement>

interface CheckboxItem {
  labelProps: Props
  inputProps: InputHTMLAttributes<HTMLInputElement>
  spanProps: Props
}

interface MultiSelectProps {
  fieldsetProps?: Props
  legendProps?: Props
  checkboxes?: CheckboxItem[]
}

interface HookResult {
  dropdown?: DropdownHandler
  togglerProps: Props
  listboxProps: Props
  listItems: Props[]
  multiSelectProps: MultiSelectProps
}

export const useDropdown = ({
  id,
  texts,
  options,
  loop,
  multiSelect,
  searchable,
  searchFilter,
  compareWith,
  useValue,
  display,
  togglerRef,
  listboxRef,
  onChange,
  validator,
}: HookArgs): HookResult => {
  const [handler, setHandler] = useState<DropdownHandler>()
  const [dropdown, setDropdown] = useState<AbstractDropdown>()
  const [togglerProps, setTogglerProps] = useState<Props>({})
  const [listboxProps, setListboxProps] = useState<Props>({})
  const [listItems, setListItems] = useState<Props[]>([])
  const [multiSelectProps, setMultiSelectProps] = useState<MultiSelectProps>({})

  // When dropdown data changes
  useEffect(() => {
    if (!dropdown) return

    const {
      elements: { toggler, listbox },
    } = dropdown

    const newToggleProps: Props = {
      ...(toggler?.attributes as unknown as Props),
      className: toggler?.classes?.join(' '),
      children: dropdown?.texts?.select || dropdown?.texts?.placeholder,
      onClick: () => handler?.toggle(),
    }
    setTogglerProps(newToggleProps)

    const newListboxProps: Props = {
      ...(listbox?.attributes as unknown as Props),
      className: listbox?.classes?.join(' '),
    }
    setListboxProps(newListboxProps)

    if (!dropdown.isMultiSelect) {
      const newListItems: Props[] = dropdown.options.map((o) => ({
        ...(o.attributes as unknown as Props),
        className: o.classes?.join(' '),
        children: o[dropdown.display] as string,
        selected: o.selected,
        onClick: () => handler?.select(o),
      }))
      setListItems(newListItems)
    } else {
      const checkboxes: CheckboxItem[] = dropdown.options.map((o) => ({
        labelProps: {
          ...(o.attributes as unknown as Props),
          className: ['form-control', ...o.classes].join(' '),
        },
        inputProps: {
          defaultChecked: o.selected,
          type: 'checkbox',
          onClick: () => handler?.select(o, false),
        },
        spanProps: {
          children: o[dropdown.display] as string,
        },
      }))
      const newMultiselect: MultiSelectProps = {
        fieldsetProps: {
          'aria-describedby': dropdown?.elements?.fieldset?.attributes?.id,
          'aria-multiselectable': true,
          role: 'listbox',
          tabIndex: -1,
        },
        legendProps: {
          className: 'sr-only',
          id: dropdown?.elements?.fieldset?.attributes?.id,
          children: dropdown.texts.optionsDescription,
        },
        checkboxes,
      }
      setMultiSelectProps(newMultiselect)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dropdown])

  // When dropdown properties change
  useEffect(() => {
    if (!dropdown) return
    handler?.update({ id, texts, options, loop, multiSelect })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    id,
    texts,
    options,
    loop,
    multiSelect,
    searchable,
    searchFilter,
    compareWith,
    useValue,
    display,
  ])

  // When validator changes
  useEffect(() => {
    if (!dropdown) return

    if (validator) handler?.validate(validator)
  }, [validator])

  // Create dropdown handler
  useEffect(() => {
    if (!handler && togglerRef.current && listboxRef.current) {
      setHandler(
        createDropdown(
          {
            id,
            texts,
            options,
            loop,
            multiSelect,
            searchable,
            searchFilter,
            compareWith,
            useValue,
            display,
            validator,
          },
          togglerRef.current,
          listboxRef.current,
          listboxRef.current,
          (dd) => setDropdown(dd),
          (value) => onChange?.(value)
        )
      )
    }
    return () => handler?.destroy()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [togglerRef, listboxRef])

  return {
    dropdown: handler,
    togglerProps,
    listboxProps,
    listItems,
    multiSelectProps,
  }
}
