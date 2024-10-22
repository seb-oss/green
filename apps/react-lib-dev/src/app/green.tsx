import { useState } from 'react'

import { IValidator } from '@sebgroup/extract'
import {
  Card,
  Dropdown,
  Form,
  FormItems,
  Navbar,
  RadioButton,
  RadioGroup,
  Stepper,
  TextInput,
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
]

export const Green = () => {
  const [validator, setValidator] = useState<undefined | IValidator>(undefined)

  const [adults, setAdults] = useState<any>()

  const onStepperChange = (value: any) => {
    setAdults({
      value,
      id: 45,
    })
  }
  return (
    <div className="use-green">
      <Navbar title="Green React Dev" variant={'bg-dark'} />
      <div className="container">
        <div className="row">
          <div className="col mt-6">
            <Card header={<h1>This is a form</h1>}>
              <div className="form-group">
                <p>
                  If you are developing a React app this is a great form to work
                  on.
                </p>
              </div>
              <div className="row">
                <div className="col col-md-4">
                  <Form onFormSubmit={(value) => console.log(value)}>
                    <Dropdown
                      id={'my-dropdown'}
                      options={dropDownKeyValueArray}
                      validator={validator}
                      label={'Dropdown label'}
                    />
                    <FormItems
                      name="radio"
                      validate={{
                        message: 'Required',
                        indicator: 'error',
                        rules: { type: 'Required' },
                      }}
                    >
                      <div className="horizontal">
                        <RadioGroup
                          label="Radio Group"
                          labelInformation="This is a description for the radio group"
                          onChange={(value) => console.log(value)}
                        >
                          <RadioButton label={'Fusilli'} value={'fusilli'} />
                          <RadioButton label={'Penne'} value={'penne'} />
                          <RadioButton label={'Farfalle'} value={'farfalle'} />
                        </RadioGroup>
                      </div>
                    </FormItems>
                    <TextInput
                      label={'Label'}
                      info={
                        'This is some information about the thing that gets longer if i say so'
                      }
                      validator={validator}
                    />
                    <Stepper
                      onChange={onStepperChange}
                      label="Stepper label"
                      description="This is a description for the stepper"
                    />
                    <button type="submit">Submit</button>
                  </Form>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
