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

const Template: Story<NggModalComponent> = (args: NggModalComponent) => {
  let isOpen = true;

  return {
  template: `
    <ngg-modal [modalType]="modalType" [header]="header" [isOpen]="isOpen" [confirm]="confirm" [dismiss]="dismiss" (onClose)="isOpen = false">
        <p>Modal Body</p>
    </ngg-modal>
    <button (click)="isOpen = true">Open Modal</button>
  `,
  props: {
    ...args,
    isOpen,
  }
}
}

export const Default = Template.bind({})
Default.args = {
    header: 'Header',
    dismiss: 'Secondary',
    confirm: 'Primary'
}

export const Slideout = Template.bind({})
Slideout.args = {
    modalType: 'slideout',
    header: 'Header',
    dismiss: 'Secondary',
    confirm: 'Primary'
}

export const Takeover = Template.bind({})
Takeover.args = {
    modalType: 'takeover',
    header: 'Header',
    dismiss: 'Secondary',
    confirm: 'Primary'
}
