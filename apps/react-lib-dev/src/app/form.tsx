import { IValidator } from '@sebgroup/extract'
import React, { useState } from 'react'

import {
  Dropdown,
  RadioGroup,
  RadioButton,
  Form,
  FormItems,
  Button,
  Stepper,
  TextInput,
  Datepicker,
  Slider,
  Checkbox,
  TextArea,
} from '@sebgroup/green-react'

const dropDownKeyValueArray = [
  {
    label: 'Apple',
    value: 'apple',
  },
  {
    label: 'Banana',
    value: 'banana',
  },
  {
    label: 'Orange',
    value: 'orange',
  },
  {
    label: 'Pineapple',
    value: 'pineapple',
  },
  {
    label: 'Mango',
    value: 'mango',
  },
]

export const FormExample = () => {
  const [validator, setValidator] = React.useState<undefined | IValidator>(
    undefined
  )

  const [adults, setAdults] = React.useState<{ id: number; value: number }>()

  const [sliderValue, setSliderValue] = React.useState<number>()

  const [textAreaState, setTextAreaState] = React.useState<string>('')

  const onStepperChange = (value: number) => {
    console.log('** START **')
    console.log('value:', value)
    setAdults({
      value,
      id: 45,
    })
    console.log('adults:', adults)
    console.log('** END **')
  }

  const toggleValidation = () => {
    setValidator((prevState) =>
      prevState
        ? undefined
        : {
            message: 'This field is required',
            indicator: 'error',
            rules: { type: 'Required' },
          }
    )
  }

  const [checkedState, setCheckedState] = useState<boolean>(true)

  return (
    <>
      <h2>This is a form</h2>
      <p>If you are developing a React app this is a great form to work on.</p>

      <Form onFormSubmit={(value) => console.log(value)}>
        <div className="d-flex" style={{ gap: '1rem' }}>
          <Dropdown
            label={'Select a fruit'}
            id={'my-dropdown'}
            options={dropDownKeyValueArray}
            validator={validator}
            onChange={console.log}
            searchable={true}
          />
          <Datepicker
            onChange={(date) => console.log('Selected date: ', date)}
          />
        </div>

        <Checkbox
          label="This is label"
          checked={checkedState}
          onChange={(event) => {
            const target = event.target as HTMLInputElement
            setCheckedState(target.checked)
          }}
        />

        <FormItems
          name="radio"
          validate={{
            message: 'Required',
            indicator: 'error',
            rules: { type: 'Required' },
          }}
        >
          <RadioGroup
            label="Radio Group"
            labelInformation={
              <>
                This is a lable information with <a href="/to-a-page">a link</a>
              </>
            }
            onChange={(value) => console.log(value)}
          >
            <RadioButton label={'Fusilli'} value={'fusilli'} />
            <RadioButton label={'Penne'} value={'penne'} />
            <RadioButton label={'Farfalle'} value={'farfalle'} />
          </RadioGroup>
        </FormItems>

        <TextInput
          label={'Label'}
          info={
            'This is some information about the thing that gets longer if i say so'
          }
          value={textAreaState}
          onBlur={(event) => setTextAreaState(event.currentTarget.value)}
          expandableInfo="Expandable plain text information"
          validator={validator}
        />

        {textAreaState}
        <TextArea
          label={'Label'}
          info={
            'This is some information about the thing that gets longer if i say so'
          }
          value={textAreaState}
          onChange={(event) => setTextAreaState(event.target.value)}
          expandableInfo={
            <>
              <p>
                React component in <b>Expandable Information</b>. Allows custom
                markup, including <a href="#">links</a>
              </p>
              <p>Use sparingly!</p>
            </>
          }
          validator={validator}
        />

        <Stepper onChange={onStepperChange} />

        <Slider
          hasTextbox={true}
          label={'Slider label'}
          value={sliderValue}
          onChange={(value) => setSliderValue(value)}
          onClamp={(value) => {
            console.log('onClampValue', value)
          }}
        />
        <div>Slider value: {sliderValue}</div>

        <Button onClick={toggleValidation}>Toggle validation</Button>
        <Button type="submit">Submit</Button>
      </Form>
    </>
  )
}
