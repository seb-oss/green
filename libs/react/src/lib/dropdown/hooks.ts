import {
  createDropdown,
  AbstractDropdown,
  DropdownHandler,
  DropdownOption,
  DropdownTexts,
} from '@sebgroup/extract'
import {
  HTMLAttributes,
  InputHTMLAttributes,
  RefObject,
  useEffect,
  useState,
} from 'react'

interface HookArgs {
  id?: string
  texts?: DropdownTexts
  options: DropdownOption[]
  multiSelect?: boolean
  loop?: boolean
  selectValue?: string
  useValue?: string
  display?: string
  togglerRef: RefObject<HTMLElement>
  listboxRef: RefObject<HTMLElement>
  onChange?: (o: DropdownOption) => void
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
  selectValue,
  useValue,
  display,
  togglerRef,
  listboxRef,
  onChange
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
        children: o[dropdown.display],
        selected: o.selected,
        onClick: () => {
          handler?.select(o).then(() => {
            if (onChange) {
              const result = options.find((item) => item.key === o.key)

              result && onChange(result)
            }
          })
        },
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
          onChange: () => {
            handler?.select(o, false).then(() => {

              if (onChange) {
                const result = options.find((item) => item.key === o.key)

                result && onChange(result)
              }
            })
          }
        },
        spanProps: {
          children: o[dropdown.display],
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
  }, [id, texts, options, loop, multiSelect, selectValue, useValue, display])

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
            selectValue,
            useValue,
            display,
          },
          togglerRef.current,
          listboxRef.current,
          listboxRef.current,
          (dd) => setDropdown(dd)
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
