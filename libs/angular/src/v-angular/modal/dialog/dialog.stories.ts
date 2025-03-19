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

import { NggvI18nModule } from '../../i18n/i18n.module'
import { NggvDialogComponent } from './dialog.component'

export default {
  title: 'V-Angular/Dialog',
  component: NggvDialogComponent,
  decorators: [
    applicationConfig({
      providers: [importProvidersFrom(NggvI18nModule)],
    }),
    moduleMetadata({
      imports: [CommonModule, NggvI18nModule, NggCoreWrapperModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }),
  ],
} as Meta

const Template: StoryFn<NggvDialogComponent> = (args: any) => {
  return {
    template: `<button (click)="isOpen = !isOpen">Open dialog</button><nggv-dialog [heading]="heading" [shown]="isOpen" [initiallyShown]="initiallyShown" [closeButtonAriaLabel]="closeButtonAriaLabel" [buttons]="buttons" [content]="content" (nggvCloseEvent)="isOpen = false"></nggv-dialog>`,
    props: {
      ...args,
      isOpen: false,
    },
  }
}

export const Primary = Template.bind({})
Primary.args = {
  initiallyShown: false,
  closeButtonAriaLabel: 'Close dialog',
  buttons: {
    negative: 'button_cancel',
    neutral: 'button_apply',
    positive: 'button_save',
  },
  content:
    'You can supply the content seen here either through the <code>[content]="string"</code> property or</br>by passing children between the opening and closing tags <code>&lt;c-dialog&gt; ...children &lt;/c-dialog&gt;</code>',
}
