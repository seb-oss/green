import { moduleMetadata } from '@storybook/angular'

import type { Meta, StoryObj } from '@storybook/angular'

import { NggPaginationComponent } from './pagination.component'
import { NggPaginationModule } from './pagination.module'

const meta: Meta<NggPaginationComponent> = {
  title: 'Components/Navigation/Pagination',
  component: NggPaginationComponent,
  decorators: [
    moduleMetadata({
      imports: [NggPaginationModule],
    }),
  ],
  parameters: {
    componentIds: ['component-pagination'],
  },
  argTypes: {
    size: {
      options: ['small', 'large'],
      control: { type: 'radio' },
    },
  },
}

export default meta
type Story = StoryObj<NggPaginationComponent>

export const Default: Story = {
  render: (args) => ({
    template: `
    <ngg-pagination [size]="size" [length]="length" [pageSize]="pageSize" [pageIndex]="pageIndex" [displayPages]="displayPages"></ngg-pagination>
    `,
    props: args,
  }),
  args: {
    length: 100,
    pageSize: 10,
    pageIndex: 4,
    displayPages: 5,
    size: 'small',
  },
}
