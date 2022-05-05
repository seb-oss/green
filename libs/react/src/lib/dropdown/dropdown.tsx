import { DropdownOption, DropdownTexts } from '@sebgroup/extract'
import { useRef } from 'react'
import { useDropdown } from './hooks'

export interface DropdownProps {
  id?: string
  texts?: DropdownTexts
  options: DropdownOption[]
  useValue?: string
  display?: string
  selectValue?: string
  loop?: boolean
  multiSelect?: boolean
}

export const Dropdown = ({
  id,
  options,
  loop,
  multiSelect,
  selectValue,
  useValue,
  display,
  texts,
}: DropdownProps) => {
  const togglerRef = useRef<HTMLButtonElement>(null)
  const listboxRef = useRef<HTMLDivElement>(null)
  const { dropdown, listboxProps, togglerProps, listItems, multiSelectProps } =
    useDropdown({
      id,
      options,
      loop,
      multiSelect,
      selectValue,
      useValue,
      display,
      togglerRef,
      listboxRef,
      texts,
    })

  return (
    <div>
      <button type="button" {...togglerProps} ref={togglerRef}>
        <span>{togglerProps.children}</span>
      </button>
      <div {...listboxProps} ref={listboxRef}>
        <button
          type="button"
          className="close m-4 m-sm-2 d-block d-sm-none"
          onClick={dropdown?.close}
        >
          <span className="sr-only">{dropdown?.dropdown.texts.close}</span>
        </button>
        {dropdown?.dropdown.isMultiSelect ? (
          <div className="sg-fieldset-container">
            <fieldset {...multiSelectProps.fieldsetProps}>
              <legend {...multiSelectProps.legendProps} />
              {multiSelectProps.checkboxes?.map((checkboxItem) => (
                <label
                  key={checkboxItem.labelProps.id}
                  {...checkboxItem.labelProps}
                >
                  <input {...checkboxItem.inputProps} />
                  <span {...checkboxItem.spanProps} />
                  <i></i>
                </label>
              ))}
            </fieldset>
          </div>
        ) : (
          <ul role="listbox">
            {listItems.map((liProps) => (
              <li key={liProps.id} {...liProps} />
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Dropdown
