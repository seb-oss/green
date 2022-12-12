import React from 'react'
import { RadioButtonProps } from '../types'
import { IValidator, IndicatorType, validateClassName } from '@sebgroup/extract'

export interface RadioGroupProps {
  title?: string
  defaultSelected?: string
  description?: string
  validator?: IValidator
  onChangeRadio?: (value: string) => string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  name?: string
}

export const RadioGroup = ({ defaultSelected, description, title, validator, onChangeRadio, onChange, name, children }: React.PropsWithChildren<RadioGroupProps>) => {
  const [checked, setChecked] = React.useState<string>()
  const validatorClassName: string = validateClassName(validator?.indicator as IndicatorType)

  const onChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.value)
    onChangeRadio && onChangeRadio(event.target.value)
    onChange && onChange(event)
  }

  const radioBtnRef: React.RefObject<HTMLInputElement> = React.useRef(null)

  React.useEffect(() => {
    if (radioBtnRef && radioBtnRef.current) {
      if (defaultSelected) setChecked(defaultSelected)
      const form: HTMLFormElement = radioBtnRef?.current?.form as HTMLFormElement
      const resetListner = () => {
        setChecked(undefined)
      }
      form?.addEventListener('reset', resetListner)
      return () => form?.removeEventListener('reset', resetListner)
    } else {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      return () => {}
    }
  }, [])

  return (
    <div className="form-group">
      <fieldset className={validatorClassName}>
        { title && <legend>{title}</legend>}
        { description && <span className="form-info">{description}</span> }
        <div>
          {React.Children.map(children as React.ReactElement, (Child: React.ReactElement<RadioButtonProps>) => {
            return React.isValidElement<React.FC<RadioButtonProps>>(Child)
              ? React.cloneElement(Child, { validator: validatorClassName, onChange: onChanges, checked: checked === Child.props.value, name, ref: radioBtnRef })
              : Child
          })}
        </div>
      </fieldset>
      {validator?.message && <span className="form-info">{validator?.message}</span>}
    </div>
  )
}

export default RadioGroup
