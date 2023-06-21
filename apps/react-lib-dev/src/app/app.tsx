import { Navbar, Tabs, Tab } from '@sebgroup/green-react'
import { useState } from 'react'
import { IValidator } from '@sebgroup/extract'
import { FormExample } from './form'

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
              <Tab title={'Other'}>
                <div className="pt-5">Hello</div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
