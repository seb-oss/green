import {Navbar, Dropdown, RadioGroup, RadioButton, Form} from "@sebgroup/green-react";

const dropDownKeyValueArray = [
  {
    key: 'Apple',
    value: 'apple'
  }, {
    key: 'Banana',
    value: 'banana'
  }
]

export function App() {
  return (
    <>
      <Navbar title="Green React Dev" />
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>This is a form</h1>
            <p>If you are developing a React app this is a great form to work on.</p>
            <Form>
              <Dropdown options={dropDownKeyValueArray} onChange={(value) => {
              }} />
              <RadioGroup onChange={(value) => console.log(value)} defaultSelected={'farfalle'}>
                <RadioButton label={'Fusilli'} value={'fusilli'} />
                <RadioButton label={'Penne'} value={'penne'} />
                <RadioButton label={'Farfalle'} value={'farfalle'} />
              </RadioGroup>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
