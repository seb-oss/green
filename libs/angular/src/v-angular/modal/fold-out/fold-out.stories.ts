import { CommonModule } from '@angular/common'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { Meta, moduleMetadata, StoryFn } from '@storybook/angular'

import { NggCoreWrapperModule } from '../../../lib/shared'
import { NggvI18nModule } from '../../i18n/i18n.module'
import { NggvFoldOutComponent } from './fold-out.component'
import { NggvFoldOutOptionDirective } from './fold-out.directive'
import { exampleAlt, examplePrimary } from './fold-out.examples'

export default {
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
      control: {
        type: 'inline-radio',
        options: ['left', 'right'],
      },
    },
  },
} as Meta

const Template: StoryFn<NggvFoldOutComponent> = (args: any) => {
  const lastClicked = ''
  return {
    template: /* html */ `
    <div class="story-wrapper">
      <nggv-fold-out [alignOptions]="alignOptions">
        <div nggvOption (click)="lastClicked = 'View details'">View details</div>
        <div nggvOption (click)="lastClicked = 'Sign payment'">Sign payment</div>
        <div nggvOption class="delete-option" (click)="lastClicked = 'Delete'">Delete</div>
      </nggv-fold-out>
      <div>Clicked: <span [innerHTML]="lastClicked"></span></div>
    </div>`,
    styleUrls: ['./fold-out.stories.scss'],
    props: { ...args, lastClicked },
  }
}

const TemplateAlt: StoryFn<NggvFoldOutComponent> = (args: any) => {
  const lastClicked = ''
  return {
    template: /* html */ `
      <div class="story-wrapper--right-align">
        <nggv-fold-out [alignOptions]="alignOptions">
          <div nggvOption (click)="lastClicked = 'View details'">View details</div>
          <div nggvOption (click)="lastClicked = 'Sign payment'">Sign payment</div>
          <div nggvOption class="delete-option" (click)="lastClicked = 'Delete'">Delete</div>
        </nggv-fold-out>
        <div>Clicked: <span [innerHTML]="lastClicked"></span></div>
      </div>`,
    styleUrls: ['./fold-out.stories.scss'],
    props: { ...args, lastClicked },
  }
}

const TemplateWithText: StoryFn<NggvFoldOutComponent> = (args: any) => {
  const lastClicked = ''
  return {
    template: /* html */ `
      <div class="story-wrapper">
        <nggv-fold-out [text]="text">
          <div nggvOption (click)="lastClicked = 'View details'">View details</div>
          <div nggvOption (click)="lastClicked = 'Sign payment'">Sign payment</div>
          <div nggvOption class="delete-option" (click)="lastClicked = 'Delete'">Delete</div>
        </nggv-fold-out>
        <div>Clicked: <span [innerHTML]="lastClicked"></span></div>
      </div>`,
    styleUrls: ['./fold-out.stories.scss'],
    props: { ...args, lastClicked },
  }
}

export const Primary = Template.bind({})
Primary.args = {
  alignOptions: 'left',
}
Primary.parameters = {
  docs: { source: { code: examplePrimary } },
}

export const Alternative = TemplateAlt.bind({})
Alternative.args = {
  alignOptions: 'right',
}
Alternative.parameters = {
  docs: { source: { code: exampleAlt } },
}

export const WithText = TemplateWithText.bind({})
WithText.args = {
  text: 'More',
}
WithText.parameters = {
  docs: { source: { code: exampleAlt } },
}
