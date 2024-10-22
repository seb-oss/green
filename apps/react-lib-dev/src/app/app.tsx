import { AlertRibbon, Badge, Navbar, Tab, Tabs } from '@sebgroup/green-react'

import { AlertRibbons } from './alert-ribbons'
import { FormExample } from './form'
import { Modals } from './modals'

export function App() {
  return (
    <div>
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
              <Tab title={'Modal'}>
                <Modals />
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
