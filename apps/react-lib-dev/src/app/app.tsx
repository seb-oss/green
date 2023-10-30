import { Navbar, Tabs, Tab, AlertRibbon } from '@sebgroup/green-react'
import { FormExample } from './form'
import { AlertRibbons } from './alert-ribbons'

export function App() {
  return (
    <div className="use-green">
      <Navbar title="Green React Dev" />
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>React sample app</h1>
            <Tabs>
              <Tab title={'Form'}>
                <div className="pt-5">
                  <FormExample />
                </div>
              </Tab>
              <Tab title={'Alert ribbons'}>
                <AlertRibbons />
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
