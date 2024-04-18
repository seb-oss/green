import { Story, Meta, moduleMetadata } from '@storybook/angular'
import Documentation from './documentation.mdx'
import { NggPaginationComponent } from './pagination.component'
import { NggPaginationModule } from './pagination.module'

export default {
  title: 'Components/Navigation/Pagination',
  component: NggPaginationComponent,
  decorators: [
    moduleMetadata({
      imports: [NggPaginationModule],
    }),
  ],
  parameters: {
    docs: {
      page: Documentation,
    },
    componentIds: ['component-pagination'],
  },
  argTypes: {
    size: {
      options: ['small', 'large'],
      control: { type: 'radio' },
    },
  },
} as Meta<NggPaginationComponent>

const Template: Story<NggPaginationComponent> = (
  args: NggPaginationComponent,
) => {
  return {
    template: `
    <ngg-pagination [size]="size" [length]="length" [pageSize]="pageSize" [pageIndex]="pageIndex" [displayPages]="displayPages"></ngg-pagination>
    `,
    props: args,
  }
}

export const Default = Template.bind({})
Default.args = {
  length: 100,
  pageSize: 10,
  pageIndex: 4,
  displayPages: 5,
  size: 'small',
}
