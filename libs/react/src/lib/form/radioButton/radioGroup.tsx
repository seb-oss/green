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
  title?: string
  labelInformation?: string
  valueSelected?: string
  description?: string
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
  valueSelected,
  label,
  title,
  labelInformation,
  description,
  expandableInfo,
  expandableInfoButtonLabel,
  validator,
  onChangeRadio,
  onChange,
  name,
  children,
}: React.PropsWithChildren<RadioGroupProps>) => {
  if (title)
    console.warn('"title" prop is deprecated. Please use "label" instead.')
  if (description)
    console.warn(
      '"description" prop is deprecated. Please use "labelInformation" instead.'
    )

  const [selected, setSelected] = React.useState<string | undefined>(
    valueSelected ?? defaultSelected
  )
  const validatorClassName: string = validateClassName(
    validator?.indicator as IndicatorType
  )

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value !== selected) {
      setSelected(event.target.value)
      onChangeRadio && onChangeRadio(event.target.value)
      onChange && onChange(event)
    }
  }

  const radioBtnRef: React.RefObject<HTMLInputElement> = React.useRef(null)

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

  const labelFromTitle = label || title
  const labelInformationFromDescription = labelInformation || description

  const formItemProps = {
    validator,
    labelInformation: labelInformationFromDescription,
    label: labelFromTitle,
    expandableInfo,
    expandableInfoButtonLabel,
    role: 'radiogroup',
  }

  if (!name) name = randomId()

  return (
    <FormItem {...formItemProps}>
      {React.Children.map(
        children as React.ReactElement,
        (radioButton: React.ReactElement<RadioButtonProps>) => {
          return React.isValidElement<React.FC<RadioButtonProps>>(radioButton)
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
    </FormItem>
  )
}

export default RadioGroup
