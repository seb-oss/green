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
} as Meta

const Template: StoryFn<NggvFoldOutComponent> = (args: any) => {
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
}

const TemplateAlt: StoryFn<NggvFoldOutComponent> = (args: any) => {
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
}

const TemplateWithText: StoryFn<NggvFoldOutComponent> = (args: any) => {
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
}

export const Primary = Template.bind({})
Primary.args = {
  alignOptions: 'left',
  listWidth: 'fit-content',
}
Primary.parameters = {
  docs: { source: { code: examplePrimary } },
}

export const Alternative = TemplateAlt.bind({})
Alternative.args = {
  alignOptions: 'right',
  listWidth: 'fit-content',
}
Alternative.parameters = {
  docs: { source: { code: exampleAlt } },
}

export const WithText = TemplateWithText.bind({})
WithText.args = {
  text: 'More',
  listWidth: 'fit-content',
}
WithText.parameters = {
  docs: { source: { code: exampleAlt } },
}
