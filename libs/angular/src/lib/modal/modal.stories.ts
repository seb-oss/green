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
    <ngg-modal [modalType]="modalType" [header]="header" [isOpen]="isOpen" [confirmLabel]="confirmLabel" [dismissLabel]="dismissLabel" [trapFocus]="trapFocus" [hideHeader]="false" [hideFooter]="false" (closed)="isOpen = false">
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
    confirmLabel: 'Primary',
    trapFocus: false
}

export const Slideout = Template.bind({})
Slideout.args = {
    modalType: 'slideout',
    header: 'Header',
    dismissLabel: 'Secondary',
    confirmLabel: 'Primary',
    trapFocus: false
}

export const Takeover = Template.bind({})
Takeover.args = {
    modalType: 'takeover',
    header: 'Header',
    dismissLabel: 'Secondary',
    confirmLabel: 'Primary',
    trapFocus: false
}


const CustomTemplate: Story<NggModalComponent> = (args: NggModalComponent) => {
  const isOpen = true;
  return {
  template: `
    <ngg-modal [modalType]="modalType" [header]="header" [isOpen]="isOpen" [confirmLabel]="confirmLabel" [dismissLabel]="dismissLabel" [trapFocus]="trapFocus" [hideHeader]="hideHeader" [hideFooter]="hideFooter" (closed)="isOpen = false">
      <ng-container nggModalHeader>
        <div style="display:flex;align-items:center;">
          <h3>{{header}}</h3>
          <span style="margin-left:10px;" class="badge info">!</span>
        </div>
      </ng-container>
      <p>Modal Body</p>
      <ng-container nggModalFooter>
          <button class="danger" (click)="isOpen = false">Close</button>
      </ng-container>
    </ngg-modal>
    <button (click)="isOpen = true">Open Modal</button>
  `,
  props: {
    ...args,
    isOpen
  }
}
}

export const Custom = CustomTemplate.bind({})
Custom.args = {
    header: 'Header',
    dismissLabel: 'Secondary',
    confirmLabel: 'Primary',
    trapFocus: false,
    hideHeader: false,
    hideFooter: false
}
