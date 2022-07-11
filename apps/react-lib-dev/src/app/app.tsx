import {Navbar, Dropdown} from "@sebgroup/green-react";

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
            <Dropdown options={dropDownKeyValueArray} onChange={(value) => {
            }} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
