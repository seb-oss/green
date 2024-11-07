import { CommonModule } from '@angular/common'

import { NggCoreWrapperModule } from '@sebgroup/green-angular/src/lib/shared'

import '../modal.globals'

import { CUSTOM_ELEMENTS_SCHEMA, importProvidersFrom } from '@angular/core'
import {
  applicationConfig,
  Meta,
  moduleMetadata,
  StoryFn,
} from '@storybook/angular'

import { NgvI18nModule } from '../../i18n/i18n.module'
import { NgvDialogComponent } from './dialog.component'

export default {
  title: 'V-Angular/Dialog',
  component: NgvDialogComponent,
  decorators: [
    applicationConfig({
      providers: [importProvidersFrom(NgvI18nModule)],
    }),
    moduleMetadata({
      imports: [CommonModule, NgvI18nModule, NggCoreWrapperModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }),
  ],
} as Meta

const Template: StoryFn<NgvDialogComponent> = (args: any) => ({
  props: args,
})

export const Primary = Template.bind({})
Primary.args = {
  initiallyShown: true,
  buttons: {
    negative: 'button_cancel',
    neutral: 'button_apply',
    positive: 'button_save',
  },
  content:
    'You can supply the content seen here either through the <code>[content]="string"</code> property or</br>by passing children between the opening and closing tags <code>&lt;c-dialog&gt; ...children &lt;/c-dialog&gt;</code>',
}
