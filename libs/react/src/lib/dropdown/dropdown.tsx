import {DropdownOption, DropdownTexts} from '@sebgroup/extract'
import {useEffect, useRef} from 'react'
import { useDropdown } from './hooks'
import {IValidator} from "@sebgroup/extract";

export interface DropdownProps {
  id?: string
  texts?: DropdownTexts
  options: DropdownOption[]
  useValue?: string
  display?: string
  selectValue?: string
  loop?: boolean
  multiSelect?: boolean
  searchable?: boolean
  onChange?: (o: DropdownOption) => void
  validator?: IValidator
}

export const Dropdown = ({
  id,
  options,
  loop,
  multiSelect,
  searchable,
  selectValue,
  useValue,
  display,
  texts,
  onChange,
  validator
}: DropdownProps) => {

  const togglerRef = useRef<HTMLButtonElement>(null)
  const listboxRef = useRef<HTMLDivElement>(null)

  const { dropdown, listboxProps, togglerProps, listItems, multiSelectProps } =
    useDropdown({
      id,
      options,
      loop,
      multiSelect,
      searchable,
      selectValue,
      useValue,
      display,
      togglerRef,
      listboxRef,
      texts,
      onChange,
      validator
    })

  return (
    <div className="form-group">
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
      { validator && <span className="form-info">{validator?.message}</span> }
    </div>
  )
}

export default Dropdown
