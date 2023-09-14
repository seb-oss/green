import { DropdownArgs, OnChange } from '@sebgroup/extract'
import { HTMLAttributes, useRef } from 'react'
import { dropdownValues } from '@sebgroup/extract'
import { useDropdown } from './hooks'

export interface DropdownProps extends DropdownArgs {
  onChange?: OnChange
}

export const Dropdown = ({
  compareWith,
  display,
  id,
  informationLabel,
  label,
  loop,
  multiSelect,
  onChange,
  options,
  searchFilter,
  searchable,
  texts,
  useValue,
  validator,
  value,
}: DropdownProps) => {
  const togglerRef = useRef<HTMLButtonElement>(null)
  const listboxRef = useRef<HTMLDivElement>(null)

  const { dropdown, listboxProps, togglerProps, listItems, multiSelectProps } =
    useDropdown({
      id,
      value,
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

  const getListBoxProps = (props: HTMLAttributes<HTMLElement>) => {
    if (Object.keys(props).length === 0)
      return {
        role: 'listbox',
        tabIndex: -1,
        className: dropdownValues().elements?.listbox?.classes?.join(' '),
      }
    return props
  }

  return (
    <div className="form-group">
      {label && <label htmlFor={togglerProps.id}>{label}</label>}
      {informationLabel && <div className="form-info">{informationLabel}</div>}
      <button type="button" {...togglerProps} ref={togglerRef}>
        <span>{togglerProps.children}</span>
      </button>
      <div {...getListBoxProps(listboxProps)} ref={listboxRef}>
        <div className="d-flex d-sm-none align-items-center">
          <span className="flex-grow-1 ps-4 fs-2 fw-bolder">{label}</span>
          <button
            type="button"
            className="close m-4 m-sm-2 d-block d-sm-none"
            onClick={dropdown?.close}
            aria-label={dropdown?.dropdown.texts.close}
          >
            <i></i>
          </button>
        </div>
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
