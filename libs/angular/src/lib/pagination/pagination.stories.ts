import { StoryFn, Meta, moduleMetadata } from '@storybook/angular'
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
    componentIds: ['component-pagination'],
  },
  argTypes: {
    size: {
      options: ['small', 'large'],
      control: { type: 'radio' },
    },
  },
} as Meta<NggPaginationComponent>

const Template: StoryFn<NggPaginationComponent> = (args) => {
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
