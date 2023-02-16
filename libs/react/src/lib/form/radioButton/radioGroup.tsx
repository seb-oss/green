import React from 'react'
import { RadioButtonProps } from '../types'
import {
  IValidator,
  IndicatorType,
  validateClassName,
  randomId,
} from '@sebgroup/extract'
import { FormItem } from '../../formItem'

export interface RadioGroupProps {
  label?: string
  labelInformation?: string
  expandableInfo?: string
  expandableInfoButtonLabel?: string
  defaultSelected?: string
  validator?: IValidator
  onChangeRadio?: (value: string) => string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  name?: string
}

export const RadioGroup = ({
  defaultSelected,
  label,
  labelInformation,
  expandableInfo,
  expandableInfoButtonLabel,
  validator,
  onChangeRadio,
  onChange,
  name,
  children,
}: React.PropsWithChildren<RadioGroupProps>) => {
  const [checked, setChecked] = React.useState<string>()
  const validatorClassName: string = validateClassName(
    validator?.indicator as IndicatorType
  )

  console.log(label, labelInformation)

  const onChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.value)
    onChangeRadio && onChangeRadio(event.target.value)
    onChange && onChange(event)
  }

  const radioBtnRef: React.RefObject<HTMLInputElement> = React.useRef(null)

  React.useEffect(() => {
    if (radioBtnRef && radioBtnRef.current) {
      if (defaultSelected) setChecked(defaultSelected)
      const form: HTMLFormElement = radioBtnRef?.current
        ?.form as HTMLFormElement
      const resetListner = () => {
        setChecked(undefined)
      }
      form?.addEventListener('reset', resetListner)
      return () => form?.removeEventListener('reset', resetListner)
    } else {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      return () => {}
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const formItemProps = {
    validator,
    labelInformation,
    label,
    expandableInfo,
    expandableInfoButtonLabel,
    role: 'radiogroup',
  }

  if (!name) name = randomId()

  return (
    <FormItem {...formItemProps}>
      {React.Children.map(
        children as React.ReactElement,
        (Child: React.ReactElement<RadioButtonProps>) => {
          return React.isValidElement<React.FC<RadioButtonProps>>(Child)
            ? React.cloneElement(Child, {
                validator: validatorClassName,
                onChange: onChanges,
                checked: checked === Child.props.value,
                name,
                ref: radioBtnRef,
              })
            : Child
        }
      )}
    </FormItem>
  )
}

export default RadioGroup
