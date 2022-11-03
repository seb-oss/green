import {Navbar, Dropdown, RadioGroup, RadioButton, Form, FormItems, Button, Stepper} from "@sebgroup/green-react";
import {useState} from "react";
import {IValidator} from "@sebgroup/extract";

const dropDownKeyValueArray = [
  {
    label: 'Apple',
    value: 'apple'
  }, {
    label: 'Banana',
    value: 'banana'
  }
]

export function App() {
  const [validator, setValidator] = useState<undefined | IValidator>(undefined)
  return (
    <>
      <Navbar title="Green React Dev" />
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>This is a form</h1>
            <p>If you are developing a React app this is a great form to work on.</p>
            <Form onFormSubmit={(value) => console.log(value)}>
              <Button onClick={() => {
                setValidator((prevState) => prevState ? undefined : { message: 'This field is required', indicator: 'error', rules: { type: 'Required' } })
              }}>Change validation</Button>
              <Dropdown options={dropDownKeyValueArray} validator={validator} />
              <FormItems name="radio" validate={{ message: 'Required', indicator: 'error', rules: { type: 'Required' } }} >
                <RadioGroup title="Radio Group"
                            onChange={(value) => console.log(value)}>
                  <RadioButton label={'Fusilli'} value={'fusilli'} />
                  <RadioButton label={'Penne'} value={'penne'} />
                  <RadioButton label={'Farfalle'} value={'farfalle'} />
                </RadioGroup>
              </FormItems>
              <Stepper onChange={(value) => console.log(value)} />
              <button type="submit">Submit</button>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
