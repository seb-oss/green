import type { Meta, StoryObj } from '@storybook/angular'
import { NggAccordionListItemComponent } from './accordion-list-item.component'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<NggAccordionListItemComponent> = {
  component: NggAccordionListItemComponent,
  title: 'NggAccordionListItemComponent',
}
export default meta
type Story = StoryObj<NggAccordionListItemComponent>

export const Primary: Story = {
  args: {
    listItemHeader: '',
    listItemSubHeader: '',
  },
}

export const Heading: Story = {
  args: {
    listItemHeader: '',
    listItemSubHeader: '',
  },
}
