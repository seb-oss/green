import '../modal.globals'

import { CommonModule } from '@angular/common'
import { CUSTOM_ELEMENTS_SCHEMA, importProvidersFrom } from '@angular/core'
import { applicationConfig, moduleMetadata } from '@storybook/angular'

import type { Meta, StoryObj } from '@storybook/angular'

import { NggCoreWrapperModule } from '@sebgroup/green-angular/src/lib/shared'
import { DropdownUtils } from '../../core'
import { NggvDropdownModule } from '../../dropdown/dropdown.module'
import { NggvI18nModule } from '../../i18n/i18n.module'
import { NggvDialogComponent } from './dialog.component'

const meta: Meta<NggvDialogComponent> = {
  title: 'V-Angular/Dialog',
  component: NggvDialogComponent,
  decorators: [
    applicationConfig({
      providers: [importProvidersFrom(NggvI18nModule), DropdownUtils],
    }),
    moduleMetadata({
      imports: [
        CommonModule,
        NggvI18nModule,
        NggCoreWrapperModule,
        NggvDropdownModule,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }),
  ],
}

export default meta
type Story = StoryObj<NggvDialogComponent>

const options = [
  { key: 'opt1', label: 'label.defaultlabel', accountNumber: '345345' },
  { key: 'opt6', label: 'HÖR LUR TJO HEJ KOTLETT' },
  {
    key: 'opt2',
    label:
      'This is a very long label that should over flow a smaller dropdown button',
  },
  { key: 'opt3', label: 'Option 3 - disabled', disabled: true },
  { key: 'opt4', label: 'Option 4' },
  {
    key: 'opt5',
    label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
  },
  {
    label: 'Group',
    options: [
      { key: 'group-opt1', label: null, accountNumber: '3453245' },
      { key: 'group-opt2', label: 'Option 2' },
      { key: 'group-opt3', label: 'Option 3' },
      { key: 'group-opt4', label: 'Option 4' },
    ],
  },
]
const dropdownArgs = {
  required: false,
  invalid: false,
  label: 'Field label',
  placeholder: 'Placeholder text',
  description: 'This. Is. A. Description.',
  ngModel: 'opt2',
  options,
}

export const Primary: Story = {
  render: (args: any) => {
    return {
      template: `<button (click)="isOpen = !isOpen">Open dialog</button><nggv-dialog [heading]="heading" [shown]="isOpen" [initiallyShown]="initiallyShown" [closeButtonAriaLabel]="closeButtonAriaLabel" [buttons]="buttons" [content]="content" (nggvCloseEvent)="isOpen = false"><nggv-dropdown [required]="required"
[invalid]="invalid"
[label]="label"
[placeholder]="placeholder"
[description]="description"
[ngModel]="ngModel"
[options]="options"></nggv-dropdown></nggv-dialog>`,
      props: {
        ...args,
        isOpen: false,
      },
    }
  },
  args: {
    initiallyShown: false,
    closeButtonAriaLabel: 'Close dialog',
    buttons: {
      negative: 'button_cancel',
      neutral: 'button_apply',
      positive: 'button_save',
      danger: 'button_delete',
    },
    content:
      'You can supply the content seen here either through the <code>[content]="string"</code> property or</br>by passing children between the opening and closing tags <code>&lt;c-dialog&gt; ...children &lt;/c-dialog&gt;</code>',
    ...dropdownArgs,
  },
}
