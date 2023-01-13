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
    componentIds: ['component-dialogue', 'component-slideout', 'component-foldout', 'component-takeover'],
  },
} as Meta<NggModalComponent>

const Template: Story<NggModalComponent> = (args: NggModalComponent) => {
  const isOpen = true;

  return {
  template: `
    <ngg-modal [modalType]="modalType" [header]="header" [isOpen]="isOpen" [confirmLabel]="confirmLabel" [dismissLabel]="dismissLabel" [trapFocus]="true" (closed)="isOpen = false">
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
    dismissLabel: 'Secondary',
    confirmLabel: 'Primary'
}

export const Slideout = Template.bind({})
Slideout.args = {
    modalType: 'slideout',
    header: 'Header',
    dismissLabel: 'Secondary',
    confirmLabel: 'Primary'
}

export const Takeover = Template.bind({})
Takeover.args = {
    modalType: 'takeover',
    header: 'Header',
    dismissLabel: 'Secondary',
    confirmLabel: 'Primary'
}
