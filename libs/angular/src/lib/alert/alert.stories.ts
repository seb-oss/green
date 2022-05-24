import { moduleMetadata, Story, Meta } from '@storybook/angular'

import Documentation from './documentation.mdx'
import { NggAlertModule } from './alert.module'
import { NggAlertComponent } from './alert.component'

export default {
  title: 'Components/Alert',
  component: NggAlertComponent,
  decorators: [
    moduleMetadata({
      imports: [NggAlertModule],
    }),
  ],
  argTypes: {
    alertType: {
      options: ['success', 'warning', 'danger', 'info', null],
      control: 'radio',
    },
  },
  parameters: {
    docs: {
      page: Documentation,
    },
  },
} as Meta

const Template: Story<NggAlertComponent> = (args: NggAlertComponent) => ({
  template: `
    <div ngg-alert [alertType]="alertType" [isCloseable]="isCloseable">
      <span main><strong>{{ primaryText }}</strong>&nbsp;{{ secondaryText }}</span>
    </div>
  `,
  props: args,
})

const TemplateForDismissibleAlert: Story<NggAlertComponent> = (
  args: NggAlertComponent
) => ({
  template: `
    <div ngg-alert [alertType]="alertType" [isCloseable]="isCloseable">
      <p main>
        Alert content placed inside a paragraph. Inline <a href="#">links</a> will inherit color from alert to make sure contrast is okay.
      </p>
    </div>
    `,
  props: args,
})

export const Default = Template.bind({})
Default.args = {
  alertType: 'success',
  isCloseable: undefined,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  primaryText: 'Success!',
  secondaryText: 'This is a success alert.',
}

export const Dismissible = TemplateForDismissibleAlert.bind({})
Dismissible.args = {
  alertType: 'warning',
  isCloseable: true,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  text: 'Alert',
}
