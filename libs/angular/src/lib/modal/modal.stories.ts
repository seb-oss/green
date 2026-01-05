import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { moduleMetadata } from '@storybook/angular'

import type { Meta, StoryObj } from '@storybook/angular'

import { NggModalComponent } from './modal.component'
import { NggModalModule } from './modal.module'

const meta: Meta<NggModalComponent> = {
  title: 'Components/Modal',
  component: NggModalComponent,
  decorators: [
    moduleMetadata({
      imports: [NggModalModule, BrowserAnimationsModule],
    }),
  ],
  parameters: {
    componentIds: [
      'component-dialogue',
      'component-slideout',
      'component-foldout',
      'component-takeover',
    ],
  },
}

export default meta

type Story = StoryObj<NggModalComponent>

const RenderTemplate = (args: any) => ({
  template: `
    <ngg-modal [modalType]="modalType" [closeText]="closeText" [header]="header" [isOpen]="isOpen" [confirmLabel]="confirmLabel" [dismissLabel]="dismissLabel" [trapFocus]="trapFocus" [hideHeader]="false" [hideFooter]="false" [size]="size" (closed)="isOpen = false">
      <p>Modal Body</p>
    </ngg-modal>
    <button (click)="isOpen = true">Open Modal</button>
  `,
  props: {
    ...args,
    isOpen: false,
  },
})

export const Default: Story = {
  args: {
    header: 'Header',
    closeText: 'Close Modal',
    dismissLabel: 'Secondary',
    confirmLabel: 'Primary',
    trapFocus: false,
    size: 'lg',
  },
  render: RenderTemplate,
}

export const Slideout = {
  args: {
    modalType: 'slideout',
    header: 'Header',
    closeText: 'Close Slideout',
    dismissLabel: 'Secondary',
    confirmLabel: 'Primary',
    trapFocus: false,
  },
  render: RenderTemplate,
}

export const Takeover = {
  args: {
    modalType: 'takeover',
    header: 'Header',
    closeText: 'Close Takeover',
    dismissLabel: 'Secondary',
    confirmLabel: 'Primary',
    trapFocus: false,
  },
  render: RenderTemplate,
}

export const Custom = {
  args: {
    header: 'Header',
    closeText: 'Close Custom',
    dismissLabel: 'Secondary',
    confirmLabel: 'Primary',
    trapFocus: false,
    hideHeader: false,
    hideFooter: false,
  },
  render: (args: NggModalComponent) => {
    const isOpen = false
    return {
      props: {
        ...args,
        isOpen,
      },
      template: `
      <ngg-modal [modalType]="modalType" [header]="header" [closeText]="closeText" [isOpen]="isOpen" [confirmLabel]="confirmLabel" [dismissLabel]="dismissLabel" [trapFocus]="trapFocus" [hideHeader]="hideHeader" [hideFooter]="hideFooter" (closed)="isOpen = false">
        <ng-container nggModalHeader>
          <div style="display:flex;align-items:center;">
            <h3>{{header}}</h3>
            <span style="margin-left:10px;" class="badge info">!</span>
          </div>
        </ng-container>
        <p>Modal Body</p>
        <ng-container nggModalFooter>
            <button class="gds-button danger" (click)="isOpen = false">Close</button>
        </ng-container>
      </ngg-modal>
      <button (click)="isOpen = true">Open Modal</button>
    `,
    }
  },
}
