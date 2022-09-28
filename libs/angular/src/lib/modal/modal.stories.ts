
// Modal.stories.ts
import Documentation from './documentation.mdx'
import { moduleMetadata, Story, Meta } from '@storybook/angular'
import { NggModalModule } from './modal.module'
import { NggModalComponent } from './modal.component'

export default {
  title: 'Components/Modal',
  component: NggModalComponent,
  decorators: [
    moduleMetadata({
      imports: [NggModalModule],
    }),
  ],
  parameters: {
    docs: {
      page: Documentation,
    },
  },
} as Meta<NggModalComponent>

const Template: Story<NggModalComponent> = (args: NggModalComponent) => ({
  template: `
    <ngg-modal [modalType]="modalType" [header]="header" [isOpen]="isOpen" [confirm]="confirm" [dismiss]="dismiss">
        <p>Modal Body</p>
    </ngg-modal>
  `,
  props: args,
})

export const Default = Template.bind({})
Default.args = {
    header: 'Header',
    isOpen: true,
    dismiss: 'Secondary',
    confirm: 'Primary'
}

export const Slideout = Template.bind({})
Slideout.args = {
    modalType: 'slideout',
    header: 'Header',
    isOpen: true,
    dismiss: 'Secondary',
    confirm: 'Primary'
}

export const Takeover = Template.bind({})
Takeover.args = {
    modalType: 'takeover',
    header: 'Header',
    isOpen: true,
    dismiss: 'Secondary',
    confirm: 'Primary'
}
