import { DropdownArgs, OnChange } from '@sebgroup/extract'
import { useRef } from 'react'
import { useDropdown } from './hooks'

export interface DropdownProps extends DropdownArgs {
  onChange?: OnChange
}

export const Dropdown = ({
  id,
  options,
  loop,
  multiSelect,
  searchable,
  searchFilter,
  compareWith,
  useValue,
  display,
  texts,
  onChange,
  validator,
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
      searchFilter,
      compareWith,
      useValue,
      display,
      togglerRef,
      listboxRef,
      texts,
      onChange,
      validator,
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
      {validator && <span className="form-info">{validator?.message}</span>}
    </div>
  )
}

export default Dropdown
