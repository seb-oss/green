import { moduleMetadata, Story, Meta } from '@storybook/angular'

import Documentation from './documentation.mdx'
import { CardModule } from './card.module'
import { NggCardComponent } from './card.component'

export default {
  title: 'Components/Card',
  component: NggCardComponent,
  decorators: [
    moduleMetadata({
      imports: [CardModule],
    }),
  ],
  parameters: {
    docs: {
      page: Documentation,
    },
  },
} as Meta

const Template: Story<NggCardComponent> = (args: NggCardComponent) => ({
  template: `
    <ngg-card>
      <ng-container header>
        <h3>Card Headline</h3>
        <button type="button" class="close">
          <span class="sr-only">Close</span>
        </button>
      </ng-container>

      <p body>Card Body</p>
    </ngg-card>
    `,
  props: args,
})

const TemplateWithFooter: Story<NggCardComponent> = (
  args: NggCardComponent
) => ({
  template: `
    <ngg-card>
      <ng-container header>
        <h3>Card Headline</h3>
        <button type="button" class="close">
          <span class="sr-only">Close</span>
        </button>
      </ng-container>

      <p body>Card Body</p>

      <ng-container footer>
        <a href="#" class="button link"> Link </a>
        <button type="button">Default button</button>
        <button type="button" class="primary">Primary button</button>
      </ng-container>
    </ngg-card>
    `,
  props: args,
})

export const Example = Template.bind({})

export const ExampleWithFooter = TemplateWithFooter.bind({})
