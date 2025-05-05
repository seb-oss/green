import React from 'react'

import { Card } from '../card'
import { Tab, Tabs } from './tabs'

const Template = ({ children, ...props }) => (
  <Card>
    <Tabs {...props}>{children}</Tabs>
  </Card>
)

export default {
  title: 'Components/Tabs',
  component: Tabs,
}

export const Default = {
  render: Template.bind({}),
  name: 'Tabs',

  parameters: {
    componentIds: ['component-tabs'],
  },
  args: {
    children: [
      <Tab title={'Page 1'}>
        <>
          <p className="pt-5">Tab content will only render when a tab is selected.</p>
          <p>
            If you need to pre-load data, do it separately outside of the
            component that is rendered in the tab.
          </p>
        </>
      </Tab>,
      <Tab title={'Page 2'}>
        <>
          <h2 className="pt-5">Page 2 is a component</h2>
          <p className="pt-4">With more comlpex content.</p>
        </>
      </Tab>,
      <Tab title={'Page 3'}>
        <p className="pt-5">Page 3, simple text content.</p>
      </Tab>,
      <Tab title={'Page 4'}>
        <p className="pt-5">Page 4, simple text content.</p>
      </Tab>,
    ],
  },
}

export const DefaultSelection = {
  render: Template.bind({}),
  name: 'Default selection',

  args: {
    children: [
      <Tab title={'Page 1'}>
        <div className="pt-5">Page 1 Content, with spacing.</div>
      </Tab>,
      <Tab title={'Page 2'}>
        <div className="pt-5">Page 2 Content, with spacing.</div>
      </Tab>,
      <Tab title={'Page 3'}>
        Page 3 Content, no spacing.
      </Tab>,
      <Tab title={'Page 4'} selected>
        <div className="pt-5">Page 4 Content, set as selected.{' '}</div>
      </Tab>,
    ],
  },
}

export const DisabledTabs = {
  render: Template.bind({}),
  name: 'Disabled tabs',

  args: {
    children: [
      <Tab title={'Page 1'}>
        <div className="pt-5">Page 1 Content, with spacing.</div>
      </Tab>,
      <Tab title={'Page 2'}>
        <div className="pt-5">Page 2 Content, with spacing.</div>
      </Tab>,
      <Tab title={'Page 3'} disabled>
        Page 3 Content.
      </Tab>,
      <Tab title={'Page 4'} disabled>
        Page 4 Content.
      </Tab>,
    ],
  },
}
