import { Navbar, Dropdown, RadioGroup, RadioButton, Form, FormItems, Button, Stepper, TextInput } from "@sebgroup/green-react";
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

  const [adults, setAdults] = useState<any>();

  const onStepperChange = (value: any) => {
    console.log('** START **');
    console.log('value:', value);
    setAdults({
      value,
      id: 45
    });
    console.log('adults:', adults);
    console.log('** END **');
  }

  return (
    <>
    <div className="use-green">
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
              <Dropdown id={'my-dropdown'} options={dropDownKeyValueArray} validator={validator} />
              <FormItems name="radio" validate={{ message: 'Required', indicator: 'error', rules: { type: 'Required' } }} >
                <RadioGroup title="Radio Group"
                            onChange={(value) => console.log(value)}>
                  <RadioButton label={'Fusilli'} value={'fusilli'} />
                  <RadioButton label={'Penne'} value={'penne'} />
                  <RadioButton label={'Farfalle'} value={'farfalle'} />
                </RadioGroup>
              </FormItems>
              <TextInput label={'Label'} info={'This is some information about the thing that gets longer if i say so'} validator={validator}  />
              <Stepper onChange={onStepperChange} />
              <button type="submit">Submit</button>
            </Form>
          </div>
        </div>
      </div>
    </div>
      <div>
        <span>Outside Green</span>
        <div className="popover" style={{border: '2px solid grey', padding: 15, background: 'red'}}>
          This is a popper
        </div>
      </div>
    </>
  )
}

export default App
