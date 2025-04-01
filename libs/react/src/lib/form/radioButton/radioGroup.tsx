import React, { ChangeEvent, useRef, useState } from 'react'
import classNames from 'classnames'

import {
  IExpandableInformation,
  ILabelAndLabelInformation,
  IValidator,
  randomId,
} from '@sebgroup/extract'
import { FormItem } from '../../formItem'
import { RadioButtonProps } from './radioButton'

export interface RadioGroupProps
  extends IExpandableInformation,
    ILabelAndLabelInformation {
  /**
   * Set the live region attribute of the form control footer, this will change how error messages are read by screen readers
   * @default 'assertive'
   */
  'aria-live'?: React.AriaAttributes['aria-live']
  label?: string
  title?: string
  valueSelected?: string
  description?: string
  defaultSelected?: string
  validator?: IValidator
  onChangeRadio?: (value: string) => string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  name?: string
  horizontal?: boolean
}

export const RadioGroup = ({
  'aria-live': ariaLive,
  defaultSelected,
  valueSelected,
  label,
  /** @deprecated use `label` instead */
  title,
  labelInformation,
  /** @deprecated use `labelInformation` instead */
  description,
  expandableInfo,
  expandableInfoButtonLabel,
  validator,
  onChangeRadio,
  onChange,
  name: propName = randomId(),
  horizontal,
  children,
}: React.PropsWithChildren<RadioGroupProps>) => {
  const [selected, setSelected] = useState<string | undefined>(
    valueSelected ?? defaultSelected,
  )
  const [prevValueSelected, setPrevValueSelected] = useState(valueSelected)
  const [name] = useState(propName)
  const [uuid] = useState(randomId())

  if (valueSelected !== prevValueSelected) {
    setSelected(valueSelected)
    setPrevValueSelected(valueSelected)
  }

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value !== selected) {
      setSelected(event.target.value)
      onChangeRadio && onChangeRadio(event.target.value)
      onChange && onChange(event)
    }
  }

  const radioBtnRef = useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    if (radioBtnRef && radioBtnRef.current) {
      const form: HTMLFormElement = radioBtnRef?.current
        ?.form as HTMLFormElement
      const resetListener = () => {
        setSelected(undefined)
      }
      form?.addEventListener('reset', resetListener)
      return () => form?.removeEventListener('reset', resetListener)
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
    'aria-live': ariaLive,
  }

  const radioGroupWrapperClassNames = classNames('gds-radio-group-wrapper', {
    'gds-radio-group-wrapper--horizontal': horizontal,
  })

  const describedBy = classNames({
    [`${uuid}_message`]:
      validator?.message !== undefined && validator.message.length > 0,
    [`${uuid}_info`]: labelInformation,
    [`gds-expandable-info-${uuid}`]: expandableInfo,
  })

  return (
    <FormItem {...formItemProps} inputId={uuid}>
      <div className={radioGroupWrapperClassNames}>
        {React.Children.map(children as React.ReactNode, (radioButton) => {
          return React.isValidElement<RadioButtonProps>(radioButton)
            ? React.cloneElement(radioButton, {
                'aria-describedby': describedBy,
                validator: validator,
                onChange: handleOnChange,
                checked: selected === radioButton.props.value,
                name,
                ref: radioBtnRef,
              })
            : radioButton
        })}
      </div>
    </FormItem>
  )
}

export default RadioGroup
