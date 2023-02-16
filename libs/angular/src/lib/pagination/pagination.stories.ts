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
} as Meta<NggPaginationComponent>

const Template: Story<NggPaginationComponent> = (
  args: NggPaginationComponent
) => {
  return {
    template: `
    <ngg-pagination [length]="length" [pageSize]="pageSize" [pageIndex]="pageIndex"></ngg-pagination>
    `,
    props: args,
  }
}

export const Default = Template.bind({})
Default.args = {
  length: 100,
  pageSize: 10,
  pageIndex: 4,
}
