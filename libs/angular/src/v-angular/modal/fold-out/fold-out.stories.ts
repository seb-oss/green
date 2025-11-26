import { CommonModule } from '@angular/common'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { moduleMetadata } from '@storybook/angular'

import type { Meta, StoryObj } from '@storybook/angular'

import { NggCoreWrapperModule } from '../../../lib/shared'
import { NggvI18nModule } from '../../i18n/i18n.module'
import { NggvFoldOutComponent } from './fold-out.component'
import { NggvFoldOutOptionDirective } from './fold-out.directive'
import { exampleAlt, examplePrimary } from './fold-out.examples'

const meta: Meta<NggvFoldOutComponent> = {
  title: 'V-Angular/Fold Out',
  component: NggvFoldOutComponent,
  decorators: [
    moduleMetadata({
      declarations: [NggvFoldOutOptionDirective],
      imports: [CommonModule, NggvI18nModule, NggCoreWrapperModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }),
  ],
  argTypes: {
    alignOptions: {
      options: ['left', 'right'],
      control: {
        type: 'inline-radio',
      },
    },
    listWidth: {
      options: ['fit-content', 'max-content', 'min-content', 'auto'],
      control: {
        type: 'select',
        labels: {
          'fit-content': 'fit-content',
          'max-content': 'max-content',
          'min-content': 'min-content',
          auto: 'auto',
        },
      },
    },
  },
}

export default meta
type Story = StoryObj<NggvFoldOutComponent>

export const Primary: Story = {
  render: (args: any) => {
    const lastClicked = ''
    return {
      template: /* html */ `
    <div class="story-wrapper">
      <nggv-fold-out [alignOptions]="alignOptions" [listWidth]="listWidth">
        <div nggvOption (click)="lastClicked = 'View details'">View details</div>
        <div nggvOption (click)="lastClicked = 'Sign payment'">Sign payment</div>
        <div nggvOption class="delete-option" (click)="lastClicked = 'Delete'">Delete</div>
      </nggv-fold-out>
      <div>Clicked: <span [innerHTML]="lastClicked"></span></div>
    </div>`,
      styleUrls: ['./fold-out.stories.scss'],
      props: { ...args, lastClicked },
    }
  },
  args: {
    alignOptions: 'left',
    listWidth: 'fit-content',
  },
  parameters: {
    docs: { source: { code: examplePrimary } },
  },
}

export const Alternative: Story = {
  render: (args: any) => {
    const lastClicked = ''
    return {
      template: /* html */ `
      <div class="story-wrapper--right-align">
        <nggv-fold-out [alignOptions]="alignOptions" [listWidth]="listWidth">
          <div nggvOption (click)="lastClicked = 'View details'">View details</div>
          <div nggvOption (click)="lastClicked = 'Sign payment'">Sign payment</div>
          <div nggvOption class="delete-option" (click)="lastClicked = 'Delete'">Delete</div>
        </nggv-fold-out>
        <div>Clicked: <span [innerHTML]="lastClicked"></span></div>
      </div>`,
      styleUrls: ['./fold-out.stories.scss'],
      props: { ...args, lastClicked },
    }
  },
  args: {
    alignOptions: 'right',
    listWidth: 'fit-content',
  },
  parameters: {
    docs: { source: { code: exampleAlt } },
  },
}

export const WithText: Story = {
  render: (args: any) => {
    const lastClicked = ''
    return {
      template: /* html */ `
      <div class="story-wrapper">
        <nggv-fold-out [text]="text" [listWidth]="listWidth">
          <div nggvOption (click)="lastClicked = 'View details'">View details</div>
          <div nggvOption (click)="lastClicked = 'Sign payment'">Sign payment</div>
          <div nggvOption class="delete-option" (click)="lastClicked = 'Delete'">Delete</div>
        </nggv-fold-out>
        <div>Clicked: <span [innerHTML]="lastClicked"></span></div>
      </div>`,
      styleUrls: ['./fold-out.stories.scss'],
      props: { ...args, lastClicked },
    }
  },
  args: {
    text: 'More',
    listWidth: 'fit-content',
  },
  parameters: {
    docs: { source: { code: exampleAlt } },
  },
}
