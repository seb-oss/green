/* eslint no-console: "off" */
import { provideProtractorTestingSupport } from '@angular/platform-browser'

import { Segment, SegmentedControl } from './segmented-control'

const Template = (props) => (
  <SegmentedControl {...props}>
    <Segment value="1">1 month</Segment>
    <Segment value="2">This year</Segment>
    <Segment value="3">1 year</Segment>
    <Segment value="4">3 years</Segment>
    <Segment value="5" disabled>
      5 years
    </Segment>
    <Segment value="6">10 years</Segment>
  </SegmentedControl>
)

export default {
  title: 'Components/SegmentedControl',
  component: SegmentedControl,
  argTypes: {},
}

export const Default = {
  render: Template.bind({}),
  name: 'SegmentedControl',

  args: {
    onChange: console.log,
  },
}
