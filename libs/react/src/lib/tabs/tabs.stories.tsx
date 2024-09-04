import { Tabs, Tab, Card } from '@sebgroup/green-react'

const Template = (children, ...props) => (
  <Card>
    <Tabs {...props}>
      <Tab title={'Page 1'}>Page 1 is simple text</Tab>
      <Tab title={'Page 2'}>
        <>
          <h2>Page 2 is a component</h2>
          <p>With more comlpex content</p>
        </>
      </Tab>
      <Tab title={'Page 3'}>Page 3 Content</Tab>
      <Tab title={'Page 4'}>
        <>Page 4 Content</>
      </Tab>
    </Tabs>
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

    docs: {
      disable: true,
    },
  },
}
