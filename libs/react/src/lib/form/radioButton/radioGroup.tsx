import React, { useState, useRef, ChangeEvent } from 'react'
import { RadioButtonProps } from '../types'
import { IValidator, IndicatorType, validateClassName } from '@sebgroup/extract'

export interface RadioGroupProps {
  title?: string
  defaultSelected?: string
  valueSelected?: string
  description?: string
  validator?: IValidator
  onChangeRadio?: (value: string) => string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  name?: string
}

export const RadioGroup = ({
  defaultSelected,
  valueSelected,
  description,
  title,
  validator,
  onChangeRadio,
  onChange,
  name,
  children,
}: React.PropsWithChildren<RadioGroupProps>) => {
  const [selected, setSelected] = useState<string | undefined>(
    valueSelected ?? defaultSelected
  )
  const [prevValueSelected, setPrevValueSelected] = useState(valueSelected)

  if (valueSelected !== prevValueSelected) {
    setSelected(valueSelected)
    setPrevValueSelected(valueSelected)
  }

  const validatorClassName: string = validateClassName(
    validator?.indicator as IndicatorType
  )

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value !== selected) {
      setSelected(event.target.value)
      onChangeRadio && onChangeRadio(event.target.value)
      onChange && onChange(event)
    }
  }

  const radioBtnRef: React.RefObject<HTMLInputElement> = useRef(null)

  React.useEffect(() => {
    if (radioBtnRef && radioBtnRef.current) {
      const form: HTMLFormElement = radioBtnRef?.current
        ?.form as HTMLFormElement
      const resetListner = () => {
        setSelected(undefined)
      }
      form?.addEventListener('reset', resetListner)
      return () => form?.removeEventListener('reset', resetListner)
    } else {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      return () => {}
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="form-group">
      <fieldset className={validatorClassName}>
        {title && <legend>{title}</legend>}
        {description && <span className="form-info">{description}</span>}
        <div>
          {React.Children.map(
            children as React.ReactElement,
            (radioButton: React.ReactElement<RadioButtonProps>) => {
              return React.isValidElement<React.FC<RadioButtonProps>>(
                radioButton
              )
                ? React.cloneElement(radioButton, {
                    validator: validatorClassName,
                    onChange: handleOnChange,
                    checked: selected === radioButton.props.value,
                    name,
                    ref: radioBtnRef,
                  })
                : radioButton
            }
          )}
        </div>
      </fieldset>
      {validator?.message && (
        <span className="form-info">{validator?.message}</span>
      )}
    </div>
  )
}

export default RadioGroup
